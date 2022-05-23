import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef } from 'react';

const Home: NextPage = () => {
  const [uploadImage, setUploadImage] = useState<File>();
  const hiddenImageInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    hiddenImageInputRef.current!.click();
  };

  const changeImageInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setUploadImage(file);
  };

  const cancelImageUpload = () => {
    setUploadImage(undefined);
  };

  const previewImage = () => {
    return uploadImage ? URL.createObjectURL(uploadImage) : '/upload.png';
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>CBC Test - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex justify-center bg-gray-700 p-4">
        <h1 className="text-3xl font-bold text-white">ML BASED CBC TEST</h1>
      </nav>

      <main className="flex  flex-col items-center justify-center">
        <div
          className={`my-10 max-w-5xl rounded-3xl border-2 border-solid ${
            uploadImage ? 'p-10 px-20' : 'p-10 px-20'
          }`}
        >
          <Image
            src={previewImage()}
            alt="CBC Logo"
            width="200"
            height="200"
            className=""
          />
        </div>
        <div className="flex flex-row gap-5 text-lg text-white">
          <input
            type="file"
            accept="image/*"
            id="image-input"
            name="image-input"
            style={{ display: 'none' }}
            ref={hiddenImageInputRef}
            onChange={changeImageInput}
          />
          <label
            htmlFor="image-input"
            style={uploadImage ? { display: 'none' } : {}}
          >
            <button
              className="rounded bg-sky-500 px-12 py-3 font-bold "
              onClick={handleUploadClick}
            >
              Upload
            </button>
          </label>
          <div
            className="flex flex-row gap-5"
            style={uploadImage ? {} : { display: 'none' }}
          >
            <button
              className="rounded bg-red-500 px-8 py-3 font-bold"
              onClick={cancelImageUpload}
            >
              Cancel
            </button>
            <Link href="/result">
              <a className="rounded bg-green-500 px-8 py-3 font-bold">
                Analyse
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
