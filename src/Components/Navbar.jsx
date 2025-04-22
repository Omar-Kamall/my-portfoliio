import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoCloseCircle } from 'react-icons/io5';
import { useLocation } from 'react-router';
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import { logo } from '../../public/assets';

const Navbar = () => {
    const location = useLocation();
    const [bar , setBar] = useState(false);
    const [active , setActive] = useState(null);
    const links = [
        {id: 0 , name: "HOME" , to: location.pathname === "/" ? "/#Home" : "/" },
        {id: 1 , name: "SERVICE" , to: location.pathname === "/" ? "#service" : "/#service"},
        {id: 2 , name: "SKILLS" , to: location.pathname === "/" ? "#skills" : "/#skills"},
        {id: 3 , name: "PORTFOLIO" , to: location.pathname === "/" ? "#portfolio" : "/#portfolio"},
        {id: 4 , name: "CONTACT" , to: location.pathname === "/" ? "#contact" : "/#contact"},
        {id: 5 , name: "PROJECTS" , to: "/projects"}
    ]
    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
            setTimeout(() => {
                el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }}
    }, [location]);
    return (
        <nav className='text-white h-10 w-full top-5 z-100 fixed'>
            <div className='container mx-auto px-[5%]'>
                <div className="flex items-center justify-between bg-[#0A0F1F] border-1 border-gray-600 p-5 rounded-2xl">
                    <Link className='text-[18px] hover:text-[#4A90E2] transition duration-300' to="/"><div className="flex items-center"><img className='w-15 h-10' src={logo} alt="Image-Error" loading='lazy' />OMAR KAMAL</div></Link>
                    <div className="hidden lg:flex gap-5">
                        {links.map(link => (
                            <HashLink smooth onClick={() => {setActive(link.id)}} className={`text-[18px] hover:text-[#4A90E2] ${active === link.id ? "text-[#4A90E2]" : ""} transition duration-300`} key={link.id} to={link.to}>{link.name}</HashLink>
                        ))}
                    </div>
                    <div className="lg:hidden">
                        {!bar ? <FaBars onClick={() => setBar(true)} className='hover:text-[#4A90E2] transition duration-300 cursor-pointer' size={25}/> :
                            <IoCloseCircle onClick={() => setBar(false)} className='hover:text-[#4A90E2] transition duration-300 cursor-pointer' size={25}/>
                        }
                    </div>
                </div>
                <div className="flex flex-col items-end lg:hidden">
                    {bar &&
                        <div className="flex flex-col gap-2 w-43 mt-2 bg-[#0A0F1F] border-1 border-gray-600 rounded-2xl p-5">
                            {links.map(link => (
                                <HashLink smooth onClick={() => {setActive(link.id) , setBar(false)}} className={`text-[18px] hover:text-[#4A90E2] ${active === link.id ? "text-[#4A90E2]" : ""} transition duration-300`} key={link.id} to={link.to}>{link.name}</HashLink>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar