import React from 'react'
import Link from 'gatsby-link'
import { Header, Header6 } from '../components/headers'

const IndexPage = () => (
  <div>
    <Header bg={'#40E0D0'} title={'Media'} subtitle="lorem ipsum" />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
