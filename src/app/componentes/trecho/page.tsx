export default function Page() {
  // let trecho = <h1>Trecho #2"</h1>
  const trechos = [
    <>
    <div key="1">Trecho #1</div>
    <div key="2">Trecho #2</div>,
    <div key="3">Trecho #3</div>,
    </>
  ]

  return trechos[2]
}