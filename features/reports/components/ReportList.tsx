"use client";

import { useReports } from "../hooks/useReports";

export default function ReportList() {
  const {
    data,
    isPending,
    isError,
    error,
  } = useReports();

  if (isPending) {
    return <p>Loading reports...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section className="rounded-xl border p-5">
      <h2 className="mb-4 text-xl font-semibold">
        Daftar Laporan
      </h2>

      <div className="space-y-3">
        {data.map((report) => (
          <article
            key={report.id}
            className="rounded-lg bg-gray-50 p-4"
          >
            <h3 className="font-semibold">
              {report.title}
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              {report.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}