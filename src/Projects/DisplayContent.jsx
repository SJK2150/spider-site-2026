import React from 'react'
import { Col, Card } from 'react-bootstrap'

function DisplayContent({ ele, id, setModalShow, setCurrentData }) {
    return (
        <Col sm={5} key={id} className="proj-col">
            <Card
                className="text-white project-card"
                onClick={() => {
                    setModalShow(true);
                    setCurrentData(ele);
                }}
            >
                <div className="proj-image-bg">
                    <Card.Img className="project-image" variant="top" src={ele?.project_photo_url} />
                </div>
                <Card.Body className="text-center project-body">
                    <Card.Title className="project-title">{ele?.name}</Card.Title>
                    <div className="project-card-desc">{ele?.desc}</div>
                    <span className="project-card-learn-more">{'Learn more =>'}</span>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default DisplayContent