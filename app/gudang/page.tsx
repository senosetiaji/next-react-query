import GudangFilter from "@/features/gudang/components/GudangFilter";

export default function GudangPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-6 p-8">
      <header>
        <h1 className="text-2xl font-bold">Gudang</h1>
        <p className="mt-2 text-gray-500">Halaman Gudang.</p>
      </header>
      <GudangFilter />
    </main>
  );
}
