import React from 'react'
import { Col, Card } from 'react-bootstrap'

function DisplayContent({ ele, id, setModalShow, setCurrentData }) {
    return (
        <Col sm={5} key={id} className="proj-col">
            <Card
                className="text-white achv-card"
                onClick={() => {
                    setModalShow(true);
                    setCurrentData(ele);
                }}
            >
                {/* <div className="achv-image-bg">
                    <Card.Img className="achv-image" variant="top" src={ele?.achievement_photo_url} />
                </div> */}
                <Card.Body className="text-center achv-body">
                    <Card.Title className="achv-title">{ele?.name_of_event}</Card.Title>
                    <div className="achv-card-desc">{ele?.desc}</div>
                    <span className="achv-card-learn-more">{'Learn more =>'}</span>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default DisplayContent