import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/color";
import logo from "../../assets/images/logo.png"
import { connect } from 'react-redux';

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')//redirect của reactjs
        // }, 3000);
    }
    handleDeleteUser = (user) => {
        console.log('>>check: ', user)
        this.props.deleteUserRedux(user);
    }
    handleCreateUser = () => {
        this.props.addUserRedux()
    }

    render() {
        console.log(">>>check props: ", this.props);
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello word Homepage
                </div>
                <div>
                    <img src={logo} style={{ width: '200px', height: '200px', marginTop: '20px' }} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()} >Add new</button>
                </div>
            </>
        )
    }
}

// export default withRouter(Home);

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));