import { IconSitemap, IconFileCheck, IconBraces, IconFunction, IconCode, IconH1, IconBrandJavascript } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div className={`
      flex flex-col justify-start 
      p-2 text-3xl w-72 gap-2`}>
      <span className="text-sm text-zinc-500 pl-3 pt-4">Fundamentos</span>
      <MenuItem icone={<IconBraces />} texto="JSX com JS" url="/fundamentos/soma"/>
      <MenuItem icone={<IconFunction />} texto="JSX: Chamando Funções" url="/fundamentos/funcoes"/>
      <MenuItem icone={<IconFileCheck />} texto="Página Next" url="/fundamentos/pagina"/>
      <MenuItem icone={<IconSitemap />} texto="Página Pages" url="/pagina"/>

      <span className="text-sm text-zinc-500 pl-3 pt-4">Componentes</span>
      <MenuItem icone={<IconCode />} texto="Básico" url="/componentes/basico"/>
      <MenuItem icone={<IconH1 />} texto="Título" url="/componentes/titulo"/>
      <MenuItem icone={<IconBrandJavascript />} texto="JS com JSX" url="/componentes/trecho"/>
    </div>
  )
}