"use client"

import { useMemo, useState } from "react"

// third party
import { AnimatePresence, motion } from "framer-motion"

// assets
import { CheckCircle2, ListTodo, Trash2 } from "lucide-react"

// shadcn
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"

interface TodoItem {
  id: string
  text: string
  completed: boolean
}

const INITIAL_TODOS: TodoItem[] = [
  { id: "todo-1", text: "Refactor sidebar component layout", completed: true },
  {
    id: "todo-2",
    text: "Implement custom color themes for checkboxes",
    completed: true,
  },
  {
    id: "todo-3",
    text: "Design indeterminate state for checkbox group",
    completed: false,
  },
  {
    id: "todo-4",
    text: "Integrate todo-list variant in the registry",
    completed: false,
  },
  {
    id: "todo-5",
    text: "Write unit tests for interactive interactions",
    completed: false,
  },
]

//  ------------------------------ | CHECKBOX - TODO LIST | ------------------------------  //

export function CheckboxTodoList() {
  const [todos, setTodos] = useState<TodoItem[]>(INITIAL_TODOS)

  const completedCount = useMemo(
    () => todos.filter((t) => t.completed).length,
    [todos]
  )
  const totalCount = todos.length
  const progressPercent =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  const handleToggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const handleClearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }

  return (
    <div className="mx-auto w-full max-w-[440px] rounded-lg border border-border bg-popover/40 p-5">
      {/* Header and Progress section */}
      <div className="mb-5 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="size-7 rounded-sm after:rounded-sm after:border-none">
              <AvatarFallback className="rounded-sm bg-primary/10 text-primary">
                <ListTodo className="size-4" />
              </AvatarFallback>
            </Avatar>
            <h3 className="text-base font-semibold text-foreground">
              Task Manager
            </h3>
          </div>
          <Badge variant="secondary" className="rounded-full font-medium">
            {completedCount}/{totalCount} Completed
          </Badge>
        </div>

        {/* Progress Bar */}
        <Progress
          value={progressPercent}
          className="w-full flex-col items-stretch gap-1.5"
        >
          <div className="flex w-full items-center justify-between text-xs font-medium text-muted-foreground">
            <ProgressLabel className="text-xs font-medium text-muted-foreground">
              Progress
            </ProgressLabel>
            <ProgressValue className="ml-auto text-xs font-medium text-muted-foreground" />
          </div>
        </Progress>
      </div>

      {/* Todo List Items */}
      <div className="max-h-[300px] min-h-[150px] space-y-1.5 overflow-y-auto pr-1">
        <AnimatePresence initial={false} mode="popLayout">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  transition: { duration: 0.15 },
                }}
                layout
                className="group/todo flex items-center justify-between rounded-lg border border-border/40 bg-card/60 p-2.5 transition-all hover:border-border hover:bg-card"
              >
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <Checkbox
                    id={todo.id}
                    checked={todo.completed}
                    onCheckedChange={() => handleToggleTodo(todo.id)}
                    className="shrink-0"
                  />
                  <label
                    htmlFor={todo.id}
                    className={`relative flex-1 cursor-pointer truncate pr-4 text-sm font-medium select-none ${
                      todo.completed
                        ? "text-muted-foreground/60 transition-colors duration-300"
                        : "text-foreground"
                    }`}
                  >
                    {todo.text}
                    {/* Dynamic line-through animation */}
                    <motion.span
                      className="absolute top-1/2 left-0 h-[1px] -translate-y-1/2 bg-muted-foreground/60"
                      initial={{ width: 0 }}
                      animate={{ width: todo.completed ? "100%" : "0%" }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    />
                  </label>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="ms-1 size-7 shrink-0 rounded-md text-muted-foreground/80 opacity-0 transition-all group-hover/todo:opacity-100 hover:bg-destructive/10 hover:text-destructive focus:opacity-100"
                >
                  <Trash2 className="size-3.5" />
                </Button>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center gap-2 py-10 text-center"
            >
              <CheckCircle2 className="size-8 stroke-[1.5] text-muted-foreground/60" />
              <p className="text-xs font-medium text-muted-foreground">
                No tasks found
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Info */}
      <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs text-muted-foreground">
        {completedCount > 0 && (
          <button
            type="button"
            onClick={handleClearCompleted}
            className="font-medium transition-colors hover:text-foreground hover:underline"
          >
            Clear completed
          </button>
        )}
      </div>
    </div>
  )
}
