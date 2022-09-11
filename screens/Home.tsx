import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar } from "react-native";
import { trendingApi } from "../api/TrendingApi";
import { Banner } from "../components/Banner/Banner";
import { MovieCategory } from "../components/MovieCategory/MovieCategory";
import { Movie } from "../types/Movie";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [trendingData, setTrendingData] = useState<Movie[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const res = await trendingApi.findAll();
    setLoading(false);
    console.log("res.data", res);
    // console.log("result ne:", res.data.results);
    //@ts-ignore
    setTrendingData(res.results);

    // setData(res.data.data);
    // setTotal(res.data.total);
  };

  return (
    <ScrollView>
      <StatusBar backgroundColor={"#fff"} barStyle={"light-content"} />
      <Banner data={trendingData[0]} />
      <MovieCategory
        data={trendingData.slice(0, 10)}
        title="Top Movies This Week"
      />
      <MovieCategory
        data={trendingData.slice(10, 20)}
        title="Top Movies This Week"
      />
      <MovieCategory
        data={trendingData.slice(0, 10)}
        title="Top Movies This Week"
      />
      <MovieCategory
        data={trendingData.slice(0, 10)}
        title="Top Movies This Week"
      />
      <MovieCategory
        data={trendingData.slice(0, 10)}
        title="Top Movies This Week"
      />
    </ScrollView>
  );
};
