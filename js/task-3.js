const findBestEmployee = function (employees) {
  let bestEmployee = "";
  let maxExams = 0;

  for (const employer in employees) {
    if (employees[employer] > maxExams) {
      maxExams = employees[employer];
      bestEmployee = employer;
    }
  }

  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
