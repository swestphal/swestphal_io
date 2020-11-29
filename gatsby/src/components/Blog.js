import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { AiOutlineFolder } from 'react-icons/ai';
import { masonry } from '../assets/js/masonry';

function SinglePost({ post }) {
  const image = post.mainImage;

  return (
    <div className="fmasonry-cell">
      <div className="card post ">
        <div className="post__inner ">
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
            <ul className="post__meta">
              <li>
                <Link to="#" className="listgroup">
                  <span className="listgroup__icon">
                    <AiOutlineFolder />
                  </span>
                  <span className="listgroup__content" />
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
