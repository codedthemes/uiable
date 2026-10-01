"use client"

// project-imports
import Particles from "@/components/animation/Particles"

export function SeoAnimatedParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Particles
        className=""
        particleColors={["#ffffff"]}
        particleCount={100}
        particleSpread={10}
        speed={0.3}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles
        disableRotation
        pixelRatio={1}
      />
    </div>
  )
}

export default SeoAnimatedParticles
