
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../CoreMembers/Members.css';


export default function FacultyAdv() {
  const data = [
    {
      name:'Dr. S. Jaya Nirmala',
      photo_url:'/images/JAYA_NIRMALA.jpg',


    }
  ]
  return (
    <div>
      
      <Container id="home-core-container" className="text-center" style={{marginTop:'100px'}}>
        <h1 className="home-core-team-title">Faculty Advisor</h1>
        <Row>
          {data.map((members, index) => {
              return <MemberCard members={members} index={index} />;
          })} 
        </Row>
      </Container>
        
         
    </div>
  );
}

const MemberCard = ({ members, index }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Col
      md={4}
      key={index}
      style={{ margin: 'auto' }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <Card
        className="member_card"
        style={isHover ? { filter: 'blur(5px)', opacity: '50%', scale: '100%' } : {}}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            alt={members.role}
            className="member_card_img"
            // height="360"
            image={members.photo_url}
          />
          <CardContent className="member_card_content">
            <Typography gutterBottom variant="h5" component="h2" style={{ fontFamily: 'Montserrat' }}>
              {members.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" style={{ fontFamily: 'Montserrat' }}>
              {members.role}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {isHover && (
        <div>
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: '25px',
              left: '15px',
              right: '15px',
            }}
            className="members-hoverBorder"
          ></div>
          <div
            style={{
              position: 'absolute',
              top: '30%',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'white',
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ fontFamily: 'MontserratBold' }}
            >
              {members.name}
            </Typography>
          </div>

        </div>
      )}

      <br />
    </Col>
  );
};
