export default function Page() {
  const nome = "Thompson"
  const idade = 40
  return (
    <div>
      <div>{nome} {idade}</div>
      <div>{20+10}</div>
      <div>{idade * 3}</div>
      <div>{1 + (Math.random())}</div>
    </div>
  )
}