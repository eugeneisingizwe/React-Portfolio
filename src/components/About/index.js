import React from "react";
// import image from "../../assets/images/headshot";

function About() {
  
    return (
        <section className="content">
        <h1 class="title">Eugene Isingizwe</h1>
        <div>
        <hr></hr>
        {/* <img src={image} alt="headshot "/> */}
        <image class="mb-5" id="avatar" src="../../assets/images/headshot 1.JPG" />
        </div>

        <div class="about-me">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias doloribus sint officiis. Cumque
                facilis nisi, culpa maiores non officiis. Tempora commodi cum aut non sit molestias? Excepturi
                odit natus corporis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id delectus
                impedit quo hic rerum! Quis maiores obcaecati, vitae deserunt quidem veritatis aut vel
                accusantium amet ipsa assumenda illo. Dolorum, quisquam?Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Asperiores soluta, placeat maiores voluptas nobis nam voluptates temporibus
                odit dolores exercitationem fugit quasi corrupti impedit suscipit sint dicta praesentium
                recusandae dolore.
            </p>
        </div>
    </section>
    );
  }
  
  export default About;