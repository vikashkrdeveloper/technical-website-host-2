import React from 'react'
import { useSpring, animated } from 'react-spring';

function AboutPageBoxList(props) {
    const propes = useSpring({
        to: { transform: 'translateY(0)' },
        from: { transform: 'translateY(-10px)' },
        reset: true,
        reverse: true,
        loop: { reverse: true },
    });
    return (
        <>
            <div className='w-[330px] h-[180px] border-[1px] shadow-inner border-[#324a71] hover:scale-105 transition ease-in-out delay-200 rounded-[16px] bg-[#1e2c45]'>
                <div className='w-[100%] h-[70px] flex justify-center items-center'>
                    <animated.svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        style={propes}
                    >
                        {/* Your calendar SVG content goes here */}
                        <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="40" >
                            📅
                        </text>
                    </animated.svg>

                </div>
                <h1 className=' text-center font-[500] text-[40px] text-[#fff]'>{props.count}</h1>
                <h2 className=' text-center font-[600] text-[15px] text-[#fff]'>{props.name}</h2>
            </div>
        </>
    )
}

export default AboutPageBoxList
