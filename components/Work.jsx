'use client'

import Link from "next/link"
import { Button } from "./ui/button"

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import ProjectCard from "./ProjectCard"

const projectDAta = [
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Nexa Website',
    description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Cunque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'react js',
    name: 'Solstice Website',
    description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Cunque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'Next js',
    name: 'Lumina Website',
    description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Cunque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'Next js',
    name: 'Evolve Website',
    description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Cunque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'next js',
    name: 'Ignite Website',
    description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Cunque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'next js',
    name: 'Envision Website',
    description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Cunque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'fullstack',
    name: 'Serenity Website',
    description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Cunque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'fullstack',
    name: 'Nova Website',
    description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Cunque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'fullstack',
    name: 'Zenith Website',
    description: 'Lorem impsum dolor sit amet consectetur adipisicing elit. Cunque, quis.',
    link: '/',
    github: '/',
  },
]

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col 
        justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem, impsum dolor sit amet conectetur adipisicing elit.
          </p>
          <Link href='/projects'>
            <Button>
              All Projects
            </Button>
          </Link>
        </div>

        {/* slider */}
        <div>
          <Swiper>
            
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work