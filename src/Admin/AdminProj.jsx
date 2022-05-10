import { TextareaAutosize } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Button, Form, Card } from 'react-bootstrap';
import { getAllProjectsDetails, getProjectDetailsById, addProject, deleteProject, updateProject } from '../api/requests';

function AdminProj() {
    const [projData, setProjData] = useState([]);
    const [edit, setEdit] = useState(false);
    const [currentProj,setCurrentProj] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, []);
    
    const submitEditForm = async(ele,name,img,desc,domain)=>{
        let data = ele;
        data.name = name;
        data.project_photo_url = img;
        data.desc = desc;
        data.domain = domain;
        const res = await updateProject(data,data.id);
        console.log(res);
    }

    const fetchData = async () => {
        const res = await getAllProjectsDetails();
        setProjData([...res]);
    }
    return (
        <>
            <div>
                <Row xs={1} md={2} className="g-4">
                    {!edit?(
                        <>
                            {projData.map((ele, id) => {
                                
                                return (
                                    <Col>
                                        <Card>
                                            <Card.Img variant="top" src={ele.project_photo_url} />
                                            <Card.Body style={{ color: "black" }}>
                                                <Card.Title>{ele.name}</Card.Title>
                                                <Card.Text>
                                                    <p>{ele.desc}</p>
                                                </Card.Text>
                                                <Card.Text>
                                                    <h4>{ele.domain}</h4>
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer className="text-muted">
                                                <Row>
                                                    <Col><Button variant='Warning'
                                                        onClick={() => {
                                                            setEdit(true);
                                                            setCurrentProj(ele);
                                                        }}
                                                    >Edit</Button></Col>
                                                    {/* <Col><Button></Button></Col> */}
                                                </Row>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </>
                    ):(
                        <>
                                <Form style={{width:"100%"}}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control id="edit-name" type="text" value={currentProj.name} placeholder="Enter title" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 d-flex flex-column">
                                        <Form.Label>Summary</Form.Label>
                                        <textarea name="" id="edit-desc" cols="30" rows="10">
                                            {currentProj.desc}
                                        </textarea>
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Image Link</Form.Label>
                                        <Form.Control type="text" id="edit-img" value={currentProj.project_photo_url} placeholder="Enter Image Link" />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Domain</Form.Label>
                                        <Form.Control id="edit-domain" type="text" value={currentProj.domain} placeholder="Enter domain" />
                                    </Form.Group>
                                    <div>
                                        <Button style={{marginRight:"10px"}} variant="primary" type="submit" onClick={()=>{
                                            let name = document.getElementById("edit-name").value;
                                            let desc = document.getElementById("edit-desc").innerHTML;
                                            let img = document.getElementById("edit-img").value;
                                            let domain = document.getElementById("edit-domain").value;

                                            submitEditForm(currentProj,name,img,desc,domain);
                                        }}>
                                            Submit
                                        </Button>
                                        <Button variant='danger' onClick={() => {
                                            setEdit(false) }}>Close</Button>
                                    </div>
                                </Form>
                        </>
                    )}
                </Row>
            </div>
        </>
    );
}

export default AdminProj;