// Create an array
const persons = [
  {
    id: 1,
    name: "John",
    job: "Software Developer",
    record: ["Computer Science", "Physical Science", "Havard University"],
  },
  {
    id: 2,
    name: "Mary",
    job: "Web Designer",
  },
  {
    id: 3,
    name: "Peter",
    job: "Mobile App Developer",
  },
];

// Iterate over
persons.filter((dev) => {
  if (dev.id === 1) {
    return console.log(dev.record);
  }
});
