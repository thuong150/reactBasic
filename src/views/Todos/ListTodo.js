import React from "react";
import "./ListTodo.scss";
import AddToDo from "./AddTodo";
import { toast } from 'react-toastify';

class ListToDo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Fixing bugs' },

        ],
        editTodo: {

        }
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.error("Missing")
        // toast.error("wow so easy!")
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodos
        })
        toast.success("Delete success")
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;

        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("update success")
            return;
        }
        //edit
        this.setState({
            editTodo: todo
        })

    }

    handleOnChangeEditTodo = (e) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = e.target.value
        this.setState({
            editTodo: editTodoCopy
        })

    }

    render() {
        let { listTodos, editTodo } = this.state;

        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log(isEmptyObj);
        return (
            <>
                <p>
                    Simple TODO Apps with React.js (Thuong IT)
                </p>
                <div className="list-todo-container">
                    <AddToDo
                        addNewTodo={this.addNewTodo}
                    />
                    <div className="list-todo-content">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            < span > {index + 1} - {item.title} </span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} <input
                                                            value={editTodo.title}
                                                            onChange={(e) => this.handleOnChangeEditTodo(e)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>
                                        }
                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'
                                            }
                                        </button>
                                        <button className="delete" onClick={() => this.handleDeleteTodo(item)} type="button">Delete</button>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div >
            </>
        )
    }
}

export default ListToDo;