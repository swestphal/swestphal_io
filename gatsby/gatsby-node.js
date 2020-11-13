import path from 'path';

function countProjectsInCategories(projects) {
  // Return the projects with counts

  const counts = projects
    .map((project) => project.relatedCategories)
    .flat()
    .reduce((acc, category) => {
      // check if this is an existing category
      const existingCategory = acc[category.classification.id];
      if (existingCategory) {
        //  if it is, increment by 1
        existingCategory.count += 1;
      } else {
        // otherwise create a new entry in our acc and set it to one
        acc[category.classification.id] = {
          id: category.classification.id,
          name: category.classification.name,
          colour: category.classification.colour,
          slug: `/${category.classification.slug.current}`,
          count: 1,
        };
      }
      return acc;
    }, {});
  counts[0] = {
    id: 0,
    name: 'All',
    colour: 'none',
    slug: '',
    count: 3,
  };
  // sort them based on their count
  const sortedCategories = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedCategories;
}

async function turnProjectCategoriesIntoPages({ graphql, actions }) {
  // 1. Get the template
  const categoryTemplate = path.resolve('./src/pages/projects.js');
  // 2. query all the categories
  const { data } = await graphql(`
    query {
      categories: allSanityCategory {
        totalCount
        nodes {
          name
          id
          colour
          slug {
            current
          }
        }
      }
      projects: allSanityProject {
        nodes {
          relatedCategories {
            classification {
              id
              name
              colour
              slug {
                current
              }
            }
          }
        }
      }
    }
  `);
  // get count of pages of that category
  const pageSize = parseInt(process.env.GATSBY_PROJECT_SIZE);

  const categoriesWithCounts = countProjectsInCategories(data.projects.nodes);
  categoriesWithCounts.forEach((category) => {
    const pageCount = Math.ceil(category.count / pageSize);
    Array.from({ length: pageCount }).forEach((a, i) => {
      const rootSlug = 'projects';
      let catSlug = `${category.slug}`;
      if (category === 'All') catSlug = '';
      let numSlug = `/${i + 1}`;
      if (i === 0) numSlug = '';
      const slug = rootSlug + catSlug + numSlug;
      const catName = category.name;
      console.log(category);
      console.log(catName);
      console.log(slug);

      actions.createPage({
        path: `${slug}`,
        component: categoryTemplate,
        context: {
          skip: i * pageSize,
          currentPage: i + 1,
          pageSize,
          categoryName: catName,
          categorySlug: category.slug,
        },
      });
    });
  });
  // 3. createPage for that category
  /* data.categories.nodes.forEach((category) => {
      console.log(`Creating page for category`, category.name);
      actions.createPage({
        path: `category/${category.name}`,
        component: categoryTemplate,
        context: {
          category: category.name,
          //  Regex for Topping
          // toppingRegex: `/${topping.name}/i`,
        },
      });
    }); */
  // 4. Pass category data to project.js
}

export async function createPages(params) {
  console.log('pages');
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([
    // turnProjectsIntoPages(params),
    turnProjectCategoriesIntoPages(params),
  ]);
}
