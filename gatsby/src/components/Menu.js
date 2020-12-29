import React from 'react';
import { Link } from 'gatsby';
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillPhone,
  AiFillMail,
  AiFillCopyrightCircle,
} from 'react-icons/ai';

export default function Menu() {
  return (
    <>
      <div className="sidebar__infos">
        <Link to="/" className="link infos__icons--mail">
          <AiFillMail />
          hello@swestphal.io
        </Link>
        <Link to="/" className="link infos__icons--phone">
          <AiFillPhone />
          +49 1234 678
        </Link>
      </div>
      <ul className="menu">
        <li>
          <Link to="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/blog/">
            <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link to="/services/" partiallyActive>
            <span>Services</span>
          </Link>
        </li>
        <li>
          <Link
            to="/projects/"
            getProps={({ isPartiallyCurrent }) =>
              isPartiallyCurrent
                ? { style: { ...linkStyles, ...activeStyle } }
                : null
            }
          >
            <span>Projekte</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </>
  );
}
