import { AxiosPromise } from "axios";
import { request } from "../utils/request";

export const trendingApi = {
  findAll: (params?: any): AxiosPromise<any> =>
    request({
      url: "/trending/movie/week?api_key=50fbfbdcaadd4cc60d8f99da000cf0fb&language=vi",
      params,
    }),
};
