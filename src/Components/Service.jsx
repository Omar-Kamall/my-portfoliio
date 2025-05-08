import { AiOutlineAntDesign } from 'react-icons/ai'
import { DiResponsive } from 'react-icons/di'
import { GrPersonalComputer } from 'react-icons/gr'
import { useEffect } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
    // Gsap
    useEffect(() => {
        gsap.defaults({ ease: "power3" });
        gsap.set(".box", { opacity: 0, y: 100 });

        ScrollTrigger.batch(".box", {
            onEnter: batch => gsap.to(batch, {
                opacity: 1,
                y: 0,
                stagger: { each: 0.15, grid: [1, 3] },
                overwrite: true
            }),
            onLeave: batch => gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
            onEnterBack: batch => gsap.to(batch, {
                opacity: 1,
                y: 0,
                stagger: 0.15,
                overwrite: true
            }),
            onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 100, overwrite: true })
        });

        ScrollTrigger.addEventListener("refreshInit", () =>
            gsap.set(".box", { y: 0 })
        );

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section id='service' className='scroll-mt-18'>
            <div className="h-[1px] bg-gray-600"></div>
            <div className="bg-[#0A0F1F] pb-20">
                <div className={`container mx-auto px-[5%] flex flex-col items-center`}>
                    <div className="w-full box">
                        <h4 className='words text-3xl py-10'>My SERVICES</h4>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] text-white mb-5 lg:mb-0 w-full">
                        <div className="border-1 border-gray-600 p-5 rounded-2xl box">
                            <div className="flex items-center gap-3 mb-3">
                                <GrPersonalComputer color='#4A90E2' size={40} />
                                <span className='text-[20px] lg:text-2xl'>Website Devolpment</span>
                            </div>
                            <p className='text-gray-400 text-[13px]'>
                                I Create Website Based On Your Ready-Made Design. Whether It's Landing Page or a<br/>
                                Business Card Website. I Will Make It Look Great And Work Smoothly On Any Device.
                            </p>
                        </div>
                    </div> <div className='w-[1.6px] h-15 bg-gray-600 hidden lg:flex box'></div>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] text-white mb-7 lg:mb-0 w-full">
                        <div className=""></div>
                        <div className="border-1 border-gray-600 p-5 rounded-2xl box">
                            <div className="flex items-center gap-3 mb-3">
                                <AiOutlineAntDesign color='#4A90E2' size={40} />
                                <span className='text-[20px] lg:text-2xl'>Website Design</span>
                            </div>
                            <p className='text-gray-400 text-[13px]'>
                                I Can Design Your Website From Scraatch. I Create Modern, Simple And Easy<br/>
                                To Use Designs That Fit Your Brand And Goals
                            </p>
                        </div>
                    </div> <div className='w-[1.6px] h-15 bg-gray-600 hidden lg:flex box'></div>
                    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] text-white w-full">
                        <div className="border-1 border-gray-600 p-5 rounded-2xl box">
                            <div className="flex items-center gap-3 mb-3">
                                <DiResponsive color='#4A90E2' size={40} />
                                <span className='text-[20px] lg:text-2xl'>Resbonsive Design</span>
                            </div>
                            <p className='text-gray-400 text-[13px]' id='skills'>
                            I Create Resbonsive Website Based On Your Ready-Made Design<br/>
                            Business Card Website. I Will Make It Look Great And Work Smoothly On Any Device.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service