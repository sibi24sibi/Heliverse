import Thumb from '../assets/motionarteffect-img6.png'
import Moon from '../assets/motionarteffect-img7.png'
import Thund from '../assets/motionarteffect-img9.png'

function FeatureProps(props,F_Logo,F_Title,F_Description){
    return(
        <>
        <div className="div1 bg-[#0F0920] rounded-2xl  text-left">
                    <img className='' src={F_Logo} alt="" srcset="" />
                    <div className="div p-12">
                    <p className='font-bold'>{F_Title}</p>
                    <p>{F_Description}</p>
                    </div>
        </div>
        </>
    )
}