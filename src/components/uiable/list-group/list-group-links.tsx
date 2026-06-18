//  ------------------------------ | LIST GROUP - LINKS | ------------------------------  //

export default function ListGroupLinks() {
  return (
    <div className="rounded-lg divide-y divide-border-border  border border-border  bg-card overflow-hidden">
      <a
        href="#!"
        className="block py-4 px-6.25 transition-colors hover:bg-muted/50"
      >
        Cras justo odio
      </a>
      <a
        href="#!"
        aria-current="true"
        className="block py-4 px-6.25 bg-primary text-primary-foreground"
      >
        Dapibus ac facilisis in
      </a>
      <a
        href="#!"
        className="block py-4 px-6.25 transition-colors hover:bg-muted/50"
      >
        Morbi leo risus
      </a>
      <a
        href="#!"
        className="block py-4 px-6.25 transition-colors hover:bg-muted/50"
      >
        Porta ac consectetur ac
      </a>
      <a
        href="#!"
        className="block py-4 px-6.25 opacity-50 pointer-events-none"
        tabIndex={-1}
      >
        Vestibulum at eros ( disabled )
      </a>
    </div>
  );
}
