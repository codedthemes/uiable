"use client"

import { useEffect, useState } from "react"

// shadcn
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireDescription,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

//  ------------------------------ | QUESTIONNAIRE - RESUME | ------------------------------  //

export function QuestionnaireResume() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  const handleFormChange = (e: React.SyntheticEvent<HTMLFormElement>) => {
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<
      string,
      string
    >
    localStorage.setItem("questionnaire-resume-data", JSON.stringify(data))
  }

  // Avoid hydration mismatch and don't render until mounted
  if (!isMounted) return null

  // Load the last visited step and saved data from localStorage
  const savedItem = localStorage.getItem("questionnaire-resume-step") || "role"
  let savedData: Record<string, string> = {}
  const savedValues = localStorage.getItem("questionnaire-resume-data")

  if (savedValues) {
    try {
      savedData = JSON.parse(savedValues)
    } catch {
      savedData = {}
    }
  }

  return (
    <div className="w-full max-w-md">
      <Questionnaire
        defaultItem={savedItem}
        onItemChange={(item) =>
          localStorage.setItem("questionnaire-resume-step", item)
        }
        onChange={handleFormChange}
        onSubmit={(e) => {
          e.preventDefault()
          const data = Object.fromEntries(new FormData(e.currentTarget))
          console.log("Submitted:", data)
          // Clear saved state after completion
          localStorage.removeItem("questionnaire-resume-step")
          localStorage.removeItem("questionnaire-resume-data")
          alert("Submitted! Progress cleared.")
        }}
      >
        <QuestionnaireProgress className="mb-4 self-start" />

        <QuestionnaireItem name="role">
          <QuestionnaireTitle>What is your primary role?</QuestionnaireTitle>
          <QuestionnaireDescription>
            Your progress is saved automatically. Try selecting an option and
            refreshing!
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice
              value="developer"
              defaultChecked={savedData.role === "developer"}
            >
              Developer
            </QuestionnaireChoice>
            <QuestionnaireChoice
              value="designer"
              defaultChecked={savedData.role === "designer"}
            >
              Designer
            </QuestionnaireChoice>
            <QuestionnaireChoice
              value="manager"
              defaultChecked={savedData.role === "manager"}
            >
              Manager
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireActions>
            <QuestionnaireNext />
          </QuestionnaireActions>
        </QuestionnaireItem>

        <QuestionnaireItem name="experience">
          <QuestionnaireTitle>Years of experience?</QuestionnaireTitle>
          <QuestionnaireDescription>
            If you refresh the page now, you will resume right here on step 2
            with your previous answers saved.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice
              value="junior"
              defaultChecked={savedData.experience === "junior"}
            >
              0-2 years
            </QuestionnaireChoice>
            <QuestionnaireChoice
              value="mid"
              defaultChecked={savedData.experience === "mid"}
            >
              3-5 years
            </QuestionnaireChoice>
            <QuestionnaireChoice
              value="senior"
              defaultChecked={savedData.experience === "senior"}
            >
              5+ years
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireActions>
            <QuestionnairePrevious />
            <QuestionnaireNext />
          </QuestionnaireActions>
        </QuestionnaireItem>

        <QuestionnaireItem name="stack">
          <QuestionnaireTitle>Favorite framework?</QuestionnaireTitle>
          <QuestionnaireDescription>
            Submitting will clear your saved session.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice
              value="nextjs"
              defaultChecked={savedData.stack === "nextjs"}
            >
              Next.js
            </QuestionnaireChoice>
            <QuestionnaireChoice
              value="svelte"
              defaultChecked={savedData.stack === "svelte"}
            >
              SvelteKit
            </QuestionnaireChoice>
            <QuestionnaireChoice
              value="remix"
              defaultChecked={savedData.stack === "remix"}
            >
              Remix
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireActions>
            <QuestionnairePrevious />
            <QuestionnaireSubmit />
          </QuestionnaireActions>
        </QuestionnaireItem>
      </Questionnaire>
    </div>
  )
}
