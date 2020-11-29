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
      <div className="card post ">
        <div className="post__inner ">
          <Link to={`/${project.slug.current}`} className="post__image-wrapper">
            <div className="post__image">
              <Img fluid={project.mainImage.asset.fluid} alt={project.name} />
            </div>
          </Link>
          <div className="post__content">
            <h3>
              <Link to={`/${project.slug.current}`}>{project.title}</Link>
            </h3>
            <p>{project.excerpt}</p>

            <ul className="post__meta">
              <li>
                <span className="listgroup__content">
                  {project.relatedCategories.map((cat, _) => (
                    <Link to={`/projects/${cat.classification.slug.current}`}>
                      {cat.classification.name}
                    </Link>
                  ))}
                </span>
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
