import React from 'react'
import Link from 'gatsby-link'
import { BGHeader, LeftHeader } from '../components/headers'

const StorePage = props => {
  console.log(props.pathContext)
  const { store, path, location, menu } = props.pathContext
  return (
    <div>
      <BGHeader store={store} location={location} subtitle={path} />
      {menu.map(section => (
        <div>
          <LeftHeader title={section.category} />
          {section.items.map(sub => (
            <div>
              <h4 className="text-center"> {sub.title} </h4>
              <h6 className="text-center"> {sub.desc} </h6>

              <Menu data={sub.items} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

const Menu = props => (
  <section className="section">
    <div className="container">
      <div className="row gap-y">
        {props.data.map(food => (
          <div className="col-md-4 feature-2">
            <h6>{food.name}</h6>
            <p>{food.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default StorePage
