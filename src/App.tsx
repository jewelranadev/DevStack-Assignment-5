import NavBar from './component/NavBar'
import Hero from './component/Hero'
import TechnologySection from './component/TechnologySection'
import Footer from './component/Footer'
import { Suspense } from 'react'
import type { TechType } from './component/techType'
import { ToastContainer } from 'react-toastify'


const technologyFetch = async ():Promise<TechType[]> => {
  const res = await fetch('/technologies.json');
  const data = await res.json();
  return data;
}

function App() {
  const technologyPomise = technologyFetch();

  return (
    <>
      <NavBar/>
      <Hero/>
      <Suspense fallback={<h2 className="mt-4 text-gray-500">Loading..........</h2>}>
        <TechnologySection technologyPromise={technologyPomise} />
      </Suspense>
      <Footer/>
      <ToastContainer position='top-right' autoClose={2000} />
    </>
  )
}

export default App
