import React, { Component } from 'react';
import './App.css';
import Filter from './components/Filter';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

class App extends Component {
  render() {
    return (
     <div className="wrapper">
         <Filter/>
         <AddTodo/>
         <VisibleTodoList/>
     </div>
    );
  }
}

export default App;
