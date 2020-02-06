import React from 'react';
import TodoItem from './TodoItem';
import {connect} from 'react-redux'

class Todos extends React.Component{
    
    render(){        
        return <div style={{marginTop:'59px'}}>
            {this.props.todos.map((todos)=>(
            <TodoItem 
            key={todos.id} 
            todos={todos} 
            />
        ))}
        </div>
    }

}
const mapStateToProps = (state) => {
return{
    todos: state.todoReducer.todos
}
}

export default  connect(mapStateToProps)(Todos);