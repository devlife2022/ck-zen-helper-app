import React from "react";

interface NinjaStatProps {
  zenNinjaStatBoxValues: {
    instantZenAmount: string;
    doubleTroubleZenAmount: string;
  };
}
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function ZenNinjaStatBoxes({zenNinjaStatBoxValues}: NinjaStatProps) {
    return (
      <div>
            <h3 className="text-lg font-semibold text-white">Ninja Boosts</h3>
            <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
                <div
                    key={"combinedZenTime"}
                    className="px-4 py-5 sm:p-6"
                >
                    <dt className="text-base font-bold text-gray-900">Double Trouble</dt>
                    <dt className="text-sm font-normal text-gray-600">Max Potential</dt>
                        <dd className="mt-5 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-xl font-normal ">
                              {zenNinjaStatBoxValues.doubleTroubleZenAmount}
                            </div> 
                        </dd>
                </div>
                <div
                    key={"purpleZenTime"}
                    className="px-4 py-5 sm:p-6"
                >
                    <dt className="text-base font-bold text-gray-900">Instant </dt>
                    <dt className="text-sm font-normal text-gray-600">30min purp zen</dt>
                        <dd className="mt-5 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-xl font-normal ">
                              {zenNinjaStatBoxValues.instantZenAmount}
                            </div> 
                        </dd>
                </div>
                
            </dl>
        </div>
    )
  }