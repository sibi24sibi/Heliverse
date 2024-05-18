import ForSection from '../assets/motionarteffect-img10.png'
import ForPage from '../assets/motionarteffect-img11.png'

function Pages(){
    return(
        <>
        <section className='PAGES max-w-6xl'>
            <h1 className="text-3xl text-slate-100 text-center m-16">Apply On Any Section Or Enable For Whole Page</h1>
        
        <div className="div  text-slate-100  flex md:flex-row flex-col gap-10 md:justify-center md:text-left text-center "> 
            <div className="div1 md:p-7 bg-[#0F0920] rounded-2xl drop-shadow-md md:w-1/2 w-5/6  mx-auto ">
                <h1 className="text-xl m-3 p-3">Apply On Section</h1>
                <p className='m-3 px-5 text-gray-500'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                <img src={ForSection} alt="" srcset="" />
            </div>
            <div className="div1 md:p-7 relative md:top-16 bg-[#0F0920] rounded-2xl drop-shadow-md md:w-1/2 w-5/6 mx-auto">
                <h1 className="text-xl m-3 p-3">Apply On Pages</h1>
                <p className='m-3 px-5  text-gray-500'>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
                <img src={ForPage} alt="" srcset="" />
            </div>
        </div>
        </section>
        
            
        </>
    )
}


export default Pages