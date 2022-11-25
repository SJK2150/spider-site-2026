import React , {useEffect} from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { motion, AnimateSharedLayout } from 'framer-motion';
import './Achievements.css';
import Modal from '../Modal/Modal';
import FooterBar from '../Footer/footer-bottom';
import ErrorIcon from '@material-ui/icons/Error';
import CircularProgress from '@material-ui/core/CircularProgress';

// import data from './data.json';

import Toolbar from '../DomainToolbar/Toolbar';
import { getAllAchievementDetails } from '../api/requests';
export default function Achievements() {
  const [modalShow, setModalShow] = React.useState(false);
  const [props, setProps] = React.useState({});
  const [data,setData] = React.useState([]);
  const [domain, setDomain] = React.useState([].fill(false, 0, 4));
  const [modalCondn, setModalCondn] = React.useState([].fill(false, 0, 4));
  const [displayAll, setDisplayAll] = React.useState(true);
  const [error, setError] = React.useState(false)
  const [domainMap, setDomainMap] = React.useState({
    "TRONIX": 0,
    "WEBDEV": 1,
    "ALGOS": 2,
    "APPDEV": 3
  });
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 4; i++) {
      arr.push(false);
    }
    setDomain([...arr]);
    fetchData();
  }, []);
  useEffect(() => {
    // console.log(domain);
    let val = domain[0];
    for (let i = 1; i < domain.length; i++) {
      val = val || domain[i];
    }
    if (val) {
      setDisplayAll(false);
    } else {
      setDisplayAll(true);
    }
  }, [domain])

  const [loading, setLoading] = React.useState(false)
  const fetchData = async ()=>{
    setLoading(true)
    const res = await getAllAchievementDetails();
    console.log(res);
    if(res){
      if(res.status && res.status == 500){
        setError(true)
      }
      else{
        setData(res);
      }
      setLoading(false)
    }
    
    
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(data=>{
        if(data.length == 0){
          setLoading(false)
          setError(true)
        }
        return data
      })
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const DisplayContent = ({ele,id})=>{
    if (id % 2 == 0) {
      return (
        <Col className="my-3" sm={5} >
          <AnimateSharedLayout>
            {modalShow && modalCondn[id] ? (
              createModal()
            ) : (
              <motion.div className="motion-card" layoutId={`expandable-card-${id + 1}`}>
                <Card
                  className="text-white achv-card"
                  onClick={() => {
                          modalDisplay(
                            ele.name_of_event,
                            ele.Members,
                            ele.desc,
                            ele.achievement_photo_url,
                            `expandable-card-${id + 1}`,
                            `${id + 1}`,
                          );
                        }}
                >
                  <div className="achv-image-bg">
                    <Card.Img
                    className="achv-image"
                    variant="top"
                    src={ele.achievement_photo_url}
                  />
                  </div>
                  
                  <Card.Body className="text-center achv-body">
                    <motion.div>
                      <Card.Title className="achv-title">{ele.name_of_event}</Card.Title>
                    </motion.div>
                    <div className='achv-card-desc'>
                      {ele.desc}
                    </div>
                    <span className='achv-card-learn-more' >{"Learn more =>"}</span>
                    {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                      <button
                        className='achv-card-button'
                        onClick={() => {
                          modalDisplay(
                            ele.name_of_event,
                            ele.Members,
                            ele.desc,
                            ele.achievement_photo_url,
                            `expandable-card-${id + 1}`,
                            `${id + 1}`,
                          );
                        }}
                      >
                        Learn More
                      </button>
                    </motion.div> */}
                  </Card.Body>
                </Card>
              </motion.div>
            )}
          </AnimateSharedLayout>
        </Col>
      )
    } else {
      return (
        <Col className="my-3" sm={5}>
          <AnimateSharedLayout>
            {modalShow && modalCondn[id] ? (
              createModal()
            ) : (
              <motion.div className="motion-card" layoutId={`expandable-card-${id + 1}`}>
                <Card
                  style={{ background: '#141C3A' }}
                  className="text-white achv-card"
                  onClick={() => {
                          modalDisplay(
                            ele.name_of_event,
                            ele.Members,
                            ele.desc,
                            ele.achievement_photo_url,
                            `expandable-card-${id + 1}`,
                            `${id + 1}`,
                          );
                        }}
                >
                  <div className="achv-image-bg">
                    <Card.Img
                    className="achv-image"
                    variant="top"
                    src={ele.achievement_photo_url}
                  />
                  </div>
                  <Card.Body className="text-center achv-body">
                    <motion.div>
                      <Card.Title className="achv-title">{ele.name_of_event}</Card.Title>
                    </motion.div>
                    <div className='achv-card-desc'>
                      {ele.desc}
                    </div>
                    <span className='achv-card-learn-more'>{"Learn more =>"}</span>
                    {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                      <button
                        className='achv-card-button'
                        onClick={() => {
                          modalDisplay(
                            ele.name_of_event,
                            ele.Members,
                            ele.desc,
                            ele.achievement_photo_url,
                            `expandable-card-${id + 1}`,
                            `${id + 1}`,
                          );
                        }}
                      >
                        Learn More
                      </button>
                    </motion.div> */}
                  </Card.Body>
                </Card>
              </motion.div>
            )}
          </AnimateSharedLayout>
        </Col>
      )
    }
  }

  const modalDisplay = (title, members, info, image, layoutId, key) => {
    let mem = members;
    let newMemberList = [];
    for (let i = 0; i < mem.length; i++) {
      newMemberList.push([mem[i].name, mem[i].photo_url]);
    }
    setProps({
      title: title,
      members: newMemberList,
      info: info,
      image: image,
      layoutId: layoutId,
    });
    setModalShow(true);
    let newArr = [...modalCondn];
    newArr.fill(false, 0, 4);
    newArr[Number(key) - 1] = true;
    setModalCondn(newArr);
  };
  const createModal = () => {
    return <Modal {...props} show={modalShow} onHide={() => setModalShow(false)}></Modal>;
  };
  return (
    <div id="achv-page">
      <div className="achv-intro-section">
        {/* <Image
          className="achv_banner"
          src="https://images.unsplash.com/photo-1488229297570-58520851e868?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
          fluid
        ></Image> */}
        <div className="display-3 achv_banner_title">ACHIEVEMENTS</div>
      </div>
      {data.length>0 &&
      <div className="domains">
      <Toolbar setDomain={setDomain} domain={domain}></Toolbar>
      </div>
      }
      <Container fluid="md">
        <Container fluid>
          <Row className='achv-display-cards'>
          {loading==true? <div className='achv-error-div' ><CircularProgress className='achv-error-icon'/></div>:<>
          {error==false ? displayAll 
              ? data.map((ele, id) => {
                  return <DisplayContent ele={ele} id={id} />
                })
              : data
                  .filter((e) => {
                    if(e.domain == 'TRONIX'){
                      return domain[0];
                    }
                    if(e.domain == 'WEBDEV' || e.domain == 'ALGOS' || e.domain == 'APPDEV'){
                      return domain[1] ;
                    }
                  })
                  .map((ele, id) => {
                    return <DisplayContent ele={ele} id={id} />
                  }) : (
                    <> 
                    <div className='achv-error-div'>
                      <ErrorIcon className='achv-error-icon'/>
                      <div>
                        <h3 >Error</h3>
                        <h5 >Cannot connect to Server!</h5>
                      </div>
                    </div>
                    </>
                  )}
            </>}
          </Row>
        </Container>
      </Container>
      <FooterBar />
    </div>
  );
}
