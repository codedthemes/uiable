// shadcn
import { Card } from "@/components/ui/card"

//  ------------------------------ | CARD - IMAGE OVERLAY | ------------------------------  //

export default function CardImageOverlay() {
  return (
    <Card className="group relative h-87 overflow-hidden">
      <img
        className="h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110"
        src="https://cdn.uiable.com/component/card-sample.png"
        alt="Card background image"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-slate-800/90 to-transparent p-6">
        <h5 className="text-white">Card title</h5>
        <p className="mt-4 mb-3 max-w-[80%] leading-relaxed text-white/90">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="text-xs text-white/70">Last updated 3 mins ago</p>
      </div>
    </Card>
  )
}
