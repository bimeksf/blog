import { useRef, useState, ChangeEvent } from "react";
import Image from "next/image";

type ImagePickerProps = {
  label: string;
};

export default function ImagePicker({ label }: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const imageInput = useRef<HTMLInputElement>(null);

  function handlePickClick() {
    imageInput.current?.click();
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      setError(null);
      return;
    }

    const maxSizeInMB = 2;
    if (file.size > maxSizeInMB * 1024 * 1024) {
      setPickedImage(null);
      setError(`File is too large. Maximum size is ${maxSizeInMB}MB.`);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
      setError(null);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col gap-4 items-start max-w-md mx-auto p-4 border rounded-xl shadow-sm bg-white">
      <label className="w-full">
        <span className="block font-semibold mb-2 text-gray-700">{label}</span>

        <div className="relative w-full h-64 border-2 border-dashed rounded-md flex items-center justify-center bg-gray-50 overflow-hidden">
          {!pickedImage && <p className="text-gray-400">No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
              className="object-cover"
            />
          )}
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <input
          type="file"
          accept="image/png, image/jpeg"
          ref={imageInput}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </label>

      <button
        type="button"
        onClick={handlePickClick}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Pick an Image
      </button>
    </div>
  );
}
