{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; //class level
    coffeeBeans: number = 0; // instance (object) level

    constructor(beans: number) {
      //class 생성시 가장 처음 실행되는 함수
      this.coffeeBeans = beans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("not enough coffee beans");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  const maker2 = new CoffeeMaker(24);
  console.log(maker);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(35);
}

// 외부에서 인자를 받아 올 때는 constructor를 사용해서 받아 올 수도 있고, class내에서 그 class자체를 return하는 static함수를 만들어서 외부에서
// class내부 함수를 출력해서 사용 할 수도 있다(maker3)
// 또한 static을 붙임으로 써, 외부에서 뭔가를 받아와서 정의하는 변수가 아닌, 내부에서 이미 정해져있고, 변하지 않는 변수라는 것을 정의 할 수 있다.
