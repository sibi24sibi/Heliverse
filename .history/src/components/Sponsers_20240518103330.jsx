import star from '../assets/motionarteffect-img4.png'
import comp1 from '../assets/motionarteffect-img3.png'
import comp2 from '../assets/motionarteffect-img2.png'
import comp3 from '../assets/motionarteffect-img1.png'
function Sponser(){
    return(
        <>
        <section className='SPONSER'>
            <p className="text-slate-100 text-center">Trusted by thousands of users around the world</p>  
            <div className="div flex justify-around">
                <div className="comp1 flex">
                    <div className="div">
                        <img src={comp1} alt="comp1" className="comp1"/>
                    </div>
                    <div className="div flex items-center">
                        <img src={star} alt="" srcset="" />
                        <p>4.5 Score, 9 Reviews</p>
                    </div>
                </div>
                <div className="comp2 flex">
                    <div className="div">
                        <img src={comp2} alt="comp1" className="comp1"/>
                    </div>
                    <div className="div">
                        <img src={star} alt="" srcset="" />
                        <p>4.5 Score, 9 Reviews</p>
                    </div>
                </div>
                <div className="comp3 flex">
                    <div className="div">
                        <img src={comp3} alt="comp1" className="comp1"/>
                    </div>
                    <div className="div">
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