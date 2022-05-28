import React, { ChangeEvent, FormEvent, useState } from "react";
import app from "../firebase";
import Layout from "../hocs/Layout";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Image from "next/image";
import { ProductType } from "../utils/types";

const NewMotive = ({
  url,
  setMotives,
}: {
  url: string;
  setMotives: React.Dispatch<React.SetStateAction<ProductType[]>>;
}) => {
  const [motives, setMotivesString] = useState<string>("");
  const [downloadURL, setDownloadURL] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const handleChange = (e: ChangeEvent, file: File) => {
    e.preventDefault();
    const fileName = new Date().getTime().toString();
    const storage = getStorage(app);

    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (error) => {
        setError("sucedio un error subiendo la imagen");
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setDownloadURL(downloadURL);
        });
      }
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    if (!downloadURL)
      return setError("No hay imagen o se ha quitado, vuelve a subirla");
    if (!motives) return setError("deben haber motivos");
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ motives, img: downloadURL }),
    });

    if (response.status !== 200) return setError("error al agregar taza");

    response
      .json()
      .then((newMotive) => setMotives((motives) => [...motives, newMotive]));
    setError("motivo agregado con exito");
  };

  return (
    <section className="px-16 py-8 bg-indigo-50 sm:px-16 lg:px-16 flex gap-8 flex-col md:flex-row">
      <form className="flex-1 flex flex-col gap-8" onSubmit={handleSubmit}>
        <h2 className="mt-6 mb-8 text-3xl font-extrabold text-gray-900">
          Pestaña de creacion
        </h2>
        <div className="flex gap-4">
          <label>Imagen:</label>
          <input
            type="file"
            id="file"
            onChange={(e) => handleChange(e, e.target.files[0])}
          />
        </div>
        <div className="flex gap-4">
          <label>Motivos</label>
          <textarea
            className="border-2 border-gray-500 rounded-md w-3/4 bg-white"
            onChange={(e) => setMotivesString(e.target.value)}
            value={motives}
          />
        </div>
        <span> imagen subida: {progress} %</span>
        <span className="text-red-400 underline underline-offset-2">
          {error}
        </span>
        <button
          className="bg-indigo-600 rounded-md cursor-pointer  py-2 px-4 text-white"
          type="submit"
        >
          Crear nuevo motivo
        </button>
      </form>
      <div className="h-64 md:h-auto md:flex-1 relative bg-white rounded-2xl border-2">
        {downloadURL && (
          <Image
            src={downloadURL}
            alt="new product"
            layout="fill"
            objectFit="contain"
          />
        )}
      </div>
    </section>
  );
};

export default NewMotive;
