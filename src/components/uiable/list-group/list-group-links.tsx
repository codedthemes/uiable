//  ------------------------------ | LIST GROUP - LINKS | ------------------------------  //

export default function ListGroupLinks() {
  return (
    <div className="divide-border-border divide-y overflow-hidden rounded-lg border border-border bg-card">
      <a
        href="#!"
        className="block px-6.25 py-4 transition-colors hover:bg-muted/50"
      >
        Cras justo odio
      </a>
      <a
        href="#!"
        aria-current="true"
        className="block bg-primary px-6.25 py-4 text-primary-foreground"
      >
        Dapibus ac facilisis in
      </a>
      <a
        href="#!"
        className="block px-6.25 py-4 transition-colors hover:bg-muted/50"
      >
        Morbi leo risus
      </a>
      <a
        href="#!"
        className="block px-6.25 py-4 transition-colors hover:bg-muted/50"
      >
        Porta ac consectetur ac
      </a>
      <a
        href="#!"
        className="pointer-events-none block px-6.25 py-4 opacity-50"
        tabIndex={-1}
      >
        Vestibulum at eros ( disabled )
      </a>
    </div>
  )
}
