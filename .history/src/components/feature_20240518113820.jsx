import FeatureProps from '../props/feature-props'
import Thumb from '../assets/motionarteffect-img6.png'
import Moon from '../assets/motionarteffect-img7.png'
import Thund from '../assets/motionarteffect-img9.png'


function Feature(){
    return(
        <>
        <section className='FEATURE  text-center  '>

            <div className="div text-slate-100 ">
                <div className="div  flex justify-center items-center">
                    <div className="div w-2/5">
                        <p className='font-bold text-3xl'>An All-Round Plugin With Powerful Features</p>
                        <p>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
                    </div>
                </div>
                <div className="feature">
                <div className="div flex w-full justify-center gap-32 px-12">
                <FeatureProps
                    F_Logo={Thund}
                    F_Title='Light Weight'
                    F_Description='Motion Art for Elementor is designed to be lightweight.'
                />
               
                </div>
            </div>
        
        
        </section>
        
            
        </>
    )
}


export default Feature