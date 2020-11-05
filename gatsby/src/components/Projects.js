import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ProjectGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;

const ProjectStyles = styled.div`
  display: grid;
  /* Take your row sizing not from the pizzaStyles div, but from the  PizzaGridStyles grid */
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h2,
  p {
    margin: 0;
  }
`;

function SingleProject({ project }) {
  return (
    <ProjectStyles>
      <div className="projects project__single">
        <div className="project__inner">
          <Img fluid={project.mainImage.asset.fluid} alt={project.name} />
          <div className="project__content">
            <h2>
              <Link to="/single-post">{project.title}</Link>
            </h2>
            <p>{project.excerpt}</p>
          </div>
          <ul className="project__meta">
            <li>
              <Link to="#">
                <i className="fa fa-comment"></i>3 comments
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa fa-calendar"></i>
                {project.relatedCategories[0].classification.name}:&nbsp;
                {project.relatedCategories[0].skills.join(',')}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </ProjectStyles>
  );
}

export default function ProjectList({ projects }) {
  return (
    <ProjectGridStyles>
      {projects.map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </ProjectGridStyles>
  );
}
