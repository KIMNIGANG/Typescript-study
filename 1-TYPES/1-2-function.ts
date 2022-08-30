{
  //   //js
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

  //   //ts
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }

  //   //js
  //   function jsFetchNum(id) {
  //     // code...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //   //ts
  //   function fetchNum(id: string): Promise<number> {
  //     // code...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //   //JavaScript  => TypeScript
  //   //Optional Parameter

  function printName(firstName: string, lastName?: string): void {
    //?를 붙여줌으로써, 이 인자를 받을 수 도 있고, undefined을 수도 있다는 것을 명시한다.
    //by attaching a ?, this function(parameter) can get factor or undefined.
    console.log(firstName);
    console.log(lastName);
  }
  printName("kim", "hyeonkang");
  printName("kimhyeonkang", undefined);

  //Defalut parameter
  function printMessage(message: string = "Default message"): void {
    console.log(message);
  }
  printMessage();
  printMessage("hi");

  //Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, -3, 5));
}
