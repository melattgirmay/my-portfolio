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
      <br id="welcome"></br>
      <br></br>
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
              target="_blank" rel="noreferrer"><span class="socials-text">LinkedIn</span> <i class="fab fa-linkedin fa-2x"></i
            ></a></li>
            <li class="bg-dark-grey"> <a href="https://github.com/melattgirmay"
              target="_blank" rel="noreferrer"><span class="socials-text">GitHub</span><i class="fab fa-github fa-2x"></i
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
      <br></br>
        <h1 className="main-font">My<span className="text-blue main-font"> Projects</span></h1>
        <div className="project-row" data-aos="fade-up">
          <div className="project-left">
          </div>
          <div className="project-right">
            <h2>Android Notes App</h2>
            <ul className="tech-stack-list">
              <p className="text-grey"><b>Made with: </b></p>
              <li><Icon icon="logos:java" width="40" height="40" /></li>
              <li><Icon icon="carbon:xml" width="40" height="40" /></li>
              <li><Icon icon="devicon:androidstudio-wordmark" width="40" height="40" /></li>
            </ul>
            <p>The Android Notes App is a versatile mobile application designed to streamline and enhance your note-taking experience on Android devices. This intuitive app allows users to create, edit, and manage notes effortlessly. Whether you're jotting down quick thoughts, keeping track of important information, or organizing your ideas, this app provides a user-friendly and efficient solution.</p>
            <div className="project-links">
              <a href="https://github.com/melattgirmay/Notes-Manager-Android-App.git" className="btn-blue-outline btn-small mx-1" target="_blank" rel="noreferrer"> <i className="fab fa-github">
                </i> Code</a>
            </div>
          </div>
        </div>

        <div className="project-row" data-aos="fade-up">
          <div className="project-right">
            <h2>Flask to-do App</h2>
            <ul className="tech-stack-list">
              <p className="text-grey"><b>Made with: </b></p>
              <li><Icon icon="devicon:flask" width="40" height="40" /></li>
              <li><Icon icon="devicon:mongodb-wordmark" width="40" height="40" /></li>
              <li><Icon icon="logos:css-3" width="40" height="40" /></li>
            </ul>
            <div className="project-image">
              <img src="/images/Screenshot (1292).png" alt="Project" width="200" height="200"/>
            </div>
            <p>This to-do app is a sleek and user-friendly web-based to-do application designed to streamline your task management experience. With its minimalist yet visually appealing interface, Taksed makes organizing your tasks a breeze.</p>
            <div className="project-links">
              <a href="https://github.com/melattgirmay/Tasked.git" className="btn-blue-outline btn-small mx-1" target="_blank" rel="noreferrer"> <i className="fab fa-github">
                </i> Code</a>
            </div>
          </div>
        </div>

        <div className="project-row" data-aos="fade-up">
          <div className="project-left">
          </div>
          <div className="project-right">
            <h2>Task Manager Console App</h2>
            <ul className="tech-stack-list">
              <p className="text-grey"><b>Made with: </b></p>
              <li><Icon icon="devicon:csharp" width="40" height="40" /></li>
            </ul>
            <p>Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task's dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.</p>
            <div className="project-links">
              <a href="https://github.com/melattgirmay/Task-Manager-Console-App.git" className="btn-blue-outline btn-small" target="_blank" rel="noreferrer"> <i className="fab fa-github"></i
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

        <div class="contact-card" data-aos="zoom-in">
            <div class="conatct-card-column">
              <div class="card-column-large">
                <h4 >Email: melatgirmay20@gmail.com</h4>
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
