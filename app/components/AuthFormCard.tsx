import Link from "next/link";

type AuthMode = "login" | "register";

const authContent: Record<
  AuthMode,
  {
    title: string;
    description: string;
    submitLabel: string;
    switchPrompt: string;
    switchLabel: string;
    switchHref: string;
  }
> = {
  login: {
    title: "Welcome back",
    description: "Sign in with your email and password to continue to TinyNotes.",
    submitLabel: "Log in",
    switchPrompt: "Need an account?",
    switchLabel: "Create one",
    switchHref: "/register",
  },
  register: {
    title: "Create your account",
    description: "Get started with TinyNotes using your email and password.",
    submitLabel: "Sign up",
    switchPrompt: "Already have an account?",
    switchLabel: "Log in",
    switchHref: "/login",
  },
};

export function AuthFormCard({ mode }: { mode: AuthMode }) {
  const content = authContent[mode];

  return (
    <section className="mx-auto w-full max-w-md">
      <div className="relative isolate overflow-hidden rounded-3xl border border-cyan-400/30 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/50 backdrop-blur-sm sm:p-8">
        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-400/25 blur-2xl" />
        <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-sky-500/20 blur-2xl" />
        <div className="relative space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">
              TinyNotes
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-100">
              {content.title}
            </h1>
            <p className="text-sm leading-relaxed text-slate-300">{content.description}</p>
          </div>

          <form className="space-y-4">
            <label htmlFor={`${mode}-email`} className="block space-y-2">
              <span className="text-sm font-medium text-slate-200">Email</span>
              <input
                id={`${mode}-email`}
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-cyan-400/30 bg-slate-950/70 px-3 py-2.5 text-sm text-slate-100 outline-none transition-shadow placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/30"
              />
            </label>

            <label htmlFor={`${mode}-password`} className="block space-y-2">
              <span className="text-sm font-medium text-slate-200">Password</span>
              <input
                id={`${mode}-password`}
                name="password"
                type="password"
                required
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-cyan-400/30 bg-slate-950/70 px-3 py-2.5 text-sm text-slate-100 outline-none transition-shadow placeholder:text-slate-500 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-400/30"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
            >
              {content.submitLabel}
            </button>
          </form>

          <p className="text-sm text-slate-300">
            {content.switchPrompt}{" "}
            <Link
              href={content.switchHref}
              className="font-semibold text-cyan-300 underline decoration-cyan-500/40 underline-offset-4 transition-colors hover:text-cyan-200"
            >
              {content.switchLabel}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
