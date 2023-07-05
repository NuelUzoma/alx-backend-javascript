interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student_1: Student = {
  firstName: "Emmanuel",
  lastName: "Madubuike",
  age: 21,
  location: "Lagos",
};

const student_2: Student = {
  firstName: "Samuel",
  lastName: "Chinonso",
  age: 19,
  location: "Lagos",
};

const studentsList: Student[] =  [student_1, student_2];

function renderTable() {
  const table = document.getElementById('students-table');

  studentsList.forEach((student) => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContext = student.firstName;
    row.appendChild(firstNameCell);

    const locationCell = document.createElement('td');
    locationCell.textContext = student.location;
    row.appendChild(locationCell);

    table.appendChild(row);
  });
}

renderTable();
