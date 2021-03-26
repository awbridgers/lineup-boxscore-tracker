let roster = [
  "Jahcobi Neath",
  "Isaiah Mucius",
  "Jalen Johnson",
  "Daivien Williamson",
  "Tariq Ingraham",
  "Ian DuBose",
  "Quadry Adams",
  "Jonah Antonio",
  "Isaiah Wilkins",
  "Ismael Massoud",
  "Emmanuel Okpomo",
  "Blake Buchanan",
  "Ody Oguama",
  "Sunday Okeke",
  "Anthony Mathis",
  "Grant Van Beveren",
  "Miles Lester",
  "Carter Whitt"
];

roster.sort((a,b)=>{
  //sort the roster array by player's last name
  const lastNameA = a.split(' ')
  const lastNameB = b.split(' ')
  return lastNameA[1].localeCompare(lastNameB[1])
})

export default roster;
