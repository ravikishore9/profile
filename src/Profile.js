import React from'react';
import './App.css';
import Data from './data/data.json';

 class Profile extends React.Component{
 	
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
 			<div className="footer"><h2>Thank you</h2><h5>for visiting my Profile</h5></div>
 			</div>

 			<div className="card2">
 			<div className="card-bottom">
 			<h2>Educational Qulifications</h2>
 			</div>
 			<div className="card-top">
 			{specificProfile.education.map((i,j)=>(
 				<ul>
 				<div className="card3"><li>{i.degree}</li></div><hr />
 				<p>{i.Institution}</p>
 				</ul>

 				))}
 				</div>

 			</div>
 			
 			</section>
 			)
 	}
 }
 export default Profile;