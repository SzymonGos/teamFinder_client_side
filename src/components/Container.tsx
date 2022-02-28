export default function Container({ className, children }: { className?: string; children: any}) {
  return <div className={`grid grid-cols-4 gap-x-4 px-3 text-base sm:grid-cols-12 sm:gap-x-6 sm:px-10 ${className}`}>{children}</div>
}