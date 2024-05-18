import * as React from 'react';
import Button from '@mui/material/Button';
import logo from "../assets/MotionArtEffect-logo.png"

function Header(){
    return(
        <>
        <section className='flex'>
            <img src={logo} alt="" srcset="" />
            <Button variant="contained" disableElevation>
                Disable elevation
            </Button>    
        </section>
        
            
        </>
    )
}


export default Header