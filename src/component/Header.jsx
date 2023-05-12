import React from 'react'
import {AppBar, Toolbar, styled} from '@mui/material';
import icon from "./icon.png"

const Component =styled(AppBar)
`
background:#060606;
height: 9vh;
`

export default function Header() {
  return (
    <>
      <Component position='static'>
        <Toolbar>
        <img src={icon} alt="codepen logo"  style={{width:100}} />
        </Toolbar>
      </Component>
    </>
  )
}
