import Magic_stick from '../assets/motionarteffect-img5.png'
function Purchase(){
    return(
        <>
        <section className='Purchase flex md:flex-row flex-col md:text-left text-center md:justify-between max-w-6xl px-8'>
            <div className="text-and-btn text-slate-100">
                <h1 className='text-3xl mb-7'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors.</h1>
                <p className='mb-5 text-slate-500'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
            <button className='p-6 px-20  rounded-lg  flex bg-gradient-to-r from-[#F87516] from-10% to-[#5E11FF] to-90%  text-slate-200 '>
                 <p >Purchase From Evanto  </p><span className='ml-5'> ► </span>
            </button>
            </div>
            
            <div className="div px-16 md:mt-0 mt-24">
                <img src={Magic_stick} alt="" srcset="" />
            </div>
        </section>
        
            
        </>
    )
}


export default Purchase