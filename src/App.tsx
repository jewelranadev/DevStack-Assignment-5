import NavBar from './component/NavBar'
import Hero from './component/Hero'
import TechnologySection from './component/TechnologySection'
import { Suspense } from 'react'
import type { TechType } from './component/techType'


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
      <Suspense fallback={<h2>Loading..........</h2>}>
        <TechnologySection technologyPromise={technologyPomise} />
      </Suspense>
      
    </>
  )
}

export default App
