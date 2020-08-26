import React, { Component } from 'react';
import TodoItem from '../TodoItem'




class TodoList extends Component {



    render() {

        const { items } = this.props

        return (
            <div className='TodoListContainer'>
                {
                    items.map((item, index) => {
                        return (
                            <TodoItem  updateTodoFn={this.updateTodo} key={index} item={item} />
                        )
                    })
                }
            </div>
        )
    }

    updateTodo = item => {
        this.props.updateTodoFn(item)
    }

}

export default TodoList