import React, { Component } from 'react';
import './style.css'




class TodoItem extends Component {


    render() {


        const { item } = this.props

        return (
            <div>
                <div className={'todoItem' + (item.completed ? ' completed ' : '')}>

                    {item.text}
                    <input type="checkbox" onClick={this.toggleTodo} />
                </div>
            </div>
        )
    }


    toggleTodo = () => {
        this.props.updateTodoFn(this.props.item)
    }

}

export default TodoItem;