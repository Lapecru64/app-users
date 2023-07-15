import axios from "axios";
import { useState } from "react";

const useFetch = (baseUrl) => {
  const [infoApi, setInfoApi] = useState(null);

  const getApi = (path) => {
    const url = `${baseUrl}${path}/`;
    axios
      .get(url)
      .then((res) => setInfoApi(res.data))
      .catch((err) => console.log(err));
  };

  const postApi = (path, data) => {
    const url = `${baseUrl}${path}/`;
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        setInfoApi((infoApi) => (infoApi ? [...infoApi, res.data] : [res.data]));
      })
      .catch((err) => console.log(err));
  };

  const deleteApi = (path, id) => {
    const url = `${baseUrl}${path}/${id}/`;
    axios
      .delete(url)
      .then((res) => {
        console.log(res.data);
        setInfoApi((infoApi) => infoApi.filter((e) => e.id !== id));
      })
      .catch((err) => console.log(err));
  };

  const updateApi = (path, id, data) => {
    const url = `${baseUrl}${path}/${id}/`;
    axios
      .patch(url, data)
      .then((res) => {
        console.log(res.data);
        setInfoApi((infoApi) =>
          infoApi.map((e) => (e.id === id ? res.data : e))
        );
      })
      .catch((err) => console.log(err));
  };

  return [infoApi, getApi, postApi, deleteApi, updateApi];
};

export default useFetch;
