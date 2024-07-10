"use client";
import UploadIcon from "@/components/UploadIcon";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UploadForm() {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  async function upload(ev) {
    ev.preventDefault();
    setError(null);
    const files = ev.target.files;
    if (files.length > 0) {
      const file = files[0];
      setIsUploading(true);
      try {
        const res = await axios.postForm("/api/upload", {
          file,
        });
        setIsUploading(false);
        const newName = res.data.newName;
        router.push("/" + newName);
      } catch (error) {
        console.error("Error uploading file:", error);
        setIsUploading(false);
        setError("Failed to upload file. Please try again.");
      }
    }
  }

  return (
    <>
      {isUploading && (
        <div className="bg-black/90 text-white fixed inset-0 flex items-center">
          <div className="w-full text-center">
            <h2 className="text-4xl mb-4">Uploading</h2>
            <h3 className="text-xl">Please wait...</h3>
          </div>
        </div>
      )}
      {error && (
        <div className="bg-red-600 text-white p-4 rounded-md mb-4">{error}</div>
      )}
      <label className="bg-green-600 py-2 px-6 rounded-full inline-flex gap-2 border-2 border-purple-700/50 cursor-pointer">
        <UploadIcon />
        <span>Choose file</span>
        <input onChange={upload} type="file" className="hidden" />
      </label>
    </>
  );
}
