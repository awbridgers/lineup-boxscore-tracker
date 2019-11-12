let roster = [
  "Brandon Childress",
  "Isaiah Mucius",
  "Sharone Wright",
  "Jahcobi Neath",
  "Tariq Ingraham",
  "Torry Johnson",
  "Andrien White",
  "Michael Wynn",
  "Chaundee Brown",
  "Ismael Massoud",
  "Olivier Sarr",
  "Blake Buchanan",
  "Ody Oguama",
  "Sunday Okeke",
  "Grant Van Beveren",
  "Miles Lester"
];

roster.sort((a,b)=>{
  //sort the roster array by player's last name
  const lastNameA = a.split(' ')
  const lastNameB = b.split(' ')
  return lastNameA[1].localeCompare(lastNameB[1])
})

export default roster;
