import React from 'react'
import Heading from '../Heading'
import ClientsData from './ClientsData';

const Clients = () => {
  return (
    <section name='reviews' className="py-20 bg-light-bg">
      <div className="max-w-[1200px] mx-auto px-4">
        <Heading title=' satisfied clients' />
          <ClientsData />
      </div>
    </section>
  )
}

export default Clients