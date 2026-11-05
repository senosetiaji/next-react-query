
import ReportFilter from "@/features/reports/components/ReportFilter";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl space-y-6 p-8">
      <header>
        <h1 className="text-2xl font-bold">
          Next Query Learning
        </h1>

        <p className="mt-2 text-gray-500">
          Learning Redux Toolkit, TypeScript, and TanStack Query
        </p>
      </header>

      <ReportFilter />
    </main>
  );
}
