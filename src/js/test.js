const url =
  "https://api.openweathermap.org/data/2.5/forecast?q=cancun&appid=b81d1235add18150329af82740e85f64";

const res = await fetch(url).then((ans) => ans.json());
console.log("API LIST");
console.log(res.list);

console.log("TEST DAY");
for (let x = 8; x < 40; x += 8) {
  console.log("Array " + x);
  console.log(new Date(res.list[x].dt * 1000));
}
console.log("array 39");
console.log(new Date(res.list[39].dt * 1000));
