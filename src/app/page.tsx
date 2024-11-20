import Table from "@/components/Table";
import { employees } from "@/data/employee";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-around bg-slate-50">

      <section>
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Generic Table</h1>
        <Table
          columnDefs={[
            {
              title: "Name",
              render: (rowData) => `${rowData.firstName} ${rowData.lastName}`,
            },
            {
              title: "Absence",
              field: "absence",
            },
            {
              title: "Email",
              field: "email",
            },
            {
              title: "Address", // Properti yang benar adalah `address`
              field: "address",
            },
          ]}
          data={employees}
        />
      </section>

    </main>
  );
}
