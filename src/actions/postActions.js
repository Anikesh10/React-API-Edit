import { FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
 axios('https://jsonplaceholder.typicode.com/posts')
	.then( res => (res.data))
	.then ( posts => 
		dispatch({
			type: FETCH_POSTS,
			payload: posts
		})
	);
};

export const newPosts = (post) => dispatch => {
		console.log('test');
		axios.post('https://jsonplaceholder.typicode.com/posts',
			{
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify(post)
			})
		.then(res =>(res.data.body))
		.then(data =>
				dispatch({
				type: NEW_POST,
				payload: JSON.parse(data)
			})
	);
}		