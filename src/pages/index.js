import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import {
    homeTextAndImage,
    homeText,
    homeImage
} from './index.module.css'

const IndexPage = () => {
  return (
    <Layout>
      <body>
      <h1>Hi, I'm Matthew!</h1>
      <div>
      <h2>I am ...</h2>
      <div class = {homeTextAndImage}>
        <div class = {homeText}>
          <ul>
          <li><p>a <b>Computer Science</b> & <b>Math</b> student at the <span style={{backgroundColor: "rgb(197, 5, 12)"}}>University of Wisconsin-Madison</span> 🦡</p></li>
          <li><p>someone who enjoys creating <mark style={{color: "rgb(80, 255, 50)"}}>practical programs</mark> which make my <mark style={{color: "rgb(80, 255, 50)"}}>life easier</mark> ✅</p></li>
          <li><p>interested in <b>Software Engineering</b>, Software Development, and generally all things programming.</p></li>
          <br/>
  
          </ul>
        </div>
        <div class = {homeImage}>
          <StaticImage
            alt="big ear dude"
            src="../images/big_ears2.png"
          />
          </div>
        </div>
        <p>Please feel free to reach out to talk about anything from Math to Pokémon!</p>
      </div>
      </body>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage