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
            <Suspense fallback={<div className='bg-[#0A0F1F] h-[100vh] flex items-center justify-center'><FadeLoader color='#FF6F91' /></div>}>
                <Header/>
            </Suspense>
            <Suspense fallback={<div className='bg-[#0A0F1F] h-[100vh] flex items-center justify-center'><FadeLoader color='#FF6F91' /></div>}>
                <Service/>
            </Suspense>
            <Suspense fallback={<div className='bg-[#0A0F1F] h-[100vh] flex items-center justify-center'><FadeLoader color='#FF6F91' /></div>}>
                <Skill/>
            </Suspense>
            <Suspense fallback={<div className='bg-[#0A0F1F] h-[100vh] flex items-center justify-center'><FadeLoader color='#FF6F91' /></div>}>
                <Portfolio/>
            </Suspense>
            <Suspense fallback={<div className='bg-[#0A0F1F] h-[100vh] flex items-center justify-center'><FadeLoader color='#FF6F91' /></div>}>
                <Contact/>
            </Suspense>
        </div>
    )
}

export default Home