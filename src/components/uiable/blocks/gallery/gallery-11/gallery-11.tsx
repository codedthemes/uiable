"use client"

import { useState } from "react"

// next
import Link from "next/link"

// shadcn
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

// third-party
import { cn } from "cn"
import { AnimatePresence, motion } from "framer-motion"

// assets
import {
  ArrowRight,
  Clock,
  Code,
  Palette,
  PlayCircle,
  RotateCcw,
  Search,
  SearchX,
  Star,
  Store,
} from "lucide-react"

type CourseLevel = "Beginner" | "Intermediate" | "Advanced"

interface Course {
  slug: string
  title: string
  description: string
  image: string
  category: string
  level: CourseLevel
  duration: string
  lessons: number
  rating: number
  learners: string
  instructor: string
  progress: number | null
}

interface CourseCardProps {
  course: Course
}

const glass = cn(
  "border bg-[color-mix(in_oklab,var(--card)_62%,transparent)]",
  "border-[color-mix(in_oklab,var(--foreground)_8%,transparent)]",
  "[backdrop-filter:blur(14px)_saturate(140%)]",
  "shadow-[inset_0_1px_0_color-mix(in_oklab,white_55%,transparent),0_8px_30px_-12px_color-mix(in_oklab,var(--foreground)_22%,transparent)]",
  "dark:bg-[color-mix(in_oklab,var(--card)_55%,transparent)]",
  "dark:border-[color-mix(in_oklab,white_10%,transparent)]",
  "dark:shadow-[inset_0_1px_0_color-mix(in_oklab,white_8%,transparent),0_8px_30px_-12px_rgb(0_0_0/0.5)]"
)

const courses: Course[] = [
  {
    slug: "foundations-of-graphic-design",
    title: "Foundations of Graphic Design",
    description:
      "Learn the core principles of visual communication, typography, and layout.",
    image: "https://cdn.uiable.com/block/img-6.jpg",
    category: "Design",
    level: "Beginner",
    duration: "12 Weeks",
    lessons: 48,
    rating: 4.8,
    learners: "12.4k",
    instructor: "Sophia Laurent",
    progress: 45,
  },
  {
    slug: "react-for-beginners",
    title: "React for Beginners",
    description:
      "Build interactive web applications using modern React hooks and components.",
    image: "https://cdn.uiable.com/block/img-7.jpg",
    category: "Code",
    level: "Intermediate",
    duration: "8 Weeks",
    lessons: 36,
    rating: 4.9,
    learners: "24.1k",
    instructor: "Wilsen Pang",
    progress: 10,
  },
  {
    slug: "data-analysis-with-python",
    title: "Data Analysis with Python",
    description:
      "Master pandas, NumPy, and data visualization techniques for real-world datasets.",
    image: "https://cdn.uiable.com/block/img-8.jpg",
    category: "Business",
    level: "Advanced",
    duration: "16 Weeks",
    lessons: 62,
    rating: 4.7,
    learners: "18.9k",
    instructor: "James Raw",
    progress: null,
  },
  {
    slug: "ux-research-essentials",
    title: "UX Research Essentials",
    description:
      "Plan interviews, run usability tests, and turn findings into product decisions.",
    image: "https://cdn.uiable.com/block/img-9.jpg",
    category: "Design",
    level: "Intermediate",
    duration: "6 Weeks",
    lessons: 28,
    rating: 4.6,
    learners: "9.2k",
    instructor: "Sophia Laurent",
    progress: 72,
  },
  {
    slug: "scaling-node-services",
    title: "Scaling Node.js Services",
    description:
      "Design resilient APIs, add caching layers, and ship services that survive traffic spikes.",
    image: "https://cdn.uiable.com/block/img-10.jpg",
    category: "Code",
    level: "Advanced",
    duration: "10 Weeks",
    lessons: 44,
    rating: 4.8,
    learners: "7.6k",
    instructor: "Wilsen Pang",
    progress: null,
  },
  {
    slug: "product-marketing-fundamentals",
    title: "Product Marketing Fundamentals",
    description:
      "Position a product, write messaging that lands, and plan a launch end to end.",
    image: "https://cdn.uiable.com/block/img-11.jpg",
    category: "Business",
    level: "Beginner",
    duration: "5 Weeks",
    lessons: 22,
    rating: 4.5,
    learners: "14.3k",
    instructor: "James Raw",
    progress: null,
  },
]

const courseCategories = [
  "All",
  ...Array.from(new Set(courses.map((course) => course.category))),
]

const emptyStateCategories = [
  { name: "Design & UX", icon: Palette, category: "Design" },
  { name: "Tech & Coding", icon: Code, category: "Code" },
  { name: "Business & Strategy", icon: Store, category: "Business" },
]

function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="group mb-0 flex h-full flex-col overflow-hidden rounded-2xl border-border/60 p-0 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={course.image}
          alt={course.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-foreground/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <Badge
          variant="outline"
          className={cn(
            glass,
            "absolute top-3 right-3 border-transparent font-semibold text-primary"
          )}
        >
          {course.category}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
          <Badge variant="secondary" className="uppercase">
            {course.level}
          </Badge>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock aria-hidden="true" className="size-3.5" /> {course.duration}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <PlayCircle aria-hidden="true" className="size-3.5" />{" "}
            {course.lessons} lessons
          </span>
        </div>

        <h3 className="mb-2 text-lg font-semibold text-foreground">
          <Link
            href={`/courses/${course.slug}`}
            className="after:absolute after:inset-0 hover:text-primary"
          >
            {course.title}
          </Link>
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {course.description}
        </p>

        <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1 font-semibold text-foreground">
            <Star
              aria-hidden="true"
              className="size-3.5 fill-primary text-primary"
            />
            {course.rating}
          </span>
          <span>{course.learners} learners</span>
          <span className="truncate">by {course.instructor}</span>
        </div>

        <div className="relative z-10 mt-auto">
          <Button
            variant="secondary"
            className="w-full"
            nativeButton={false}
            render={<Link href={`/courses/${course.slug}`} />}
          >
            {course.progress !== null ? "Continue Learning" : "Enrol Now"}
          </Button>
        </div>
      </div>
    </Card>
  )
}

//  ------------------------------ | GALLERY 11 | ------------------------------  //

export default function Gallery11() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      activeCategory === "All" || course.category === activeCategory
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const resetFilters = () => {
    setSearchQuery("")
    setActiveCategory("All")
  }

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Find your next course
          </h2>
          <p className="text-muted-foreground">
            Self-paced programmes in design, code, and business — each built and
            taught by someone who does the work.
          </p>
        </div>

        <div className="mb-10 flex flex-col items-center justify-between gap-4 sm:flex-row md:mb-12">
          <div className="flex flex-wrap items-center gap-2">
            {courseCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "relative rounded-full px-5 py-2 text-sm font-medium transition-colors",
                  activeCategory === category
                    ? "text-primary-foreground"
                    : "border border-border bg-transparent text-muted-foreground hover:bg-muted"
                )}
              >
                {activeCategory === category && (
                  <motion.span
                    layoutId="active-course-category"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-64 md:w-80">
            <Search
              aria-hidden="true"
              className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="text"
              placeholder="Search courses"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-full rounded-full pl-9"
            />
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={course.slug}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="mb-6 flex size-24 items-center justify-center rounded-full bg-primary/10">
                <SearchX aria-hidden="true" className="size-10 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Oops! We couldn&apos;t find any courses.
              </h3>
              <p className="mb-8 max-w-lg text-muted-foreground">
                It looks like there are no courses matching &ldquo;
                <strong className="text-foreground">{searchQuery}</strong>
                &rdquo;. Try adjusting your search terms or explore our popular
                categories below.
              </p>
              <div className="mb-16 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button
                  onClick={resetFilters}
                  className="h-12 rounded-full px-6"
                >
                  <RotateCcw aria-hidden="true" className="mr-2 size-4" />
                  Clear Search
                </Button>
                <Button
                  onClick={resetFilters}
                  variant="outline"
                  className="h-12 rounded-full px-6"
                >
                  Browse All Courses
                  <ArrowRight aria-hidden="true" className="ml-2 size-4" />
                </Button>
              </div>

              <div className="w-full text-left">
                <div className="mb-6 flex items-center gap-4">
                  <h4 className="text-lg font-bold text-foreground sm:text-xl">
                    Popular Categories to Explore
                  </h4>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {emptyStateCategories.map((cat) => (
                    <button
                      key={cat.name}
                      onClick={() => {
                        setSearchQuery("")
                        setActiveCategory(cat.category)
                      }}
                      className="flex flex-col items-start gap-4 rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary/50 hover:bg-muted/50"
                    >
                      <div className="rounded-lg bg-primary/10 p-3">
                        <cat.icon
                          aria-hidden="true"
                          className="size-6 text-primary"
                        />
                      </div>
                      <span className="font-semibold text-foreground">
                        {cat.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
