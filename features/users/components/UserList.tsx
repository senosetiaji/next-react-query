"use client";

import MainTable, {
  type MainTableColumn,
} from "@/components/table/mainTable";
import type { User } from "../types/users";
import { useUsers } from '../hooks/useUsers';

export default function UserList() {
  const {
    data,
    isPending,
    isError,
    error,
  } = useUsers();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const columns: MainTableColumn<User>[] = [
    {
      label: "Nama",
      render: (user) => user.name,
    },
    {
      label: "Email",
      render: (user) => user.email,
    },
    {
      label: "Telepon",
      render: (user) => user.phone,
    },
    {
      label: "Alamat",
      render: (user) =>
        `${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.zipCode}`,
    },
  ];

  return (
    <div>
      <h2>Users</h2>
      <MainTable data={data ?? []} columns={columns} />
    </div>
  )
}
