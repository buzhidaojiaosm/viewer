import React, { useState, useEffect } from "react";
import { List, Spin } from "antd";
import { Link } from "react-router-dom";
import { getReposByUserName } from "./api";

const RepositoriesList = ({ username }) => {
  const [loading, setLoading] = useState(true);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    getReposByUserName(username).then((data) => {
      setLoading(false);
      setRepositories(data);
    });
  }, [username]);

  return (
    <Spin spinning={loading}>
      <List
        itemLayout="horizontal"
        dataSource={repositories}
        renderItem={(repo) => (
          <List.Item>
            <List.Item.Meta
              title={<Link to={`/repo/${repo.owner.login}/${repo.name}`}>{repo.name}</Link>}
              description={repo.description}
            />
          </List.Item>
        )}
      />
    </Spin>
  );
};

export default RepositoriesList;