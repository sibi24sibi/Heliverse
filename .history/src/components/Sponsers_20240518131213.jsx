import star from '../assets/motionarteffect-img4.png'
import comp1 from '../assets/motionarteffect-img3.png'
import comp2 from '../assets/motionarteffect-img2.png'
import comp3 from '../assets/motionarteffect-img1.png'
function Sponser(){
    return(
        <>
        <section className='SPONSER text-slate-100 m-6  max-w-6xl'>
            <p className=" text-center text-xl md:text-3xl m-10">Trusted by thousands of users around the world</p>  
            <div className="div flex md:flex-row flex-col  justify-around gap-36">
                <div className="comp1 flex ">
                    <div className="div m-5">
                        <img src={comp1} alt="comp1" className="comp1"/>
                    </div>
                    <div className="div flex items-center justify-center flex-col">
                        <img src={star} alt="" srcset="" />
                        <p>4.5 Score, 9 Reviews</p>
                    </div>
                </div>
                <div className="comp2 flex">
                    <div className="div m-5">
                        <img src={comp2} alt="comp1" className="comp1"/>
                    </div>
                    <div className="div flex items-center justify-center flex-col">
                        <img src={star} alt="" srcset="" />
                        <p>4.5 Score, 9 Reviews</p>
                    </div>
                </div>
                <div className="comp3 flex">
                    <div className="div m-5">
                        <img src={comp3} alt="comp1" className="comp1"/>
                    </div>
                    <div className="div flex items-center justify-center flex-col">
                        <img src={star} alt="" srcset="" />
                        <p>4.5 Score, 9 Reviews</p>
                    </div>
                </div>
            </div>
        </section>
        
            
        </>
    )
}


export default Sponser