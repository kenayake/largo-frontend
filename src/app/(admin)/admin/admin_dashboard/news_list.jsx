"use client";
import { getNews } from "@/lib/firebase/get_document";
import { Table } from "flowbite-react";
import moment from "moment/moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function NewsList() {
  const [newsState, setNews] = useState([[], false]);

  useEffect(() => {
    (async () => await getNews().then((data) => setNews(data)))();
  }, []);

  const [news, exists] = newsState;

  useEffect(() => {
    console.log(news);
  }, [newsState]);

  return (
    <div className="p-10">

      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Writer</Table.HeadCell>
          <Table.HeadCell>Upload Date</Table.HeadCell>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {news &&
            news.map((val,idx) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={val.title+idx}>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {val.title}
                </Table.Cell>
                <Table.Cell>{val.writer || "-"}</Table.Cell>
                <Table.Cell>
                  {val.uploadDate
                    ? moment(val.uploadDate.toDate().toUTCString()).format(
                        "LLL"
                      )
                    : "-"}
                </Table.Cell>
                <Table.Cell><div className="w-16 h-16 flex items-center"><img src={val.image} className="object-cover" /></div></Table.Cell>
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
