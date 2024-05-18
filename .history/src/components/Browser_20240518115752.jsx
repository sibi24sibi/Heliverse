
import ImgBrowser from '../assets/motionarteffect-img8.png'

function Browser(){
    return(
        <>
        <section className='BROWSER flex text-center justify-center w-4/5 h-fit bg-[#0F0920] rounded-xl my-16 '>

            <div className="div text-slate-100  p-12 ">
                <p className='font-bold text-xl m-3'>Supported by All Popular Browsers</p>
                <p className='text-base  m-3'>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
                <img className='m-10' src={ImgBrowser} alt="" srcset="" />
            </div>
        
        
        </section>
        
            
        </>
    )
}


export default Browser