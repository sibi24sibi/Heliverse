
import ImgBrowser from '../assets/motionarteffect-img8.png'

function Browser(){
    return(
        <>
        <section className='BROWSER flex text-center justify-center '>

            <div className="div text-slate-100  w-fit h-fit bg-slate-500 rounded-xl p-12">
                <p>Supported by All Popular Browsers</p>
                <p>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
                <img src={ImgBrowser} alt="" srcset="" />
            </div>
        
        
        </section>
        
            
        </>
    )
}


export default Browser