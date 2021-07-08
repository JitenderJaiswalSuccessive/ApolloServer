const getMyProfile = () => {
   return {
      id: '1',
      name: 'Jitender',
      email: 'jitender.jaiswal@successive.tech',
      role: 'trainee',
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
    role,
  }
}
*/