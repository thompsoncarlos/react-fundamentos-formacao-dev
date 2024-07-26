export default function Page() {

  function renderizarTitulo() {
    return (
      <div>
        <h1>Título</h1>
        <h2>Subtítulo</h2>
      </div>
    )
  }

  function renderizarConteudo() {
    return (
      <ul>
        <li>Carlos</li>
        <li>Miguel</li>
        <li>Matheus</li>
      </ul>
    )
  }

  return (
    <div>
      {renderizarTitulo()}
      <hr />
      {renderizarConteudo()}
    </div>
  )
}