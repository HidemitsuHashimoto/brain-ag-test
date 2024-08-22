type ProducerCardActionProps = {
  text: string;
  onClick: () => void;
}
export default function ProducerCardAction({ text, onClick }: ProducerCardActionProps) {
  return (
    <button className="border-2 rounded-md p-2 hover:bg-slate-600" onClick={onClick}>{text}</button>
  )
}