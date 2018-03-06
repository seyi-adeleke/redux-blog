import decode from 'jwt-decode';


const verifyToken = (token) => {
  if (token) {
    const tokenExpiration = decode(token).exp * 1000;
    const currentTime = Date.now();
    return (!(currentTime > tokenExpiration));
  }
  return false;
};

export default verifyToken;
