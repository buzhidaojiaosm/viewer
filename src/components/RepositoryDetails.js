import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Card, Spin } from "antd";
import { getRepoDetails } from "./api";

const { Meta } = Card;

const RepositoryDetails = () => {
  const { owner: urlOwner, repoName: urlRepoName } = useParams();
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRepoDetails(urlOwner, urlRepoName)
      .then((data) => {
        setLoading(false);
        setRepo(data);
      })
      .catch((err) => {
        setLoading(false);
      });

  },[urlOwner, urlRepoName]);

  return (
    <Spin spinning={loading}>
      <Card title={repo.name} style={{ width: "100%" }}>
        <Meta title="Description" description={repo.description} />
        <br />
        <Meta title="Default Branch" description={repo.default_branch} />
        <br />
        <Meta title="Homepage" description={repo.homepage} />
        <br />
        <Meta title="Language" description={repo.language} />
        <br />
        <Meta title="License" description={repo.license ? repo.license.spdx_id : ''} />
        <br />
        <Meta title="Created At" description={repo.created_at} />
        <br />
        <Meta title="Updated At" description={repo.updated_at} />
        <br />
        <Meta title="Pushed At" description={repo.pushed_at} />
        <br />
        <Meta title="Size" description={repo.size} />
        <br />
        <Meta title="Stars" description={repo.stargazers_count} />
        <br />
        <Meta title="Watchers" description={repo.watchers_count} />
        <br />
        <Meta title="Forks" description={repo.forks_count} />
      </Card>
    </Spin>
  );
};

export default RepositoryDetails;
