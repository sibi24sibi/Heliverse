
import logo from "../assets/MotionArtEffect-logo.png"

function Header(){
    return(
        <>
        <section className='HEADER flex justify-between min-w-full h-fit'>
            <img src={logo} alt="" srcset="" />
            <button className=' rounded-lg bg-gray-50 hover:bg-transparent hover:text-slate-100 border-2 border-x-cyan-50'>
                    Purchase here
            </button> 
        </section>
        
            
        </>
    )
}


export default Header