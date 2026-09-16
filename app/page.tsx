export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* Navigation */}
      <nav className="flex items-start justify-between px-8 pt-14 md:px-14 md:pt-16">
         <img
         src="/logo.svg"
         alt="OncoInference"
         className="h-36 w-auto md:h-40"
         />

       <div className="hidden gap-8 pt-8 text-sm text-zinc-400 md:flex">
         <a href="#problem" className="transition hover:text-white">
         Why OncoInference
         </a>

         <a href="#build" className="transition hover:text-white">
         The Build
         </a>
       </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden px-8 md:px-14">

        {/* subtle background glow */}
        <div className="pointer-events-none absolute right-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-3xl" />

        <div className="relative z-10 max-w-5xl">

          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Precision Oncology
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            Beyond prediction.
            <br />
            <span className="text-zinc-500">Into inference.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            We're building an intelligence layer that connects molecular
            profiles to interpretable therapeutic insights.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="#build"
              className="rounded-full bg-white px-7 py-3.5 text-center text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Explore the build
            </a>

            <a
              href="#problem"
              className="rounded-full border border-zinc-800 px-7 py-3.5 text-center text-sm font-medium text-white transition hover:border-zinc-600"
            >
              Why Oncoinference?
            </a>

          </div>

        </div>
      </section>

      {/* Molecular flow */}
      <section className="border-y border-zinc-900 px-8 py-24 md:px-14">
        <div className="mx-auto max-w-6xl">

          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-600">
            The idea
          </p>

          <h2 className="max-w-3xl text-3xl font-medium leading-tight md:text-5xl">
            From molecular data
            <br />
            to biological understanding.
          </h2>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-900 md:grid-cols-5">

            {[
              "Molecular Data",
              "Tumour State",
              "Response Signals",
              "Resistance Signals",
              "Biological Evidence",
            ].map((item, index) => (
              <div
                key={item}
                className="bg-[#050505] p-7 md:p-8"
              >
                <span className="text-xs text-zinc-700">
                  0{index + 1}
                </span>

                <p className="mt-12 text-sm font-medium text-zinc-300">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="px-8 py-28 md:px-14">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
              The problem
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight md:text-5xl">
              Cancer is not a
              <br />
              single biological state.
            </h2>
          </div>

          <div className="space-y-7 text-lg leading-8 text-zinc-400">
            <p>
              Two patients can have the same diagnosis yet respond very
              differently to the same therapy.
            </p>

            <p>
              Tumour heterogeneity, evolving molecular states and resistance
              mechanisms make treatment response difficult to understand.
            </p>

            <p className="text-zinc-200">
              Prediction can tell us what might happen.
              <br />
              <span className="text-white">
                Inference asks why.
              </span>
            </p>
          </div>

        </div>
      </section>

      {/* 90 day build */}
      <section id="build" className="border-t border-zinc-900 px-8 py-28 md:px-14">

        <div className="mx-auto max-w-6xl">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                The build
              </p>

              <h2 className="mt-5 text-4xl font-medium md:text-6xl">
                Day 2 of 90.
              </h2>
            </div>

            <p className="max-w-md text-zinc-500">
              We're turning the idea into our first working product —
              one experiment, one model and one iteration at a time.
            </p>

          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-zinc-900 p-8">
              <p className="text-xs text-zinc-600">01</p>
              <h3 className="mt-12 text-xl font-medium">
                Research
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-500">
                Build the biological foundation and identify meaningful
                molecular signals.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-900 p-8">
              <p className="text-xs text-zinc-600">02</p>
              <h3 className="mt-12 text-xl font-medium">
                Build
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-500">
                Turn molecular data into an interpretable inference engine.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-900 p-8">
              <p className="text-xs text-zinc-600">03</p>
              <h3 className="mt-12 text-xl font-medium">
                Validate
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-500">
                Test, challenge and iterate with research and domain
                expertise.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 py-32 text-center md:px-14">

        <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
          OncoInference
        </p>

        <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-medium md:text-6xl">
          The future of precision oncology
          <span className="text-zinc-600"> starts with understanding.</span>
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-zinc-500">
          We're building it.
        </p>

      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 px-8 py-8 md:px-14">

        <div className="flex flex-col justify-between gap-4 text-xs text-zinc-600 md:flex-row">

          <p>
            © 2026 OncoInference
          </p>

          <p>
            Early-stage product · Clinical applications require rigorous validation
          </p>

        </div>

      </footer>

    </main>
  );
}