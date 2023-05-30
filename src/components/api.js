import axios from "axios";

// 通过Github API获取某用户的所有开源仓库
export const getReposByUserName = async (username) => {
  const result = await axios.get(
    `https://api.github.com/users/${username}/repos`
  );
  return result.data;
};

// 通过Github API获取某个开源仓库的详细信息
export const getRepoDetails = async (owner, repoName) => {
  const result = await axios.get(
    `https://api.github.com/repos/${owner}/${repoName}`
  );
  return result.data;
};