import React, { useState, useEffect } from 'react';
import { masonry } from '../assets/js/masonry';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { AiOutlineFolder } from 'react-icons/ai';

function SinglePost({ post }) {
  let image = post.mainImage;

  return (
    <div className="fmasonry-cell">
      <div className="card post post--project">
        <div className="post__inner row row--space">
          <Link to="/single-post">
            {image ? (
              <div className="post__image">
                <Img
                  fluid={post.mainImage.asset.fluid}
                  alt={post.title}
                  onLoad={() => {
                    console.log('loaded');
                  }}
                />
              </div>
            ) : (
              <p>Default subtitle</p>
            )}
          </Link>
          <div className="post__content">
            <h2>
              <Link to="/single-post">{post.title}</Link>
            </h2>
            <p></p>

            <ul className="post__meta">
              <li>
                <Link to="#" className="listgroup">
                  <span className="listgroup__icon">
                    <AiOutlineFolder />
                  </span>
                  <span className="listgroup__content"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Blog({ posts }) {
  return (
    <div className="fmasonry">
      {posts.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}
    </div>
  );
}
