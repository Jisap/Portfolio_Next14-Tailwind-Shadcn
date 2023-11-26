'use client'

import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'
import 'swiper/css/pagination'


const reviewsData = [
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Richar Thompson',
    job: 'Chef',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud '
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: 'Evelyn Anderson',
    job: 'Interior Designer',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud '
  },
  {
    avatar: '/reviews/avatar-3.png',
    name: 'John Doe',
    job: 'Game Dev',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud '
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: 'Emily Smith',
    job: 'Therapist',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud '
  },
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Oliver Taylor',
    job: 'Engineer',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud '
  },
  {
    avatar: '/reviews/avatar-2.png',
    name: 'Mason Wilson',
    job: 'Video Editor',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud '
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 mx-auto">Reviews</h2>
        {/* slider */}
        <Swiper
          slidesPerrView={1}
          breakpoints={{
            640: { slidesPerView:2 },
            1400: { slidesPerView: 3},
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true
          }}
          className="h-[350px]"
        >
          {
            reviewsData.map((person, index) => {
              return (
                <SwiperSlide key={index}>
                  <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                    <CardHeader className="p-0 mb-10">
                      <div>
                        {/* image */}
                        <Image />
                      </div>
                    </CardHeader>
                    <CardDescription className="text-lg text-muted-foreground">
                      {person.review}
                    </CardDescription>
                  </Card>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Reviews