'use client'
import { useTheme } from 'next-themes'
import GitHubCalendar from 'react-github-calendar'

export function GithubStats() {
  const { theme } = useTheme()
  return (
    <div className="border-deep-sea hover:shadow-deep-sea cursor-pointer rounded-lg border-4 bg-white p-4 shadow-image-card duration-150 hover:shadow-button-card dark:bg-black">
      <GitHubCalendar
        username="DeaGaWaras"
        blockSize={15}
        blockMargin={5}
        colorScheme={theme === 'dark' ? 'dark' : 'light'}
      />
    </div>
  )
}
