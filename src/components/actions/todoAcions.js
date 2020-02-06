import * as firebase from "firebase";

export const addTodo = (todo) => {
    return (dispatch, getState) => {
      // make async call to database
      console.log(getState)
      const newTodo={
        title:todo,
        id:firebase.database().ref('todos').push(newTodo).key,
        completed:false  
      }
      firebase.database().ref('todos').child(newTodo.id).set(newTodo).then(()=>{
        dispatch({ type: 'ADD_TODO', newTodo });
      })
      
    }
  };
  export const delTodo = (id) => {
    return (dispatch, getState) => {
      // make async call to database
      firebase.database().ref('todos').child(id).remove().then(()=>{
        dispatch({ type: 'DEL_TODO', id });
      })
      
    }
  };
  export const markComplete = (todos) => {
    return (dispatch, getState) => {
      // make async call to database
      let todo ={
        title: todos.title,
        id:todos.id,
        completed :!todos.completed,
      }
      console.log('todoaction se',todo)
      var updates = {};
      updates['/todos/' + todo.id] = todo;
      firebase.database().ref().update(updates).then(()=>{
       dispatch({ type: 'COMPLETE_TODO', todo });
      })
    }
  };
  export const fetchtodos = () => dispatch => {
    
    firebase.database().ref('todos').once('value',(data)=>{
        let tododata = data.val()
        let userdata={};
        for(var key in tododata){

            dispatch({
                type: "FETCH_TODOS",
                todos: tododata[key]
              })
        }
       
    })
  };
  