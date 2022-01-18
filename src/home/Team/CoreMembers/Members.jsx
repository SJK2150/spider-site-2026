import GitHub from '@material-ui/icons/GitHub';
import Language from '@material-ui/icons/Language';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import React, { useEffect, useState } from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'
import MemData from './coreMembersData.json';
import './Members.css';
export default function Members() {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(MemData);
    }, [])
    return (
        <div>
            <Container id="home-core-container" className="text-center">
               <h1 className="home-core-team-title">Core Members</h1>
               <Row>
                    {data.map((members, index) => {
                        return (
                            <Col md md={4} key={index} style={{margin:"auto"}}>
                                <Card className="member_card" style={{ maxWidth: 300 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt={members.Role}
                                            height="270"
                                            image={members.Photo}
                                            title={members.Role}
                                        />
                                        <CardContent className="member_card_content">
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {members.Name}
                                            </Typography>
                                            <Typography variant="h6" color="textSecondary">
                                                {members.Role}
                                            </Typography>
                                        </CardContent>

                                        <CardActions
                                            style={{ marginLeft: "20%" }}
                                        >
                                            <IconButton
                                                className="link_btn"
                                                aria-label="personalSite"
                                                href={members.Website}
                                            >
                                                <Language></Language>
                                            </IconButton>
                                            <IconButton aria-label="linkedIn" href={members.LinkedIn} className="link_btn">
                                                <LinkedIn></LinkedIn>
                                            </IconButton>
                                            <IconButton aria-label="gitHubLink" href={members.Github} className="link_btn">
                                                <GitHub></GitHub>
                                            </IconButton>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>
                                <br />
                            </Col>
                        )
                    })}
               </Row>
            </Container> 
        </div>
    )
}
