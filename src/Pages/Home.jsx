import { lazy, Suspense } from 'react';
import { FadeLoader } from 'react-spinners';
const Header = lazy (() => import ('../Components/Header'));
const Service = lazy (() => import ('../Components/Service'));
const Skill = lazy (() => import ('../Components/Skill'));
const Portfolio = lazy (() => import ('../Components/Portfolio'));
const Contact = lazy (() => import ('../Components/Contact'));

const Home = () => {
    return (
        <div>
            <Suspense fallback={<div className='bg-[#0A0F1F] h-screen text-7xl items-center justify-center'><FadeLoader className='text-[#FF6F91]' size={50} /></div>}>
                <Header className="box"/>
            </Suspense>
            <Suspense fallback={<div className='bg-[#0A0F1F] h-screen text-7xl items-center justify-center'><FadeLoader className='text-[#FF6F91]' size={50} /></div>}>
                <Service className="box"/>
            </Suspense>
            <Suspense fallback={<div className='bg-[#0A0F1F] h-screen text-7xl items-center justify-center'><FadeLoader className='text-[#FF6F91]' size={50} /></div>}>
                <Skill className="box"/>
            </Suspense>
            <Suspense fallback={<div className='bg-[#0A0F1F] h-screen text-7xl items-center justify-center'><FadeLoader className='text-[#FF6F91]' size={50} /></div>}>
                <Portfolio className="box"/>
            </Suspense>
            <Suspense fallback={<div className='bg-[#0A0F1F] h-screen text-7xl items-center justify-center'><FadeLoader className='text-[#FF6F91]' size={50} /></div>}>
                <Contact className="box"/>
            </Suspense>
        </div>
    )
}

export default Home