
"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setYear,
  setMonth,
  resetFilter,
} from "@/store/slices/reportFilterSlice";

const months: { value: number; label: string }[] = [
  { value: 1, label: "Januari" },
  { value: 2, label: "Februari" },
  { value: 3, label: "Maret" },
  { value: 4, label: "April" },
  { value: 5, label: "Mei" },
  { value: 6, label: "Juni" },
  { value: 7, label: "Juli" },
  { value: 8, label: "Agustus" },
  { value: 9, label: "September" },
  { value: 10, label: "Oktober" },
  { value: 11, label: "November" },
  { value: 12, label: "Desember" },
];

export default function ReportFilter() {
  const dispatch = useAppDispatch();

  const { year, month } = useAppSelector(
    (state) => state.reportFilter
  );

  const years = [2024, 2025, 2026, 2027, 2028];

  return (
    <section className="rounded-xl border border-gray-200 p-5">
      <h2 className="mb-4 text-lg font-semibold">
        Filter Laporan
      </h2>

      <div className="flex flex-wrap gap-4">
        <div>
          <label
            htmlFor="year"
            className="mb-1 block text-sm font-medium"
          >
            Tahun
          </label>

          <select
            id="year"
            value={year}
            onChange={(event) =>
              dispatch(setYear(Number(event.target.value)))
            }
            className="rounded-lg border border-gray-300 px-3 py-2"
          >
            {years.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="month"
            className="mb-1 block text-sm font-medium"
          >
            Bulan
          </label>

          <select
            id="month"
            value={month}
            onChange={(event) =>
              dispatch(setMonth(Number(event.target.value)))
            }
            className="rounded-lg border border-gray-300 px-3 py-2"
          >
            {months.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <button
            type="button"
            onClick={() => dispatch(resetFilter())}
            className="rounded-lg bg-gray-800 px-4 py-2 text-white"
          >
            Reset Filter
          </button>
        </div>
      </div>

      <div className="mt-5 rounded-lg bg-gray-100 p-4">
        <p className="text-sm text-gray-600">
          Redux State:
        </p>

        <pre className="mt-2 text-sm">
          {JSON.stringify({ year, month }, null, 2)}
        </pre>
      </div>
    </section>
  );
}
