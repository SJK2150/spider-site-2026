import { TextareaAutosize } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Button, Form } from 'react-bootstrap';
import { getAllBlogsDetails, getBlogDetailsById, addBlog } from '../api/requests';

function EditForm(props) {
    const {title,image_link,summary,article_link} = props;
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} placeholder="Enter title" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Summary</Form.Label>
                <TextareaAutosize defaultValue={summary}></TextareaAutosize>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Image Link</Form.Label>
                <Form.Control type="text" value={image_link} placeholder="Enter Image Link" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Article Link</Form.Label>
                <Form.Control type="text" value={article_link} placeholder="Enter Article Link" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

function AdminBlog() {
    const [blogData, setBlogData] = useState([]);
    const [edit,setEdit] = useState(false);
    useEffect(()=>{
        setBlogData(fetchData());
    },[]);

    const fetchData = async()=>{
        const res = await getAllBlogsDetails();
        return res;
    }

    return ( 
        <>
            <div>
                <Row xs={1} md={2} className="g-4">
                 {blogData.map((ele,id)=>{
                     <Col>
                         <Card>
                             <Card.Img variant="top" src={ele.image_link} />
                             <Card.Body>
                                 <Card.Title>{ele.title}</Card.Title>
                                 <Card.Text>
                                     <p>{ele.summary}</p>
                                     <a href={ele.article_link} className="btn btn-primary">See Article</a>
                                 </Card.Text>
                             </Card.Body>
                            <Card.Footer className="text-muted">
                                <Row>
                                    <Col><Button variant='Warning'
                                    >Edit</Button></Col>
                                    {/* <Col><Button></Button></Col> */}
                                </Row>
                            </Card.Footer>
                         </Card>
                     </Col>
                 })}
                </Row>
            </div>
        </> 
    );
}

export default AdminBlog;