import Pagina from "@/components/Pagina";

export default function Page() {
  return (
    <Pagina titulo="Minha Aplicação" subtitulo="Melhor app da Web">
      <div>
        <h1 className="text-red-500 text-6xl font-bold">Título</h1>
        <h2 className="text-green-500 text-4xl">Subtítulo </h2>
      </div>
    </Pagina>
  )
}