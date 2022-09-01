{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  //public
  //private 외부에서 절대로 보여지지 않게 한다
  //protected

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; //class level
    private coffeeBeans: number = 0; // instance (object) level

    constructor(beans: number) {
      this.coffeeBeans = beans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
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
  //   maker.coffeeBeans = 3;
  //   maker.coffeeBeans = -32; // invalid(유효하지 않은)

  maker.fillCoffeeBeans(10);

  class User {
    // firstName: string;
    // lastName: string;

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("num should be greater than 0");
      }
      this.internalAge = num;
    }

    constructor(public firstName: string, private lastName: string) {
      //   this.firstName = firstName;
      //   this.lastName = lastName;
    }
  }
  const user = new User("Steve", "Jobs");
  console.log(user.fullName);
  user.firstName = "kim";
  console.log(user.fullName);
}

//encapsulation은 외부에서 접근 할 수 있는 것은 무엇이 있는지, 내부에서 정의해야 하는 것은 무엇이 있는지를 정의한다
