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
  font-size: 0.9em;
  text-align: center;
  color: gray;
`

const Image = styled.img`
display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
`
const Button = styled.a`

display: inline-block;
    position: relative;
    color: rgb(17, 17, 17);
    font-weight: bold;
    overflow: hidden;
    text-decoration: none;
    padding: 10px 15px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(170, 170, 170);
    border-image: initial;
    :hover {
      color: red;
    }
    
    
`


const IndexPage = () => (
  <Layout>
    <Image src={logo} alt='something here'/>
    <Title>BOLD FLAVORS. SERIOUSLY SMOKED MEATS.™</Title>
    <Par1>For over 65 years of great food, friendly faces, and quick casual service, Bar-B-Cutie® SmokeHouse is second to none! We pride ourselves on the quality of our cooking, the contentment of our guests, and the continuity of our business. </Par1>
    <Par1>So when you have that familiar craving for a mouth-waterin’ meal, you need to Get Your Booty To Bar-B-Cutie!</Par1>
    <Button href="https://www.bar-b-cutie.com">Get To Know Us</Button> 
    <Button href="https://www.bar-b-cutie.com/bbq/history/" >Read Our Story</Button>
    
    
    
    
  </Layout>
)

export default IndexPage
