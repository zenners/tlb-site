import React from 'react'
import Link from 'gatsby-link'
import { GreyHeader } from '../components/headers'
import { LRContent } from '../components/content'

const MediaPage = () => (
  <div>
    <GreyHeader
      title="Careers"
      subtitle="Be part of The Lost Bread team! Help us find you"
    />
    <LRContent />
    <Positions />
  </div>
)

const WorkHere = () => <div> </div>

const Positions = () => (
  <section className="section">
    <div className="container">
      <header className="section-header">
        <h2>Join The Lost Bread Crew </h2>
        <hr />
        <p className="lead">
          If you're looking at a challenging environment where you can grow and
          develop your skills, then you've come to the right place!
        </p>
      </header>

      <div className="row gap-y">
        <div className="col-md-6 mx-auto">
          <a
            className="card card-body shadow-3 hover-shadow-6 text-default"
            href="#"
          >
            <div className="media align-items-center">
              <div className="mr-5">
                <span className="iconbox iconbox-xxl bg-pale-primary">
                  <i className="icon-genius text-primary" />
                </span>
              </div>
              <div className="media-body">
                <h5>I'm a barista</h5>
                <p className="mb-0">
                  Your web pages looks good on all devices and screen sizes,
                  including desktop, tablet and mobile.
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="col-md-6 mx-auto">
          <a
            className="card card-body shadow-3 hover-shadow-6 text-default"
            href="#"
          >
            <div className="media align-items-center">
              <div className="mr-5">
                <span className="iconbox iconbox-xxl bg-pale-info">
                  <i className="icon-profile-male text-info" />
                </span>
              </div>
              <div className="media-body">
                <h5>I'm a manager</h5>
                <p className="mb-0">
                  Your web pages looks good on all devices and screen sizes,
                  including desktop, tablet and mobile.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default MediaPage
