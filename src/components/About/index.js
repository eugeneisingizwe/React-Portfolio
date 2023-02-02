import React from "react";
import assets from "../../assets/images/headshot 1.JPG"

function About() {
  
    return (
        <section className="about-content">
        {/* <h1 class="my-name">Eugene Isingizwe</h1> */}
        <div>
          
        {/* <img src={image} alt="headshot "/> */}
        <img class="mb-5" id="headshot" src={assets} alt="eugene isingize" />
        </div>

        <div class="verticalLine">
         
        </div>

        <div class="about-me">
            <p>I am originally from Tanzania and moved to the United States in 2007. I am spent majority of that time in 
                the Denver Mtetro  Area. Junior high, I  attaended Denver Public School and for college, I attaended 
                Metropolitan State University of Denver where I studied Finanace and business management. I graduated 2019 and
                started my career with a local bank as a loan officer originating consumer and commerical deals. After three years I left the bank and 
                joined Locktan Campanies an insurence consultant firm as a Financial Analyst in their Benefit department. 
             
             </p>
             <p>
                My interest for web development began when I was in high School. I took a design class where I learned the 
                fundamentals such as HTML, CSS, and basic JavaScript concepts. As time progressed I would take free online coding courses, watcing endless 
                videos, and built small side projects. I knew wanted to do web development as a career but I didn't see a way of doing it without a four year
                degree. Throughtout researching and utilizing free online resources, I stumble upon Denver University coding bootcamp. I decided to join the part time full stack web development 
                in August of 2022. Throughtout the program I built front-end, back-end, and full stack projects using application such HTML, CSS, JavaScript, 
                Express, Node, React, and other frameworks.  

            </p>

            <p>
                I've completed the program and I am now a full stack developer. When navigating through this portfolio page, please feel 
                free to checkout my previous projects, fill out the contact form, and see my resume to see if I am a good candiate.   
            </p>
        </div>
    </section>
    );
  }
  
  export default About;
