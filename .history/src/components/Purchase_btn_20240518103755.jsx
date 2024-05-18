import Magic_stick from '../assets/motionarteffect-img5.png'
function Purchase(){
    return(
        <>
        <section className='Purchase flex justify-between'>
            <div className="text-and-btn text-slate-100 justify-center">
                <p>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</p>
                <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
            <button className='p-3 px-8 rounded-lg bg-gray-50 text-slate-900'>
                 Purchase here
            </button>
            </div>
            
            <div className="div">
                <img src={Magic_stick} alt="" srcset="" />
            </div>
        </section>
        
            
        </>
    )
}


export default Purchase