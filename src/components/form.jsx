import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { connect } from 'react-redux';
import { newPosts } from '../actions/postActions';

import 'react-datepicker/dist/react-datepicker.css';

class form extends Component {

	constructor(props) {
		super(props);
		this.state = {
	      startDate: moment(),
	      title: '',
	      body: ''
	    };

	    this.handleDateChange = this.handleDateChange.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    this.onSubmit= this.onSubmit.bind(this);
	}

	handleDateChange(date) {
	    this.setState({
	      startDate: date
	    });
	  }

	handleChange(e) {
		this.setState({
			[e.target.name] : e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();

		const post = {
			title: this.state.title,
			body: this.state.body
		}

		this.props.newPosts(post);
	}

	render() {
		console.log('Renered');
		return (
			<div>
				<h1>Add Post</h1>
					
			    <form onSubmit={this.onSubmit}>
					<DatePicker
				        selected={this.state.startDate}
				        onChange={this.handleDateChange}
				        minDate={moment()}
				        forceShowMonthNavigation={true}
				    />
					<br/>				    
					<div>
						<label htmlFor="title">Title</label><br/>
						<input type="text" name="title" id="title" onChange={this.handleChange}/>
					</div>
					<br/>
					<div>
						<label htmlFor="body">Body</label><br/>
						<textarea name="body" id="body" onChange={this.handleChange}></textarea>
					</div>
					<button value="submit">Submit</button>	
				</form>
			</div>
		);
	}
}


export default connect( null , { newPosts })(form);