{
  //Array
  const fruits: string[] = ["apple", "banana"]; //이걸 더 선호 readonly라는 기능을 쓸 수 있음
  const scores: Array<number> = [1, 2, 3];

  function printArray(fruits: readonly string[]) {}

  //Tuple  -> interface, tyoe alias, class
  //권장하지는 않는다, 인덱스로 접근하는데 가독성이 떨어진다.
  let student: [string, number];
  student = ["name", 123];
  student[0]; //name
  student[1]; //123
  const [name, age] = student;
}
