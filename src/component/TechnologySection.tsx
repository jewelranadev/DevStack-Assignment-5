

import type { TechType } from './techType';

interface TechProps {
    technologyPromise : Promise<TechType[]>
}
export default function TechnologySection({ technologyPromise }: TechProps) {


    console.log(technologyPromise );
    

  return (
    <section className='mx-auto max-w-7xl px-4 py-16'>
        <div>
            <h2 className='text-4xl font-extrabold sm:text-4xl md:text-5xl'>
                Explore <span className='bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent'>The Technologies</span>
            </h2>
            <p className='mt-4 text-gray-500'>
                Pick one technology per category to build your ideal stack.
            </p>
        </div>
        <div className='mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
       
        </div>
    </section>
  )
}
