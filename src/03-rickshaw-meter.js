/**
 * 🛺 Auto Rickshaw Fare Calculator - Number & Math
 *
 * Bhaiyya ji ka auto rickshaw hai. Meter se fare calculate hota hai.
 * Different math operations chahiye — round karna, min/max nikalna,
 * strings se numbers parse karna. Tu Bhaiyya ji ka meter software bana!
 *
 * Methods to explore: parseFloat(), parseInt(), .toFixed(),
 *   Math.ceil(), Math.max(), Math.min(), Math.abs()
 *
 * Functions:
 *
 *   1. parseFare(fareString)
 *      - Customer bolte hain "152.50" as string — parseFloat() se number banao
 *      - Agar result NaN hai ya fareString string nahi hai, return -1
 *      - Example: parseFare("152.50") => 152.5
 *      - Example: parseFare("abc") => -1
 *
 *   2. roundFare(amount, decimalPlaces)
 *      - .toFixed(decimalPlaces) se fare round karo
 *      - Result STRING return hota hai (toFixed returns string)
 *      - Agar amount number nahi hai ya decimalPlaces non-negative integer nahi hai, return ""
 *      - Example: roundFare(152.567, 2) => "152.57"
 *      - Example: roundFare(152.567, 0) => "153"
 *
 *   3. calculateSurge(baseFare, surgeMultiplier)
 *      - baseFare * surgeMultiplier karo
 *      - Math.ceil() se always round UP (auto wale ko paisa milna chahiye!)
 *      - Agar baseFare ya surgeMultiplier positive number nahi hai, return 0
 *      - Example: calculateSurge(100, 1.5) => 150
 *      - Example: calculateSurge(73, 1.8) => 132 (Math.ceil(131.4))
 *
 *   4. findCheapestAndCostliest(...fares)
 *      - Rest parameter (...) se variable number of fares le
 *      - Math.min() aur Math.max() se cheapest aur costliest dhundho
 *      - Non-number values filter out karo
 *      - Agar koi valid number nahi mila, return null
 *      - Return: { cheapest, costliest }
 *      - Example: findCheapestAndCostliest(150, 80, 200) => { cheapest: 80, costliest: 200 }
 *
 *   5. getDistanceDifference(from, to)
 *      - parseInt() se string km markers ko numbers mein convert karo
 *      - Math.abs() se absolute difference nikalo (direction matter nahi karta)
 *      - Agar parse ke baad koi NaN hai, return -1
 *      - Example: getDistanceDifference(5, 12) => 7
 *      - Example: getDistanceDifference("15", "8") => 7
 *
 * @example
 *   parseFare("152.50")                    // => 152.5
 *   roundFare(152.567, 2)                  // => "152.57"
 *   findCheapestAndCostliest(150, 80, 200) // => { cheapest: 80, costliest: 200 }
 */
export function parseFare(fareString) {
  // Your code here
  const fare = parseFloat(fareString);
  if(typeof fare === NaN) return -1;

  return fare;
}

export function roundFare(amount, decimalPlaces) {
  // Your code here
  const fare = amount.toFixed(decimalPlaces);
  if(typeof fare == NaN || amount <= 0) return ""

  return fare;
}

export function calculateSurge(baseFare, surgeMultiplier) {
  // Your code here
  if (baseFare < 0 || surgeMultiplier < 0) return 0;
  const fare = baseFare*surgeMultiplier;
  const roundedFare = Math.ceil(fare);

  return roundedFare;

}

export function findCheapestAndCostliest(...fares) {  // ...fares is an array of dynamic arguments
  // Your code here
  const numericFares = fare.filter(
    fare => typeof fare === 'number' && Number.isFinite(fare)
  );

  if(numericFares.length === 0) return null;

  return {
    cheapest : Math.min(...numericFares),
    costliest: Math.max(...numericFares)
  }
}

export function getDistanceDifference(from, to) {
  // Your code here
 const fromInt = parseInt(from);
 const toInt = parseInt(to);

console.log(fromInt)
console.log(typeof fromInt)


 if( typeof fromInt != 'number' || typeof toInt != 'number') {
return -1
 }

 const difference = Math.abs(fromInt - toInt)
 return difference

}


console.log(getDistanceDifference('a',5))
