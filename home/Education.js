import React, { Component } from 'react';
import styles from './education.css';

// Fun Fact - I wanted to make this a stateless component, but turns out
// stateless components can't have refs
export default class Education extends Component {
  render() {
    return (
      <div className={styles.main} id='education'>
        <h1>Education</h1>
        <p>
          I graduated in 2015 from <strong>Carnegie Mellon University</strong>
          with a <strong>BS degree in Information Systems and an additional
          major in Computer Science</strong>.  My Information Systems classes
          taught me a lot about software development and business practices,
          whereas my Computer Science classes gave me the theoretical
          background I needed to be a successful engineer.
        </p>
        <p>
          Some courses of my favorite courses at CMU included:
        </p>
        <ul className={styles.classList}>
          <li>
            <h3>Computer Music Systems</h3>
            <p>
              In this <strong>music technology course</strong>, we learned to
              develop programs that processed audio, and dealt with audio and
              event synchronization over networks, serial connections,
              bluetooth, and other protocols.  This class combined my interest
              in music with my interest in technology.
            </p>
          </li>
          <li>
            <h3>Operating System Design and Implementation</h3>
            <p>
              One of the most notoriously difficult classes at CMU is also one
              of my favorites.  In this <strong>computer systems course</strong>,
              we are given an x86 simulator setup, and an entry point in C code
              that loops infinitely.  From there, we need to design and implement
              a kernel with POSIX-inspired system calls, that can handle text and
              keyboard I/O via interrupts calls, process signaling, multiple
              running processes, and multithreading.  It gave me great depth and
              insight as to how low level systems work.
            </p>
          </li>
          <li>
            <h3>Web Application Design and Development</h3>
            <p>
              In this <strong>Information Systems course</strong>, we learned
              how to go all the way from gathering insight on a process, to
              developing a full-fledged restful web application.  While not
              the most technically interesting course I've taken, it emphasizes
              actualization of an idea, and development process as opposed to
              just sheer engineering skill.  The following year after I took
              this course, I was a lab TA.
            </p>
          </li>
          <li>
            <h3>Concepts of Mathematics</h3>
            <p>
              This <strong>proofs-heavy math course</strong> taught me to see
              math in a completely different light.  It showed me that math was
              not brute memorization, but instead a tool kit you can use to
              derive a conclusion from some known assumption.  It introduced me
              to lots of concept including set theory, group theory, modular
              arithmetic, combinatorics, and probability theory.
            </p>
          </li>
          <li>
            <h3>Great Theoretical Ideas in Computer Science</h3>
            <p>
              This <strong>theoretical computer science course</strong> was
              almost a continuation of concepts of Mathematics.  It used lots
              of the mathical concepts introduced in that class, as well as
              some more, and taught me how to apply these concepts to real
              problems algorithmically.
            </p>
          </li>
          <li>
            <h3>Black and White Photography</h3>
            <p>
              In this <strong>darkroom photography course</strong>, we were
              given thematic assignments, and left to explore themes with our
              own interpretations.  It was a wonderful creative outlet, and a
              good break from the math and logic heavy curriculum that I took.
            </p>
          </li>
        </ul>
        <p>
          Next spring semester I will also be beginning a
          <strong>Japanese</strong> course as a part-time student at City
          College of San Francisco on the weekends.
        </p>
      </div>
    );
  }
}

