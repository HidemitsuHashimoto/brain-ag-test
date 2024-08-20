type TabButtonProps = {
  active: boolean;
  text: string;
  onChange: () => void;
}
export default function TabButton({ active, text, onChange }: TabButtonProps) {
  return (
    <button className={`border-2 border-cyan-50 rounded-md py-2 px-4 ${active ? 'bg-gray-500' : 'bg-black'} hover:bg-gray-400`} onClick={onChange}>{text}</button>
  )
}