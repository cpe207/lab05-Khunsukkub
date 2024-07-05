// define interface for Student object
interface Students {
  name : string;
  score : number;
}

// assign interface/type to the function definition properly
function findTopNames(students : Students[]) : string[] {
  return students.filter((x) => x.score > 8).map((x) => x.name);
}

// assign interface/type to the student1 object properly
const students1 : Students[] = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;

//660610743 ขุนศึกไท บัวไชโย
