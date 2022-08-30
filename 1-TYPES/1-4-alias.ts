{
  //새로운 타입을 내가 정의 할 수 있다
  type Text = string;
  const name: Text = "kang";
  const address: Text = "korea";
  type num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "kang",
    age: 22,
  };

  //String Literal Types

  type Name = "name";
  let kangname: Name;
  kangname = "name";
  type JSON = "json";
  const json: JSON = "json";
}
