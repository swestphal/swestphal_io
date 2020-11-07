import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillPhone,
  AiFillMail,
  AiFillCopyrightCircle,
} from 'react-icons/ai';

export default function Nav() {
  return (
    <>
      <header id="sidebar">
        <div className="sidebar__logo">
          <Link to="index-2.html">
            <Img alt="" src="images/logo.png" />
          </Link>
        </div>

        <Link to="#" className="elemadded responsive-link">
          Menu
        </Link>

        <div className="sidebar__menu">
          <ul className="menu">
            <li>
              <Link to="/" className="active">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <Link to="/services">
                <span>Services</span>
              </Link>
            </li>
            <li className="active">
              <Link to="/projects">
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar__social">
          <ul className="social__icons">
            <li>
              <Link to="#" className="social__icons--facebook">
                <AiFillFacebook />
              </Link>
            </li>
            <li>
              <Link to="#" className="social__icons--twitter">
                <AiFillTwitterSquare />
              </Link>
            </li>
            <li>
              <Link to="#" className="social__icons--instagram">
                <AiFillInstagram />
              </Link>
            </li>
            <li>
              <Link to="#" className="social__icons--github">
                <AiFillGithub />
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebar__infos">
          <Link to="#" className="link infos__icons--mail">
            <AiFillMail />
            hello@swestphal.io
          </Link>
          <Link to="#" className="link infos__icons--phone">
            <AiFillPhone />
            +49 1234 678
          </Link>
          <p className="infos__copyright">
            <AiFillCopyrightCircle /> {new Date().getFullYear()} Simone Westphal
            <br />
          </p>
        </div>
      </header>
    </>
  );
}
