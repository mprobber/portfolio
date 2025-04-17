import LongFormContent from "./LongFormContent";
import styled from "styled-components";

const Experience = () => {
  return (
    <LongFormContent>
      <h1>Work Experience</h1>
      <SectionTitle>
        <h3>Coinbase Software Engineer</h3>
        <h4>March 2017 - October 2020</h4>
      </SectionTitle>

      <p>
        In 2017, I joined the <strong>GDAX</strong> (now{" "}
        <a href="https://www.coinbase.com/learn/advanced-trading">
          Coinbase Advanced Trading
        </a>
        , formerly Coinbase Pro) team at Coinbase. This team of 6 was
        responsible for maintaining the entire spot exchange, across the stack.
        On such a small team for a large surface area, I was able to pick up a
        breadth of technical experience building and scaling the spot exchange
        end-to-end. The exchange was built with a microservice architechture
        with UDP-multicast to distribute trading messages, and FIX, HTTP REST,
        and Websocket APIs to communicate with clients. Projects that I lead on
        the team, included an institutional onboarding rebuild, building
        distributed load balancer for HTTP requests, and architecting and
        deploying a notifications service.
      </p>
      <p>
        I made the move to the <strong>Consumer Web</strong> team in early 2019.
        This team is responsible for the frontend and backend web technologies
        of <a href="http://coinbase.com">Coinbase.com</a>. My work on the team
        included building a slim routing layer to decompose a monolithic
        application, rearchitechting and maintaining the serverside react
        renderer, writing a code generator to support Coinbase's internal RPC
        tooling for javascript, bringing internationalization tooling to the
        logged out site, fixing experimentation tooling to ensure A/B tests are
        run properly, and building many, many new product flows.
      </p>
      <p>
        Towards the end of my tenure at Coinbase, I helped launch the{" "}
        <strong>client platform</strong> team. This team was responsible for
        React Tooling for the entirety of Coinbase, as part of Coinbase's
        rewrite of the application in React Native. My primary work on the team
        was around creating tooling to support codesharing across different
        platforms and Coinbase products.
      </p>
      <SectionTitle>
        <h3>Pinterest Software Engineer</h3>
        <h4>June 2015 - March 2017</h4>
      </SectionTitle>
      <p>
        In 2015 I joined the <strong>Web Core Experience</strong> platform team
        at Pinterest. Web Core Experience is responsible for maintaining the
        platform on which the Pinterest is built. The team's duties included
        maintaining the infrastructure for our home-grown module system,
        integrating new technologies such as ReactJS and Node into our stack,
        maintaining the web build system, and maintaining the health of the web
        codebase as a whole.
      </p>
      <p>
        Early in 2016, I became an engineer on the{" "}
        <strong>Feeds and Following</strong> team. Feeds and Following owned all
        experiences related to feeds on the Pinterest product, across the stack.
        Although I primarily focused on front-end web development, I did a
        substantial amount of work in the API. My work on the feeds and
        following team focuses on building new experiences on feeds for users in
        Pinterest, as well being one of two web engineers to maintain the feeds
        section of the product.
      </p>
      <SectionTitle>
        <h3>Hulu Software Engineering Intern</h3>
        <h4>Summer 2014</h4>
      </SectionTitle>
      <p>
        In the summer of 2014, I worked for the <strong>Core</strong> team at
        Hulu. The core team provides the APIs that drive the website and other
        front-end technologies. Scalability and data-integrity was a top
        concern. The technologies I work with include Ruby + Rails, Python, SQL,
        and the Flask micro web framework.
      </p>
      <SectionTitle>
        <h3>67-272 Teaching Assistant</h3>
        <h4>Fall 2013</h4>
      </SectionTitle>
      <p>
        Web Application Design and Development (67-272) provides students with
        the concepts and techniques to design and develop software applications,
        and to understand the design process. As a{" "}
        <strong>lab teaching assistant</strong> for this course, my
        responsibilities included assisting students to complete hands-on
        projects using Ruby On Rails, providing extra help to students, and
        grading exams and projects for the course.
      </p>
      <SectionTitle>
        <h3>NREC Software Engineering Intern</h3>
        <h4>Summer 2013</h4>
      </SectionTitle>
      <p>
        NREC (the National Robotics Engineering Center) is part of Carnegie
        Mellon University's Robotics Institute. As an <strong>intern</strong>, I
        engineered software and configured a system to manage high quantities of
        computer vision related data. I also wrote tools for the visualization
        and statistical analysis of data in C, C++, Python, and Matlab, and
        managed a Linux server for data storage and archival purposes.
      </p>
    </LongFormContent>
  );
};

export default Experience;

const SectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
