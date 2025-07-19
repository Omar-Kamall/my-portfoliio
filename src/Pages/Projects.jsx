import { lazy , Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { FadeLoader } from 'react-spinners';
import { logo } from '../../public/assets';
const Allprojects = lazy(() => import ('../Components/Allprojects'));

const Projects = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="title" content="Omar Kamal - بورتفيليو شخصي" />
                <meta property="og:title" content="Omar Kamal - بورتفيليو شخصي" />
                <meta name="description" content="View my personal work and technical projects on my personal portfolio" />
                <meta property="og:description" content="View my personal work and technical projects on my personal portfolio" />
                <meta name="keywords" content="Omar Kamal , Portfolio , Frontend Developer , Web Developer , Software Engineering , مهندس برمجيات , بورتفيليو , مطور واجهه اماميه ,  عمر كمال" />
                <meta property="og:url" content="https://portfoliio-omar-kamal.vercel.app/" />
                <meta property="og:image" content={logo} />
                <meta name='author' content='Omar Kamal'/>
            </Helmet>
            <Suspense fallback={<div className='bg-[#0A0F1F] h-[100vh] flex items-center justify-center'><FadeLoader color='#FF6F91' /></div>}>
                <Allprojects/>
            </Suspense>
        </>
    )
}

export default Projects