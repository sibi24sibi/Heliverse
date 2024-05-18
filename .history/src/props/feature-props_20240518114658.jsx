
function FeatureProps(props) {
    return(
        <>
        <div className="div1 bg-[#0F0920] rounded-2xl  text-left">
                    <img className='' src={props.F_Logo} alt="" srcset="" />
                    <div className="div p-12">
                    <p className='font-bold'>{props.F_Title}</p>
                    <p>{props.F_Description}</p>
                    </div>
        </div>
        </>
    )
}

export default FeatureProps;