import ForSection from '../assets/motionarteffect-img10.png'
import ForPage from '../assets/motionarteffect-img11.png'

function Pages(){
    return(
        <>
        <section className='PAGES'>
            <p className="text-2xl text-slate-100 text-center">Apply On Any Section Or Enable For Whole Page</p>
        
        <div className="div  text-slate-100 text-center flex "> 
            <div className="div1 ">
                <p>Apply On Section</p>
                <p>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                <img src={ForSection} alt="" srcset="" />
            </div>
            <div className="div2">
                <p>Apply On Section</p>
                <p>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                <img src={ForPage} alt="" srcset="" />
            </div>
        </div>
        </section>
        
            
        </>
    )
}


export default Pages