let roster = [
  "Isaiah Mucius",
  "Daivien Williamson",
  "Jake LaRavia",
  "Cameron Hildreth",
  "Dallas Walton",
  "Khadim Sy",
  "Lucas Taylor",
  "Robert McCray",
  "Alondes Williams",
  "Matthew Marsh",
  "RJ Kennah",
  "Luc Robinson",
  "Anthony Mathis",
  "Kevin Dunn",
  "Damari Monsanto",
  "Tariq Ingraham",
  "Grant van Beveren",
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
