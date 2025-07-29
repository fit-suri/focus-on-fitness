"use client";
import React from "react";
import Link from "next/link";
import { Wrench, ArrowLeft } from "lucide-react";

const WorkInProgress = ({ title }: { title?: string }) => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 text-gray-100">
    <div className="bg-gradient-to-br from-gray-800 to-blue-950 p-10 rounded-xl border border-gray-800 shadow-lg flex flex-col items-center">
      <Wrench className="w-16 h-16 text-blue-400 mb-6 animate-spin-slow" />
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        {title || "Work In Progress"}
      </h1>
      <p className="text-lg text-gray-300 mb-8 text-center max-w-md">
        This page is under construction. We're working hard to bring you more information soon!
      </p>
      <Link href="/" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>
    </div>
  </div>
);

export default WorkInProgress;
