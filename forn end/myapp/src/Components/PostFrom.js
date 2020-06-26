import React, { Component } from 'react'
import axios from 'axios'
class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			_id: '',
			name: '',
            des: '',
            latitude: '',
            longitude: '',
            area: '',
            category: '',
            price: '',
            province: '',
            tel: '',
            type: '',
            date: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://ok-myhome.herokuapp.com/api/home', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
    }
    


	render() {
		const { _id,
        name,
        des,
        latitude,
        longitude,
        area,
        category,
        price,
        province,
        tel,
        type,
        date } = this.state
		return (
			<div>
                GET MY HOME :{_id} {name} {des} {latitude} {longitude} {area} {category} {price} {province} {tel} {type} {date}



				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="_id"
							value={_id}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="name"
							value={name}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="des"
							value={des}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<input
							type="text"
							name="latitude"
							value={latitude}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="longitude"
							value={longitude}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="area"
							value={area}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<input
							type="text"
							name="category"
							value={category}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="price"
							value={price}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="province"
							value={province}
							onChange={this.changeHandler}
						/>
					</div>
                    <div>
						<input
							type="text"
							name="tel"
							value={tel}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="type"
							value={type}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="date"
							value={date}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm;