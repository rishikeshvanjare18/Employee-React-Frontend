import React, { Component } from 'react'

import axios from 'axios'
import EmployeeAdd from './EmployeeAdd'
import UpdateEmp from './UpdateEmp'



class Employee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            emp: [],
            errorMsg: '',
            tempEmp: [],
            isEdit: false
        }


    }



    componentDidMount() {
        axios.get('http://localhost:8080/api/v1/employees')
            .then(response => {
                console.log(response)
                this.setState({ emp: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'Error retreiving data' })
            })
    }

    deleteEmp = (id) => {
        if (window.confirm(`Do you want to delete emp data with id: ${id} `)) {
            axios.delete(`http://localhost:8080/api/v1/employees/${id}`)
                .then(response => {
                    console.log(response)
                    window.location.reload(false)
                    alert(`deleted successfully ${response.data}`)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }

    updateEmp = (emp) => {

        this.setState({
            isEdit:true,
            tempEmp:emp
        })

     //  alert('in development...')
    }

    // changeHandler = e => {
       
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // submitHandler = e => {
    //     //  e.preventDefault()
    //     console.log(this.state)

    //     axios.put(`http://localhost:8080/api/v1/employees/${this.state.tempEmp.id}`, this.state.tempEmp)
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }


    render() {
        const style = {
            color: 'blue',
            float: 'right',
            marginRight: '100px'
        }
        const { emp, errorMsg, isEdit, tempEmp} = this.state
        return (
            emp.length ?
                <div style={style}>
                    <h1>Emp Data</h1>
                    <table border='1'>
                        <tbody>
                            <tr>
                                <th>Emp Id</th>
                                <th>Emp email</th>
                                <th>Emp name</th>
                                <th>Emp lastname</th>
                                <th>Action</th>

                            </tr>
                            {
                                emp.length ?
                                    emp.map(emp =>
                                        <tr key={emp.id}>
                                            <td>{emp.id}</td>
                                            <td>{emp.email}</td>
                                            <td>{emp.name}</td>
                                            <td>{emp.lastname}</td>
                                            <td><button onClick={() => this.updateEmp(emp)}> Edit </button> / <button onClick={() => this.deleteEmp(emp.id)}> Delete </button></td>
                                        </tr>
                                    ) : null

                            }
                        </tbody>
                    </table>
                    {errorMsg ? <div>{errorMsg}</div> : null}

                    {isEdit ? 
                    <UpdateEmp id={tempEmp.id} name={tempEmp.name} lastname={tempEmp.lastname} email={tempEmp.email} /> 
                    : null}


                    {/* {console.log(tempEmp)}
                    {tempEmp.id ? <div>
                        <form onSubmit={this.submitHandler}>
                            <label>emp Id:</label>
                            <input type="text" name="id" value={tempEmp.id} />
                            <br />
                            <label>Email Id:</label>
                            <input type="text" name="email" value={tempEmp.email} onChange={this.changeHandler} />
                            <br />
                            <label>name:</label>
                            <input type="text" name="name" value={tempEmp.name} onChange={this.changeHandler} />
                            <br />
                            <label>last name:</label>
                            <input type="text" name="lastname" value={tempEmp.lastname} onChange={this.changeHandler} />
                            <br />
                            <button>Submit</button>

                        </form>
 

                    </div> : null}
*/}
                </div>
                : <div>No Data Found!</div>
        )
    }

}
export default Employee
