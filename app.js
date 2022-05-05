function phoneticLookup(val) {
  let result = "";

  const lookup = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank"
  }
result = lookup[val];
  return result;
}

console.log(phoneticLookup("bravo"));

function checkObj(obj, checkProp) {
 
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));
//gets pony


const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Eminem",
    "title": "The Eminem Show",
    "release_year": 2002,
    "formats": [
      "CD",
      "LP"
    ],
    "platinum": true
  }
];
console.log(myMusic[1].artist);


