import Thumb from '../assets/motionarteffect-img6.png'
import Moon from '../assets/motionarteffect-img7.png'
import Thund from '../assets/motionarteffect-img9.png'
import FeatureProps from '../props/feature-props'

function Feature(){
    return(
        <>
        <section className='FEATURE  text-center max-w-6xl '>

            <div className="div text-slate-100 ">
                <div className="div  flex justify-center items-center">
                    <div className="div w-2/5">
                        <p className='font-bold text-3xl p-4'>An All-Round Plugin With Powerful Features</p>
                        <p>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
                    </div>
                </div>
                <div className="feature">
                <div className="div flex w-fit justify-center gap-12">
                
                
                <FeatureProps
                    F_Logo={Thund}
                    F_Title='Light Weight'
                    F_Description='Motion Art for Elementor is designed to be lightweight.'
                />
                <FeatureProps
                    F_Logo={Thumb}
                    F_Title='100% Responsive'
                    F_Description='Create a consistent visual experience across all devices.'
                />
                <FeatureProps
                    F_Logo={Moon}
                    F_Title='User Friendly Interface'
                    F_Description='Ensure a smooth experience for both applicants and administrators.'
                />
                
                
                {/*
                
                <div className="div1 bg-[#0F0920] rounded-2xl  text-left">
                    <img className='' src={Thund} alt="" srcset="" />
                    <div className="div p-12">
                    <p className='font-bold'>Light Weight</p>
                    <p>Motion Art for Elementor is designed to be lightweight.</p>
                    </div>
                </div>
                <div className="div2">
                    <img src={Thumb} alt="" srcset="" />
                    <p>100% Responsive</p>
                    <p>Create a consistent visual experience across all devices.</p>
                </div>
                <div className="div3">
                    <img src={Moon} alt="" srcset="" />
                    <p>User Friendly Interface</p>
                    <p>Ensure a smooth experience for both applicants and administrators.</p>
                </div> 
                
                */}


                </div>
                </div>
            </div>
        
        
        </section>
        
            
        </>
    )
}


export default Feature