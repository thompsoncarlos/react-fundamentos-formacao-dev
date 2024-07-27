export default function Conteudo(props: any ) {
  return (
    <div className={`
      flex items-start flex-1
      text-3xl p-4
      bg-zinc-900
    `}>
      {props.children}
    </div>
  )
}