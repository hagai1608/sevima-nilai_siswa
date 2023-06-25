import axios from "axios";
// import { handlePageParams } from "../utils/handleParams";
// import { getStorage } from "../utils/storage";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  timeout: 10000,
});

const getListSiswa = async () => {
  return await api.get(`/program/v1/datasiswa/datasiswa`, {
  });
};

const postListSiswa = async (body) => {
  return await api.post(`/program/v1/datasiswa/datasiswa`, body, {
  });
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getListSiswa,
  postListSiswa
};
