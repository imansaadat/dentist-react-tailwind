import React from 'react'
import Heading from './Heading'
const Contact = () => {
  return (
    <section name='contact' className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <Heading title='make appointment' />
          <div className="bg-light-bg p-6 max-w-[30rem] mx-auto rounded">
            <form action="#">
              <div className="flex flex-col mb-4">
                <label className="capitalize text-black mb-1">your name :</label>
                <input
                  type="text"
                  name="name"
                  placeholder="enter your name"
                  className="w-full p-3 outline-none"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="capitalize text-black mb-1">your email :</label>
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  className="w-full p-3 outline-none"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="capitalize text-black mb-1">your number :</label>
                <input
                  type="number"
                  name="number"
                  placeholder="enter your number"
                  className="w-full p-3 outline-none"
                  required
                />
              </div>
              <div className="flex flex-col mb-6">
                <label className="capitalize text-black mb-1"
                  >appointment date :</label
                >
                <input
                  type="datetime-local"
                  name="date"
                  placeholder="enter your name"
                  className="w-full p-3 outline-none"
                  required
                />
              </div>
              <input type="submit" value="make appointment" name="submit"
              className="hidden lg:flex text-white text-center cursor-pointer bg-blue py-4 px-12 rounded
              hover:bg-black"/>
            </form>
          </div>
        </div>
      </section>
  )
}

export default Contact