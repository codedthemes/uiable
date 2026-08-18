//  ------------------------------ | LIST GROUP - CUSTOM CONTENT | ------------------------------  //

export default function ListGroupCustomContent() {
  return (
    <div className="divide-border-border divide-y overflow-hidden rounded-lg border border-border bg-card">
      <a
        href="#!"
        aria-current="true"
        className="group block bg-primary px-6.25 py-4 text-primary-foreground"
      >
        <div className="mb-1 flex w-full items-center justify-between">
          <h5 className="text-lg font-bold text-white">
            List group item heading
          </h5>
          <small className="opacity-80">3 days ago</small>
        </div>
        <p className="mb-1 text-sm leading-relaxed opacity-90">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small className="opacity-80">Donec id elit non mi porta.</small>
      </a>
      <a
        href="#!"
        className="block px-6.25 py-4 transition-colors hover:bg-muted/50"
      >
        <div className="mb-1 flex w-full items-center justify-between">
          <h5 className="text-lg font-bold">List group item heading</h5>
          <small className="text-muted-foreground">3 days ago</small>
        </div>
        <p className="mb-1 text-sm leading-relaxed text-muted-foreground">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small className="text-muted-foreground">
          Donec id elit non mi porta.
        </small>
      </a>
      <a
        href="#!"
        className="block px-6.25 py-4 transition-colors hover:bg-muted/50"
      >
        <div className="mb-1 flex w-full items-center justify-between">
          <h5 className="text-lg font-bold">List group item heading</h5>
          <small className="text-muted-foreground">3 days ago</small>
        </div>
        <p className="mb-1 text-sm leading-relaxed text-muted-foreground">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small className="text-muted-foreground">
          Donec id elit non mi porta.
        </small>
      </a>
    </div>
  )
}
