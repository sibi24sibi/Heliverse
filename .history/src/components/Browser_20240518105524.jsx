
import ImgBrowser from '../assets/motionarteffect-img8.png'

function Browser(){
    return(
        <>
        <section className='BROWSER flex text-center justify-center w-4/5 h-fit bg-slate-500 rounded-xl '>

            <div className="div text-slate-100  p-12 ">
                <p>Supported by All Popular Browsers</p>
                <p>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
                <img src={ImgBrowser} alt="" srcset="" />
            </div>
        
        
        </section>
        
            
        </>
    )
}


export default Browser