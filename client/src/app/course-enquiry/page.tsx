"use client";

import React, { useEffect, useState } from "react";
import { baseURL } from "../../config/config";

type Enquiry = {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
  course: string[];
  createdAt: string;
};

export default function EnquiriesTable() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [openMessageId, setOpenMessageId] = useState<string | null>(null);

  const API_URL = `${baseURL}/enquiry/course-enquiries`;

  useEffect(() => {
    async function fetchEnquiries() {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setEnquiries(data.courseEnquiries || []);
      } catch (error) {
        console.log(error);
        setEnquiries([]);
      }
      setLoading(false);
    }
    fetchEnquiries();
  }, [API_URL]);

  const handleToggleMessage = (id: string) => {
    setOpenMessageId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">All Enquiries</h2>
        <p className="text-gray-500 text-sm">Fetched all Course Enquiries</p>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></span>
        </div>
      ) : enquiries.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          No enquiries found.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-2">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left rounded-l-lg">Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Phone</th>
                <th className="px-4 py-2 text-left">Course</th>
                <th className="px-4 py-2 text-left">Message</th>
                <th className="px-4 py-2 text-left rounded-r-lg">Date</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((enquiry) => (
                <tr
                  key={enquiry.id}
                  className="bg-white hover:bg-gray-50 transition rounded-lg shadow-sm"
                >
                  <td className="px-4 py-2 font-medium">{enquiry.fullName}</td>
                  <td className="px-4 py-2">{enquiry.email}</td>
                  <td className="px-4 py-2">{enquiry.phoneNumber}</td>
                  <td className="px-4 py-2">
                    {Array.isArray(enquiry.course)
                      ? enquiry.course.length > 0
                        ? enquiry.course.join(", ")
                        : "-"
                      : enquiry.course
                      ? enquiry.course
                      : "-"}
                  </td>
                  <td className="px-4 py-2 max-w-xs">
                    <button
                      className="text-blue-600 underline focus:outline-none text-center"
                      onClick={() => handleToggleMessage(enquiry.id)}
                    >
                      {openMessageId === enquiry.id ? "Hide" : "View"}
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openMessageId === enquiry.id
                          ? "max-h-40 opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="p-2 bg-gray-100 rounded shadow text-gray-800 whitespace-pre-line">
                        {enquiry.message}
                      </div>
                    </div>
                    {/* {openMessageId !== enquiry.id && (
                      <span className="truncate block" title={enquiry.message}>
                        {enquiry.message.length > 30
                          ? enquiry.message.slice(0, 30) + "..."
                          : enquiry.message}
                      </span>
                    )} */}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500">
                    {new Date(enquiry.createdAt).toLocaleString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
