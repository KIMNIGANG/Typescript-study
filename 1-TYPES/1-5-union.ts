{
  //Union Types: Or

  type Direction = "left" | "right" | "up" | "down";
  function Move(direction: Direction) {
    console.log(direction);
  }
  move("right");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  //function: login -> success or fail
  type SuccessState = {
    reponse: {
      body: string;
    };
  };
  type FailState = {
    reason: {
      body: string;
    };
  };
  type LoginState = SuccessState | FailState;

  function loggedin(id: string, password: string): LoginState {
    return {
      reponse: {
        body: "logged in!",
      },
    };
  }

  //printLoginState(state)
  //success => body
  //fail => reason

  function PrintLoginState(state: LoginState) {
    if ("reponse" in state) {
      console.log(`good ${state.reponse}`);
    } else {
      console.log(`bad ${state.reason}`);
    }
  }
}
