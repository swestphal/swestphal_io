import React, { useState, useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';
import { AiOutlineFolder } from 'react-icons/ai';
import { useSwipeable } from 'react-swipeable';

import { FiChevronLeft, FiChevronRight } from 'react-icons/all';
import { FaQuoteRight } from 'react-icons/fa';
import SEO from '../components/SEO';

export default function SingleProjectPage({ data: { project } }) {
  const [slides, setSlide] = useState(project.imageGallery);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = slides.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  });
  /* useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]); */
  const handlers = useSwipeable({
    onSwiped: (eventData) => console.log('User Swiped!', eventData),
  });
  return (
    <>
      <SEO title={project.title} image={project.mainImage?.asset?.fluid?.src} />
      <div className="page project ">
        <h1>{project.title}</h1>
        <div className="">
          <div className="slider " {...handlers}>
            {slides.map((slide, slideIndex) => {
              let position = 'nextSlide';
              if (slideIndex === index) {
                position = 'activeSlide';
              }
              if (
                slideIndex === index - 1 ||
                (index === 0 && slideIndex === slides.length - 1)
              ) {
                position = 'lastSlide';
              }
              const {
                asset: { fluid },
                asset: { id },
              } = slide;

              return (
                <article className={`slider__container ${position}`} key={id}>
                  <Img fluid={fluid} alt={project.name} />
                </article>
              );
            })}
            <div className="nav__container">
              <button
                className=" nav__prev"
                onClick={() => setIndex(index - 1)}
              >
                <FiChevronLeft />
              </button>
              <button className="nav__next" onClick={() => setIndex(index + 1)}>
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="post__content row">
            <div className="cell">
              {project?._rawFeatures && (
                <BlockContent blocks={project._rawFeatures} />
              )}
            </div>

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
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    project: sanityProject(slug: { current: { eq: $slug } }) {
      id
      title
      _rawFeatures
      _rawBody
      mainImage {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
        _key
        _type

        _rawAsset
        _rawHotspot
        _rawCrop
      }
      imageGallery {
        _key
        asset {
          id
          fluid(maxWidth: 960) {
            ...GatsbySanityImageFluid
          }
        }
      }
      relatedProjects {
        _key
        _type
        id
        title
        slug {
          current
        }
        publishedAt
        excerpt {
          _key
          _type
          style
          list
          _rawChildren
        }
        startedAt
        endedAt

        mainImage {
          crop {
            _key
            _type
            top
            bottom
            left
            right
          }
          hotspot {
            _key
            _type
            x
            y
            height
            width
          }
          asset {
            _id
          }
        }
      }
      relatedCategories {
        _key
        _type
        _rawClassification
        classification {
          id
          name
          image {
            _key
            _type
            _rawAsset
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            asset {
              _id
            }
          }
        }

        skills
      }
    }
  }
`;
