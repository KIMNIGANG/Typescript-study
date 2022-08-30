{
  type success = {
    result: "success";
    response: {
      body: string;
      id: string;
    };
  };

  type fail = {
    result: "fail";
    reponse: {
      body: string;
      id: string;
    };
  };

  type loginState = success | fail;

  function Login(id: string, password: string): loginState {
    if (id === "kang" && password === "1234") {
      return {
        result: "success",
        response: {
          body: "success",
          id: "kang",
        },
      };
    } else {
      return {
        result: "fail",
        reponse: {
          body: "fail",
          id: id,
        },
      };
    }
  }

  function LoginPrint(state: loginState) {
    if (state.result === "success") {
      console.log(`success hello ${state.response.id}`);
    } else {
      console.log(`failed ${state.reponse.id} is not available`);
    }
  }

  LoginPrint(Login("kang", "124"));
}
