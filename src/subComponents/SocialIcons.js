import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, Twitter, YouTube } from './AllSvg'
import {darkTheme} from "../components/Themes"

const Social = styled.div`
display:flex;
flex-direction: column;
align-items:center;

position:fixed;
bottom:0;
left:2rem;
z-index:3;

&>*::not(:last-child){
    margin: 0% 5rem 0;
}
`
const Line = styled.span`
width: 2px;
height: 8rem;
background-color:${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};

`

const SocialIcons = (props) => {
  return (
    <Social>
        <div>
            <NavLink style={{color:'inherit'}} target="_blank" to={{pathname:"https://github.com/Arslaan123Iqbal"}}>
             <Github width={25} height={25}  fill={props.theme === "dark"?  darkTheme.text : darkTheme.body} />
            </NavLink>
        </div>
        <div>
        <NavLink style={{color:'inherit'}}target="_blank" to={{pathname:"https://github.com/Arslaan123Iqbal"}}>
             <Twitter width={25} height={25}   fill={props.theme === "dark"?  darkTheme.text : darkTheme.body} />
            </NavLink>
        </div>
        <div>
        <NavLink style={{color:'inherit'}}target="_blank" to={{pathname:"https://github.com/Arslaan123Iqbal"}}>
             <YouTube width={25} height={25}   fill={props.theme === "dark"?  darkTheme.text : darkTheme.body} />
            </NavLink>
        </div>
        <div>
        <NavLink style={{color:'inherit'}}target="_blank" to={{pathname:"https://github.com/Arslaan123Iqbal"}}>
             <Facebook width={25} height={25}  fill={props.theme === "dark"?  darkTheme.text : darkTheme.body} />
            </NavLink>
        </div>
        <Line color={props.theme} />
    </Social>
  )
}

export default SocialIcons