{
  //여러가지에 관련된 상수값들을 한 곳에 모아서 보관

  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({
    MONDAY: 0,
    TUESDAY: 1,
    WEDNESDAY: 2,
  });
  const dayOfToday = DAYS_ENUM.MONDAY;

  enum Days { //값을 정하지 안으면 자동으로 순서대로 0부터 시작한다
    Monday = 1, //값을 1부터 시작하고 싶을 경우에는 이렇게 1을 넣어준다
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Tuesday);
  const day = Days.Saturday;
  console.log(day);
  //타입스크립트에서 이넘은 그닥 사용하지 않는 편이 좋다 => let 으로 지정한 day를 10으로 재할당 할 경우 에러가 발생할 수 있다 그 대신에 uniotype을 써서 지정해주는 것이 좋다

  type DaysUnion = "Monday" | "Tuesday" | "Wednesday";

  let dayOfWeek: DaysUnion = "Monday";
  dayOfWeek = "Wednesday";
}
