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
