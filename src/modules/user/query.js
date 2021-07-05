const getMyProfile = () => {
   return {
      id: '1',
      name: 'Jitender',
      email: 'jitender.jaiswal@successive.tech',
   }
};

export default {
  getMyProfile,
}

/*
query {
  getMyProfile {
    id,
    name,
    email,
  }
}
*/