'use client'

import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function ProjectCard({
  image,
  title,
  description,
  repo,
  demo,
  type,
}: any) {
  return (
    <motion.div
      whileInView={{ scale: 1 }}
      initial={{ scale: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="dark:border-dark-secondary border-deep-sea group relative h-36 w-[280px] cursor-pointer overflow-hidden  rounded-lg border-2 object-cover shadow-button-card sm:w-[360px] lg:h-44"
    >
      <Image
        src={`https://drive.google.com/thumbnail?id=${image}&sz=w3000&w=2048&q=75`}
        width={1000}
        height={1000}
        className="h-full w-full object-cover"
        alt="foto"
      />
      <div className="absolute right-0 top-0 z-10 flex h-1/4 w-full -translate-y-10 items-center justify-end gap-2 p-2 transition-all group-hover:translate-y-0">
        {demo != 'none' && (
          <a
            href={demo}
            target={'_blank'}
            className="bg-midnight border-deep-sea hover:bg-deep-sea cursor-pointer rounded-full border-2 p-1.5 text-sm text-black lg:p-2 lg:text-base"
          >
            <FaExternalLinkAlt />
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target={'_blank'}
            className="bg-midnight border-deep-sea hover:bg-deep-sea cursor-pointer rounded-full border-2 p-1.5 text-sm text-black lg:p-2 lg:text-base"
          >
            <FaGithub />
          </a>
        )}
      </div>
      <div className="dark:bg-dark-secondary bg-midnight border-deep-sea absolute bottom-0 h-10 w-full border-t-2 p-2 transition-all duration-300 group-hover:h-[60%] lg:group-hover:h-2/4 ">
        <div className="h-20">
          <h1 className="text-frost-light line-clamp-1 font-bold group-hover:line-clamp-2">
            {title}{' '}
            <span className="w-full rounded-lg bg-black p-1 text-xs text-white">
              {type}
            </span>
          </h1>
          <p className="text-frost-light hidden h-full text-xs font-normal group-hover:block">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
