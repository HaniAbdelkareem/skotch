import { ArrowRight } from "lucide-react"
import Link from "next/link"

function Hero() {
  return (
    <div className="max-w-screen-lg py-32 flex flex-col items-center mx-auto">
      <span className="mb-10 rounded-full backdrop-blur-3xl shadow-2xl border-2 border-black/19 bg-opacity-10 tracking-tight px-6 py-1.5 font-semibold text-[0.9rem] text-black/90">
        Give it a star on Github ✨
      </span>
      <div className="text-center">
        <h1 className="text-7xl tracking-tighter font-bold text-black/90">
          Documents & Diagrams for Engineering Teams
        </h1>
        <p className="mt-6 font-medium tracking-tight text-black/60 text-xl/relaxed">
          All-in-one markdown editor, collaborative canvas, and diagram-as-code
          builder.
        </p>
        <Link
          className="flex items-center gap-2 rounded bg-black/90 px-10 py-3 text-base font-medium text-white shadow-2xl focus:outline-none w-fit mx-auto mt-10"
          href="#"
        >
          Get Started
          <ArrowRight size={21} />
        </Link>
      </div>
    </div>
  )
}

export default Hero
