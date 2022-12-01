import { readFileSync } from "fs";

let file = readFileSync("./input", { encoding: "utf-8" });
let fileArr = file.split("\n");

let people = [0];
for (let i = 0; i < fileArr.length; i++) {
  if (fileArr[i] == "") {
    people.push(0);
    continue;
  } else {
    people[people.length - 1] += Number.parseInt(fileArr[i]);
  }
}

people.sort((a, b) => {
  return b - a;
});

console.log(`Biggest: ${people[0]}`);
console.log(`Top 3 Combined: ${people[0] + people[1] + people[2]}`);
