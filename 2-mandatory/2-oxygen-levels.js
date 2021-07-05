/*
    Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
    somewhere safe while they call home for help.
  
    Their computer detects a list of nearby planets that have Oxygen in their atmosphere.

    To be safe, they need to land on the first unnamed planet that has Oxygen levels between 19.5% and 23.5%.

    Write a function that finds the oxygen level of the first safe planet - Oxygen between 19.5% and 23.5%

    Some string methods that might help you here are .replace() and .substring(). 
*/

function findSafeOxygenLevel(oxygenLevelsArray) {
  // array will contain string elements, I should check their numerical value: it should be between 0.195 (19.50%) and 0.235 (23.50%)
  // create a new array of numbers, compare their value and find the first one matches the criteria 
  // Find the indexOf the matched value and return the same index of oxygenLevelsArray
  const toNumber = oxygenLevelsArray.map(element => {
    return element.includes('%') ? parseFloat(element) / 100.0 : parseFloat(element);
  });  // turn the array of strings into array of numbers, check if there is %, if there is divide it by 100 
  const firstPlanet = toNumber.find(element => element > 0.1950 && element < 0.2350); // find first oxygen level in the array matches the criteria
  const index = toNumber.indexOf(firstPlanet);  // find the index of the first planet
  return oxygenLevelsArray[index];
}

/* ======= TESTS - DO NOT MODIFY ===== */

test("findSafeOxygenLevel function works - case 1", () => {
  expect(
    findSafeOxygenLevel(["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"])
  ).toEqual("19.9%");
});

test("findSafeOxygenLevel function works - case 2", () => {
  expect(
    findSafeOxygenLevel(["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"])
  ).toEqual("20.2%");
});

test("findSafeOxygenLevel function filters out invalid percentages", () => {
  expect(
    findSafeOxygenLevel(["200%", "-21.5%", "20", "apes", "21.1%"])
  ).toEqual("21.1%");
});

test("findSafeOxygenLevel function returns undefined if no valid plants found", () => {
  expect(findSafeOxygenLevel(["50"])).toBeUndefined();
});
