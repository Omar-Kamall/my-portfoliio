import { lazy , Suspense } from 'react';
import { FadeLoader } from 'react-spinners';

const Allprojects = lazy(() => import ('../Components/Allprojects'));

const Projects = () => {
    return (
        <div>
            <Suspense fallback={<div className='bg-[#0A0F1F] h-screen text-7xl items-center justify-center'><FadeLoader className='text-[#FF6F91]' size={50} /></div>}>
                <Allprojects className="box"/>
            </Suspense>
        </div>
    )
}

export default Projects