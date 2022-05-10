import React from 'react'
import { Image,Container,Button } from 'react-bootstrap'
import './Team.css'
export default function Team() {
    return (
        <Container className="text-center" id="team-container">
            <h1 className="home-team-title">Our Team</h1>
            <Image style={{borderRadius: 3}} src="images/team.jpg" fluid></Image>
            <hr />
            <button id="view-team-btn" onClick={() => {
                window.location.href = "/members";
            }}>View All Members</button>
            <hr />
        </Container>
    )
}
