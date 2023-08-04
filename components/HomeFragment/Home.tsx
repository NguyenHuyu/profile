'use client'
import React from 'react'
import Image from 'next/image'
import { BiLogoGithub, BiLogoFacebookSquare } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  const [introRef, introInView] = useInView({
    triggerOnce: true,
    fallbackInView: true
  })
  return (
    <div className='relative w-full max-w-full xl:max-w-screen-xl mx-auto top-4 md:top-14'>
      <div className='absolute inset-0 mr-3.5 bg-gradient-to-r from-red-600 to-red-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl'></div>
      <div className='relative bg-gradient-to-r from-[#e9f3ff] to-[#74dbfd] shadow-lg sm:rounded-3xl opacity-95 z-20'>
        <div className='flex items-center justify-start pt-6 pl-6'>
          <span className='w-3 h-3 bg-red-400 rounded-full mr-2'></span>
          <span className='w-3 h-3 bg-yellow-400 rounded-full mr-2'></span>
          <span className='w-3 h-3 bg-green-400 rounded-full mr-2'></span>
        </div>
        <div className='md:px-2 py-6 min-h-[60vh] flex flex-col md:flex-row items-center justify-around gap-10'>
          <div className='lg:2/5 xl:w-2/5  lg:ml-16 text-left space-y-4'>
            <Element name='intro'>
              <div
                style={{
                  opacity: 0,
                  transform: 'translateX(-160px)',
                  transition: 'opacity 2s, transform 2s',
                  ...(introInView && {
                    opacity: 1,
                    transform: 'translateX(0)'
                  })
                }}
                ref={introRef}
              >
                <div className='text-center md:text-left text-sm md:text-lg font-semibold text-gray-900 leading-none  '>
                  Welcome !
                </div>
              </div>
            </Element>

            <Element name='intro'>
              <div
                style={{
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: 'opacity 2s, transform 2s',
                  ...(introInView && {
                    opacity: 1,
                    transform: 'translateY(0)'
                  })
                }}
                ref={introRef}
              >
                <h1 className='py-2 text-center md:text-left text-4xl md:text-4xl xl:text-5xl font-semibold text-gray-900 leading-none  text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-red-700'>
                  NGUYỄN MINH HUY
                </h1>
              </div>
            </Element>

            <Element name='intro'>
              <div
                style={{
                  opacity: 0,
                  transform: 'translateY(-30px)',
                  transition: 'opacity 2s, transform 2s',
                  ...(introInView && {
                    opacity: 1,
                    transform: 'translateY(0)'
                  })
                }}
                ref={introRef}
              >
                <div className='relative text-center md:text-left mt-6 text-xl font-semibold  antialiased text-transparent  bg-clip-text bg-gradient-to-r from-red-700 to-red-500 hover:to-cyan-500'>
                  Web Developer
                  <Image src='/bug.svg' width={15} height={10} alt='bug' className='absolute top-0 left-52' />
                </div>
              </div>
            </Element>

            <Element name='intro'>
              <div
                style={{
                  opacity: 0,
                  transform: 'translateX(300px)',
                  transition: 'opacity 2s, transform 2s',
                  ...(introInView && {
                    opacity: 1,
                    transform: 'translateX(0)'
                  })
                }}
                ref={introRef}
              >
                <div className='flex justify-center md:justify-start gap-10 mt-6 '>
                  <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                    <BiLogoGithub size={30} />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                    <BiLogoFacebookSquare size={30} />
                  </motion.div>
                </div>
              </div>
            </Element>
          </div>

          <Element name='intro'>
            <div
              style={{
                opacity: 0,
                transform: 'translateX(50px)',
                transition: 'opacity 2s, transform 2s',
                ...(introInView && {
                  opacity: 1,
                  transform: 'translateX(0)'
                })
              }}
              ref={introRef}
            >
              <div className='md:w-96 w-40 '>
                <Image
                  src='/avt.jpeg'
                  width={1000}
                  height={1000}
                  alt='nguyen-minh-huy'
                  className='rounded-lg shadow-2xl'
                />
              </div>
            </div>
          </Element>
        </div>
      </div>
    </div>
  )
}
