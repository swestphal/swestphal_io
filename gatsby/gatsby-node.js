import path from 'path';

async function turnCategoriesIntoPages({ graphql, actions }) {
  // 1. Get the template
  const categoryTemplate = path.resolve('./src/pages/projects.js');
  // 2. query all the toppings
  const { data } = await graphql(`
    query {
      categories: allSanityCategory {
        nodes {
          name
          id
          colour
        }
      }
    }
  `);
  // 3. createPage for that category
  data.categories.nodes.forEach((category) => {
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
  });
  // 4. Pass category data to project.js
}

export async function createPages(params) {
  console.log('pages');
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([
    //turnProjectsIntoPages(params),
    turnCategoriesIntoPages(params),
  ]);
}
