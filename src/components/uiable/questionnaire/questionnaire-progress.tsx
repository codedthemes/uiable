"use client"

// shadcn
import {
  Questionnaire,
  QuestionnaireActions,
  QuestionnaireChoice,
  QuestionnaireChoices,
  QuestionnaireItem,
  QuestionnaireNext,
  QuestionnairePrevious,
  QuestionnaireProgress,
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

//  ------------------------------ | QUESTIONNAIRE - PROGRESS | ------------------------------  //

export function QuestionnaireProgressVariant() {
  return (
    <div className="w-full max-w-md">
      <Questionnaire
        onSubmit={(e) => {
          e.preventDefault()
          const data = Object.fromEntries(new FormData(e.currentTarget))
          console.log(data)
        }}
      >
        <QuestionnaireProgress
          className="mb-4 self-start"
          render={(props, state) => (
            <div {...props} className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: state.total }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 w-12 rounded-full ${i < state.current ? "bg-primary" : "bg-muted"}`}
                  />
                ))}
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                Checkpoint {state.current} of {state.total}
              </span>
            </div>
          )}
        />

        <QuestionnaireItem name="role">
          <QuestionnaireTitle>What is your primary role?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="developer">
              Developer
            </QuestionnaireChoice>
            <QuestionnaireChoice value="designer">Designer</QuestionnaireChoice>
            <QuestionnaireChoice value="manager">Manager</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireActions>
            <QuestionnaireNext />
          </QuestionnaireActions>
        </QuestionnaireItem>

        <QuestionnaireItem name="experience">
          <QuestionnaireTitle>Years of experience?</QuestionnaireTitle>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="junior">0-2 years</QuestionnaireChoice>
            <QuestionnaireChoice value="mid">3-5 years</QuestionnaireChoice>
            <QuestionnaireChoice value="senior">5+ years</QuestionnaireChoice>
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
