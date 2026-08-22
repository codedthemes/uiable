const users = [
  {
    name: "Sarah Connor",
    avatar: "https://cdn.uiable.com/block/profile-1.png",
    mail: "sarah.connor@example.com",
    colorClass: "bg-pink-500",
  },
  {
    name: "Michael Chen",
    avatar: "https://cdn.uiable.com/block/profile-2.png",
    mail: "michael.chen@example.com",
    colorClass: "bg-rose-900",
  },
  {
    name: "David Ross",
    avatar: "https://cdn.uiable.com/block/profile-3.png",
    mail: "david.ross@example.com",
    colorClass: "bg-red-600",
  },
  {
    name: "Emily Watson",
    avatar: "https://cdn.uiable.com/block/profile-4.png",
    mail: "emily.watson@example.com",
    colorClass: "bg-slate-400",
  },
  {
    name: "Marcus Aurelius",
    avatar: "https://cdn.uiable.com/block/profile-5.png",
    mail: "marcus.aurelius@example.com",
    colorClass: "bg-amber-800",
  },
  {
    name: "Aria Montgomery",
    avatar: "https://cdn.uiable.com/block/profile-6.png",
    mail: "aria.montgomery@example.com",
    colorClass: "bg-amber-500",
  },
  {
    name: "Sophia Martinez",
    avatar: "https://cdn.uiable.com/block/profile-7.png",
    mail: "sophia.martinez@example.com",
    colorClass: "bg-sky-400",
  },
  {
    name: "James Wilson",
    avatar: "https://cdn.uiable.com/block/profile-8.png",
    mail: "james.wilson@example.com",
    colorClass: "bg-blue-600",
  },
]
//  ------------------------------ | TEAM 4 | ------------------------------  //

export default function Team4() {
  return (
    <section className="bg-slate-100 py-24 sm:py-32 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 sm:gap-12">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
              Our Professional Team
            </h2>
            <p className="max-w-150 text-slate-600 dark:text-slate-100">
              Meet the talented individuals behind our platform. Our team
              combines expert skills with a passion for innovation to deliver
              exceptional results and accelerate your success.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-4">
            {users.map((user, idx) => (
              <div
                key={idx}
                className="col-span-12 md:col-span-6 lg:col-span-3"
              >
                <div className="relative h-full overflow-hidden rounded-[24px] bg-card shadow-[0_0_40px_-8px_#4680ff38] dark:shadow-none">
                  <div
                    className={
                      "absolute inset-0 rounded-[24px] " + user.colorClass
                    }
                  ></div>
                  <div className="relative z-20 rounded-[22px] border-4 border-card bg-card/85 p-2">
                    <div className="flex flex-col gap-0">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="aspect-square size-full object-cover"
                      />
                      <div className="relative z-10 -mt-1 flex flex-col gap-1 rounded-[12px] bg-card p-6">
                        <h2 className="text-lg font-medium text-slate-800 sm:text-xl dark:text-slate-50">
                          {user.name}
                        </h2>
                        <a href={`mailto:${user.mail}`} className="group">
                          <p className="text-base font-medium text-slate-400 group-hover:text-slate-700 dark:text-slate-500 dark:group-hover:text-slate-300">
                            {user.mail}
                          </p>
                        </a>
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
