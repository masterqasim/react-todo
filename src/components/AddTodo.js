import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from './actions/todoAcions'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


class AddTodo extends React.Component {
    
    btnStyle = () =>{
        if(this.state.title === '' || this.state.title === ' '){
            return{
                width: '20%',
                height: '40px',
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 95%)',
                cursor:'not-allowed',
                color:'white'
            }
        }
        else{
           return{
                width: '20%',
                height: '40px',
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 95%)',
                color:'white'

            }
        }
    }
  divStyle = {
        display: 'flex',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        paddingBottom: '20px',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        paddingTop: '2px',
    };
    state = {

        title: '',
        error: ''
    }

    
    onChange = (e) => {

        this.setState({ title:  e.target.value })
    }
    submit = () => {
        if(this.state.title === '' || this.state.title === ' '|| this.state.title === '   '){
            
            this.setState({ title: '',error:'please write some thing...' });
        }else{
            this.setState({ title: '' });
            this.props.addTodo(this.state.title);
        }
    }

    render() {

        return (
            <div>
                <div style={this.divStyle}>
                    <input
                        type="text"
                        placeholder=" Add todos..."
                        onChange={this.onChange}
                        value={this.state.title}
                        style={{
                            width: '80%',
                            height: '40px'
                        }}
                    />
                    
                    <Button
                        onClick={this.submit}
                        style={this.btnStyle()}
                    ><AddIcon />Add
                    </Button>
                    
                </div>
                <p style={{position: 'fixed',bottom: '0',color:'white'}}> { this.state.title === ''? this.state.error:''}</p>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addTodo: (todo) => dispatch(addTodo(todo))
    }
  }
  
  export default connect(null, mapDispatchToProps) (AddTodo);