"use client";

import Filter from "@/components/filter/filter";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setYear,
  setMonth,
  setCondition,
  resetFilter,
} from "@/store/slices/gudangFilterSlice";

export default function GudangFilter() {
  const dispatch = useAppDispatch();
  const { year, month, condition } = useAppSelector(
    (state) => state.gudangFilter
  );
  return (
    <div className="space-y-4 rounded-lg border p-4">
      <Filter
        filters={["year", "month", "condition"]}
        title="Filter Laporan"
        initialValues={{ year, month, condition }}
        resetValues={{ year: 2026, month: 11, condition: "" }}
        onSubmit={(values) => {
          dispatch(setYear(values.year));
          dispatch(setMonth(values.month));
          dispatch(setCondition(values.condition));
        }}
        onReset={() => dispatch(resetFilter())}
      />
    </div>
  );
}