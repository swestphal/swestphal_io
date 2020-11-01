import React from 'react';
import { Link } from 'gatsby';

export default function Nav() {
  return (
    <header>
      <div className="logo-box">
        <Link to="index-2.html">
          <img alt="" src="images/logo.png" />
          &nbsp;
        </Link>
      </div>

      <Link to="#" className="elemadded responsive-link">
        Menu
      </Link>

      <div className="menu-box">
        <ul className="menu">
          <li>
            <Link to="index.html" className="active">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="about.html">
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="blog.html">
              <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link to="services.html">
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link to="single-post.html">
              <span>Single Post</span>
            </Link>
          </li>
          <li>
            <Link to="single-work.html">
              <span>Single Project</span>
            </Link>
          </li>
          <li>
            <Link to="contact.html">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="social-box">
        <ul className="social-icons">
          <li>
            <Link to="#" className="facebook">
              <i className="fa fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link to="#" className="twitter">
              <i className="fa fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link to="#" className="dribble">
              <i className="fa fa-dribbble"></i>
            </Link>
          </li>
          <li>
            <Link to="#" className="pinterest">
              <i className="fa fa-pinterest"></i>
            </Link>
          </li>
        </ul>
        <div className="info">
          <Link to="#" className="mail">
            youremail@domain.com<i className="fa fa-envelope-o"></i>
          </Link>
          <p className="phone">
            +38164 123 456<i className="fa fa-phone"></i>
          </p>
        </div>

        <p className="copyright">
          &#169; 2014 Moler inc
          <br /> All RightsReserved
        </p>
      </div>
    </header>
  );
}
