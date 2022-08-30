{
  //Union Types: Or

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("right");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  //function: login -> success or fail
  type SuccessState = {
    result: "success";
    reponse: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: {
      body: string;
    };
  };
  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    return {
      result: "success",
      reponse: {
        body: "logged in!",
      },
    };
  }

  //printLoginState(state)
  //success => body
  //fail => reason

  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`good ${state.reponse.body}`);
    } else {
      console.log(`bad ${state.reason}`);
    }
  }
}
