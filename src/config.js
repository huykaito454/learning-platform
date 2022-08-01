const endPointWolfram =
  'https://www6b3.wolframalpha.com/input/wpg/problem.jsp?count=1&difficulty=Beginner&load=1&s=16&sessionID=1&type=';
const endPoint = 'http://localhost:8080/api/web';
export const API = {
  getAPI: (type) => `${endPointWolfram}${type}`,
  getAPITest: (type) => `${endPoint}/${type}`,
};
