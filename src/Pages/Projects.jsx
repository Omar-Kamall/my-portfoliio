import { lazy } from 'react';

const Allprojects = lazy(() => import ('../Components/Allprojects'));

const Projects = () => {
    return (
        <div>
            <Allprojects className="box"/>
        </div>
    )
}

export default Projects