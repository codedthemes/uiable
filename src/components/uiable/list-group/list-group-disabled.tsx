//  ------------------------------ | LIST GROUP - DISABLED | ------------------------------  //

export default function ListGroupDisabled() {
  return (
    <ul className="rounded-lg divide-y divide-border-border  border border-border  bg-card">
      <li className="py-4 px-6.25 opacity-50 select-none">
        Cras justo odio ( disabled )
      </li>
      <li className="py-4 px-6.25">Dapibus ac facilisis in</li>
      <li className="py-4 px-6.25 opacity-50 select-none">
        Morbi leo risus ( disabled )
      </li>
      <li className="py-4 px-6.25">Porta ac consectetur ac</li>
      <li className="py-4 px-6.25">Vestibulum at eros</li>
    </ul>
  );
}
