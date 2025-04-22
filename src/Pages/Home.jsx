import { lazy } from 'react';
const Header = lazy (() => import ('../Components/Header'));
const Service = lazy (() => import ('../Components/Service'));
const Skill = lazy (() => import ('../Components/Skill'));
const Portfolio = lazy (() => import ('../Components/Portfolio'));
const Contact = lazy (() => import ('../Components/Contact'));

const Home = () => {
    return (
        <div>
            <Header className="box"/>
            <Service className="box"/>
            <Skill className="box"/>
            <Portfolio className="box"/>
            <Contact className="box"/>
        </div>
    )
}

export default Home