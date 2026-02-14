"use client";

import { useGetVendorsQuery } from "@/store/api/vendor/vendor.api";
import { VendorDetailsI } from "@/types/user.types";
import Image from "next/image";
import Link from "next/link";

const LIMIT = 10;

export default function VendorsPage() {
  const { data, isLoading, isError, error } = useGetVendorsQuery({
    limit: LIMIT,
    skip: 0,
  });

  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  if (!data) return <div>No Venders Found</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">List of Vendors</h1>
      {data && (
        <>
          {data.users.map((vendor) => (
            <div key={vendor.id}>
              <VendorCard vendor={vendor} />
            </div>
          ))}
        </>
      )}
    </div>
  );
}

function VendorCard({ vendor }: { vendor: VendorDetailsI }) {
  return (
    <Link href={`/vendors/${vendor.id}`}>
      <div className="flex space-x-2 py-3 ">
        <Image
          className="rounded-full ring-amber-700 ring-2 w-6"
          src={vendor.image}
          width={500}
          height={500}
          alt={`Avatar image of user ${vendor.firstName}`}
        />
        <h3 className="text-lg font-semibold capitalize text-gray-600 hover:text-blue-700">
          {vendor.firstName}
        </h3>
      </div>
    </Link>
  );
}
