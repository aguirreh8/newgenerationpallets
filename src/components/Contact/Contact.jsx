import React from "react";
import "./Contact.css";


const Contact = () => (
	<div className="container">
		<div className="row">
			<div className="col">
				<h4>Address:</h4>
				<p>
					57-35 Flushing Ave <br /> Maspeth, NY 11378
				</p>
				<h4>Phone:</h4>
				<p>917-560-5231</p>
			</div>
			<div className="col">
				<h4>Yard Hours:</h4>
				<table>
					<tbody>
						<tr>
							<td>Monday:</td> 
							<td>5AM - 6PM</td>
						</tr>
						<tr>
							<td>Tuesday:</td> 
							<td>5AM - 6PM</td>
						</tr>
						<tr>
							<td>Wednesday:</td> 
							<td>5AM - 6PM</td>
						</tr>
						<tr>
							<td>Thursday:</td> 
							<td>5AM - 6PM</td>
						</tr>
						<tr>
							<td>Friday:</td> 
							<td>5AM - 6PM</td>
						</tr>
						<tr>
							<td>Saturday:</td> 
							<td>5AM - 6PM</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		<div className="row map-row">
			<div id="map" className="google-map">
			</div>
		</div>
	</div>
)

export default Contact;