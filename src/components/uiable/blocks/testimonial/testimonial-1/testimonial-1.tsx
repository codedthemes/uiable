// shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// assets
import { Heart, MessageCircle, Reply } from "lucide-react"

// constant
const testimonials = [
  {
    name: "Sarah Connor",
    avatar: "https://cdn.uiable.com/block/profile-1.png",
    position: "Lead DevOps Engineer",
    description:
      "This platform has completely transformed how our team manages deployment workflows. The onboarding is incredibly fast and intuitive.",
    likes: 133,
    replies: 34,
    comments: 67,
  },
  {
    name: "Emily Watson",
    avatar: "https://cdn.uiable.com/block/profile-4.png",
    position: "Product Manager at TechFlow",
    description:
      "Automating our repetitive tasks has saved us hours of manual coordination. We can now focus on what truly matters.",
    likes: 92,
    replies: 12,
    comments: 45,
  },
  {
    name: "Marcus Aurelius",
    avatar: "https://cdn.uiable.com/block/profile-5.png",
    position: "Chief Operations Officer",
    description:
      "Having instant access to detailed insights and performance metrics has empowered our team to make data-driven decisions confidently.",
    likes: 245,
    replies: 56,
    comments: 89,
  },
  {
    name: "Aria Montgomery",
    avatar: "https://cdn.uiable.com/block/profile-6.png",
    position: "Senior UX Designer",
    description:
      "Collaboration is seamless here. Real-time updates and shared workspaces have bridged the gap between our design and dev teams.",
    likes: 110,
    replies: 28,
    comments: 53,
  },
  {
    name: "Sophia Martinez",
    avatar: "https://cdn.uiable.com/block/profile-7.png",
    position: "Director of Security",
    description:
      "Security is paramount for us. The advanced encryption and role-based access controls keep our sensitive client data fully protected.",
    likes: 85,
    replies: 18,
    comments: 37,
  },
  {
    name: "James Wilson",
    avatar: "https://cdn.uiable.com/block/profile-8.png",
    position: "Integration Architect",
    description:
      "The pre-built integrations made it incredibly easy to connect all of our existing tools without breaking any workflows.",
    likes: 120,
    replies: 31,
    comments: 50,
  },
]
//  ------------------------------ | TESTIMONIAL 1 | ------------------------------  //

export default function Testimonial1() {
  return (
    <section className="bg-slate-100 py-24 sm:py-32 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:gap-12">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
              Success stories unveiled
            </h2>
            <p className="max-w-150 text-slate-600 dark:text-slate-100">
              Explore success stories that highlight how our solutions have
              helped businesses overcome challenges, improve efficiency, and
              achieve measurable growth. These real-world examples demonstrate
              the impact of innovation and collaboration.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-4">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="col-span-12 lg:col-span-6">
                <div className="relative h-full overflow-hidden rounded-lg bg-card p-5 shadow-[0_0_40px_-8px_#4680ff38] sm:p-8 dark:shadow-none">
                  <div className="flex flex-row gap-4">
                    <Avatar className="size-20! shrink-0">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name.split(" ")[0].charAt(0) +
                          testimonial.name.split(" ")[1].charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grow">
                      <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-0.5">
                          <div className="text-lg font-medium text-slate-800 dark:text-slate-50">
                            {testimonial.name}
                          </div>
                          <p className="text-base font-medium text-slate-400 dark:text-slate-500">
                            {testimonial.position}
                          </p>
                        </div>
                        <p className="text-slate-600 dark:text-slate-100">
                          {testimonial.description}
                        </p>
                        <div className="flex flex-row flex-wrap items-center gap-5 text-slate-500">
                          <div className="flex flex-row items-center gap-1">
                            <Heart className="size-4 text-rose-500" />
                            <span>{testimonial.likes}</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <Reply className="size-4 text-sky-500" />
                            <span>{testimonial.replies}</span>
                          </div>
                          <div className="flex flex-row items-center gap-1">
                            <MessageCircle className="size-4 text-lime-500" />
                            <span>{testimonial.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
