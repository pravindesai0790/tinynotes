import Link from "next/link";

type AuthMode = "login" | "register";

type AuthFormProps = {
  mode: AuthMode;
};

const AUTH_COPY: Record<
  AuthMode,
  {
    title: string;
    description: string;
    submitLabel: string;
    switchLabel: string;
    switchHref: string;
    switchCta: string;
  }
> = {
  login: {
    title: "Welcome back",
    description: "Sign in with your email and password to continue.",
    submitLabel: "Sign in",
    switchLabel: "Need an account?",
    switchHref: "/register",
    switchCta: "Create one",
  },
  register: {
    title: "Create your account",
    description: "Sign up with your email and password to start using TinyNotes.",
    submitLabel: "Create account",
    switchLabel: "Already have an account?",
    switchHref: "/login",
    switchCta: "Sign in",
  },
};

export function AuthForm({ mode }: AuthFormProps) {
  const copy = AUTH_COPY[mode];

  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 sm:p-8">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-sky-100 via-cyan-50 to-emerald-100"
        aria-hidden="true"
      />
      <div className="relative space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">{copy.title}</h1>
          <p className="text-sm text-slate-600">{copy.description}</p>
        </header>

        <form className="space-y-4">
          <label className="block space-y-1.5">
            <span className="text-sm font-medium text-slate-700">Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />
          </label>

          <label className="block space-y-1.5">
            <span className="text-sm font-medium text-slate-700">Password</span>
            <input
              type="password"
              name="password"
              autoComplete={mode === "login" ? "current-password" : "new-password"}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            />
          </label>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            {copy.submitLabel}
          </button>
        </form>

        <p className="text-center text-sm text-slate-600">
          {copy.switchLabel}{" "}
          <Link
            href={copy.switchHref}
            className="font-semibold text-slate-900 underline underline-offset-4"
          >
            {copy.switchCta}
          </Link>
        </p>
      </div>
    </section>
  );
}
