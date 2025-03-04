"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Uploadpic from "@/public/svg/upload_7078851.png";
import Button from "@/components/Button";
import Deletepic from "@/public/svg/delete_2550254.png";
import { useRouter } from "next/navigation";
import { useImageStore } from "@/store/imageStore";
import NotificationSystem from "@/components/NotificationSystem";

const Upload = () => {
  const [imagePreviews, setImagePreviews] = useState<(string | ArrayBuffer | null)[]>([]);
  const [descriptions, setDescriptions] = useState<string[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [isDeleteEnabled, setIsDeleteEnabled] = useState(false);
  const [notification, setNotification] = useState<{ message: string; type: "error" | "warning" | "success" | "info"; onConfirm?: () => void; } | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const addImage = useImageStore((state) => state.addImage);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validImages = files.filter((file) => file.type.startsWith("image/"));

    if (validImages.length + imagePreviews.length > 5) {
      setNotification({ message: "You can only upload up to 5 images at a time.", type: "error" });
      return;
    }

    if (validImages.length === 0) {
      setNotification({ message: "Please select images to upload.", type: "warning" });
      return;
    }

    const invalidFiles = files.filter((file) => !file.type.startsWith("image/"));
    if (invalidFiles.length > 0) {
      setNotification({ message: "Only image files (JPEG, PNG, JPG) are allowed.", type: "error" });
      return;
    }

    const newPreviews: (string | ArrayBuffer | null)[] = [];
    const newDescriptions: string[] = [];
    validImages.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          newPreviews.push(reader.result);
          newDescriptions.push("");
        }

        if (newPreviews.length === validImages.length) {
          setImagePreviews((prev) => [...prev, ...newPreviews]);
          setDescriptions((prev) => [...prev, ...newDescriptions]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handlePreviewClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < imagePreviews.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = imagePreviews.filter((_, i) => i !== index);
    const updatedDescriptions = descriptions.filter((_, i) => i !== index);
    setImagePreviews(updatedImages);
    setDescriptions(updatedDescriptions);  
    useImageStore.setState((state) => ({
      images: state.images.filter((img) => img.src !== imagePreviews[index]),
    }));
    localStorage.setItem("uploadedImages", JSON.stringify(updatedImages));
  };

  const handleDragStart = (index: number) => {
    setDraggingIndex(index);
    setIsDeleteEnabled(true);
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
    setIsDeleteEnabled(false);
  };

  const handleDrop = () => {
    if (draggingIndex !== null) {
      handleRemoveImage(draggingIndex);
    }
    setIsDeleteEnabled(false);
  };

  const handleUploadComplete = () => {
    if (imagePreviews.length === 0) {
      setNotification({ message: "Please select images to upload.", type: "warning" });
      return;
    }

    const storedDescriptions = JSON.parse(localStorage.getItem("imageDescriptions") || "{}");
    imagePreviews.forEach((imgSrc, index) => {
      storedDescriptions[imgSrc as string] = descriptions[index] || "";
      addImage(imgSrc as string);
    });
    localStorage.setItem("imageDescriptions", JSON.stringify(storedDescriptions));

    setNotification({
      message: "Your photos have been successfully uploaded.",
      type: "success",
    });}           

  const handleDescriptionChange = (index: number, newDescription: string) => {
    const updatedDescriptions = [...descriptions];
    updatedDescriptions[index] = newDescription.slice(0, 50);
    setDescriptions(updatedDescriptions);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-grow justify-center items-center gap-14 py-10">
        <div className="bg-white w-full md:w-[50%] p-7 rounded-xl shadow-xl">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl text-black font-extrabold m-5">Upload Your Photos</h2>
            <Image src={Uploadpic} alt="Upload pic" className="mb-5 w-[50px]" />
          </div>

          <form className="flex flex-col gap-5 items-center">
            <div className="flex justify-center items-center w-full">
              <Button
                styleType="white"
                label="Choose files"
                type="button"
                onClick={handleButtonClick}
              />
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                multiple
              />
            </div>

            <div className="flex justify-center gap-7 w-full m-7">
              {imagePreviews.map((preview, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 cursor-pointer group overflow-hidden"
                  onClick={() => handlePreviewClick(index)}
                  draggable
                  onDragStart={() => handleDragStart(index)}
                  onDragEnd={handleDragEnd}
                >
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div className="absolute w-20 h-20 rounded-full bg-white opacity-75 ping-slow delay-200"></div>
                    <div className="absolute w-10 h-10 rounded-full bg-white opacity-90 ping-slow delay-400"></div>
                  </div>

                  <img
                    src={preview as string}
                    alt={`Preview ${index}`}
                    className="h-full w-full object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-80"
                  />

                  <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-slate-100 text-black text-xs px-4 py-1 rounded-full">Click</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-5">
              <div className={`flex justify-center items-center ${isDeleteEnabled ? "bg-red-500 cursor-pointer border-white" : "bg-slate-200 border-slate-400 text-slate-400"} p-3 font-medium rounded-xl border`}
                onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
                <Image src={Deletepic} alt="Delete" className="w-6 h-6" />
                <span className="ml-2">{isDeleteEnabled ? "Drop to delete" : "Drag to delete"}</span>
              </div>

              <div className="flex justify-center">
                <Button label="Upload" onClick={handleUploadComplete} type="button" styleType="white" />
              </div>
            </div>
          </form>
        </div>

        <div className="bg-white w-full md:w-[25%] p-5 rounded-xl shadow-xl">
          <h3 className="text-2xl font-extrabold text-black mb-3">Upload Guidelines:</h3>
          <ul className="space-y-4 text-base text-gray-800">
            <li>• You can upload up to <strong className="text-lg">5</strong> images at a time!</li>
            <li>• Ensure that the images are of good quality (minimum resolution of 1080p recommended).</li>
            <li>• If you click on photos, you can access to preview page. In the preview page, you can view photos and add descriptions.</li>
            <li>• Only image files (JPEG, PNG, JPG) are supported.</li>
            <li>• Each image will be displayed in your profile once uploaded.</li>
            <li>• After uploading, you'll be able to view, download, and manage your photos.</li>
          </ul>
        </div>
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-slate-900 bg-opacity-55 flex justify-center items-center">
          <div className="bg-white p-5 rounded-xl shadow-xl w-[90%] max-w-[1000px] flex">
            <div className="flex-1">
              <img
                src={imagePreviews[selectedImageIndex] as string}
                alt={`Preview ${selectedImageIndex}`}
                className="w-full h-auto max-h-[70vh] object-contain mb-5"
              />
            </div>
            <div className="flex flex-col justify-between items-center p-5 w-[300px]">
              <div className="relative w-full h-44 text-black">
                <textarea
                  value={descriptions[selectedImageIndex]}
                  onChange={(e) => handleDescriptionChange(selectedImageIndex, e.target.value.slice(0, 50))}
                  placeholder="Enter Description"
                  maxLength={50}
                  className="p-3 border rounded-md w-full h-full bg-slate-200 resize-none break-words whitespace-normal"
                />
                <div className="absolute bottom-2 right-3 text-sm ">
                  {descriptions[selectedImageIndex].length} / 50
                </div>
              </div>
              <div className="flex gap-5 justify-center w-full">
                <Button label="Back" onClick={handlePrevImage} styleType="white" />
                <Button label="Next" onClick={handleNextImage} styleType="white" />
              </div>
              <div className="mt-4">
                <Button label="Close" onClick={handleCloseModal} styleType="blue" />
              </div>
            </div>
          </div>
        </div>
      )}

      {notification && <NotificationSystem message={notification.message} type={notification.type} onClose={() => setNotification(null)} />}
    </div>
  );
};

export default Upload;
