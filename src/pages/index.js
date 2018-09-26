import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'

import icon from '../images/gatsby-icon.png'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Image = styled.img`
  height: 100px;

`


const IndexPage = () => (
  <Layout>
    <Title>Hi people I am Abelardo</Title>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Image src={icon} alt='something here'/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
