"use client";

import type { CSSProperties, ReactNode } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface MainTableColumn<T> {
  label: string;
  style?: CSSProperties;
  render: (row: T, index: number) => ReactNode;
}

interface MainTableProps<T> {
  data: T[];
  columns: MainTableColumn<T>[];
}

export default function MainTable<T>({ data, columns }: MainTableProps<T>) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => (
            <TableHead key={`${column.label}-${index}`} style={column.style}>
              {column.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length === 0 ? (
          <TableRow>
            <TableCell
              colSpan={columns.length}
              className="h-24 text-center text-muted-foreground"
            >
              Tidak ada data.
            </TableCell>
          </TableRow>
        ) : (
          data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column, columnIndex) => (
                <TableCell
                  key={`${column.label}-${columnIndex}`}
                  style={column.style}
                >
                  {column.render(row, rowIndex)}
                </TableCell>
              ))}
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}