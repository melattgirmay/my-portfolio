import React from 'react';
import Navbar from './Navbar';
import FontStyles from './FontStyles';
import { Icon } from '@iconify/react';

const Home = () => {
  return (
    <div className='container'>
      <Navbar />
      <FontStyles />
      <div className="content">
      <div id="home">
      <h2 id="welcome"></h2>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>Welcome to My Portfolio</h1>
      <div class="hero">
          <div data-aos="fade-up">
          <h1>
              Hello, I'm <span className="main-font text-blue">Melat</span>
            </h1>
            <h4 className="student" id="student">
              I'm currently majoring in Computer Science at <strong>Unity University</strong> in Addis Ababa, Ethiopia.
              <br />
              In my academic journey, I'm passionate about exploring various aspects
              <br />
              of computer science, including algorithms and software
              <br />
              development. When it comes to coding, I love
              <br />
              working on projects using a variety of
              <br />
              technologies. My toolkit includes
              <br />
              JavaScript, React.js,
              <br />
              PHP, and Java.
            </h4>
          </div>
        </div>
        <div class="socials" data-aos="fade-in"> 
          <ul>
            <li class="bg-blue"><a href="https://www.linkedin.com/in/melathailu/"
              target="_blank"><span class="socials-text">LinkedIn</span> <i class="fab fa-linkedin fa-2x"></i
            ></a></li>
            <li class="bg-dark-grey"> <a href="https://github.com/melattgirmay"
              target="_blank"><span class="socials-text">GitHub</span><i class="fab fa-github fa-2x"></i
            ></a></li>
          </ul>
        </div>
      </div>
      <div className="container" id='projects'>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <h2 className="main-font">My<span className="text-blue main-font"> Projects</span></h2>
        <div className="project-row" data-aos="fade-up">
          <div className="project-left">
            <img src="/img/cryptocrowd2.png" alt="" />
          </div>
          <div className="project-right">
            <h3>CryptoCrowd Sentiment Analysis</h3>
            <ul className="tech-stack-list">
              <p className="text-grey"><b>Made with: </b></p>
              <li><Icon icon="logos:aws" width="90" height="90" /></li>
              <li><span className="iconify" data-icon="logos:javascript" data-inline="false"></span></li>
              <li><span className="iconify" data-icon="logos:react" data-inline="false"></span></li>
              <li><span className="iconify" data-icon="logos:bootstrap" data-inline="false"></span></li>
              <li><span className="iconify" data-icon="logos:nodejs" data-inline="false"></span></li>
              <li><span className="iconify" data-icon="logos:express" data-inline="false"></span></li>
            </ul>
            <p>Cryptocurrency sentiment analysis on Twitter posts. Users can see the overall sentiment (positive, negative or neutral) of different Cryptocurrencies based on tweets. Users can also view keywords and an average sentiment score. React frontend and Node.js backend. Stateless application that uses Elasticache and S3 on AWS for persistence. Application was setup with an autoscaling group to scale in and out as needed.</p>
            <div className="project-links">
              <a href="https://www.youtube.com/watch?v=uhyC0M4WIl4" className="btn-blue btn-small hover-bg-light" target="_blank"> <i className="fab fa-youtube"></i> Demo</a>
              <a href="https://github.com/ben04rogers/cab432-assignment-2" className="btn-blue-outline btn-small mx-1" target="_blank"> <i className="fab fa-github"></i
                > Code</a>
            </div>
          </div>
        </div>

        <div className="project-row" data-aos="fade-up">
          <div className="project-left">
            <img src="img/task-manager.png" alt="" />
          </div>
          <div className="project-right">
            <h3>Task Manager Console App</h3>
            <ul className="tech-stack-list">
              <p className="text-grey"><b>Made with: </b></p>
              <li><Icon icon="devicon:csharp" width="90" height="90" /></li>
            </ul>
            <p>Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task's dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.</p>
            <div className="project-links">
              <a href="https://github.com/melattgirmay/Task-Manager-Console-App.git" className="btn-blue-outline btn-small" target="_blank"> <i className="fab fa-github"></i
                > Code</a>
            </div>
          </div>
        </div>

        <div className="project-row" data-aos="fade-up">
          <div className="project-left">
            <img src="img/bfsproject.JPG" alt="" />
          </div>
          <div className="project-right">
            <h3>Family Tree Shortest Path</h3>
            <ul className="tech-stack-list">
              <p className="text-grey"><b>Made with: </b></p>
              <li><span className="iconify" data-icon="logos:python" data-inline="false"></span></li>
            </ul>
            <p>Python program that implements a breadth-first search algorithm to generate a minimal spanning tree. Problem was to calculate a shortest path from a starting vertex in a graph to each other vertex. The vertices represent people and each person is related to every other person through parent-child relationships. A person can see how they are related to each other person in the tree.</p>
            <div className="project-links">
              <a href="https://www.youtube.com/watch?v=VXCZKsqupxA" className="btn-blue btn-small hover-bg-light" target="_blank"> <i className="fab fa-youtube"></i> Demo</a>
              <a href="https://github.com/ben04rogers/breadth-first-search" className="btn-blue-outline btn-small mx-1" target="_blank"> <i className="fab fa-github"></i
                > Code</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container" data-aos="fade-in" id='skills'> 
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <h2 className="text-white main-font">Technical <span className="text-blue main-font">Skills</span></h2>
        <ul className="skills-icons">
          <li><Icon icon="logos:javascript" width="90" height="90" /><span>JavaScript</span></li>
          <li><Icon icon="logos:react" width="90" height="90" /><span>React</span></li>       
          <li><Icon icon="logos:php" width="90" height="90" /><span className="text-center">PHP</span></li>             
          <li><Icon icon="logos:python" width="90" height="90" /><span>Python</span></li>
          <li><Icon icon="logos:java" width="90" height="90" /><span>Java</span></li>
          <li><Icon icon="vscode-icons:file-type-html" width="90" height="90" /><span>HTML</span></li>
          <li><Icon icon="vscode-icons:file-type-css" width="90" height="90" /><span>CSS</span></li>
          <li><Icon icon="logos:git-icon" width="90" height="90" /><span>Git</span></li>
          <li><Icon icon="logos:mysql" width="90" height="90" /><span>MySQL</span></li>
          <li><Icon icon="flat-color-icons:linux" width="90" height="90" /><span>Linux</span></li>
          <li><Icon icon="devicon:csharp" width="90" height="90" /><span>C#</span></li>                     
        </ul>
      </div>

      <section id="education" class="education">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="container">
        <h2 class="main-font" data-aos="fade-in">My <span class="text-blue main-font">Education</span></h2>

        <div class="education-card" data-aos="zoom-in">
            <div class="education-card-column">
              <div class="card-column-large">
                <h4 class="education-year">2021 - Current</h4>
                <h4>Unity University - Faculty of Engineering and Technology</h4>
                <p>GPA 3.3/4</p>
                <ul>
                  <li>Major in computer science</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
      {/* Add more content */}
      </section>
      <section id="education" class="contact">
      <div class="container">
        <h2 class="main-font" data-aos="fade-in">Contact <span class="text-blue main-font">Me</span></h2>

        <div class="education-card" data-aos="zoom-in">
            <div class="education-card-column">
              <div class="card-column-large">
                <h4 class="education-year">Email: melatgirmay20@gmail.com</h4>
                <h4>Instagram: melattgirmay</h4>
                <h4>Telegram: melattgirmay</h4>
              </div>
            </div>
        </div>
      </div>
      {/* Add more content */}
      </section>
      </div>
    </div>
  );
};

export default Home;
