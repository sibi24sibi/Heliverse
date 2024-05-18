import * as React from 'react';
import Button from '@mui/material/Button';
import logo from "../assets/MotionArtEffect-logo.png"

function Header(){
    return(
        <>
        <section className='flex justify-between'>
            <img src={logo} alt="" srcset="" />
            <Button variant="contained" disableElevation>
               Purchase Now
            </Button>    
        </section>
        
            
        </>
    )
}


export default Header