import React, { Component } from 'react';
import styles from './experience.css';

export default class Experience extends Component {
  render() {
    return (
      <div className={styles.main} id="experience">
        <h1>Experience</h1>
        <div className={styles.title}>
          <h3>Coinbase Software Engineer</h3>
          <h4>March 2017 - Present</h4>
        </div>
        <p>
          In 2017, I joined the <strong>GDAX</strong> (now{' '}
          <a href="https://pro.coinbase.com">Coinbase Pro</a>) team at Coinbase.
          This team of 6 was responsible for maintaining the entire spot
          exchange, across the stack. On such a small team for a large surface
          area, I was able to pick up a breadth of technical experience building
          and scaling the spot exchange end-to-end. The exchange was built with
          a microservice architechture with UDP-multicast to distribute trading
          messages, and FIX, HTTP REST, and Websocket APIs to communicate with
          clients. On the client-side, we found that DOM rendering was a
          bottleneck when there were a lot of order activity, so we used canvas
          to avoid reflows and page stuttering.
        </p>
        <p>
          I made the move to the <strong>Consumer Web</strong> team in early
          2019. This team is responsible for the web stack of{' '}
          <a href="http://coinbase.com">Coinbase.com</a>. We're responsible for
          owning both the frontend and the backend for web technologies at
          Coinbase. My work on the team included building a slim routing layer
          to decompose a monolithic application, rearchitechting and maintaining
          our serverside react renderer, writing a code generator to support our
          internal RPC tooling for javascript, and building many new product
          flows.
        </p>
        <div className={styles.title}>
          <h3>Pinterest Software Engineer</h3>
          <h4>June 2015 - March 2017</h4>
        </div>
        <p>
          In 2015 I joined the <strong>Web Core Experience</strong> platform
          team at Pinterest. Web Core Experience is responsible for maintaining
          the platform on which the Pinterest is built. The team's duties
          included maintaining the infrastructure for our home-grown module
          system, integrating new technologies such as ReactJS and Node into our
          stack, maintaining the web build system, and maintaining the health of
          the web codebase as a whole.
        </p>
        <p>
          Early in 2016, I became an engineer on the{' '}
          <strong>Feeds and Following</strong> team. Feeds and Following owned
          all experiences related to feeds on the Pinterest product, across the
          stack. Although I primarily focused on front-end web development, I
          did a substantial amount of work in the API. My work on the feeds and
          following team focuses on building new experiences on feeds for users
          in Pinterest, as well being one of two web engineers to maintain the
          feeds section of the product.
        </p>
        <div className={styles.title}>
          <h3>Hulu Software Engineering Intern</h3>
          <h4>Summer 2014</h4>
        </div>
        <p>
          In the summer of 2014, I worked for the <strong>Core</strong> team at
          Hulu. The core team provides the APIs that drive the website and other
          front-end technologies. Scalability and data-integrity was a top
          concern. The technologies I work with include Ruby + Rails, Python,
          SQL, and the Flask micro web framework.
        </p>
        <div className={styles.title}>
          <h3>67-272 Teaching Assistant</h3>
          <h4>Fall 2013</h4>
        </div>
        <p>
          Web Application Design and Development (67-272) provides students with
          the concepts and techniques to design and develop software
          applications, and to understand the design process. As a{' '}
          <strong>lab teaching assistant</strong> for this course, my
          responsibilities included assisting students to complete hands-on
          projects using Ruby On Rails, providing extra help to students, and
          grading exams and projects for the course.
        </p>
        <div className={styles.title}>
          <h3>NREC Software Engineering Intern</h3>
          <h4>Summer 2013</h4>
        </div>
        <p>
          NREC (the National Robotics Engineering Center) is part of Carnegie
          Mellon University's Robotics Institute. As an <strong>intern</strong>,
          I engineered software and configured a system to manage high
          quantities of computer vision related data. I also wrote tools for the
          visualization and statistical analysis of data in C, C++, Python, and
          Matlab, and managed a Linux server for data storage and archival
          purposes.
        </p>
      </div>
    );
  }
}
