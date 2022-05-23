import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import CountCard from '../components/countCard';
import Loader from '../components/loader';

function Result() {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>CBC Test - Result</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex justify-center bg-gray-700 p-4">
        <span className="absolute left-4 text-white hover:cursor-pointer">
          <AiOutlineLeft
            className="hover:text-red text-4xl font-bold"
            onClick={() => window.history.back()}
          />
        </span>
        <h1 className="text-3xl font-bold text-white">ML BASED CBC RESULT</h1>
      </nav>

      <main className="justify-left  mt-12 flex flex-col items-center gap-5">
        <h1 className="text-4xl font-bold capitalize">Analysed Result</h1>
        <CountCard title="WBC Count" count={200} />
        <CountCard title="RBC Count" count={200} />
        <CountCard title="Pletelets Count" count={200} />
      </main>
    </div>
  );
}

export default Result;
