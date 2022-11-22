import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Typography from "@material-ui/core/Typography";
import './blog.css';
// import data from './blogInfo.json'

import { Link } from 'react-router-dom';
import { getAllBlogsDetails } from '../api/requests';
import FooterBar from '../Footer/footer-bottom';
export default function Blog() {
    const [data,setData] = useState([]);
    const fetchData = async ()=>{
        const res = await getAllBlogsDetails();
        console.log(res);
        setData(res);
    }
    useEffect(() => {
      fetchData()
    }, [])
    
    return (
        <div id="blogs-page">
            <div>
                {/* <Typography variant="h1" style={{fontFamily:"Product Sans"}} className="text-center text-white" component="div" gutterBottom>
                    Blogs
                </Typography> */}
                <div className="display-3 blogs_header" style={{ fontFamily: "Product Sans" }}>BLOGS</div>
            </div>
            <Container fluid="md">
                <Container style={{maxWidth:"1300px"}}>
                    <Row className="my-3 blogs-display-cards">
                        {data.map((ele, id) => {
                            if (id % 2 == 0) {
                                return (
                                    <Col className="blog-col" md={5}>
                                        <Card className="text-white blog_card"  style={{background:'none'}} >
                                            <Card.Img className="blog_card_img" variant="top" src={ele.image_link} />
                                            <Card.Body className="blog_card_body">
                                                <Card.Title as="h3" style={{ fontFamily: 'MontserratBold'}}>{ele.title}</Card.Title>
                                                <Card.Text as="h6">
                                                    {ele.summary}
                                                </Card.Text>
                                                <div className='blog-card-btn-div'>
                                                    <Button className='blog-card-btn' href={ele.article_link} target="_blank">
                                                        Learn More
                                                    </Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        <br />
                                    </Col>
                                )
                            }else{
                                return (
                                    <Col className="blog-col" md={5}>
                                        <Card className="text-white blog_card" style={{background:'none'}}>
                                            <Card.Img className="blog_card_img" variant="top" src={ele.image_link} />
                                            <Card.Body className="blog_card_body">
                                                <Card.Title as="h3" style={{ fontFamily: 'MontserratBold' }}>{ele.title}</Card.Title>
                                                <Card.Text as="h6">
                                                    {ele.summary}
                                                </Card.Text>
                                                <div className='blog-card-btn-div'>
                                                    <Button className='blog-card-btn' href={ele.article_link} target="_blank">
                                                        Learn More
                                                    </Button>
                                                </div>
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
            <FooterBar />
        </div>
    )
}
