export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = '';
    this._length = 0;
    this._students = [];

    if (typeof name === 'string') {
      this._name = name;
    }

    if (typeof length === 'number') {
      this._length = length;
    }

    if (Array.isArray(students) && students.every((student) => typeof student === 'string')) {
      this._students = students;
    }
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    }
  }

  // Getter and Setter for Length
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    }
  }

  // Getter and Setter for Students
  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(value) && value.every((student) => typeof student === 'string')) {
      this._students = value;
    }
  }
}
