import React from 'react';
import Desc from './desc/desc'
import './home.css'
import Animation from './Animation/Animation';
import Team from './Team/Team';
import Members from './Team/CoreMembers/Members';
import Footer from '../Footer/footer-overall';
function Home() {
	return (
		<div id="home-page" style={{ overflowX: "hidden" }}>
			<Animation />
			<Desc />
			<hr></hr>
			{/* <Team></Team> */}
			<Members></Members>
			<Footer></Footer>
		</div>
	);
}

export default Home;