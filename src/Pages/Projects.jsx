import { lazy , Suspense } from 'react';
import { FadeLoader } from 'react-spinners';
const Allprojects = lazy(() => import ('../Components/Allprojects'));

const Projects = () => {
    return (
        <div>
            <Suspense fallback={<div className='bg-[#0A0F1F] h-[100vh] flex items-center justify-center'><FadeLoader color='#FF6F91' /></div>}>
                <Allprojects className="box"/>
            </Suspense>
        </div>
    )
}

export default Projects