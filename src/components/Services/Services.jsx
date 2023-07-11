import React from 'react'
import Heading from '../Heading'
import ServiceItems from './ServiceItems'
import { servicesData } from '../../data/data'
const Services = () => {
  return (
    <section name='services' className="py-20 bg-light-bg scroll-pt-24 ">
      <div className="max-w-[1200px] mx-auto px-4">
        <Heading  title=' our services'/>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            servicesData.map((item, index) => (
              <ServiceItems key={index} item={item} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services