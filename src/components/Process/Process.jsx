import { data } from 'autoprefixer'
import React from 'react'
import Heading from '../Heading'
import { processData } from '../../data/data'
import ProcessItems from './ProcessItems'
const Process = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <Heading title='work process' />
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            processData.map((item, index) => (
               <ProcessItems key={index} item={item}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Process