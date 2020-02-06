import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header';
import About from './components/pages/about';
import './App.css';
import * as firebase from "firebase";
import './components/config'
import {fetchtodos} from './components/actions/todoAcions'

class App extends Component {
  state ={
   
  }
  componentDidMount(){
   this.props.fetchtodos()
  }
 
  render() {
  
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" render={props=>(
            <React.Fragment>
              <Todos/>
              <AddTodo addTodo={this.addTodo}/>
            </React.Fragment>
          )}
         />
          
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchtodos: () => dispatch(fetchtodos())
  }
}

export default connect(null, mapDispatchToProps) (App);


