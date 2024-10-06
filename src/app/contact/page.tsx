'use client'
import TextSection from '@/components/common/TextSection'
import { logoLinks } from '@/utils/constant/LogoLinks'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="xl:px-64">
      <TextSection icon="" text="Find Me On." classNames="mb-10" />
      <div className="flex flex-row flex-wrap justify-center gap-10 2xl:justify-start">
        {logoLinks.map((data, index) => {
          const Icon = data.icon
          return (
            <motion.a
              whileInView={{ scale: 1 }}
              initial={{ scale: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="border-primary-text text-primary-text flex h-16 w-52 cursor-pointer items-center gap-5 rounded-xl border-2 bg-frost1-primary p-3 shadow-button-card transition-all duration-200 hover:scale-105 hover:shadow-midnight"
              key={index}
              href={data.href}
            >
              <Icon />
              <p className="font-semibold">{data.name}</p>
            </motion.a>
          )
        })}
      </div>
    </div>
  )
}
