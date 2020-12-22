import React, { useState } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { bool } from 'prop-types';
import { AiFillPhone, AiFillMail, AiFillCopyrightCircle } from 'react-icons/ai';
// import Sticky from 'wil-react-sticky';
// import Logo from '../assets/images/simonewestphal.png';
//  <div className="sidebar__logo">
//               <img src={Logo} alt="Logo" />
//             </div>

import { StyledNav } from './Nav.styled';
import { StyledSidebar } from './Layout.styled';
import Burger from './Burger';

export default function Nav({ location }) {
  const [open, setOpen] = useState(false); // hidden when layout is rendered
  function isParentPage(path) {
    if (location.pathname.includes(path)) return true;
  }
  return (
    <>
      <StyledSidebar id="sidebar">
        <div id="sidebar__inner">
          <Burger open={open} setOpen={setOpen} />

          <div className="sidebar__infos">
            <a
              href="mailto:hello@swestphal.io"
              className="link infos__icons--mail"
            >
              <AiFillMail />
              hello@swestphal.io
            </a>
            <a href="tel:4935873159989" className="link infos__icons--phone">
              <AiFillPhone />
              +49 35873 / 15 99 89
            </a>
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
                  to="/projekte/"
                  className={isParentPage('projekt') ? 'active' : ''}
                >
                  <span>Projekte</span>
                </Link>
              </li>
              <li onClick={() => setOpen(!open)}>
                <Link to="/kontakt/">
                  <span>Kontakt</span>
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
      </StyledSidebar>
    </>
  );
}
Nav.propTypes = {
  open: bool.isRequired,
};
