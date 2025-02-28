
  export function formatLargeNumber(value: number): string {
    const suffixes = [
      "", "Thousand", "Million", "Billion", "Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion", "Nonillion",
      "Decillion", "Undecillion", "Duodecillion", "Tredecillion", "Quattuordecillion", "Quindecillion", "Sexdecillion", "Septendecillion", "Octodecillion", "Novemdecillion",
      "Vigintillion", "Unvigintillion", "Duovigintillion", "Trevigintillion",
    "Quattuorvigintillion",
    "Quinquavigintillion",
    "Sexavigintillion",
    "Septavigintillion"
    ];
    let tier = Math.floor(Math.log10(value) / 3);
  
    if (tier === 0) {
      return value.toString();
    }
  
    const suffix = suffixes[tier] || "";
    const scaled = value / Math.pow(10, tier * 3);
  
    return `${scaled.toFixed(1)} ${suffix}`;
  }