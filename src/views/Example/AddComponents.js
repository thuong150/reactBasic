import React from "react";

class AddComponent extends React.Component {

    state = {
        title: "",
        salary: "",
    }



    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleChangeSalary = (e) => {
        this.setState({
            salary: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert("missing")
            return
        }
        console.log('>>> check data', this.state)
        this.props.addNewJob({
            id: Math.random(),
            title: this.state.title,
            salary: this.state.salary,
        })

        this.setState({
            title: '',
            salary: '',
        })
    }
    render() {
        return (
            <form>
                <label htmlFor="fname">Job:</label> <br></br>
                <input type="text" value={this.state.title} onChange={(e) => { this.handleChangeTitle(e) }}></input> <br></br>
                <label htmlFor="lname">Salary:</label> <br></br>
                <input type="text" value={this.state.salary} onChange={(e) => { this.handleChangeSalary(e) }}></input> <br></br>
                <input type="submit" onClick={(e) => { this.handleSubmit(e) }}></input>
            </form>
        )
    }
}

export default AddComponent;