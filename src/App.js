import React, { Component } from 'react';
import TodoList from './TodoList'
import AddTodo from './AddTodo'


class App extends Component {

  state = {
    items: []
  }

  render() {
    return (
      <div>
        <AddTodo addTodoFn={this.addTodo} />
        <TodoList  updateTodoFn={this.updateTodo} items={this.state.items} />
      </div>
    )
  }


  componentDidMount() {
    const items = localStorage.getItem('items')
    if (items) {
      const saveditems = JSON.parse(items)
      this.setState({ items: saveditems })
    } else {
      console.log('no items');
    }
  }


  addTodo = async (item) => {
    await this.setState({
      items: [...this.state.items, {
        text: item,
        completed: false
      }]
    })
    localStorage.setItem('items', JSON.stringify(this.state.items))
  }

  updateTodo =  async (_item) => {
    const newItems = this.state.items.map(item => {
      if (_item === item) {
        return {
          text: _item.text,
          completed: !item.completed
        }
      } else {
        return item
      }
    })
   await this.setState({ items: newItems })
   localStorage.setItem('items', JSON.stringify(this.state.items))
  }


}

export default App;
