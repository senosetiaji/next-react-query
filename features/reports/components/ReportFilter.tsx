
"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Filter from "@/components/filter/filter";
import {
  setYear,
  setMonth,
  resetFilter,
} from "@/store/slices/reportFilterSlice";

export default function ReportFilter() {
  const dispatch = useAppDispatch();

  const { year, month } = useAppSelector(
    (state) => state.reportFilter
  );

  return (
    <>
      <Filter
        filters={["year", "month"]}
        title="Filter Laporan"
        initialValues={{ year, month }}
        resetValues={{ year: 2026, month: 11 }}
        onSubmit={(values) => {
          dispatch(setYear(values.year));
          dispatch(setMonth(values.month));
        }}
        onReset={() => dispatch(resetFilter())}
      />
      <div className="mt-5 rounded-lg bg-gray-100 p-4">
        <p className="text-sm text-gray-600">
          Redux State:
        </p>

        <pre className="mt-2 text-sm">
          {JSON.stringify({ year, month }, null, 2)}
        </pre>
      </div>
    </>
  );
}
