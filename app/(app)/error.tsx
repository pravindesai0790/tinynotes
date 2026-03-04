"use client";

import { ErrorPlaceholder } from "@/src/components/placeholders/ErrorPlaceholder";

type AppErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function AppError({ error, reset }: AppErrorProps) {
  void error;
  void reset;

  return (
    <ErrorPlaceholder
      title="Something went wrong"
      description="This is a placeholder error boundary for authenticated routes."
    />
  );
}
