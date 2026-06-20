//  ------------------------------ | LIST GROUP - CUSTOM CONTENT | ------------------------------  //

export default function ListGroupCustomContent() {
  return (
    <div className="rounded-lg divide-y divide-border-border  border border-border  bg-card overflow-hidden">
      <a
        href="#!"
        aria-current="true"
        className="block py-4 px-6.25 bg-primary text-primary-foreground group"
      >
        <div className="flex w-full justify-between items-center mb-1">
          <h5 className="font-bold text-lg text-white">
            List group item heading
          </h5>
          <small className="opacity-80">3 days ago</small>
        </div>
        <p className="mb-1 text-sm opacity-90 leading-relaxed">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small className="opacity-80">Donec id elit non mi porta.</small>
      </a>
      <a
        href="#!"
        className="block py-4 px-6.25 hover:bg-muted/50 transition-colors"
      >
        <div className="flex w-full justify-between items-center mb-1">
          <h5 className="font-bold text-lg">List group item heading</h5>
          <small className="text-muted-foreground">3 days ago</small>
        </div>
        <p className="mb-1 text-sm text-muted-foreground leading-relaxed">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small className="text-muted-foreground">
          Donec id elit non mi porta.
        </small>
      </a>
      <a
        href="#!"
        className="block py-4 px-6.25 hover:bg-muted/50 transition-colors"
      >
        <div className="flex w-full justify-between items-center mb-1">
          <h5 className="font-bold text-lg">List group item heading</h5>
          <small className="text-muted-foreground">3 days ago</small>
        </div>
        <p className="mb-1 text-sm text-muted-foreground leading-relaxed">
          Donec id elit non mi porta gravida at eget metus. Maecenas sed diam
          eget risus varius blandit.
        </p>
        <small className="text-muted-foreground">
          Donec id elit non mi porta.
        </small>
      </a>
    </div>
  );
}
