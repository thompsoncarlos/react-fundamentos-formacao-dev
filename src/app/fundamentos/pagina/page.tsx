import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Rodape from "@/components/Rodape";
import Menu from "@/components/Menu";
import Pagina from "@/components/Pagina";

export default function Page() {
  const ano = new Date().getFullYear()

  return (
    <Pagina titulo="Minha Aplicação" subtitulo="Melhor app da Web">
      <ul className="list-disc pl-8">
        <li>Carlos</li>
        <li>Liana</li>
        <li>Miguel</li>
        <li>Matheus</li>
      </ul>
    </Pagina>
  )
}