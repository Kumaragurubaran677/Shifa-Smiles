"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Products from "@/data/Products";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  // Get category name from Products data
  const categoryParam = pathSegments[pathSegments.length - 1];
  const categoryKey = Object.keys(Products).find(
    key => Products[key as keyof typeof Products].categoryName.toLowerCase().replace(/\s+/g, '-') === categoryParam
  ) as keyof typeof Products;
  const categoryName = Products[categoryKey]?.categoryName || categoryParam;

  // Get product name if it exists
  const productParam = pathSegments[pathSegments.length - 1];
  const categoryProducts = Products[categoryKey]?.products || [];
  const product = categoryProducts.find(
    p => p.name.toLowerCase().replace(/\s+/g, '-') === productParam
  );
  const displayName = product?.name || categoryName;

  return (
    <div className="flex items-center gap-2">
      {pathSegments.map((segment, index) => (
        <React.Fragment key={index}>
          {index === 0 ? (
            <>
              <Link href="/" className="text-gray-600 hover:text-[#E82A4C]">
                Home
              </Link>
              <span className="text-gray-400">/</span>
            </>
          ) : null}
          {index === pathSegments.length - 1 ? (
            <span className="text-[#E82A4C] capitalize">{displayName}</span>
          ) : (
            <>
              <Link
                href={`/${pathSegments.slice(0, index + 1).join("/")}`}
                className="text-gray-600 hover:text-[#E82A4C] capitalize"
              >
                {segment.replace(/-/g, ' ').charAt(0).toUpperCase() + segment.replace(/-/g, ' ').slice(1)}
              </Link>
              <span className="text-gray-400">/</span>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
