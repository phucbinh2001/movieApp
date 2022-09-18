import React, { useEffect, useState } from "react";
import {
  Button,
  ScrollView,
  StatusBar,
  View,
  SafeAreaView,
} from "react-native";
import "react-native-gesture-handler";
import { trendingApi } from "../../../api/TrendingApi";
import { Banner } from "../../../components/Banner/Banner";
import { MovieCategory } from "../../../components/MovieCategory/MovieCategory";
import { Movie } from "../../../types/Movie";

export const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [trendingData, setTrendingData] = useState<Movie[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    const res = await trendingApi.findAll();
    setLoading(false);
    //@ts-ignore
    setTrendingData(res.results);
  };

  const handleOpenDetailCate = () => {
    navigation.navigate("CategoryDetail", {
      title: "Top Movies This Week",
      movies: trendingData,
    });
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#f2f2f2" }}>
        <ScrollView>
          <StatusBar barStyle={"dark-content"} />
          <View style={{ paddingBottom: 30 }}>
            <Banner data={trendingData[0]} />
            <MovieCategory
              data={trendingData.slice(0, 10)}
              title="Top Movies This Week"
              onPressDetail={handleOpenDetailCate}
            />

            <MovieCategory
              onPressDetail={handleOpenDetailCate}
              data={trendingData.slice(10, 20)}
              title="Top Movies This Week"
            />
            <MovieCategory
              onPressDetail={handleOpenDetailCate}
              data={trendingData.slice(0, 10)}
              title="Top Movies This Week"
            />
            <MovieCategory
              onPressDetail={handleOpenDetailCate}
              data={trendingData.slice(0, 10)}
              title="Top Movies This Week"
            />
            <MovieCategory
              onPressDetail={handleOpenDetailCate}
              data={trendingData.slice(0, 10)}
              title="Top Movies This Week"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
