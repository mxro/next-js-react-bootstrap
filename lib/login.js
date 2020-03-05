import Cookies from 'js-cookie';

export async function login({ email, password }) {

  const jwt = "dummy";
  Cookies.set('jwt', jwt);
  return {
    userid: 1,
    username: email
  };
};
