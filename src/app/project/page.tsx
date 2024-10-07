'use client'

import ProjectCard from '@/components/common/ProjectCard'
import TextSection from '@/components/common/TextSection'
import { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { GithubStats } from '@/components/common/GithubStats'
import projectsData from '@/Assets/projects.json' // Import local JSON file
import { IProject } from '@/utils/interface/Project'

export default function Project() {
  const [filter, setFilter] = useState('all')
  const [data, setData] = useState<IProject[]>([]) 
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<null | Error>(null)

  useEffect(() => {
    const fetchData = () => {
      try {
        setData(projectsData as unknown as IProject[]) // Cast to IProject[]
        setIsLoading(false)
      } catch (err) {
        setError(err as Error)
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <TextSection icon="" text="it's My Projects." />
      <div>
        <div className="my-10 hidden justify-center md:flex">
          <GithubStats />
        </div>
        <div className="my-4 flex justify-center gap-4 font-semibold text-storm-text dark:text-frost-light sm:gap-6 md:gap-8 lg:gap-4">
          <button
            className="group relative flex cursor-pointer flex-col items-start justify-center"
            onClick={() => setFilter('all')}
          >
            <span
              className={`absolute bottom-0 h-1 ${filter === 'all' ? 'w-full' : 'w-0'} rounded-md bg-deep-sea transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
            <p>All {filter === 'all' && `(${data.length})`}</p>
          </button>
          {/* Add buttons for filtering web, mobile, api */}
        </div>
      </div>
      <div className="mb-2 mt-6 flex w-full flex-wrap justify-center gap-4 sm:mb-4 md:mb-5 lg:mb-6 lg:gap-6">
        {!isLoading &&
          !error &&
          data
            .slice(0)
            .reverse()
            .filter((item) => {
              if (filter === 'all') return true
              if (filter === 'mobile') return ['android', 'ios', 'flutter', 'mobile'].includes(item.type)
              if (filter === 'web') return item.type === 'web'
              if (filter === 'api') return item.type === 'api'
              return item.type === filter
            })
            .map((item, index) => <ProjectCard {...item} key={index} />)}
        {isLoading && (
          <div className="flex w-3/4 flex-row items-center justify-center">
            <Skeleton
              height={160}
              width={320}
              count={12}
              containerClassName="flex gap-2 flex-row items-center justify-center w-full flex-wrap"
            />
          </div>
        )}
        {error && <p className="text-center">Error ...</p>}
      </div>
    </div>
  )
}
