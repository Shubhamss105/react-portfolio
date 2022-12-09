import React from "react";
import { Grid, Progress, Segment, Button } from "semantic-ui-react";

const Resume = () => {
  return (
    <div className="resume" id="about">
      <br />
      <h2 style={{ textAlign: "left" }}>Resume</h2>
      <h3 style={{ textAlign: "left" }}>Education</h3>

      <Grid doubling columns={2}>
        <Grid.Column>
          <h4>B-Tech(2020-2024)</h4>
          <p>
            I'm pursuing Bachelor of Technology from Computer Science and Engineering Branch in ABES Institute of Technology, Ghaziabad.
          </p>
          <br />
          <h4>Intermediate(2019)</h4>
          <p>
            Pursued intermediate from RPM Academy, Gorakhpur from Mathematics and Science stream.
          </p>
          <br />
          <h3>Experience</h3>
          <h4>Blockchain Developer (Freelancing)</h4>
          <p>
            Working as a freelancer and building decentralized applications using Ethereum Blockhain. 
          </p>

          <h4>Web Development(2020-2021)</h4>
          <p>
            Created multiple responsive frontend websites for friends and relatives using HTML, CSS and using CRM tools such as WordPress.
          </p>
        </Grid.Column>

        <Grid.Column>
          <Progress percent={80} color="red">
            {" "}
            Frontend{" "}
          </Progress>
          <Progress percent={60} color="orange">
            {" "}
            Backend{" "}
          </Progress>
          <Progress percent={50} color="blue">
            {" "}
            Blockchain Developer{" "}
          </Progress>
          <Progress percent={65} color="teal">
            {" "}
            C++ Programmer{" "}
          </Progress>
          <br />

          <h3>Knowledge</h3>
          <div>
            <Segment basic>
              <Button inverted color="purple">
                HTML
              </Button>
              <Button inverted color="red">
                CSS
              </Button>
              <Button inverted color="orange">
                Javascript
              </Button>
              <Button inverted color="yellow">
                MongoDB
              </Button>
              <Button inverted color="olive">
                ExpressJs
              </Button>
              <Button inverted color="green">
                ReactJs
              </Button>
              <Button inverted color="teal">
                NodeJs
              </Button>
              <Button inverted color="blue">
                NextJs
              </Button>
              <Button inverted color="red">
                C++
              </Button>
              <Button inverted color="blue">
                Ethereum
              </Button>
              <Button inverted color="orange">
                Solidity
              </Button>
              <Button inverted color="yellow">
                Web3.js
              </Button>
              <Button inverted color="olive">
                Ganache
              </Button>
              <Button inverted color="green">
                Truffle
              </Button>
              <Button inverted color="teal">
                Metamask
              </Button>
            </Segment>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Resume;
