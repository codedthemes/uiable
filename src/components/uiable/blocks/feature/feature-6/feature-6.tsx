// assets
import {
  Bell,
  CloudLightning,
  Fingerprint,
  Moon,
  WifiOff,
  Zap,
} from "lucide-react"

//  ------------------------------ | FEATURE - 6 | ------------------------------  //

export default function Feature6() {
  const features = [
    {
      title: "Cloud Sync",
      subtitle: "Always Up to Date",
      icon: CloudLightning,
      description:
        "Sync your data instantly across all your devices. Never worry about losing progress or outdated files.",
    },
    {
      title: "Offline Mode",
      subtitle: "Work from Anywhere",
      icon: WifiOff,
      description:
        "Access and edit your documents or track tasks even when you are offline. Syncs automatically when back online.",
    },
    {
      title: "Smart Notifications",
      subtitle: "Never Miss an Update",
      icon: Bell,
      description:
        "Get real-time push notifications for critical updates, comments, and task assignments, customizable to your preferences.",
    },
    {
      title: "Biometric Security",
      subtitle: "Secure by Design",
      icon: Fingerprint,
      description:
        "Protect your sensitive data with fingerprint or facial recognition support, ensuring maximum privacy and safety.",
    },
    {
      title: "Dark Mode Support",
      subtitle: "Easy on Your Eyes",
      icon: Moon,
      description:
        "Enjoy a fully responsive and optimized dark mode designed to reduce eye strain and conserve mobile battery life.",
    },
    {
      title: "Quick Actions",
      subtitle: "Efficiency at Hand",
      icon: Zap,
      description:
        "Perform common actions in a single tap with customizable shortcuts and interactive widgets on your home screen.",
    },
  ]
  return (
    <section className="py-24 sm:py-32">
      <div className="relative isolate">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-5 sm:gap-12">
            <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
              <h2 className="text-lg font-medium text-slate-800 sm:text-3xl dark:text-slate-50">
                Powerful Features of Our Mobile App
              </h2>
              <p className="max-w-150 text-slate-600 dark:text-slate-100">
                Designed for seamless on-the-go productivity, our mobile app
                brings all the essential tools to your fingertips. Stay
                connected, work offline, and manage your tasks effortlessly.
              </p>
            </div>
            <div className="grid grid-cols-12 gap-4">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="col-span-12 md:col-span-6 lg:col-span-4"
                >
                  <div className="relative h-full overflow-hidden rounded-lg bg-card p-5 shadow-[0_0_40px_-8px_#4680ff38] md:p-6 dark:shadow-none">
                    <div className="absolute top-0 right-0 z-20">
                      <div className="rounded-bl-lg bg-red-500 p-4">
                        <feature.icon className="size-6 stroke-[1.5] text-white md:stroke-2" />
                      </div>
                    </div>
                    <div className="relative z-40 flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-medium text-slate-800 sm:text-xl dark:text-slate-50">
                          {feature.title}
                        </h2>
                        <p className="text-base font-medium text-slate-400 dark:text-slate-500">
                          {feature.subtitle}
                        </p>
                      </div>
                      <p className="text-slate-600 dark:text-slate-100">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <img
                src="https://cdn.uiable.com/block/feature-device.png"
                alt="img"
                className="relative z-20 h-auto w-full"
              />
              <img
                src="https://cdn.uiable.com/block/feature-device-shadow.png"
                alt="img"
                className="absolute -top-10 left-0 z-10 h-auto w-full"
              />
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-red-500 from-10% via-pink-500 via-30% to-rose-500 to-90% opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-red-500 from-10% via-pink-500 via-30% to-rose-500 to-90% opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </section>
  )
}
