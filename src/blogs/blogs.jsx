import React, { useEffect, useState } from 'react';
import { Container, Row, Pagination, Col, Card, Button } from 'react-bootstrap';
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
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [numPage, setNumPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [index, setIndex] = useState(0);

  const fetchData = async () => {
    const res = await getAllBlogsDetails();
    if (res) {
      if (res.status && res.status === 500) {
        setError('serverError');
      } else {
        if (res.length === 0) {
          setError('emptyData');
        }
        setData(res);
      }
      setLoading(false);
    } else {
      setError('cantConnect');
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  useEffect(() => {
    setNumPage(data.length / 4);
    handleChangePage(1);
    if (data.length !== 0) setLoading(false);
  }, [data]);

  const handleChangePage = (num) => {
    if(num!==activePage){
      setLoading(true);
      setActivePage(num);
      let st = 0;
      if (num === 1) {
        st = 0;
      } else if (num === numPage) {
        st = data.length - 4;
      } else {
        st = (num - 1) * 4;
      }
      setIndex(st);
    }
  };

  const handlePrevPage = () => {
   
    if (activePage > 1) {
      setLoading(true);
      setActivePage((prev) => prev - 1);
      const oldId = index;
      if (oldId - 4 >= 0) {
        setIndex(oldId - 4);
      } else {
        setIndex(0);
      }
    }
  };

  const handleNextPage = () => {
    
    if (activePage < numPage) {
      setLoading(true);
      setActivePage((prev) => prev + 1);
      const oldId = index;
      if (oldId + 4 < data.length) {
        setIndex(oldId + 4);
      } else {
        setIndex(data.length - 4);
      }
    }
  };

  useEffect(() => {
    if (data.length !== 0) setLoading(false);
  }, [index]);

  return (
    <div id="blogs-page">
      <div>
        {/* <Typography variant="h1" style={{fontFamily:"Product Sans"}} className="text-center text-white" component="div" gutterBottom>
                    Blogs
                </Typography> */}
        <div className="display-3 blogs_header">BLOGS</div>
      </div>
      <Container fluid="md">
        <Container fluid>
          <Pagination>
            <Pagination.Prev onClick={handlePrevPage} />
            {Array.apply(null, Array(Math.ceil(numPage))).map((_, id) => {
              return (
                <Pagination.Item
                  key={id}
                  active={activePage === id + 1}
                  onClick={() => handleChangePage(id + 1)}
                >
                  {id + 1}
                </Pagination.Item>
              );
            })}
            <Pagination.Next onClick={handleNextPage} />
          </Pagination>

          <Row className="my-3 blogs-display-cards">
            {loading === true ? (
              <div className="blog-error-div">
                <CircularProgress className="blog-error-icon" />
              </div>
            ) : (
              <>
                {error === '' ? (
                  data.slice(index, index + 4).map((ele, id) => {
                    return (
                      <Col className="blog-col" key={id} md={5}>
                        <Card className="text-white blog_card" style={{ background: 'none' }}>
                          <Card.Img className="blog_card_img" variant="top" src={ele.image_link} />
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
