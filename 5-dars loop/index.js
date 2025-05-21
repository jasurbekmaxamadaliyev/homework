let juft = 0;

for (let j = 1; j <= 10; j++) {
  if (j % 2 == 0) {
    juft += j;
  }
}
console.log(juft);
let toq = 0;

for (let t = 1; t <= 10; t++) {
  if (t % 2 !== 0) {
    toq += t;
  }
}
console.log(toq);

let rs = 5;
let cs = 10;

for (let i = 0; i < rs; i++) {
  let lon = "";

  if (i === 0 || i === rs - 1) {
    for (let q = 0; q < cs; q++) {
      lon += "*";
    }
  } else {
    lon += "*";
    for (let q = 0; q < cs - 2; q++) {
      lon += " ";
    }
    lon += "*";
  }

  console.log(lon);
}

for (let il = 1; il <= 7; il++) {
  let ss = "";
  for (let jj = 1; jj <= il; jj++) {
    ss += "*";
  }
  console.log(ss);
}
