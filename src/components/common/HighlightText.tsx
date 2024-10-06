export default function HighlightText({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <span className="bg-midnight text-deep-sea inline rounded-sm p-1 font-bold backdrop-blur-sm">
      {children}
    </span>
  )
}
