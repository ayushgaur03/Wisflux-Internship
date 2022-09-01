import members from "./data.js";

/*Get array of first names of everyone*/
const getFirstNames = () => {
  let ans = [];
  members.forEach((member) => {
    ans = [...ans, member.name.split(" ")[0]];
  });
  return ans;
};

/*Make everyone's last names in UPPERCASE in given array of objects*/
const updateLastname = () => {
  let ans = [];
  members.forEach((member) => {
    const name = member.name.split(" ");
    let new_name = name[0] + " " + name[1].toUpperCase();
    member.name = new_name;
    ans = [...ans, member];
  });

  return ans;
};

/*Get entries where age is between 41-60*/
const getEntries = () => {
  let ans = [];
  members.forEach((member) => {
    if (member.age <= 60 && member.age > 40) ans = [...ans, member];
  });
  return ans;
};

/*Get average age*/
const getAverageAge = () => {
  let ans = 0;
  const record_count = members.length;
  members.map((member) => {
    if (member.age !== undefined) ans += member.age;
  });
  return ans / record_count;
};

/* Get Person with maximum age */
const maxAge = members.reduce(
  (max, member) => (member.age > max ? member.age : max),
  0
);

/*
 * Divide persons in three groups, result should look like
 * {
 *    'young': [],
 *    'old': [],
 *    'noage': []
 * }
 * Less than 35yrs is young, above 35 is old
 */
const classifyMembers = members.reduce(
  (classifier, member) => {
    if (member.age === undefined) {
      classifier["noage"] = [...classifier.noage, member];
    } else if (member.age >= 35) {
      classifier["old"] = [...classifier.old, member];
    } else {
      classifier["young"] = [...classifier.young, member];
    }
    return classifier;
  },
  {
    young: [],
    old: [],
    noage: [],
  }
);

/* add a new member to same members array instance at index 2 */
const insertMember = (arr, index, newItem) => [
  ...arr.slice(0, 2),
  newItem,
  ...arr.slice(2),
];
console.log(
  insertMember(members, 2, {
    name: "Ayush Gaur",
    age: 22,
  })
);

/* Create a new array instance adding a new member at index 0,
   and keeping existing afterwards */
const addMemberAtTop = () => {
  return [{ name: "Ayush Gaur", age: 22 }, ...members];
};

/*Extract properties of object using destructuring */
const showMembers = () => {
  members.forEach((member) => {
    const { name } = member;
    console.log(`My name is ${name}`);
  });
};

/*Rename extracted property of object while destructing*/
const showNames = () => {
  let usernames = [];
  members.forEach((member) => {
    const { name: username, age } = member;
    usernames = [...usernames, username];
  });
  return usernames;
};

/* Destructure any property of an object and use spread operator
to get remaining properties in an object */
const printMember = (member) => {
  const { name, ...props } = member;
  console.log(name);
  console.log(props);
};

/* Create a new object by copying using spread operator, override
    one of the properties to assign a new value in the same step */
const upgradeUser = (member) => {
  const { ...props } = member;
  props.name = "Legendary " + props.name;
  return props;
};

/* Use reduce function on array and object */
const nameList = members.reduce(
  (prevList, currName) => [...prevList, currName.name],
  []
);
