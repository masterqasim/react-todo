import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';

function Header() {
  return (
    <AppBar style={headerStyle}>
      
      <h1 style={{fontFamily:'generic-family' }}><ListAltOutlinedIcon style={{fontSize:30}}/> TodoList</h1>
    </AppBar>
  )
}

const headerStyle = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  color: '#fff',
  width:'100%',
  padding: '10px',
}


export default Header;