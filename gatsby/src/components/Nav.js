import React, { useState } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { bool } from 'prop-types';
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillPhone,
  AiFillMail,
  AiFillCopyrightCircle,
} from 'react-icons/ai';
import Sticky from 'wil-react-sticky';
// import Logo from '../assets/images/simonewestphal.png';
//  <div className="sidebar__logo">
//               <img src={Logo} alt="Logo" />
//             </div>

import { StyledNav } from './Nav.styled';
import Burger from './Burger';

export default function Nav({ location }) {
  const [open, setOpen] = useState(false); // hidden when layout is rendered
  function isParentPage(path) {
    if (location.pathname.includes(path)) return true;
  }
  return (
    <>
      <header id="sidebar">
        <Sticky
          containerSelectorFocus="#container"
          stickyEnableRange={[756, Infinity]}
        >
          <div id="sidebar__inner">
            <Burger open={open} setOpen={setOpen} />

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
            <StyledNav className="sidebar__menu" open={open}>
              <ul className="menu">
                <li onClick={() => setOpen(!open)}>
                  <Link to="/">
                    <span>Home</span>
                  </Link>
                </li>
                <li onClick={() => setOpen(!open)}>
                  <Link to="/blog/">
                    <span>Blog</span>
                  </Link>
                </li>
                <li onClick={() => setOpen(!open)}>
                  <Link to="/services/">
                    <span>Services</span>
                  </Link>
                </li>
                <li onClick={() => setOpen(!open)}>
                  <Link
                    to="/projects/"
                    className={isParentPage('projects') ? 'active' : ''}
                  >
                    <span>Projects</span>
                  </Link>
                </li>
                <li onClick={() => setOpen(!open)}>
                  <Link to="/contact/">
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </StyledNav>

            <div className="sidebar__infos">
              <p className="infos__copyright">
                <AiFillCopyrightCircle /> {new Date().getFullYear()} Simone
                Westphal
              </p>
            </div>
          </div>
        </Sticky>
      </header>
    </>
  );
}
Nav.propTypes = {
  open: bool.isRequired,
};
