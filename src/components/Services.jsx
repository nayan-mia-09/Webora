import React from 'react'
import assets from '../assets/assets';
import Title from './Title';
import ServicesCard from './ServicesCard';

const Services = () => {

    const service = [
  {
    title: "Web Development",
    description: "We build responsive and high-performance websites tailored to your business needs.",
    icon: assets.ads_icon
  },
  {
    title: "UI/UX Design",
    description: "We create modern, user-friendly designs that improve user experience and engagement.",
    icon: assets.content_icon
  },
  {
    title: "Digital Marketing",
    description: "We help grow your brand with SEO, social media marketing, and targeted advertising.",
    icon: assets.social_icon
  },
  {
    title: "App Development",
    description: "We develop scalable and secure mobile applications for Android and iOS platforms.",
    icon: assets.marketing_icon
  }
];
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

        <Title title='How can we help?' desc='From stratregy to execution, we craft digital solutions that move your buisness forward.'/>

        <div className='flex flex-col md:grid grid-cols-2'>
            {service.map((service,index)=>(
                <ServicesCard key={index} service={service} index={index}/>
            ))}
        </div>
      
    </div>
  )
}

export default Services
