"use client"

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
  QuestionnaireSkip,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

//  ------------------------------ | QUESTIONNAIRE - SKIPPPABLE | ------------------------------  //

export function QuestionnaireSkippable() {
  return (
    <div className="w-full max-w-md">
      <Questionnaire
        onSubmit={(e) => {
          e.preventDefault()
          const data = Object.fromEntries(new FormData(e.currentTarget))
          console.log(data)
        }}
      >
        <QuestionnaireItem name="color">
          <QuestionnaireTitle>What is your favorite color?</QuestionnaireTitle>
          <QuestionnaireDescription>
            Feel free to skip this question if you want.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="red">Red</QuestionnaireChoice>
            <QuestionnaireChoice value="blue">Blue</QuestionnaireChoice>
            <QuestionnaireChoice value="green">Green</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireActions>
            <QuestionnaireSkip />
            <QuestionnaireNext />
          </QuestionnaireActions>
        </QuestionnaireItem>

        <QuestionnaireItem name="likes_shadcn">
          <QuestionnaireTitle>Do you like Shadcn UI?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="yes">
              Yes, absolutely
            </QuestionnaireChoice>
            <QuestionnaireChoice value="no">Not really</QuestionnaireChoice>
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
