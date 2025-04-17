import styled from "styled-components";
import LongFormContent from "./LongFormContent";

const Education = () => (
  <LongFormContent>
    <h1>Education</h1>
    <p>
      I graduated in 2015 from <strong>Carnegie Mellon University</strong> with
      a{" "}
      <strong>
        BS degree in Information Systems and an additional major in Computer
        Science
      </strong>
      .
    </p>
    <p>
      {" "}
      My Information Systems classes taught me a lot about software development
      and business practices, whereas my Computer Science classes gave me the
      theoretical background I needed to be a successful engineer.
    </p>
    <p>Some courses of my favorite courses at CMU included:</p>
    <ClassList>
      <li>
        <h3>Computer Music Systems</h3>
        <p>
          In this <strong>music technology course</strong>, we learned to
          develop programs that processed audio, and dealt with audio and event
          synchronization over networks, serial connections, bluetooth, and
          other protocols. This class combined my interest in music with my
          interest in technology.
        </p>
      </li>
      <li>
        <h3>Operating System Design and Implementation</h3>
        <p>
          One of the most notoriously difficult classes at CMU is also one of my
          favorites. In this <strong>computer systems course</strong>, we are
          given an x86 simulator setup, and an entry point in C code that loops
          infinitely.{" "}
        </p>
        <p>
          From there, we need to design and implement a kernel with
          POSIX-inspired system calls, that can handle text and keyboard I/O via
          interrupts calls, process signaling, multiple running processes, and
          multithreading. It gave me great depth and insight as to how low level
          systems work.
        </p>
      </li>
      <li>
        <h3>Web Application Design and Development</h3>
        <p>
          In this <strong>Information Systems course</strong>, we learned how to
          go all the way from gathering insight on a process, to developing a
          full-fledged restful web application.{" "}
        </p>
        <p>
          While not the most technically challenging course I've taken, it
          emphasizes actualization of an idea, and development process as
          opposed to just sheer engineering skill. The following year after I
          took this course, I was a lab TA.
        </p>
      </li>
      <li>
        <h3>Concepts of Mathematics</h3>
        <p>
          This <strong>proofs-heavy math course</strong> taught me to see math
          in a completely different light. It showed me that math was not brute
          memorization, but instead a tool kit you can use to derive a
          conclusion from some known assumption. It introduced me to lots of
          concept including set theory, group theory, modular arithmetic,
          combinatorics, and probability theory.
        </p>
      </li>
      <li>
        <h3>Great Theoretical Ideas in Computer Science</h3>
        <p>
          This <strong>theoretical computer science course</strong> was almost a
          continuation of concepts of Mathematics. It used lots of the mathical
          concepts introduced in that class, as well as some more, and taught me
          how to apply these concepts to real problems algorithmically.
        </p>
      </li>
      <li>
        <h3>Black and White Photography</h3>
        <p>
          In this <strong>darkroom photography course</strong>, we were given
          thematic assignments, and left to explore themes with our own
          interpretations. It was a wonderful creative outlet, and a good break
          from the math and logic heavy curriculum that I took.
        </p>
      </li>
    </ClassList>
    <h3>Other Odds and Ends</h3>
    <p>
      Since of my Bachelor's degree, I have continued in my educational
      pursuits, mostly unrelated towards technology. I am technically a
      matriculated student at Community College of San Francisco, on leave for
      an associates degree in Music. I have also taken a Mixing and Mastering
      Course at Anthem Music Academy in Emeryville, and as of writing this, am
      currently enrolled in an A2 level Portuguese class.
    </p>
  </LongFormContent>
);

export default Education;

const ClassList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;
