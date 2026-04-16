import { useState } from "react";

export default function PageHeader() {
  // Kita hapus bagian search input di sini supaya tidak dobel
  return (
    <div id="pageheader-container" className="flex items-center justify-between p-4">

      <div id="pageheader-left" className="flex flex-col">
        <span id="page-title" className="text-3xl font-semibold text-gray-800">
          Dashboard
        </span>

        <div id="breadcrumb-links" className="flex items-center space-x-2 mt-2 font-medium">
          <span className="text-gray-400">Dashboard</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-500">Order List</span>
        </div>
      </div>

      <div id="action-button">
        <button id="add-button" className="bg-green-500 text-white px-6 py-2 rounded-lg font-bold">
          + Add Button
        </button>
      </div>

    </div>
  );
}