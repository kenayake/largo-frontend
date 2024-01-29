"use client";
import { getProducts } from "@/lib/firebase/get_document";
import { Button, Table } from "flowbite-react";
import moment from "moment/moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ProductList() {
  const [productState, setProduct] = useState([[], false]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    (async () => await getProducts().then((data) => setProduct(data)))();
  }, []);

  const [products, exists] = productState;

  useEffect(() => {
    console.log(products);
  }, [productState]);

  const filterSearch = (obj) => {
    if (searchVal) {
      for (const key in obj) {
        if (key === "name" || key === "type") {
          console.log(obj[key].toLowerCase(), searchVal);
          if (obj[key].toLowerCase().includes(searchVal)) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  };

  return (
    <div className="p-10">
      <h1 className="text-7xl mb-32">Products</h1>
      <div className="w-full flex justify-between py-4">
        <div>
          <label
            for="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            />
          </div>
        </div>

        <Button color="blue" href="/admin/add-product">Add Product</Button>
      </div>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Product Name</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {products &&
            products.filter(filterSearch).map((val, idx) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={val.name + idx}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {val.name}
                </Table.Cell>
                <Table.Cell>{val.type}</Table.Cell>
                <Table.Cell>
                  <div className="w-16 h-16 flex items-center">
                    <img src={val.image} className="object-cover" />
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
}
