'use client'

import TextSection from '@/components/common/TextSection'
import { twMerge } from 'tailwind-merge'
import { techIcons } from '@/utils/constant/TechIcons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ExperienceTimeline from '@/components/common/ExperienceTimelime'
import { experience } from '@/utils/constant/Experience'
import { LinkPreview } from '@/components/common/LinkPreview'

export default function About() {
  const fadeInAnimationVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.05 * index,
      },
    }),
  }

  return (
    <section className="text-secondary-text">
      <TextSection icon="" text="it's More About Me." />
      <div className="mx-auto mb-12 mt-8 flex flex-col items-center justify-center md:gap-10 lg:flex-row">
        <div className="border-primary-text relative aspect-auto h-60 w-60 items-baseline justify-center rounded-3xl border-4 bg-midnight object-cover shadow-image-card shadow-midnight md:h-96 md:w-1/2 xl:w-96">
          <div className="midnight-primary-text border-primary-text bg-primary-text absolute right-0 flex h-12 w-16 translate-x-8 translate-y-6 items-center justify-center rounded-t-xl rounded-br-xl border-4 shadow-image-card md:h-16 md:w-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-12 md:w-12"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path
                  strokeDasharray={48}
                  strokeDashoffset={48}
                  d="M17 9v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9z"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.6s"
                    values="48;0"
                  />
                </path>
                <path
                  strokeDasharray={14}
                  strokeDashoffset={14}
                  d="M17 14H20C20.55 14 21 13.55 21 13V10C21 9.45 20.55 9 20 9H17"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.6s"
                    dur="0.2s"
                    values="14;28"
                  />
                </path>
              </g>
            </svg>
          </div>
          <Image
            src={'/me.jpeg'}
            alt="Picture of the author"
            width={1000}
            height={1000}
            className="aspect-auto h-full w-full rounded-lg object-cover px-8"
          />
        </div>
        <p className="mt-5 text-justify text-base text-frost-gray md:mt-0 lg:w-1/2 xl:text-lg">
          I am a 2nd year student majoring in <b>MIPA</b> at SMAN 1 Kedunggalar.
          I have a strong understanding of programming languages ​​and web
          development, as well as hands-on experience in software development
          projects. My current focus is to deepen my knowledge in the field of
          web development & libnary.
          <br />
          <br />I have hands-on experience with <b>ReactJS</b> and <b>NextJS</b>{' '}
          for frontend. and using <b>ExpressJS</b>, <b>AdonisJS</b> for backend
          development. I am also learning <b>Kotlin</b> for android development.{' '}
        </p>
      </div>
      <TextSection
        icon=""
        text="My Experience"
        classNames="mb-10 text-center"
      />
      <div className="mx-auto mb-10 flex grid-cols-9 flex-col p-2 text-blue-50 md:grid">
        {experience.map((data, index: number) => (
          <ExperienceTimeline position={index % 2 == 1} key={index} {...data} />
        ))}
      </div>
      <TextSection
        icon=""
        classNames="mt-10 xl:mt-28"
        text="Tech Stack That I Use."
      />
      <div className="mt-5 flex flex-wrap justify-center justify-items-center gap-5 xl:gap-10 xl:px-40">
        {/* <TechTabs /> */}
        {techIcons.map((data, index) => {
          const Icons = data.icons
          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="animate"
              variants={fadeInAnimationVariants}
              viewport={{ once: true }}
              custom={index}
              className={twMerge(
                `flex h-24 w-24 flex-col items-center justify-center gap-y-2 rounded-2xl border-2 bg-white duration-150 hover:scale-105 hover:border-black-primary hover:shadow-button-card md:h-36 md:w-36 md:p-4`,
              )}
            >
              <Icons
                className={twMerge(`text-4xl text-black-primary md:text-6xl`)}
              />
              <p className="text-base font-bold text-black-primary md:text-xl">
                {data.name}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
