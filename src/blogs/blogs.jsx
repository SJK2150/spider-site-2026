import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import Typography from '@material-ui/core/Typography';
import './blog.css';
// import data from './blogInfo.json'

// import { Link } from 'react-router-dom';
import { getAllBlogsDetails } from '../api/requests';
import FooterBar from '../Footer/footer-bottom';
import ErrorIcon from '@material-ui/icons/Error';
import CircularProgress from '@material-ui/core/CircularProgress';
export default function Blog() {
  const [data, setData] = useState([]);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const fetchData = async ()=>{
    setLoading(true)
    const res = await getAllBlogsDetails();
    if(res){
      if(res.status && res.status === 500){
        setError('serverError')
      }
      else{
        if(res.length === 0){
          setError('emptyData')
        }
        setData(res);
        
      }
      setLoading(false)
    }
    else{
      setError('cantConnect');
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setData((data) => {
  //       if (data.length === 0) {
  //         setLoading(false);
  //         setError('dataEmpty');
  //       }
  //       return data;
  //     });
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div id="blogs-page">
      <div>
        {/* <Typography variant="h1" style={{fontFamily:"Product Sans"}} className="text-center text-white" component="div" gutterBottom>
                    Blogs
                </Typography> */}
        <div className="display-3 blogs_header">BLOGS</div>
      </div>
      <Container fluid="md">
        <Container style={{ maxWidth: '1300px' }}>
          <Row className="my-3 blogs-display-cards">
            {loading === true ? (
              <div className="blog-error-div">
                <CircularProgress className="blog-error-icon" />
              </div>
            ) : (
              <>
                {error === '' ? (
                  data.map((ele, id) => {
                    if (id % 2 === 0) {
                      return (
                        <Col className="blog-col" key={id} md={5}>
                          <Card className="text-white blog_card" style={{ background: 'none' }}>
                            <Card.Img
                              className="blog_card_img"
                              variant="top"
                              src={ele.image_link}
                            />
                            <Card.Body className="blog_card_body">
                              <Card.Title
                                as="h3"
                                style={{ fontFamily: 'MontserratBold' }}
                                className="blog-title"
                              >
                                {ele.title}
                              </Card.Title>
                              <p className="blog-desc">{ele.summary}</p>
                              <div className="blog-card-btn-div">
                                <Button
                                  className="blog-card-btn"
                                  href={ele.article_link}
                                  target="_blank"
                                >
                                  Learn More
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                          <br />
                        </Col>
                      );
                    } else {
                      return (
                        <Col className="blog-col" key={id}  md={5}>
                          <Card className="text-white blog_card" style={{ background: 'none' }}>
                            <Card.Img
                              className="blog_card_img"
                              variant="top"
                              src={ele.image_link}
                            />
                            <Card.Body className="blog_card_body">
                              <Card.Title
                                as="h3"
                                style={{ fontFamily: 'MontserratBold' }}
                                className="blog-title"
                              >
                                {ele.title}
                              </Card.Title>
                              <p className="blog-desc">{ele.summary}</p>
                              <div className="blog-card-btn-div">
                                <Button
                                  className="blog-card-btn"
                                  href={ele.article_link}
                                  target="_blank"
                                >
                                  Learn More
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                          <br />
                        </Col>
                      );
                    }
                  })
                ) : (
                  <>
                    <div className="blog-error-div">
                      <ErrorIcon className="blog-error-icon" />
                      <div>
                        <h3>Error</h3>
                        {error === 'serverError' && <h5>Cannot connect to Server!</h5>}
                        {error === 'cantConnect' && <h5>Cannot connect to Server!</h5>}
                        {error === 'emptyData' && <h5>No data found!</h5>}
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </Row>
        </Container>
      </Container>
      <FooterBar />
    </div>
  );
}
