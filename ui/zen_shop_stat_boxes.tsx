import React from "react";

interface ShopStatProps {
  zenShopStatBoxValues: {
    rainingZenAmount: string;
    pumpItUpZenAmount: string;
    instantZenAmount: string;
  };
}
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function ZenShopStatBoxes({zenShopStatBoxValues}: ShopStatProps) {
    return (
          <div>
            <h3 className="text-lg font-semibold text-white">Shop Boosts</h3>
            <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
                <div
                    key={"rainingZenAmount"}
                    className="px-4 py-5 sm:p-6"
                >
                    <dt className="text-base font-bold text-gray-900">Raining Zen</dt>
                    <dt className="text-sm font-normal text-gray-600">6hr Purple Zen</dt>
                        <dd className="mt-5 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-xl font-normal ">
                              {zenShopStatBoxValues.rainingZenAmount}
                            </div> 
                        </dd>
                </div>
                <div
                    key={"pumpItUpZenAmount"}
                    className="px-4 py-5 sm:p-6"
                >
                    <dt className="text-base font-bold text-gray-900">Pump it Up</dt>
                    <dt className="text-sm font-normal text-gray-600">4hr Purp & 4hr Gold Zen</dt>
                        <dd className="mt-5 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-xl font-normal ">
                              {zenShopStatBoxValues.pumpItUpZenAmount}
                            </div> 
                        </dd>
                </div>
                <div
                    key={"instantZenAmount"}
                    className="px-4 py-5 sm:p-6"
                >
                    <dt className="text-base font-bold text-gray-800">Drizzle</dt>
                    <dt className="text-sm font-normal text-gray-600">1hr Purple Zen</dt>
                        <dd className="mt-5 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-xl font-normal ">
                              {zenShopStatBoxValues.instantZenAmount}
                            </div> 
                        </dd>
                </div>
            </dl>
        </div>
    )
  }