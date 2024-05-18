import ForSection from '../assets/motionarteffect-img10.png'
import ForPage from '../assets/motionarteffect-img11.png'

function Pages(){
    return(
        <>
        <section className='PAGES'>
            <p className="text-3xl text-slate-100 text-center m-16">Apply On Any Section Or Enable For Whole Page</p>
        
        <div className="div  text-slate-100  flex gap-10 justify-center "> 
            <div className="div1 p-7 bg-[#0F0920] rounded-2xl drop-shadow-md w-2/5">
                <p className="text-xl m-3">Apply On Section</p>
                <p className='m-3'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                <img src={ForSection} alt="" srcset="" />
            </div>
            <div className="div1 p-7 bg-[#0F0920] rounded-2xl drop-shadow-md w-2/5">
                <p className="text-xl m-3">Apply On Section</p>
                <p className='m-3'>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                <img src={ForPage} alt="" srcset="" />
            </div>
        </div>
        </section>
        
            
        </>
    )
}


export default Pages