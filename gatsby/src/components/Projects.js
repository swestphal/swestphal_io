import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { AiOutlineFolder } from 'react-icons/ai';

const ProjectGridStyles = styled.div``;

const ProjectStyles = styled.div``;

function SingleProject({ project }) {
  return (
    <div className="grid__item">
      <div className="card post post--project ">
        <div className="post__inner row row--space">
          <Link to="/single-post">
            <div className="post__image">
              <Img fluid={project.mainImage.asset.fluid} alt={project.name} />
            </div>
          </Link>
          <div className="post__content">
            <h2>
              <Link to="/single-post">{project.title}</Link>
            </h2>
            <p>{project.excerpt}</p>

            <ul className="post__meta">
              <li>
                <Link to="#" className="listgroup">
                  <span className="listgroup__icon">
                    <AiOutlineFolder />
                  </span>
                  <span className="listgroup__content">
                    <p>{project.relatedCategories[0].classification.name}</p>
                    <p>{project.relatedCategories[0].skills.join(', ')}</p>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
// todo loop through multiple categories of project

export default function ProjectList({ projects }) {
  return (
    <ProjectGridStyles className="grid">
      {projects.map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </ProjectGridStyles>
  );
}
