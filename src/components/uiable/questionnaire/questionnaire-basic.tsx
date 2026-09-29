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
  QuestionnaireSubmit,
  QuestionnaireTitle,
} from "@/components/ui/questionnaire"

//  ------------------------------ | QUESTIONNAIRE - BASIC | ------------------------------  //

export function QuestionnaireBasic() {
  return (
    <div className="w-full max-w-md">
      <Questionnaire
        onSubmit={(e) => {
          e.preventDefault()
          const data = Object.fromEntries(new FormData(e.currentTarget))
          console.log(data)
        }}
      >
        <QuestionnaireItem name="project-type">
          <QuestionnaireTitle>
            What kind of projects do you work on?
          </QuestionnaireTitle>
          <QuestionnaireDescription>
            Select the option that best describes your work.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="web">
              Web Development
            </QuestionnaireChoice>
            <QuestionnaireChoice value="mobile">
              Mobile Apps
            </QuestionnaireChoice>
            <QuestionnaireChoice value="desktop">
              Desktop Apps
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireActions>
            <QuestionnaireNext />
          </QuestionnaireActions>
        </QuestionnaireItem>

        <QuestionnaireItem name="tools" multiple>
          <QuestionnaireTitle>What are your favorite tools?</QuestionnaireTitle>
          <QuestionnaireDescription>
            Select all that apply.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="react">React</QuestionnaireChoice>
            <QuestionnaireChoice value="vue">Vue</QuestionnaireChoice>
            <QuestionnaireChoice value="svelte">Svelte</QuestionnaireChoice>
            <QuestionnaireChoice value="angular">Angular</QuestionnaireChoice>
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
