import React from 'react'
import Link from 'gatsby-link'

export const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark">
    <div className="container">
      <div className="navbar-left">
        <button className="navbar-toggler" type="button">
          &#9776;
        </button>
        <a className="navbar-brand" href="#">
          <img
            className="logo-dark"
            src="../assets/img/logo-dark.png"
            alt="logo"
          />
          <img
            className="logo-light"
            src="../assets/img/logo-light.png"
            alt="logo"
          />
        </a>
      </div>

      <section className="navbar-mobile">
        <nav className="nav nav-navbar ml-auto">
          {props.data.map(item => (
            <Link to={item.link} className="nav-link">
              {item.title}
            </Link>
          ))}
        </nav>
      </section>
    </div>
  </nav>
)
