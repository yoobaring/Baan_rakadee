import React, { Component } from 'react'
import axios from 'axios'
import PostForm from './PostFrom'
class Admin extends Component {
	constructor(props) {
		super(props)

		this.state = {
      posts: [],
      errorMsg: ''
		}
	}

	componentDidMount() {
		axios
			.get('http://ok-myhome.herokuapp.com/api/home')
			.then(response => {
				console.log(response)
				this.setState({ posts: response.data })
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
    }
    
    deleteHandler = e => {
        console.log(this.state)
		axios
			.delete(`http://ok-myhome.herokuapp.com/api/home/edit/${7}`, this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
    }

	render() {
		const { posts, errorMsg } = this.state
		return (
			<div>
				List of posts
				{posts.length
					? posts.map(post => <div key={post.id}>
                    {post.id+1} : 
                    {post._id} :
                    {post.name} :
                    {post.des} :
                    {post.latitude} : 
                    {post.longitude} :
                    {post.area} :
                    {post.category} :
                    {post.price} :
                    {post.province} :
                    {post.tel} :
                    {post.type} : 
                    {post.date} :</div>) : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
        <button onClick={ ()=> this.deleteHandler(posts.id)}>DELETE</button>
        <PostForm/>

        
			</div>
		)
	}
}

export default Admin;