const loginUser = async (parent, args, context) => {
      const { payload: { email, password }} = args;
      const { dataSources: { userAPI }} = context;
      
      const response = await userAPI.loginUser({email, password});
      return response.data;
};

const getMe = async (parent, args, context) => {
      const { dataSources: { userAPI }} = context;

      const response = await userAPI.getMe();
      return response.data;
}

export default {
    loginUser,
    getMe,
}

/*
mutation {
  loginUser(payload:{
    email: "jeet@gmnail.com ",
    password: "12345"
  })
}

mutation {
  getMe {
      id,
    name,
    email,
    role
  }
}
*/