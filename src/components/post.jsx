import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import Loader from './Loader';

class Post extends Component {
	componentWillMount () {
		this.props.fetchPosts();
		console.log(this);
	}

	render() {
		let eachPost;
		console.log(this);
		if(this.props.posts && this.props.posts.length) {
			eachPost = this.props.posts.map( postItem => (
				<li key={postItem.id}>	
					<h3>{postItem.title}</h3>
					<p>{postItem.body}</p>
				</li>	
				));
			}
		else { eachPost= <Loader/> }	

		return (
			<ol>{eachPost}</ol>
		)};
}

const mapStateToProps = state => ({
	posts: state.posts.items,
	newPost : state.posts.item
})


export default connect( mapStateToProps, { fetchPosts })(Post);