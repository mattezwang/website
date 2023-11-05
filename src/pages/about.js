import * as React from 'react'
import { useState } from 'react'
import Layout from '../components/layout'
import {
  pitchMore,
  pitchContent
} from './about.module.css'


const AboutPage = () => {

  const [elevPitch, setElev] = useState(false);

  const toggleDetails = () => {
    setElev(!elevPitch);
    console.log(elevPitch);
  };

  return (
    <Layout pageTitle="About Me">

      {elevPitch ? (
        <div className={pitchContent}>
          <p>My name is Matthew Wang, and I attend the University of Wisconsin-Madison, but grew up in Sterling, Virginia. </p>

          <p>As a junior-level computer science and math student, I have a strong foundation in both backend and frontend development.
            I'm proficient in Java, Python, and JavaScript (including React.js and React Native), C, and SQL. 
            I'm also well-versed in various programming tools and techniques like Git, AWS, and Agile Development Methodology.</p>

          <p>I'm interested in programming, specifically Software Engineering and Software Development. I have taken various courses 
            related to programming (listed below), and have applied that knowledge into personal projects (listed on the "Portfolio" tab).
            I am currently seeking and pursuing roles in many aspects of programming.</p>
        </div>
                    ) : null}

        <button class={pitchMore} onClick={toggleDetails}>
          {elevPitch ? <b>Show Less</b> : <b>Click to see my Elevator Pitch!</b>}
        </button>

        <p>3 Things Make me Unique:</p>

    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage