import React from 'react'
export const Header6 = props => (
  <header
    className="header text-white bg-gray1 pt-10 pb-9"
    style={{ backgroundColor: '#b9a0c9' }}
  >
    <div className="container text-center">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1>Senior Front-end Engineer</h1>
          <p className="lead-2">
            <i className="fa fa-map-marker mr-2" /> San Francisco
          </p>

          <hr className="w-50px" />

          <a className="btn btn-xl btn-round btn-light" href="#section-apply">
            Apply Now
          </a>
        </div>
      </div>
    </div>
  </header>
)

export const Header = ({ bg, title, subtitle }) => (
  <header className="header text-white" style={{ backgroundColor: bg }}>
    <div className="container text-center">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h1>{title}</h1>
          <p className="lead-2 opacity-90 mt-6">{subtitle}</p>
        </div>
      </div>
    </div>
  </header>
)

export const GreyHeader = ({ title, subtitle }) => (
  <header className="header bg-gray pt-10 pb-01">
    <div className="container text-center">
      <h1 className="display-4">{title}</h1>
      <p className="lead-2 mt-6">{subtitle}</p>
    </div>
  </header>
)

export const LeftHeader = ({ title, text }) => (
  <header className="header">
    <div className="container">
      <h1 className="display-4">{title}</h1>
      <p className="lead-2 mt-6">{text}</p>
    </div>
  </header>
)

export const BGHeader = ({ store, location, hours, bg }) => (
  <header className="header mb-9" style={{ backgroundImage: `url(${bg})` }}>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="fw-200 mb-6">{store}</h1>
          <p className="lead-2">{location}</p>

          <hr className="w-50px ml-0" />
        </div>
      </div>
    </div>
  </header>
)
