
import logo from "../assets/MotionArtEffect-logo.png"

function Header(){
    return(
        <>
        <section className='HEADER flex justify-between  min-w-36'>
            <img src={logo} alt="" srcset="" />
            <button className=' rounded-lg bg-gray-50'>
                    Purchase here
            </button> 
        </section>
        
            
        </>
    )
}


export default Header