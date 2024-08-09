import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import logo from './assets/Designer.jpeg'
import Xp from './components/Xp'
import Project from './components/Project'
import Headshot from './assets/Headshot.jpeg'
import backdrop from './assets/background.png'
import Skill from './components/skills/Skill'



function App() {
  
  return(
    <>
    <body>
      <div className="navbar">
        <div>
        <ul>
          {/* <li><img src={logo} className='logo'></img></li> */}
          <li><a href="#About-Me-Content">About Me</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Experience-content">Experience</a></li>
          <li><a href="#Projects-content">Project</a></li>
        </ul>
        </div>
        <div> 
          <ul>
            <li><a href="https://www.linkedin.com/in/sid-karpe-03589a216/">Linkedin</a></li>
            <li><a href="https://google.com">Resume</a></li>
            <li><a href="https://github.com/SidKarpe1">Github</a></li>
          </ul>
        </div>
      </div>
      <h1 className="headliner">About Me</h1>
      <div className="About-Me-Content" id="About-Me-Content">
        <div>
          <h1> Sid Karpe</h1>
          <h3> Third year Computer Science student at Penn State University</h3>
          <p> Interests: Machine Learning, Backend Development</p>
          <p>Hobbies: piano, photography, watching TV, video games, basketball</p>
        </div>
        <img src={Headshot} className='profile'></img>
        <div className="Skills" id="Skills">
        <h1 className="headliner">Skills:</h1>
        <Skill/>
        </div>
        


        
      </div>
      <h1 className="headliner">Experiences</h1>
        <div className="Experience-content" id="Experience-content">
        <Xp 
          title="Artemis Care" 
          position="Machine Learning Intern" 
          items={["Summer 2024", "Developed NLP model", "Technologies: Voiceflow, openAI API, Airtable", "Skills: problem solving, team work, independent work, time management, working under pressure, achieving deadlines"]}/>
          <Xp 
          title="Nittany AI" 
          position="Club Member" 
          items={["Fall 2023", "Learned classification ML such as linear regression and random forest", "Technologies: SciKit-Learn, Numpy, Pandas", "Skills: Decision making, networking, problem-solving, teamwork, leadership"]}/>
          <Xp 
          title="Downingtown Area Recreation Consortium" 
          position="Camp Couselor" 
          items={["Summer 2023", "Created and Led educational and entertaining activities for children in groups of 15-20", "Skills, leadership, time management, communication"]}/>
          <Xp 
          title="Marshalls" 
          position="Sales associate" 
          items={["Winter 2022 - Spring 2022", "Assisted customers with product selection, ensuring their needs and preferences were met, leading to increased customer satisfaction", "Skills: communication, displaying product knowledge, problem solving, attention to detail"]}/>
          <Xp 
          title="Sugar'n'Spice Cakery" 
          position="Sales assistant" 
          items={["Winter 2015 - Summer 2020", "Assisted in sales at farmers markets", "Recommended products to customers at farmers markets", "Skills: Leadership, communication, selling, decision making"]}/>
        </div>
      
      <h1 className="headliner">Projects</h1>
        <div className="Projects-content" id="Projects-content">
          <Project 
          title="Course Schedule Builder" 
          link=""
          language="Java" 
          technologies={["Java Swing", "NetBeans"]}
          items={[" Course Schedule Builder for students to register and drop  classes, teachers to and manage classes","Used technologies such as JavaSwing and JavaSQL to design and develop GUI and functionality"]}
          />
          <Project 
          title="Salary Analysis" 
          language="Python"
          link ="https://github.com/SidKarpe1/Salary-Analysis"
          technologies={["Numpy", "Pandas", "Jupiter Notebook"]}
          items={["Analysis of maximizing salary in Data Science field based on position, location, working hours", "Managing and cleaning thousands of rows of data to allow for accurate inferences and outcomes","Implemented technologies such as Matplotlib, Numpy and Pandas to manage and analyze data"]}
          />
          <Project 
          title="Arithemic Calculator"
          language="Python" 
          link="https://github.com/SidKarpe1/Calculator"
          technologies={["Visual Studio Code", "Git"]} 
          items={["Designed an arithmetic calculator capable of converting an infix equation to its postfix notation","Utilized stacks and linked lists to efficiently handle and process mathematical expressions", "Optimized performance for scalability and minimal latency in handling complex expressions."]}
          />
          <Project 
          title="Library App" 
          language="Javascript"
          technologies={["Visual Studio Code", "HTML", "CSS"]}
          link="https://github.com/SidKarpe1/libraryApp"
          items={["Frontend Library that stores books", "Contains functionality to search through books with title, add and delete books", "Uses localstorage to save entries of books", "Holds all properties of books including title, author, info, pages and reading status"]}
          />
          <Project
          title="Credit Card Fraud"
          // language="Python"
          // technologies={["Visual Studio Code", "SciKit-Learn", "Numpy", "Pandas"]}
          items={["Machine Learning project in progress"]}
          />
          <Project
          title="Cookbook"
          items={["Full stack app in progress"]}/>
        </div>
      <div>
      </div>
    </body>
    </>
  )
}

export default App;

