import * as React from 'react';
import Button from '@mui/material/Button';
function Purchase(){
    return(
        <>
        <section className='Purchase flex justify-between'>
            <div className="text-and-btn text-slate-100">
                <p>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</p>
                <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
                
            </div>
            <div className="">
                <Button className="p-7 rounded-md bg-slate-100 text-slate-800">
                    Purchase from Eanto
                </Button>
            </div>
        </section>
        
            
        </>
    )
}


export default Purchase