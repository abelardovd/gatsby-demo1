import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'


import logo from '../images/bbcutie-logo.png'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`
const Par1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: gray;
`

const Image = styled.img`
  height: 300px;
  text-align: center;  

`
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`


const IndexPage = () => (
  <Layout>
    <Image src={logo} alt='something here'/>
    <Title>BOLD FLAVORS. SERIOUSLY SMOKED MEATS.™</Title>
    <Par1>For over 65 years of great food, friendly faces, and quick casual service, Bar-B-Cutie® SmokeHouse is second to none! We pride ourselves on the quality of our cooking, the contentment of our guests, and the continuity of our business. </Par1>
    <Par1>So when you have that familiar craving for a mouth-waterin’ meal, you need to Get Your Booty To Bar-B-Cutie!</Par1>
    <Button>Get to Know Us</Button> <Button>Read Our Story</Button>
    
    <Button><Link to="/page-2/">Go to page 2</Link></Button>
  </Layout>
)

export default IndexPage
