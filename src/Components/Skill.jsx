import { useEffect } from 'react'
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJsSquare, FaReact, } from 'react-icons/fa'
import { IoLogoVercel } from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'
import { TbBrandRedux } from 'react-icons/tb'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiFirebase } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
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
        <section className='bg-[#0A0F1F]'>
            <div className="h-[1px] bg-gray-600"></div>
                <div className={`container mx-auto px-[5%]`}>
                    <h4 className='words text-3xl py-10 box'>SKILLS</h4>
                    <div className="flex items-center flex-col w-full text-white text-[20px] pb-20">
                        <span className='box'>The Skills, Tools And Technolo I Use </span>
                        <div className="flex flex-col mt-10">
                            <div className="flex justify-center gap-4 mb-5 box">
                                <FaHtml5 className='shadow-2xl shadow-[#4A90E2]' color='#E34F26' size={40} title='Html'/>
                                <FaCss3Alt className='shadow-2xl shadow-[#4A90E2]' color='#1572B6' size={40} title='Css'/>
                                <FaJsSquare className='shadow-2xl shadow-[#4A90E2]' color='#F7DF1E' size={40} title='Js'/>
                                <FaReact className='shadow-2xl shadow-[#4A90E2]' color='#61DAFB' size={40} title='React js'/>
                                <TbBrandRedux className='shadow-2xl shadow-[#4A90E2]' color='#764ABC' size={40} title='Redux js'/>
                                <RiTailwindCssFill className='shadow-2xl shadow-[#4A90E2]' color='#06B6D4' size={40} title='Tailwind Css'/>
                            </div>
                            <div className="flex justify-center gap-4 mb-5 box">
                                <FaBootstrap className='shadow-2xl shadow-[#4A90E2]' color='#7952B3' size={40} title='Bootstrp'/>
                                <IoLogoVercel className='shadow-2xl shadow-[#4A90E2]' color='#000000' size={40} title='Vercel'/>
                                <FaGithub className='shadow-2xl shadow-[#4A90E2]' color='white' size={40} title='Github'/>
                                <FaGitAlt className='shadow-2xl shadow-[#4A90E2]' color='#F05032' size={40} title='Git'/>
                            </div>
                            <div className="flex justify-center gap-4 box">
                                <SiFirebase className='shadow-2xl shadow-[#4A90E2]' color='red' size={40} title='Firebase'/>
                                <VscVscode className='shadow-2xl shadow-[#4A90E2]' color='#4A90E2' size={40} title='Vs Code'/>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="h-[1px] bg-gray-600"></div>
        </section>
    )
}

export default Skill