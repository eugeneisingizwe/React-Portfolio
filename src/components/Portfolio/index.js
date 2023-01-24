import React, {useState} from "react";
import portfolioData from "../../utils/portfolioData";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Portfolios() {
    const [projects, setPorjects] = useState(false);
    const [projectData, setProjectData] = useState({});

    function createPorjects(data){
        return(
            <Modal
            show={projects}
            onHide={() => setPorjects(false)}
            size="lg"
            arial-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {data.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{data.summary}</p>
                <Image src={data.image} style={{width: "200px"}} />
            </Modal.Body>
            <a 
            id="portfolio_model_link"
            href={data.link}
            target="_blank"
            rel="noreferrer"
            > 
            Link to project site!

            </a>

            <a
            id="portfolio_model_link"
            href={data.github}
            target="_blank"
            ref="noreferrer"

            
            >
                link to github!
            </a>

            <Modal.Footer>
                <div>Technologies Used:</div>
                <p style={{fontSize: "0.7rem", marginRight: "auto"}}>{data.tech}</p>
                <Button onClick={() => setPorjects(false)}>Close</Button>
            </Modal.Footer>
            </Modal>
            
        );
    }

    const mapped = portfolioData.map((e, idx) => {
        return(
            <Card
            key={idx}
            id="portfolio_card_container"
            style ={{
                width: "650px",
                height: "500px",
                margin: 5,
                padding: 5,
            }}
            >
            <Image
            className="portfolio_image"
            onClick={() => {
                setProjectData({
                    image: e.image,
                    github: e.github,
                    link: e.link,
                    title: e.title,
                    summary: e.summary,
                    tech: e.tech,
                });
                setPorjects(false);
            }}
           src={e.image}
           />
           <div className="porfolio_click_info">#12535;</div>
           {createPorjects(projectData)}
           </Card>
        );
    });
    
    return (
        <div className="portfolio_main_container" id="portfolio">
            <h1>PORTFOLIO</h1>
            <Container fluid="lg" style={{padding: "2rem 0"}}>
                <Row>{mapped}</Row>
            </Container>
        </div>
    );
}

export default Portfolios;

