import { data } from 'autoprefixer'
import React from 'react'
import Heading from '../Heading'
import ProcessData from './ProcessData'
const Process = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <Heading title='work process' />
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            ProcessData.map((data, index) => (
              <div key={index} className='bg-blue py-5 px-2 rounded text-center shadow-lg'>
                <img
                  src={data.img}
                  className="max-h-[250px] max-w-[250px] mb-3 mx-auto"
                  alt={data.title}
                />
                <h3 className="text-xl font-medium leading-10 text-white py-2">
                  {data.title}
                </h3>
                <p className="leading-8 text-white">
                  {data.desc}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Process