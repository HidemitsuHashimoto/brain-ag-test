type DashItemProps = {
  children: React.ReactNode
  direction?: 'row' | 'col'
  width?: string
}
export default function DashItem({ children, direction = 'row', width = 'w-1/2' }: DashItemProps) {
  return (
    <li className={`flex flex-${direction} items-center gap-4 border-2 rounded-md p-4 ${width}`}>
      {children}
    </li>
  )
}