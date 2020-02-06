import React, {Component} from 'react';
import {connect} from 'react-redux'
import { delTodo,markComplete } from './actions/todoAcions'
import Done from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';

class TodoItem extends Component{
    itemStyle= () =>{
       return{ 
        color: 'white',  
        fontFamily:'Helvetica', 
        // backgroundColor:'#cfc1f7',
        margin: '0px 15% ',
        borderBottom:' 2px solid #2a1466',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius : '15%',

        textDecoration: this.props.todos.completed ? 'line-through':'none',
        padding:'10px'
    
    }
    } 
     btnStyle = {
        border:'none',
        borderRadius : '50%',
        cursor:'pointer',
        float:'right',
        color: '#4f4f4f', 
    }

    render(){
     
        return(
            <div style={this.itemStyle()}> 
                
                <p>
                    <Done
                      style={{color:'green',
                      borderRadius : '50%',
                      cursor:'pointer',
                      backgroundColor:'pink'

                    }}
                      onClick={()=>{this.props.markComplete(this.props.todos)}}
                      /> 
                        {'  '}{this.props.todos.title}
                     <DeleteIcon
                       
                        style={this.btnStyle}
                        onClick={()=>{this.props.delTodo(this.props.todos.id)}}

                      />   
                </p>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        delTodo: (id) => dispatch(delTodo(id)),
        markComplete: (id) => dispatch(markComplete(id))

    }
  }
  
  export default connect(null, mapDispatchToProps)(TodoItem);