import { formatLargeNumber } from "./format_large_number";

  export function calcZenShopBoosts(purpleZen: number, goldZen: number): { 
    rainingZenAmount: string;
    pumpItUpZenAmount: string;
    instantZenAmount: string; 
  } {
    const rainingZenAmount = purpleZen * 6 * 3600;
    const pumpItUpZenAmount = (purpleZen * 4 * 3600) + (goldZen * 4 * 3600);
    const drizzleZenAmount = purpleZen * 3600;
  
    return {
        "rainingZenAmount": formatLargeNumber(rainingZenAmount),
        "pumpItUpZenAmount": formatLargeNumber(pumpItUpZenAmount),
        "instantZenAmount": formatLargeNumber(drizzleZenAmount),
    };
  }