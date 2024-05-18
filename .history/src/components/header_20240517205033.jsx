import logo from "../assets/MotionArtEffect-logo.png"

function Header(){
    return(
        <>
        <section>
            <img src={logo} alt="" srcset="" />
            <Button variant="contained" disableElevation>
                Disable elevation
            </Button>    
        </section>
        
            
        </>
    )
}


export default Header