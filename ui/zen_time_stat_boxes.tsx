import React from "react";

interface TimeStatProps {
  zenTimeStatBoxValues: {
    combinedZenTime: string;
    purpleZenTime: string;
    goldZenTime: string;
  };
}
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function ZenCalcBoxes({zenTimeStatBoxValues}: TimeStatProps) {
    return (
        <div>
            <h3 className="text-lg font-semibold text-white">Time To Amount Needed</h3>
            <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
                <div
                    key={"combinedZenTime"}
                    className="px-4 py-5 sm:p-6"
                >
                    <dt className="text-base font-bold text-gray-900">Combined Zen</dt>
                        <dd className="mt-5 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-xl font-normal ">
                                {zenTimeStatBoxValues.combinedZenTime}
                            </div> 
                        </dd>
                </div>
                <div
                    key={"purpleZenTime"}
                    className="px-4 py-5 sm:p-6"
                >
                    <dt className="text-base font-bold text-gray-900">Only Purple Zen</dt>
                        <dd className="mt-5 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-xl font-normal ">
                            {zenTimeStatBoxValues.purpleZenTime}
                            </div> 
                        </dd>
                </div>
                <div
                    key={"goldZenTime"}
                    className="px-4 py-5 sm:p-6"
                >
                    <dt className="text-base font-bold text-gray-800">Only Gold Zen</dt>
                        <dd className="mt-5 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-xl font-normal ">
                            {zenTimeStatBoxValues.goldZenTime}
                            </div> 
                        </dd>
                </div>
            </dl>
        </div>
    )
  }