import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Typography from "@material-ui/core/Typography";
import './blog.css';
import data from './blogInfo.json'
import { Link } from 'react-router-dom';
export default function Blog() {
    return (
        <div id="blogs-page">
            <Container>
                {/* <Typography variant="h1" style={{fontFamily:"Product Sans"}} className="text-center text-white" component="div" gutterBottom>
                    Blogs
                </Typography> */}
                <div className="display-3 blogs_header" style={{ fontFamily: "Product Sans" }}>Blogs</div>
            </Container>
            <Container fluid="md">
                <Container style={{maxWidth:"1300px"}}>
                    <Row className="my-3">
                        {data.map((ele, id) => {
                            if (id % 2 == 0) {
                                return (
                                    <Col className="blog-col" md={5}>
                                        <Card className="text-white blog_card" style={{ background: '#141C3A' }}>
                                            <Card.Img className="blog_card_img" variant="top" src={ele.image_link} />
                                            <Card.Body className="blog_card_body">
                                                <Card.Title as="h3">{ele.title}</Card.Title>
                                                <Card.Text as="h6">
                                                    {ele.summary}
                                                </Card.Text>
                                                <Button variant="primary" href={ele.article_link} target="_blank">
                                                    Learn More
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                        <br />
                                    </Col>
                                )
                            }else{
                                return (
                                    <Col className="blog-col" md={7}>
                                        <Card className="text-white blog_card" style={{ background: '#141C3A' }}>
                                            <Card.Img className="blog_card_img" variant="top" src={ele.image_link} />
                                            <Card.Body className="blog_card_body">
                                                <Card.Title as="h3">{ele.title}</Card.Title>
                                                <Card.Text as="h6">
                                                    {ele.summary}
                                                </Card.Text>
                                                <Button variant="primary" href={ele.article_link}>
                                                    Learn More
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                        <br />
                                    </Col>
                                )
                            }
                        })}
                    </Row>
                </Container>
            </Container>
        </div>
    )
}
