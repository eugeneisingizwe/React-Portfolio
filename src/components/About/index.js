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
            <p>I originally hail from Tanzania and made my move to the United States back in 2007. Since then, 
                I've primarily resided in the Denver Metro Area. During my formative years, I attended junior high 
                within the Denver Public School system. For my higher education, I enrolled at Metropolitan State University of Denver, 
                where I pursued studies in Finance and Business Management, culminating in my graduation in 2019.
                Upon entering the professional realm, I embarked on my career journey with a local bank, 
                where I served as a loan officer, specializing in originating consumer and commercial deals.
                 After dedicating three years to this role, I transitioned to Locktan Companies, a notable insurance 
                 consulting firm. Here, I assumed the position of Financial Analyst within their Benefit department, where I contribute 
                 my expertise and insights.
        
             </p>

             <p>
              My journey into web development began during my high school years. It all started with a design class where I 
              was introduced to the foundational elements of HTML, CSS, and basic JavaScript concepts. Over time, my interest 
            in this field grew, leading me to explore further through free online coding courses, countless tutorial videos, and the creation of various small side projects.
            Despite my passion for web development, I initially felt constrained by the belief that a four-year degree was necessary
             to pursue it as a career. However, through diligent research and the utilization of free online resources, I stumbled upon the Denver University coding bootcamp.
            In August of 2022, I made the decision to enroll in the part-time full stack web development program. Throughout the 
            duration of the program, I delved into a wide array of technologies, including HTML, CSS, JavaScript, Express, Node, React, 
            and other frameworks. I honed my skills by working on diverse projects, ranging from front-end designs to back-end functionalities, 
            ultimately gaining proficiency in both front-end and full-stack development.
            </p>

            <p>
               
            Now a certified full stack developer, I invite you to explore my portfolio page with ease. Take a moment to peruse 
            my previous projects, delve into the contact form to reach out directly, and review my resume to assess if I align with
             your candidate requirements. Feel free to navigate through the various sections to gain insights into my skills, experience, and expertise. 
            </p>
        </div>
    </section>
    );
  }
  
  export default About;
