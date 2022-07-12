import firsUsersListJson from "./list1.json" assert { type: "json" };
import secondUsersListJson from "./list2.json" assert { type: "json" };

const usersList = firsUsersListJson.concat(secondUsersListJson);

const usersByIdSort = usersList.sort(function (a, b) {
  return a.id - b.id;
});

const onlyAdminsIdSort = usersByIdSort.filter(function (user) {
  return user.role == "admin";
});

//Posortowana po id tablica userów typu ‘admin’
console.log(onlyAdminsIdSort);

const adminsNames = onlyAdminsIdSort.map((person) => person.name);

const longestAdminSurname = adminsNames
  .sort((a, b) => a.split(" ")[1].length - b.split(" ")[1].length)
  .slice(-1)[0];

// Admin z nadjłuższym nazwiskiem
console.log(longestAdminSurname);
