'use client'

import { useCallback, useState } from 'react'
import ImageViewer from 'react-simple-image-viewer'
import { ICertificate } from '@/utils/interface/Certificate'
import { motion } from 'framer-motion'
import { RiFileCopyLine } from 'react-icons/ri'
import { BiShow } from 'react-icons/bi'
import { IoLinkSharp } from 'react-icons/io5'
import TextSection from '@/components/common/TextSection'

const localCertificates: ICertificate[] = [
  {
    title: 'JavaScript Fundamentals',
    company: 'Udemy',
    type: 'course',
    href: 'https://www.udemy.com/certificate/1234567',
    image: 'https://i.pinimg.com/1200x/65/00/15/650015861555389db8196b4deac90ac6.jpg',
  },
  {
    title: 'Full-Stack Web Development',
    company: 'Coursera',
    type: 'competence',
    href: 'https://www.coursera.org/certificate/7654321',
    image: 'https://i.pinimg.com/1200x/52/19/d9/5219d9b3f4606ed553479e91b2b9b8d2.jpg',
  },
  {
    title: 'React Native for Beginners',
    company: 'LinkedIn Learning',
    type: 'course',
    href: 'https://www.linkedin.com/certificate/9876543',
    image: 'https://i.pinimg.com/1200x/91/0d/75/910d75fd32c0addef11ae5a24a89814a.jpg',
  },
]

export default function Education() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  const handleClipboard = (href: string) => {
    navigator.clipboard.writeText(href)
  }

  const handleLink = (href: string) => {
    window.open(href, '_blank')
  }

  return (
    <div className="xl:px-40 2xl:px-64">
      <TextSection icon="" text="My Education" classNames="mb-10 text-center" />
      <div className="flex flex-wrap items-center justify-center gap-5">
        {localCertificates.map(
          ({ title, company, type, href, image }: ICertificate, index: number) => (
            <motion.div
              key={index}
              whileInView={{ scale: 1 }}
              initial={{ scale: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="flex h-40 w-full max-w-[288px] cursor-pointer flex-col justify-between rounded-xl border-2 border-storm-text bg-background p-4 shadow-midnight transition-all hover:scale-105 xl:w-72"
            >
              <div>
                <h1 className="text-frost-light text-xl font-bold">{title}</h1>
                <p className="text-secondary-text">{company}</p>
              </div>
              <div className="flex justify-between gap-2">
                <p className="flex h-fit items-center justify-center rounded-xl bg-midnight p-2 text-center text-xs font-semibold text-frost-light">
                  {type}
                </p>
                <div className="flex gap-2">
                  <BiShow
                    className="rounded-full bg-deep-sea p-2 text-4xl text-frost-light hover:bg-frost-gray"
                    onClick={() => openImageViewer(index)}
                  />
                  <RiFileCopyLine
                    className="rounded-full bg-deep-sea p-2 text-4xl text-frost-light hover:bg-frost-gray"
                    onClick={() => handleClipboard(href)}
                  />
                  <IoLinkSharp
                    className="rounded-full bg-deep-sea p-2 text-4xl text-frost-light hover:bg-frost-gray"
                    onClick={() => handleLink(href)}
                  />
                </div>
              </div>
            </motion.div>
          ),
        )}
      </div>

      {isViewerOpen && (
        <ImageViewer
          src={localCertificates.map((item) => item.image)}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          backgroundStyle={{ zIndex: 9999 }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  )
}
