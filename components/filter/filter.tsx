"use client";

import { useState, type FormEvent } from "react";
import moment from "moment";
import "moment/locale/id";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";

export type FilterKey = "year" | "month" | "condition";
type FilterValue = string | number;
type FilterValues = {
  year: number;
  month: number;
  condition: string;
};

const months = Array.from({ length: 12 }, (_, index) =>
  ({
    label: moment().locale("id").month(index).format("MMMM"),
    value: index + 1,
  }),
);

const defaultValues: FilterValues = {
  year: moment().year(),
  month: 11,
  condition: "",
};

interface FilterProps<K extends FilterKey> {
  filters: readonly K[];
  onSubmit: (values: Pick<FilterValues, K>) => void;
  initialValues?: Partial<Pick<FilterValues, K>>;
  resetValues?: Partial<Pick<FilterValues, K>>;
  onReset?: (values: Pick<FilterValues, K>) => void;
  title?: string;
}

export default function Filter<K extends FilterKey>({
  filters,
  onSubmit,
  initialValues,
  resetValues,
  onReset,
  title = "Filter",
}: FilterProps<K>) {
  const currentYear = moment().year();
  const years = Array.from({ length: 5 }, (_, index) => currentYear - 2 + index);

  const createValues = (source?: Partial<Pick<FilterValues, K>>) => {
    const values = {} as Pick<FilterValues, K>;

    for (const key of filters) {
      values[key] = source?.[key] ?? defaultValues[key];
    }

    return values;
  };

  const [values, setValues] = useState(() => createValues(initialValues));

  const updateValue = (key: K, value: FilterValue) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(values);
  };

  const handleReset = () => {
    const nextValues = createValues(resetValues ?? initialValues);
    setValues(nextValues);
    onReset?.(nextValues);
  };

  return (
    <section className="rounded-xl border border-gray-200 p-5">
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>

      <form onSubmit={handleSubmit}>
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: `repeat(${filters.length}, minmax(0, 1fr))` }}
        >
          {filters.map((key) => {
            const label =
              key === "year"
                ? "Tahun"
                : key === "month"
                  ? "Bulan"
                  : "Kondisi";
            const selectedValue =
              key === "condition" && values[key] === ""
                ? "all"
                : values[key];

            return (
              <div key={key}>
                <label
                  htmlFor={`filter-${key}`}
                  className="mb-1 block text-sm font-medium"
                >
                  {label}
                </label>

                <Select
                  value={String(selectedValue)}
                  items={
                    key === "month"
                      ? months.map((month) => ({
                          label: month.label,
                          value: String(month.value),
                        }))
                      : undefined
                  }
                  onValueChange={(value) => {
                    if (value !== null) {
                      updateValue(
                        key,
                        key === "year" || key === "month"
                          ? Number(value)
                          : value === "all"
                            ? ""
                            : value,
                      );
                    }
                  }}
                >
                  <SelectTrigger id={`filter-${key}`} className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {key === "year" &&
                      years.map((year) => (
                        <SelectItem key={year} value={String(year)}>
                          {year}
                        </SelectItem>
                      ))}
                    {key === "month" &&
                      months.map((month) => (
                        <SelectItem key={month.value} value={String(month.value)}>
                          {month.label}
                        </SelectItem>
                      ))}
                    {key === "condition" && (
                      <>
                        <SelectItem value="all">Semua kondisi</SelectItem>
                        <SelectItem value="baik">Baik</SelectItem>
                        <SelectItem value="rusak">Rusak</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>
            );
          })}
        </div>
        <div className="flex items-end justify-end gap-2 mt-4 w-full">
          <Button
            type="submit"
            variant="default"
            className="h-10 w-32 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
            Terapkan
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="h-10 w-32 rounded-lg bg-gray-800 text-white hover:bg-gray-600"
            onClick={handleReset}
          >
            Reset Filter
          </Button>
        </div>
      </form>
    </section>
  );
}
