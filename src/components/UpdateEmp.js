import React, { Component } from 'react'
import axios from 'axios'

class UpdateEmp extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
            id: this.props.id,
            email: this.props.email,
            lastname: this.props.lastname,
            name: this.props.name
        }

        

        console.log(this.props.email)
    }
    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = e => {
        //  e.preventDefault()
        console.log(this.state)

        axios.put(`http://localhost:8080/api/v1/employees/${this.state.id}`, this.state)
            .then(response => {
                console.log(response)
                alert(response)
            })
            .catch(error => {
                console.log(error)
                alert(error)
            })
    }

    render() {

        const style = {
            color: 'blue',
            textAlign: 'center',
            marginTop: '50px',
            marginLeft: '100px',
            width: '500px'

        }
        const style1 = {

            margin: '10px',
            Textalign: 'justify'

        }

        const { id, email, name, lastname } = this.state
        return (
            <div style={style}>
                <h1>Update Employee form</h1>
                <form style={style1} onSubmit={this.submitHandler}>
                    <div style={style1}>
                        <label>Emp id:</label>
                        <input type='text' name='id' value={id} onChange={this.changeHandler} readOnly></input>
                    </div>
                    <div style={style1}>
                        <label>Email:</label>
                        <input type='text' name='email' value={email} onChange={this.changeHandler}></input>
                    </div>
                    <div style={style1}>
                        <label>Name:</label>
                        <input type='text' name='name' value={name} onChange={this.changeHandler}></input>
                    </div>
                    <div style={style1}>
                        <label>Last Name:</label>
                        <input type='text' name='lastname' value={lastname} onChange={this.changeHandler}></input>
                    </div>

                    <button style={style1} type='submit'> Submit</button>

                </form>
            </div>
        )
    }
}
export default UpdateEmp
