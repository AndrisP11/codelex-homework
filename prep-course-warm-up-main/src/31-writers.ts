export {};

/**
 * Loop over the array and for each alive writer print out the following:
 * "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
 */

interface Writer {
  firstName: string;
    lastName: string;
    occupation: string;
    age: number;
    alive: boolean;
}

const writers: Writer[] = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }
];

writers.forEach(writer => {
  if (writer.alive === true){
    console.log(`Hi, my name is ${writer.firstName} ${writer.lastName}. I am ${writer.age} years old, and work as a ${writer.occupation}.`)
  }
})

/*writers.forEach(writer => {
  const {firstName,lastName,occupation,age, alive } = writer
  if (alive === true){
    console.log(`Hi, my name is ${firstName} ${lastName}. I am ${age} years old, and work as a ${occupation}.`)
  }
})*/