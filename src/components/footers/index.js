import React from 'react'

export const Footer = props => (
  <footer className="footer py-7">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p>
            <a href="#">
              <img src="../assets/img/logo-dark.png" alt="logo" />
            </a>
          </p>
        </div>

        <div className="col-xl-5">
          <p>Dedicated to crafing a delightful experience.</p>
          <div className="social social-sm social-bg-brand social-cycling mt-6">
            <a className="social-facebook" href="#">
              <i className="fa fa-facebook" />
            </a>
            <a className="social-twitter" href="#">
              <i className="fa fa-twitter" />
            </a>
            <a className="social-youtube" href="#">
              <i className="fa fa-youtube" />
            </a>
            <a className="social-instagram" href="#">
              <i className="fa fa-instagram" />
            </a>
          </div>
          <hr className="d-xl-none" />
        </div>

        <div className="col-4 col-xl-2 offset-xl-1">
          <div className="nav flex-column">
            <a className="nav-link" href="#">
              About
            </a>
            <a className="nav-link" href="#">
              Careers
            </a>
            <a className="nav-link" href="#">
              Contact
            </a>
          </div>
        </div>

        <div className="col-4 col-xl-2">
          <div className="nav flex-column">
            <a className="nav-link" href="#">
              Features
            </a>
            <a className="nav-link" href="#">
              Pricing
            </a>
            <a className="nav-link" href="#">
              Security
            </a>
          </div>
        </div>

        <div className="col-4 col-xl-2">
          <div className="nav flex-column">
            <a className="nav-link" href="#">
              Help Center
            </a>
            <a className="nav-link" href="#">
              API
            </a>
            <a className="nav-link" href="#">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
