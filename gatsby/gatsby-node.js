import path from 'path';

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
    }
  `);
  // get count of pages of that category
  const pageSize = parseInt(process.env.GATSBY_PROJECT_SIZE);
  const pageCount = Math.ceil(data.categories.totalCount / pageSize);

  data.categories.nodes.forEach((category) => {
    Array.from({ length: pageCount }).forEach((_, i) => {
      console.log(`Creating page for category`, category.name);
      console.log(`Page`, i);
      console.log(data.categories);
      actions.createPage({
        path: `projects/${category.slug.current}/${i + 1}`,
        component: categoryTemplate,
        context: {
          skip: i * pageSize,
          currentPage: i + 1,
          pageSize,
          category: category.name,
          //  Regex for Topping
          // toppingRegex: `/${topping.name}/i`,
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
