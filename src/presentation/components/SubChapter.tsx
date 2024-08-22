type SubChapterProps = {
  text: string;
  classStyle?: string;
}
export function SubChapter({ text, classStyle = '' }: SubChapterProps) {
  return <h2 className={`text-xl ${classStyle}`}>{text}</h2>
}