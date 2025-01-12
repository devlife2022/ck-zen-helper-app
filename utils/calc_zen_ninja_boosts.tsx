import { formatLargeNumber } from "./format_large_number";

  export function calcZenNinjaBoosts(purpleZen: number, goldZen: number): { 
    doubleTroubleZenAmount: string;
    instantZenAmount: string; 
  } {
    const doubleTroubleZenAmount =  goldZen * 6 * 3600;
    const instantZenAmount = purpleZen * 1800;
  
    return {
        "doubleTroubleZenAmount": formatLargeNumber(doubleTroubleZenAmount),
        "instantZenAmount": formatLargeNumber(instantZenAmount),
    };
  }