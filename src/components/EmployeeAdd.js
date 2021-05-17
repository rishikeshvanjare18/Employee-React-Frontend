import React, { Component } from 'react'
import axios from 'axios'

class EmployeeAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
          
            id: props.id,
            email: props.email,
            lastname: props.lastname,
            name: props.name,
            isShow: false

        }
    }
    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = e => {
        //  e.preventDefault()
        console.log(this.state)

        axios.post('http://localhost:8080/api/v1/employees', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    showForm = () =>{
        this.setState({
            isShow:true
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

        const { id, email, name, lastname, isShow } = this.state
        return (
            <React.Fragment>
            <button onClick={this.showForm}>Insert</button>

            {isShow?
            <div style={style}>
                <h1>Add new Employee form</h1>
                <form style={style1} onSubmit={this.submitHandler}>
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
            : null
            }
            </React.Fragment>
        )
    }
}
export default EmployeeAdd
