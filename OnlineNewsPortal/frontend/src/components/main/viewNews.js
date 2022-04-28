import { useEffect } from "react";
import { useParams } from "react-router-dom";
import app_config from "../../config";

const ViewNews = () => {
  const id = useParams();
  const url = app_config.api_url;

  const fetchData = () => {
    fetch(url + "/news/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayNews = () => {};

  return <div></div>;
};

export default ViewNews;
