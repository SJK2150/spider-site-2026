import GitHub from '@material-ui/icons/GitHub';
import Language from '@material-ui/icons/Language';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MemData from './coreMembersData.json';
import './Members.css';
import { Link } from 'react-router-dom';
export default function Members() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(MemData);
  }, []);

  return (
    <div>
      <Container id="home-core-container" className="text-center">
        <h1 className="home-core-team-title">Core Members</h1>
        <Row>
          {data.map((members, index) => {
            return <MemberCard members={members} index={index} />;
          })}
        </Row>
      </Container>
      <Link to="/members">
        <button className="members-buttons" onClick={() => {}}>
          View All members
        </button>
      </Link>
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
            alt={members.Role}
            className="member_card_img"
            // height="360"
            image={members.Photo}
            title={members.Role}
          />
          <CardContent className="member_card_content">
            <Typography gutterBottom variant="h5" component="h2">
              {members.Name}
            </Typography>
            <Typography variant="p" color="textSecondary">
              {members.Role}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {isHover && (
        <div>
          <div
            style={{
              position: 'absolute',
              top:0,
              bottom:'25px',
              left:'15px',
              right:'15px'
            }}
            className='members-hoverBorder'
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
              {members.Name}
            </Typography>
            <Typography variant="p" style={{ color: 'white' }}>
              {members.Role}
            </Typography>
          </div>

          <div
            style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translateX(-50%)' }}
          >
            <CardActions>
              <IconButton className="link_btn" aria-label="personalSite" href={members.Website}>
                <Language className="member-links"></Language>
              </IconButton>
              <IconButton aria-label="linkedIn" href={members.LinkedIn} className="link_btn">
                <LinkedIn className="member-links"></LinkedIn>
              </IconButton>
              <IconButton aria-label="gitHubLink" href={members.Github} className="link_btn">
                <GitHub className="member-links"></GitHub>
              </IconButton>
            </CardActions>
          </div>
        </div>
      )}

      <br />
    </Col>
  );
};
