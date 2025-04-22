import { useState , lazy, useEffect, Suspense } from 'react';
import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider , Outlet } from 'react-router';
const Home = lazy (() => import ('./Pages/Home'));
const Projects = lazy (() => import ('./Pages/Projects'));
const Navbar = lazy (() => import ('./Components/Navbar'));
const Footer = lazy (() => import ('./Components/Footer'));
import './App.css'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },4000)
  },[])
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='projects' element={<Projects/>}/>
      </Route>
    </Route>
  ))
  return (
    <div>
      {loading ? <div className="flex items-center justify-center h-[100vh] bg-gradient-to-l from-[#0D1B2A] to-[#0A0F1F]">
        <h1 className='name text-[40px] font-serif md:text-7xl '>
          <span>O</span>
          <span>M</span>
          <span>A</span>
          <span>R</span>
          <span className='mx-2'></span>
          <span>K</span>
          <span>A</span>
          <span>M</span>
          <span>A</span>
          <span>L</span>
        </h1>
      </div> : <Suspense><RouterProvider router={router}/></Suspense>}
    </div>
  )
}

export default App