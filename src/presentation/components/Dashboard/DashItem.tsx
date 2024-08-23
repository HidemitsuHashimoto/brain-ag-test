type DashItemProps = {
  children: React.ReactNode
  direction?: 'row' | 'col'
}
export default function DashItem({ children, direction = 'row' }: DashItemProps) {
  return (
    <li className={`flex flex-${direction} items-center gap-4 border-2 rounded-md p-4 w-1/2`}>
      {children}
    </li>
  )
}