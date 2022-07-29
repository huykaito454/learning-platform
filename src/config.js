const endPoint =
  "https://www6b3.wolframalpha.com/input/wpg/problem.jsp?count=1&difficulty=Beginner&load=1&s=16&sessionID=1&type=";
export const API = {
  getAPI: (type) => `${endPoint}${type}`,
};
