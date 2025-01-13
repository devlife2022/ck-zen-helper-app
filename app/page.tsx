'use client'

import { useState } from 'react';
import ZenInputForm from "@/ui/zen_input_form";
import ZenCalcBoxes from '@/ui/zen_time_stat_boxes';
import { timeToTarget } from '@/utils/calc_time_to_target';
import ZenShopStatBoxes from '@/ui/zen_shop_stat_boxes';
import { calcZenShopBoosts } from '@/utils/calc_zen_shop_boosts';
import ZenNinjaStatBoxes from '@/ui/zen_ninja_stat_boxes';
import { calcZenNinjaBoosts } from '@/utils/calc_zen_ninja_boosts';

export default function Home() {

  const [zenCalcFormValues, setZenCalcFormValues] = useState({
    'purpleZenAmount': 0,
    'purpleZenNumber':1e3,
    'goldZenAmount': 0,
    'goldZenNumber': 1e3,
    'amountNeeded': 0,
    'amountNeededNumber': 1e3
  })

  const [zenTimeStatBoxValues, setZenTimeStatBoxValues] = useState({
    'combinedZenTime':'-',
    'purpleZenTime': '-',
    'goldZenTime': '-'
  })

  const [zenShopStatBoxValues, setZenShopStatBoxValues] = useState({
    'rainingZenAmount':'-',
    'pumpItUpZenAmount': '-',
    'instantZenAmount': '-'
  })

  const [zenNinjaStatBoxValues, setZenNinjaStatBoxValues] = useState({
    'instantZenAmount': '-',
    'doubleTroubleZenAmount': '-'
  })

  const [calculateIsDisabled, setCalculateIsDisabled] = useState(true)

  const handleZenFormChange = (key: string, value: number) => {
    setZenCalcFormValues((prev) => ({ ...prev, [key]: value }));
    if(key === 'amountNeeded') setCalculateIsDisabled(false)
  };

  const handleZenFormCalculate = () => {
    
    const purpleZen = zenCalcFormValues.purpleZenAmount * zenCalcFormValues.purpleZenNumber
    const goldZen = zenCalcFormValues.goldZenAmount * zenCalcFormValues.goldZenNumber
    const combinedZen = purpleZen + goldZen
    
    const neededZen = zenCalcFormValues.amountNeeded * zenCalcFormValues.amountNeededNumber;

    const purpleZenTimeToTarget = timeToTarget(neededZen, purpleZen)
    const goldZenTimeToTarget = timeToTarget(neededZen, goldZen)
    const combinedZenTimeToTarget = timeToTarget(neededZen, combinedZen);

    setZenTimeStatBoxValues((prev) => ({ ...prev, ["purpleZenTime"]: purpleZenTimeToTarget }))
    setZenTimeStatBoxValues((prev) => ({ ...prev, ["goldZenTime"]: goldZenTimeToTarget }))
    setZenTimeStatBoxValues((prev) => ({ ...prev, ["combinedZenTime"]: combinedZenTimeToTarget }))

    const shopBoosts = calcZenShopBoosts(purpleZen, goldZen)

    setZenShopStatBoxValues((prev) => ({ ...prev, ["rainingZenAmount"]: shopBoosts.rainingZenAmount }))
    setZenShopStatBoxValues((prev) => ({ ...prev, ["pumpItUpZenAmount"]: shopBoosts.pumpItUpZenAmount }))
    setZenShopStatBoxValues((prev) => ({ ...prev, ["instantZenAmount"]: shopBoosts.instantZenAmount }))

    const ninjaBoosts = calcZenNinjaBoosts(purpleZen, goldZen)

    setZenNinjaStatBoxValues((prev) => ({ ...prev, ["instantZenAmount"]: ninjaBoosts.instantZenAmount }))
    setZenNinjaStatBoxValues((prev) => ({ ...prev, ["doubleTroubleZenAmount"]: ninjaBoosts.doubleTroubleZenAmount }))

  };


  return (
    <div className="flex flex-col justify-around items-center min-h-screen " >
      <div className="w-4/5 ">
        <ZenInputForm 
          handleZenFormChange={handleZenFormChange} 
          handleZenFormCalculate={handleZenFormCalculate}
          calculateIsDisabled={calculateIsDisabled}
        />
      </div>
      <div className="w-4/5 max-w-screen-xl p-6">
        <ZenCalcBoxes
          zenTimeStatBoxValues={zenTimeStatBoxValues} 
        />
      </div>
      <div className="w-4/5 max-w-screen-xl p-6">
        <ZenShopStatBoxes 
          zenShopStatBoxValues={zenShopStatBoxValues} 
        />
      </div>
      <div className="w-4/5 max-w-screen-xl p-6">
        <ZenNinjaStatBoxes 
          zenNinjaStatBoxValues={zenNinjaStatBoxValues} 
        />
      </div>
    </div>
  );
}
