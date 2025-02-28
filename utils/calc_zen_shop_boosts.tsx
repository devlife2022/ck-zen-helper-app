import { formatLargeNumber } from "./format_large_number";

  export function calcZenShopBoosts(purpleZen: number, goldZen: number): { 
    rainingZenAmount: string;
    pumpItUpZenAmount: string;
    instantZenAmount: string; 
    luckyGoldenZenBoostAmount: string;
    goldenPawAmount: string;
    eggSurgeAmount: string;
  } {
    const rainingZenAmount = purpleZen * 6 * 3600;
    const pumpItUpZenAmount = (purpleZen * 4 * 3600) + (goldZen * 4 * 3600);
    const drizzleZenAmount = purpleZen * 3600;

    const luckyGoldenZenBoostAmount = goldZen * 7.77 * 3600
    const goldenPawAmount = goldZen * 3 * 3600
    const eggSurgeAmount = (purpleZen * 5 * 3600) + (goldZen * 5 * 3600);
  
    return {
        "rainingZenAmount": formatLargeNumber(rainingZenAmount),
        "pumpItUpZenAmount": formatLargeNumber(pumpItUpZenAmount),
        "instantZenAmount": formatLargeNumber(drizzleZenAmount),
        "luckyGoldenZenBoostAmount": formatLargeNumber(luckyGoldenZenBoostAmount),
        "goldenPawAmount": formatLargeNumber(goldenPawAmount),
        "eggSurgeAmount": formatLargeNumber(eggSurgeAmount)
    };
  }