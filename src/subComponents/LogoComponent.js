import React from 'react'
import styled from 'styled-components';
import { darkTheme } from '../components/Themes';

const Logo =  styled.div`
display:inline-block;

color:${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
font-family:'Pacifico',cursive;

position:fixed;
top:2rem;
left:2rem;
z-index:3;
`
const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>Arslan Iqbal</Logo>
  )
}

export default LogoComponent