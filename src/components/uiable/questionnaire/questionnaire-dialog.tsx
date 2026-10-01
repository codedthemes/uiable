"use client"

import { useState } from "react"

// shadcn
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
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

//  ------------------------------ | QUESTIONNAIRE - DIALOG | ------------------------------  //

export function QuestionnaireDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={<Button variant="outline" className="dark:border-border" />}
      >
        Open Questionnaire
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Questionnaire</DialogTitle>
          <DialogDescription>
            Please complete the following steps.
          </DialogDescription>
        </DialogHeader>

        <Questionnaire
          onSubmit={(e) => {
            e.preventDefault()
            const data = Object.fromEntries(new FormData(e.currentTarget))
            console.log(data)
            setOpen(false)
          }}
        >
          <QuestionnaireProgress
            className="mb-8 w-full"
            render={(props, state) => (
              <div {...props} className="flex w-full flex-col gap-2">
                <h6 className="text-xs font-medium text-muted-foreground">
                  Question {state.current} of {state.total}
                </h6>
                <Progress
                  value={(state.current / state.total) * 100}
                  className="h-2 w-full"
                />
              </div>
            )}
          />

          <QuestionnaireItem name="step-1">
            <div className="space-y-4">
              <div>
                <QuestionnaireTitle>
                  What is your primary goal?
                </QuestionnaireTitle>
                <QuestionnaireDescription>
                  We'll tailor the experience for you.
                </QuestionnaireDescription>
              </div>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="learn">
                  Learn a new skill
                </QuestionnaireChoice>
                <QuestionnaireChoice value="build">
                  Build a project
                </QuestionnaireChoice>
                <QuestionnaireChoice value="design">
                  Design interfaces
                </QuestionnaireChoice>
              </QuestionnaireChoices>
              <QuestionnaireActions>
                <QuestionnaireNext />
              </QuestionnaireActions>
            </div>
          </QuestionnaireItem>

          <QuestionnaireItem name="step-2">
            <div className="space-y-4">
              <QuestionnaireTitle>
                How much time can you commit?
              </QuestionnaireTitle>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="less-5">
                  Less than 5 hours/week
                </QuestionnaireChoice>
                <QuestionnaireChoice value="5-10">
                  5-10 hours/week
                </QuestionnaireChoice>
                <QuestionnaireChoice value="more-10">
                  10+ hours/week
                </QuestionnaireChoice>
              </QuestionnaireChoices>
              <QuestionnaireActions>
                <QuestionnairePrevious />
                <QuestionnaireNext />
              </QuestionnaireActions>
            </div>
          </QuestionnaireItem>

          <QuestionnaireItem name="step-3">
            <div className="space-y-4">
              <div>
                <QuestionnaireTitle>Ready to begin?</QuestionnaireTitle>
                <QuestionnaireDescription>
                  You can change your preferences later.
                </QuestionnaireDescription>
              </div>
              <QuestionnaireChoices>
                <QuestionnaireChoice value="yes">
                  Yes, let's go!
                </QuestionnaireChoice>
                <QuestionnaireChoice value="no">
                  I need a moment
                </QuestionnaireChoice>
              </QuestionnaireChoices>
              <QuestionnaireActions>
                <QuestionnairePrevious />
                <QuestionnaireSubmit />
              </QuestionnaireActions>
            </div>
          </QuestionnaireItem>
        </Questionnaire>
      </DialogContent>
    </Dialog>
  )
}
