import Magic_stick from '../assets/motionarteffect-img5.png'
function Purchase(){
    return(
        <>
        <section className='Purchase flex md:flex-row flex-col md:text-left text-center md:justify-between max-w-6xl px-8'>
            <div className="text-and-btn text-slate-100">
                <h1 className='text-4xl mb-7'>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors.</h1>
                <p className='mb-5 text-slate-500'>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
            <button className='p-3 px-8  rounded-lg  bg-gradient-to-r from-[#F87516] from-10% to-[#5E11FF] to-90%  text-slate-900 '>
                 Purchase here
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