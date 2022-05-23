import { NextPage } from 'next';
import React from 'react';

interface Props {
  title: string;
  count: number;
}

const CountCard: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="flex w-1/3 flex-row justify-between rounded-lg py-5 px-10 shadow">
      <h1 className="text-2xl "> {props.title} </h1>
      <h1 className="text-2xl "> : </h1>
      <h1 className="text-2xl "> {props.count} </h1>
    </div>
  );
};

export default CountCard;
