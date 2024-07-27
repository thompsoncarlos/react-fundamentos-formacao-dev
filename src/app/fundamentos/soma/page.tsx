import Pagina from "@/components/Pagina"

export default function Page() {
  const nome = "Thompson"
  const idade = 40
  return (
    <Pagina titulo="Minha Aplicação" subtitulo="Melhor app da Web">
      <div>
        <div>{nome} {idade}</div>
        <div>{20 + 10}</div>
        <div>{idade * 3}</div>
        <div>{1 + (Math.random())}</div>
      </div>
    </Pagina>
  )
}