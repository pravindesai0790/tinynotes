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
      <div className="relative isolate overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 sm:p-8">
        <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-teal-100 blur-2xl" />
        <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-sky-100 blur-2xl" />
        <div className="relative space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              TinyNotes
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
              {content.title}
            </h1>
            <p className="text-sm leading-relaxed text-slate-600">{content.description}</p>
          </div>

          <form className="space-y-4">
            <label htmlFor={`${mode}-email`} className="block space-y-2">
              <span className="text-sm font-medium text-slate-700">Email</span>
              <input
                id={`${mode}-email`}
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-shadow placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              />
            </label>

            <label htmlFor={`${mode}-password`} className="block space-y-2">
              <span className="text-sm font-medium text-slate-700">Password</span>
              <input
                id={`${mode}-password`}
                name="password"
                type="password"
                required
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition-shadow placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
            >
              {content.submitLabel}
            </button>
          </form>

          <p className="text-sm text-slate-600">
            {content.switchPrompt}{" "}
            <Link
              href={content.switchHref}
              className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-slate-700"
            >
              {content.switchLabel}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
