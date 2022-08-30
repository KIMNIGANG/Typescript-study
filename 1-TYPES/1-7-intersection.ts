{
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  let person = {
    name: "kang",
    score: 1,
    employeeId: 123,
    work: () => {},
  };

  internWork(person);
}
