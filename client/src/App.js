import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibliTodoList from './containers/VisibleTodoList';

class App extends Component {
  render() {
    return (
     <div>
         <AddTodo/>
         <VisibliTodoList/>
         <Footer/>
     </div>
    );
  }
}

export default App;
