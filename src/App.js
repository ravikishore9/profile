import React from 'react';
import './App.css';
import Profile from './Profile';
import Profile1 from './Profile1';
import Data from './data/data.json';
import {BrowserRouter, Route, Link} from'react-router-dom';

function App(){
  var info=Data.profiles;
  return(
    <section>
    <BrowserRouter>
    <header className="header">
    {info.map((k,l)=>(
      <Link to={{pathname:"/",data:{id:l}}} key={l}>{"Home"}</Link>
      ))}<br />

    {info.map((k,l)=>(
      <Link to={{pathname:"/profile",data:{id:l}}} key={l}>{"profile"}</Link>
      ))}<br />

      {info.map((k,l)=>(
      <Link to={{pathname:"/profile1",data:{id:l}}} key={l}>{"profile1"}</Link>
      ))}

    </header>

    <Route exact path="/profile" component={Profile}/>
    <Route exact path="/profile1" component={Profile1}/>
    <Route exact path="/" component={Home} />
    <Route exact path="/" component={Home1} />
    </BrowserRouter>
    </section>
    )
  }
  let Home=()=>{
    var info=Data.profiles;
    return (
    <section className="parent">
    {info.map((i,index)=>(
      <div className="card" key={index}>
      <div className="card-top">
      <h2>{i.basicInformation.Name}</h2><br />
      <h5><em>{i.basicInformation.Role}</em></h5>
      </div>
      <div className="card-bottom">
      <a herf={"mailto:"+i.basicInformation.email}>{i.basicInformation.email}</a><br />
      <a herf={"tell:"+i.basicInformation.mobile}>{i.basicInformation.mobile}</a><br />
      <div className="card3"><Link to={{pathname:"/profile",data:{id:index}}}>Click Here for Educational Qualifications </Link></div><hr />
      <div className="card3"><Link to={{pathname:"/profile1",data:{id:index}}}>Click Here for Technical Skills </Link></div><hr />
      </div>
      </div>
      )
      )}
      <div className="card2">
      <div className="card-bottom">
      <h2>Experience</h2>
      </div>
      <ul>
      <p>Worked as a Trainer Cum Developer from Oct 2017. I had learnt and Monitored the students in some engineering colleges throughout Andhra Pradesh to enhance skills in Python Programming Language,Web designing and Web Framework Django, Unity gamining engine,Build Box,MIT,Google Producity Tools etc...
</p>
<p>At Present Working as a Technical Skill Trainer to enhance the skills to students based on Problem solving skills by using Python. Training the students to build their projects in Python by using Django framework and DataScience.</p></ul>
      </div>
      </section>
      )
    }
    let Home1=()=>{
    return (
    <section >
    <footer className="footer">
    <h2>Thank you</h2>
    </footer>
    </section>
    )
  }


export default App;