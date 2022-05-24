import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import CountCard from '../components/countCard';
import Loader from '../components/loader';

function Result() {
  const [dataDisplay, setDataDisplay] = useState<Boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setDataDisplay(true);
    }, 2000);
  }, []);

  function getRandomNumberBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const wbc = getRandomNumberBetween(5000, 9000);
  const rbc = getRandomNumberBetween(4400000, 5500000);
  const Pletelets = getRandomNumberBetween(38, 48);

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

      <main
        className="justify-left  mt-12 flex flex-col items-center gap-5"
        style={dataDisplay ? {} : { display: 'none' }}
      >
        <h1 className="text-4xl font-bold capitalize">Analysed Result</h1>
        <CountCard title="WBC Count" count={wbc} unit="cells/mcl" />
        <CountCard title="RBC Count" count={rbc} unit="cells/mcl" />
        <CountCard title="Pletelets Count" count={Pletelets} unit="%" />
      </main>
      <main
        className="justify-left  mt-12 flex flex-col items-center gap-5"
        style={dataDisplay ? { display: 'none' } : {}}
      >
        <h1 className="text-4xl font-bold capitalize">Analysing ........</h1>
      </main>
    </div>
  );
}

export default Result;
