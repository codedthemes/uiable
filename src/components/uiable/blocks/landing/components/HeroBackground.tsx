"use client"

// project-imports
import MoltenMetal from "@/components/animation/MoltenMetal"

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-10">
      <div className="absolute inset-0 z-10 bg-card/90"></div>
      <MoltenMetal
        color1="#ffffff"
        color2="#00786f"
        color3="#ffffff"
        colorMode="molten"
        speed={0.45}
        scale={7.3}
        detail={5}
        glow={3}
        coreSize={0.09}
        swirl={0.75}
        fold={-0.31}
        blackPoint={0.14}
        brightness={1.3}
        opacity={1}
        grain
        grainIntensity={0}
        mouseInteraction
        mouseStrength={1}
      />
    </div>
  )
}
