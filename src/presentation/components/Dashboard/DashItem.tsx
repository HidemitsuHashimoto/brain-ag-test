type DashItemProps = {
  children: React.ReactNode
}
export default function DashItem({ children }: DashItemProps) {
  return (
    <li className="flex items-center gap-4 border-2 rounded-md p-4 w-1/2">
      {children}
    </li>
  )
}