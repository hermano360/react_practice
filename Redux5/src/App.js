import React, { Component } from 'react';
import { addTodo } from './actions';
import { connect } from 'react-redux';
import _ from 'lodash';

class App extends Component {

  constructor(props){
    super(props);

    this.textInput = React.createRef();
    this.submitTodo =  this.submitTodo.bind(this);
  }

  submitTodo(event){
    event.preventDefault();
    if(this.textInput.current.value.trim())
    this.props.addTodo(this.textInput.current.value);
    this.textInput.current.value='';
  };

  renderTasks(){
    if(!this.props.tasks){
      return null;
    }

    return _.map(this.props.tasks, (task, index) =>{
      return (
          <li className="list-group-item" key={index}>
            {task.text}
          </li>
      );
  });
  }

  render() {

    return (
      <div className="App">
      <form onSubmit={this.submitTodo}>
        <input ref={this.textInput} type="text"/>
        <button type="submit">add task</button>
      </form>
      <ul>
      {this.renderTasks()}
      </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {tasks: state.todos.tasks};
}

export default connect(mapStateToProps, {addTodo})(App);
