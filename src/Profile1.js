import React from'react';
import './App.css';
import Data from './data/data.json';

 class Profile1 extends React.Component{
 	
 	render(){
 		var indexValue=this.props.location.data.id;
 		var specificProfile=Data.profiles[indexValue];
 		return (
 			<section className="parent">
 			<div className="card">
 			<div className="card-top">
 			<h3>{specificProfile.basicInformation.Name}</h3>
 			<em>{specificProfile.basicInformation.email}</em>
 			</div>
 			<div className="card-bottom">
 			<a herf={"mailto:"+specificProfile.basicInformation.email}>
 			{specificProfile.basicInformation.email}</a><br />
 			<a herf={"tel:"+specificProfile.basicInformation.mobile}>
 			{specificProfile.basicInformation.mobile}</a>
 			</div>
 			<footer className="footer">
   			 <p><h2>Thank you</h2><h5>for visiting my profile</h5></p>
    		</footer>
 			</div>

 			<div className="card2">
 			<div className="card-bottom">
 			<h2>Technical Skills</h2>
 			</div>
 			<div className="card-top">
 			{specificProfile.Skills.map((i,j)=>(
 				<ul>
 				<li>{i.skill}</li><hr />
 				<div className="card3"><p>{i.pl}</p></div>
 				</ul>

 				))}
 				</div>

 			</div>
 			
 			</section>
 			)
 	}
 }
 export default Profile1;