//  ------------------------------ | LIST GROUP - DISABLED | ------------------------------  //

export default function ListGroupDisabled() {
  return (
    <ul className="divide-border-border divide-y rounded-lg border border-border bg-card">
      <li className="px-6.25 py-4 opacity-50 select-none">
        Cras justo odio ( disabled )
      </li>
      <li className="px-6.25 py-4">Dapibus ac facilisis in</li>
      <li className="px-6.25 py-4 opacity-50 select-none">
        Morbi leo risus ( disabled )
      </li>
      <li className="px-6.25 py-4">Porta ac consectetur ac</li>
      <li className="px-6.25 py-4">Vestibulum at eros</li>
    </ul>
  )
}
