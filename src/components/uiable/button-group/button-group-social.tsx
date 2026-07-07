"use client"

import { useState } from "react"
import { motion } from "framer-motion"

// shadcn
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Separator } from "@/components/ui/separator"

// assets
import { Heart, MessageCircle } from "lucide-react"

//  ------------------------------ | BUTTON GROUP - SOCIAL | ------------------------------  //

export default function ButtonGroupSocial() {
  const [liked, setLiked] = useState(true)

  return (
    <ButtonGroup>
      <Button
        variant="link"
        className="text-dark no-underline hover:no-underline"
        onClick={() => setLiked(!liked)}
      >
        <motion.span
          animate={{
            scale: liked ? [1, 0.7, 1.35, 0.9, 1] : 1,
            rotate: liked ? [0, -10, 10, -5, 5, 0] : 0,
          }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="me-1 inline-flex items-center justify-center"
        >
          <Heart
            className={liked ? "fill-red-500 text-red-500" : "text-dark"}
          />
        </motion.span>
        1.5k Likes
      </Button>
      <Separator orientation="vertical" className="my-1.5" />
      <Button
        variant="link"
        className="text-dark no-underline hover:no-underline"
      >
        <MessageCircle className="me-1" />
        25 Comments
      </Button>
    </ButtonGroup>
  )
}
