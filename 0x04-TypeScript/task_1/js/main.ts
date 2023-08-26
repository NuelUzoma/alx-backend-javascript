interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  readonly fullTimeEmployee: boolean,
  readonly yearsOfExperience?: number,
  readonly location: string,
  [key: string]: any;
}

const teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Alabama",
};

teacher.yearsOfExperience = 10;
teacher.contract = true;

console.log(teacher);




interface Directors extends Teacher {
  numberOfReports: number;
}

const director: Directors = {
  firstName: "Emmanuel",
  lastName: "Uzo",
  fullTImeEmployee: true,
  location: "Maryland",
  yearsOfExperience: 10,
  numberOfReports: 7,
}

console.log(director);



interface printTeacherFunction {
  (firstName: string, lastName: string): string,
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInit = firstName.charAt(0).toUpperCase();
  const lastInit = lastName.charAt(0).toUpperCase + lastName.slice(1);

  return `${firstInit}. ${lastInit}`;
};

console.log(printTeacher("John", "Doe"));




interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass,
}

interface StudentInterface {
  workOnHomework(): string,
  displayName(): string,
}

class StudentClass {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this.firstName;
  }
}
