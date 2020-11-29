import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

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
          slug: category.classification.slug.current,
          count: 1,
        };
      }
      return acc;
    }, {});
  // sort them based on their count
  const sortedCategories = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedCategories;
}

export default function CategoriesFilter({ activeCategory, currentPage }) {
  // Get a list of all the projects with their categories
  const { categories, projects } = useStaticQuery(graphql`
    query {
      projects: allSanityProject {
        nodes {
          relatedCategories {
            classification {
              name
              id
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
  // Count how many projects are in each category
  const categoriesWithCounts = countProjectsInCategories(projects.nodes);
  // Loop over the list of categories in project

  return (
    <div className="filter ">
      <Link className="badge all" to="/projects">
        <span className="badge__name">All</span>
        <span className="badge__count">{projects.nodes.length}</span>
      </Link>
      {categoriesWithCounts.map((category) => (
        <Link
          to={`/projects/${category.slug}`}
          getProps={({ isPartiallyCurrent }) =>
            isPartiallyCurrent
              ? { className: `${category.colour} badge active` }
              : { className: `${category.colour} badge ` }
          }
          key={category.id}
        >
          <span className="badge__name">{category.name}</span>
          <span className="badge__count">{category.count}</span>
        </Link>
      ))}
    </div>
  );
}
