import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import {
  StyledCategoriesFilter,
  StyledListItem,
} from './CategoriesFilter.styled';
import { StyledBadgeLink } from './CategoriesBadgeLink.styled';

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
    <StyledCategoriesFilter>
      <ul>
        <StyledListItem key="00" colour="#000">
          <StyledBadgeLink className="badge all" to="/projects">
            <span className="badge__name">All</span>
            <span className="badge__count">{projects.nodes.length}</span>
          </StyledBadgeLink>
        </StyledListItem>
        {categoriesWithCounts.map((category, i) => (
          <StyledListItem key={`'filter_' + ${i}`}>
            <StyledBadgeLink
              className="badge"
              to={`/projects/${category.slug}`}
              key={category.id}
              colour={category.colour}
            >
              <span className="badge__name">{category.name}</span>
              <span className="badge__count">{category.count}</span>
            </StyledBadgeLink>
          </StyledListItem>
        ))}
      </ul>
    </StyledCategoriesFilter>
  );
}
