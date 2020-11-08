import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

function countProjectsInCategories(projects) {
  // Return the projects with counts
  //console.log('projects:');
  //console.log(projects);
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
          count: 1,
        };
      }
      return acc;
    }, {});
  // sort them based on their count
  const sortedCategories = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  console.log(sortedCategories);
  return sortedCategories;
}

export default function CategoriesFilter({ activeCategory }) {
  //console.log(activeCategory);
  // Get a list of all the categorys
  // Get a list of all the Pizzas with their categorys
  const { categories, projects } = useStaticQuery(graphql`
    query {
      projects: allSanityProject {
        nodes {
          relatedCategories {
            classification {
              name
              id
              colour
            }
          }
        }
      }
    }
  `);
  // Count how many projects are in each category
  const categoriesWithCounts = countProjectsInCategories(projects.nodes);
  // Loop over the list of categorys and display the category and the count of projects in that category
  // Link it up.. ...  . . .

  return (
    <div className="filter ">
      <Link className="badge " to="/projects">
        <span className="name">All</span>
        <span className="count">{projects.nodes.length}</span>
      </Link>
      {categoriesWithCounts.map((category) => (
        <Link
          to={`/category/${category.name}`}
          key={category.id}
          className={
            ` badge ${category.colour}` +
            (category.name === activeCategory ? ' active' : '')
          }
        >
          <span className="badge__name">{category.name}</span>
          <span className="badge__count">{category.count}</span>
        </Link>
      ))}
    </div>
  );
}
