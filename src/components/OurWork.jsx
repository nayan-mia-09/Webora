import React from 'react'
import Title from './Title'
import assets from '../assets/assets';

const OurWork = () => {

const workData = [
  {
    title: "Web Design",
    description: "Modern and responsive website designs tailored to your brand and audience.",
    image: assets.work_dashboard_management
  },
  {
    title: "Frontend Development",
    description: "Interactive and high-performance user interfaces built with the latest technologies.",
    image: assets.work_fitness_app
  },
  {
   title: "Mobile App Marketing",
   description: "Promoting your mobile application to increase downloads, user engagement, and brand visibility.",
   image: assets.work_mobile_app
  }
];
  return (
    <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white '>

        <Title title='Our latest work' desc='From strategy to execution, we craft digital solutions that move your buisness forward.'/>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
            {
                workData.map((work,index)=>(
                    <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                        <img src={work.image} alt="" className='w-full rounded-xl' />
                        <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                        <p className='text-sm opacity-60 w-5/6'>{work.description}</p>

                    </div>
                ))
            }

        </div>
      
    </div>
  )
}

export default OurWork
