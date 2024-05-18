
import logo from "../assets/MotionArtEffect-logo.png"

function Header(){
    return(
        <>
        <section className='HEADER flex justify-between'>
            <img src={logo} alt="" srcset="" />
            <button className='p-4 px-10 rounded-lg bg-gray-50'>
                    Purchase here
            </button> 
        </section>
        
            
        </>
    )
}


export default Header