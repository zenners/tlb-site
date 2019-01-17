import React from 'react'
import Link from 'gatsby-link'
import { GreyHeader } from '../components/headers'
// import streat from '../img/locations/Maginhawa.jpg'
// console.log('loc is ', streat)

const Locations = [
  {
    name: 'Streat',
    bg: '#0c4b63',
    path: '/streat',
    //img: streat,
  },
  {
    name: 'SM Megamall',
    bg: '#4a080d',
    img: '',
    path: '/megamall',
  },
  {
    name: 'Glorietta',
    bg: '#0c4b63',
    img: '',
    path: '/glorietta',
  },
  // {
  //   name: 'SM Fairview',
  //   bg: '#0c4b63',
  //   img: '',
  //   path: '/streat',
  // },
]

const LocationsPage = () => (
  <div>
    <GreyHeader
      title="Locations"
      subtitle="Discover and explore a Lost Bread near you."
    />
    <LocationList />
  </div>
)

const LocationList = () => (
  <section className="section">
    <div className="container">
      <header className="section-header">
        <small>Offices</small>
        <h2>Our Locations</h2>
        <hr />
        <p className="lead">Find The Lost Bread near you</p>
      </header>

      <div className="row gap-y">
        {Locations.map(loc => (
          <div className="col-md-6 col-lg-3">
            <Link to={loc.path}>
              <a className="card text-white text-center bg-img py-8" href="#">
                <div
                  className="overlay"
                  style={{
                    // backgroundColor: loc.bg,
                    backgroundImage: `url(${loc.img})`,
                  }}
                />
                <div className="position-relative">
                  <h3 className="fw-500 mb-0">{loc.name}</h3>
                </div>
              </a>
            </Link>
            <p> #91 Streat Maginhawa Food Park, U.P. Village, Quezon City </p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default LocationsPage
