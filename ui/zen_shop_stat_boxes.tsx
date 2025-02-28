import React from "react";

interface ShopStatProps {
  zenShopStatBoxValues: {
    rainingZenAmount: string;
    pumpItUpZenAmount: string;
    instantZenAmount: string;
    luckyGoldenZenBoostAmount: string;
    goldenPawAmount: string;
    eggSurgeAmount: string;
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
                    <dt className="text-base font-bold text-gray-900">It's Raining Zen</dt>
                    <dt className="text-sm font-normal text-gray-600">6hr Purple Zen</dt>
                        <dd className="mt-5 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-xl font-normal ">
                              {zenShopStatBoxValues.rainingZenAmount}
                            </div> 
                        </dd>
                </div>
                <div
                    key={"luckyGoldenZenBoostAmount"}
                    className="px-4 py-5 sm:p-6"
                >
                    <dt className="text-base font-bold text-gray-900">Lucky Golden Zen Boost</dt>
                    <dt className="text-sm font-normal text-gray-600">7.77hr Gold Zen</dt>
                        <dd className="mt-5 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-xl font-normal ">
                              {zenShopStatBoxValues.luckyGoldenZenBoostAmount}
                            </div> 
                        </dd>
                </div>
                <div
                    key={"eggSurgeAmount"}
                    className="px-4 py-5 sm:p-6"
                >
                    <dt className="text-base font-bold text-gray-900">The Egg Surge</dt>
                    <dt className="text-sm font-normal text-gray-600">5hr Purp & 5hr Gold Zen</dt>
                        <dd className="mt-5 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-xl font-normal ">
                              {zenShopStatBoxValues.eggSurgeAmount}
                            </div> 
                        </dd>
                </div>
                <div
                    key={"goldenPawAmount"}
                    className="px-4 py-5 sm:p-6"
                >
                    <dt className="text-base font-bold text-gray-800">Golden Paw</dt>
                    <dt className="text-sm font-normal text-gray-600">3hr Gold Zen</dt>
                        <dd className="mt-5 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline text-xl font-normal ">
                              {zenShopStatBoxValues.goldenPawAmount}
                            </div> 
                        </dd>
                </div>
            </dl>
        </div>
    )
  }