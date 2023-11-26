'use clien'

import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
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
    <section className="container mx-auto">
      <h2 className="section-title">Reviews</h2>
    </section>
  )
}

export default Reviews