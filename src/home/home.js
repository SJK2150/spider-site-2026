import React from 'react';
import Desc from './desc/desc';
import './home.css';
import Animation from './Animation/Animation';
import Team from './Team/Team';
import Members from './Team/CoreMembers/Members';
import Footer from '../Footer/footer-overall';
import SpiderLogo from '../assets/SpiderLogo.svg';
function Home() {
  return (
    <div id="home-page" style={{ overflowX: 'hidden' }}>
      {/* <img src={SpiderLogo} className="home-spiderLogo-img" /> */}
      <Animation />
      <Desc />
      {/* <Team></Team> */}
      <Members></Members>
      <Footer></Footer>
    </div>
  );
}

export default Home;
