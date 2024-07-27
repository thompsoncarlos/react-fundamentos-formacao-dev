import Cabecalho from '@/components/Cabecalho'
import '../app/globals.css'
import Conteudo from '@/components/Conteudo'
import Menu from '@/components/Menu'
import Pagina from '@/components/Pagina'

export default function TestePagina() {

  function executar() {
    console.log("O botão foi pressionado")
  }

  return (
    <Pagina 
      titulo="Minha Página" 
      subtitulo="Estou na pasta pages"
    >
      <button
        onClick={executar} 
        className='bg-blue-500 p-2 rounded-lg'
      >
          Teste
      </button>
    </Pagina>
  )
}