export default function Cabecalho(props: any) {
  return (
    <div className={`
        bg-purple-500 h-36 rounded-lg
        flex flex-col justify-center items-center
      `}>
      <h1 className="text-3xl font-black">{props.titulo}</h1>
      <h2>{props.subtitulo}</h2>
    </div>
  )
}