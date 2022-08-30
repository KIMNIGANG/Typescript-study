{
  function PrintName(firstName: string, lastName?: string) {
    //?를 붙여줌으로써, 이 인자를 받을 수 도 있고, 안받을 수도 있다는 것을 명시한다.
    console.log(firstName);
    console.log(lastName);
  }
  PrintName("kim", "hyeonkang");
  PrintName("kimhyeonkang", undefined);
}
