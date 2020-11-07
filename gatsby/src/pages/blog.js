import React from 'react';
import { graphql } from 'gatsby';
import { AboutSingle } from '../components/About';
import Testimonials from '../components/Testimonials';
import ServiceList from '../components/Services';
import Skills from '../components/Skills';
import ProjectList from '../components/Projects';
import Blog from '../components/Blog';

export default function BlogPage({ data, pageContext }) {
  return (
    <div className="index">
      <div className="">
        <Blog />
      </div>
    </div>
  );
}
