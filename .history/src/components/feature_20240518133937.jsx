import Thumb from '../assets/motionarteffect-img6.png'
import Moon from '../assets/motionarteffect-img7.png'
import Thund from '../assets/motionarteffect-img9.png'
import FeatureProps from '../props/feature-props'

function Feature(){
    return(
        <>
        <section className='FEATURE  text-center max-w-6xl '>

            <div className="div text-slate-100 ">
                <div className="div  flex flex-row justify-center items-center">
                    <div className="div md:w-2/5 w-5/6">
                        <p className='font-bold text-3xl p-4'>An All-Round Plugin With Powerful Features</p>
                        <p>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
                    </div>
                </div>
                <div className="feature md:py-16 ">
                <div className="div flex md:flex-row flex-col w-fit justify-center gap-6">
                
                
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
                
               


                </div>
                </div>
            </div>
        
        
        </section>
        
            
        </>
    )
}


export default Feature