import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJsSquare, FaReact, } from 'react-icons/fa'
import { IoLogoVercel } from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'
import { TbBrandRedux } from 'react-icons/tb'

const Skill = (props) => {
    
    return (
        <section className='bg-[#0A0F1F]'>
            <div className="h-[1px] bg-gray-600"></div>
                <div className={`container mx-auto px-[5%] ${props.className}`}>
                    <h4 className='words text-3xl py-10 '>SKILLS</h4>
                    <div className="flex items-center flex-col w-full text-white text-[20px] pb-20">
                        <span>The Skills, Tools And Technolo I Use </span>
                        <div className="flex flex-col mt-10">
                            <div className="flex justify-center gap-4 mb-5">
                                <FaHtml5 className='shadow-2xl shadow-[#4A90E2]' color='#E34F26' size={40}/>
                                <FaCss3Alt className='shadow-2xl shadow-[#4A90E2]' color='#1572B6' size={40}/>
                                <FaJsSquare className='shadow-2xl shadow-[#4A90E2]' color='#F7DF1E' size={40}/>
                                <FaReact className='shadow-2xl shadow-[#4A90E2]' color='#61DAFB' size={40}/>
                                <TbBrandRedux className='shadow-2xl shadow-[#4A90E2]' color='#764ABC' size={40}/>
                                <RiTailwindCssFill className='shadow-2xl shadow-[#4A90E2]' color='#06B6D4' size={40}/>
                            </div>
                            <div className="flex justify-center gap-4">
                                <FaBootstrap className='shadow-2xl shadow-[#4A90E2]' color='#7952B3' size={40}/>
                                <IoLogoVercel className='shadow-2xl shadow-[#4A90E2]' color='#000000' size={40}/>
                                <FaGithub className='shadow-2xl shadow-[#4A90E2]' color='white' size={40}/>
                                <FaGitAlt className='shadow-2xl shadow-[#4A90E2]' color='#F05032' size={40}/>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="h-[1px] bg-gray-600"></div>
        </section>
    )
}

export default Skill