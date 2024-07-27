interface RodapeProps {
  textoEsquerdo: string
  textoDireito: string
}

export default function Rodape(props: RodapeProps) {
  return (
    <div className={`
      h-16 border-t bg-zinc-900 border-zinc-800 
      flex justify-between items-center
      text-base px-10 text-zinc-500
    `}>
       <span> {props.textoEsquerdo}</span>
        <span>{props.textoDireito}</span>
    </div>
  )
}