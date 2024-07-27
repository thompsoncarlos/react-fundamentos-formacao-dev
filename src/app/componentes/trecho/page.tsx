import Pagina from "@/components/Pagina"

export default function Page() {
  // let trecho = <h1>Trecho #2"</h1>
  const trechos = [
    <div key="1">Trecho #1</div>,
    <div key="2">Trecho #2</div>,
    <div key="3">Trecho #3</div>
  ]

  return (
    <Pagina titulo="Minha Aplicação" subtitulo="Melhor app da Web">
      {trechos[2]}
    </Pagina>
  )
}