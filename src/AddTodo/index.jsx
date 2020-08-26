import React, { Component } from 'react';




class AddTodo extends Component {


    state = {
        item: '',
    }

    render() {
        return (
            <div className='addTodoContainer'>

                <form onSubmit={e => this.submitTodo(e)}>
                    <input id='AddTodoInput' type="text" onChange={e => this.updateInput(e)} />
                    <button type='submit'>Add Todo</button>
                </form>

            </div>
        )
    }

    updateInput = e => {
        this.setState({ item: e.target.value })
    }

    submitTodo = e => {
        e.preventDefault()
        this.props.addTodoFn(this.state.item)
        document.getElementById('AddTodoInput').value = '';
    }


}

export default AddTodo;