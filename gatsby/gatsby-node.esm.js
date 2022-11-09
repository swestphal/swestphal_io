import path from 'path';
// import project from '../sanity/schemas/project';

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
    count: 9,
    // todo check if correct base for length!
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
      projects: allSanityProject(filter: { isOnline: { eq: true } }) {
        nodes {
          id
          title
          slug {
            current
          }
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
  // turn each project in a single page
  const projectTemplate = path.resolve('./src/templates/Project.js');
  data.projects.nodes.forEach((project) => {
    actions.createPage({
      component: projectTemplate,
      path: `project/${project.slug.current}`,
      context: {
        name: project.name,
        slug: project.slug.current,
      },
    });
  });

  // get count of pages of that category
  /*
  const pageSize = parseInt(process.env.GATSBY_PROJECT_SIZE);
  const categoriesWithCounts = countProjectsInCategories(data.projects.nodes);
  categoriesWithCounts.forEach((category) => {
    const pageCount = Math.ceil(category.count / pageSize);
    Array.from({ length: pageCount }).forEach((a, i) => {
      const rootSlug = 'projekte';
      const catSlug = `${category.slug}`;
      let numSlug = `/${i + 1}`;
      if (i === 0) numSlug = '';
      const slug = rootSlug + catSlug + numSlug;
      const catName = category.name;

      if (catName !== 'All') {
        actions.createPage({
          path: `${slug}`,
          component: categoryTemplate,
          context: {
            skip: i * pageSize,
            currentPage: i + 1,
            pageSize,
            totalCount: category.count,
            categoryRegexName: `/${catName}/i`,
            categoryName: `${catName}`,
            categorySlug: catSlug,
          },
        });
      } else {
        actions.createPage({
          path: `${rootSlug + numSlug}`,
          component: categoryTemplate,
          context: {
            skip: i * pageSize,
            currentPage: i + 1,
            pageSize,
            totalCount: 20,
            categoryRegexName: ``,
            categoryName: `${catName}`,
            categorySlug: '',
          },
        });
      }
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

  const pageSize = parseInt(process.env.GATSBY_PROJECT_SIZE);
  const projectCounts = data.projects.nodes.length;
  const pageCount = Math.ceil(projectCounts / pageSize);
  Array.from({ length: pageCount }).forEach((a, i) => {
    const rootSlug = 'projects';
    let numSlug = `/${i + 1}`;
    if (i === 0) numSlug = '';
    actions.createPage({
      path: `${rootSlug + numSlug}`,
      component: categoryTemplate,
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
        totalCount: projectCounts,
        categoryRegexName: '',
        categoryName: `All`,
        categorySlug: '',
      },
    });
  });
}

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([
    // turnProjectsIntoPages(params),
    turnProjectCategoriesIntoPages(params),
  ]);
}
