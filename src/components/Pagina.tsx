import AreaLateral from "./AreaLateral";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";

export default function Pagina(props: any) {
  const ano = new Date().getFullYear()
  return (
    <div className="flex h-screen">
      <AreaLateral />
      <div className={`
        flex flex-col flex-1
        text-xl
      `}>
        <Cabecalho
          titulo={props.titulo}
          subtitulo={props.subtitulo}
          className="h-16 bg-zinc-800"
        />
        <Conteudo>
          {props.children}
        </Conteudo>
        <Rodape
          textoEsquerdo="Feito com 🦾 por Thompson"
          textoDireito={`Desenvolvido em ${ano}`}
        />
      </div>
    </div>
  )
}