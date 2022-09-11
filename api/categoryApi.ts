import { AxiosPromise } from "axios";
import { request } from "../utils/request";

export const categoriesApi = {
  findAll: (params?: any): AxiosPromise<any> =>
    request({
      url: "/genre/movie/list?api_key=50fbfbdcaadd4cc60d8f99da000cf0fb&language=vi",
      params,
    }),
};
