import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  Animated,
  ScrollView,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Platform,
} from "react-native";

import ProgressBar from "../components/ProgressBar.js";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SIZES, FONTS, icons, images } from "../constants/index.js";

const MovieDetail = ({ navigation, route }) => {
  const [movie, setMovie] = useState(null);
  console.log(movie);
  useEffect(() => {
    let { selectedMovie } = route.params;
    setMovie(selectedMovie);
  }, []);

  function renderHeaderSection() {
    return (
      <ImageBackground
        style={{
          width: "100%",
          height: SIZES.height < 700 ? SIZES.height * 0.6 : SIZES.height * 0.7,
        }}
        source={movie?.details?.image}
        resizeMode="cover"
      >
        <View
          style={{
            flex: 1,
          }}
        >
          {/* Header icon */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: Platform.OS === "ios" ? 40 : 20,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 50,
                height: 50,
                borderRadius: 20,
                backgroundColor: COLORS.transparentBlack,
              }}
            >
              <Image
                source={icons.left_arrow}
                style={{
                  width: 25,
                  height: 25,

                  backgroundColor: COLORS.white,
                  tintColor: COLORS.primary,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log("share button click")}
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: 50,
                height: 50,
                borderRadius: 20,
                backgroundColor: COLORS.transparentBlack,
              }}
            >
              <Image
                source={icons.upload}
                style={{
                  width: 25,
                  height: 25,

                  backgroundColor: COLORS.white,
                  tintColor: COLORS.primary,
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["transparent", "#000000"]}
              style={{
                width: "100%",
                height: 150,
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.body4,
                }}
              >
                {movie?.details?.season}
              </Text>

              <Text
                style={{
                  marginTop: SIZES.base,
                  color: COLORS.white,
                  ...FONTS.h1,
                }}
              >
                {movie?.name}
              </Text>
            </LinearGradient>
          </View>
        </View>
      </ImageBackground>
    );
  }

  function renderCategoryAndRatings() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.base,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={
            ([styles.categoryContainer],
            {
              marginLeft: 0,
            })
          }
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h4,
            }}
          >
            {movie?.details?.age}
          </Text>
        </View>

        <View
          style={
            ([styles.categoryContainer],
            {
              paddingHorizontal: SIZES.padding,
            })
          }
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h4,
            }}
          >
            {movie?.details?.genre}
          </Text>
        </View>

        <View style={styles.categoryContainer}>
          <Image
            source={icons.star}
            resizeMode="contain"
            style={{
              width: 15,
              height: 15,
            }}
          />
          <Text
            style={{
              color: COLORS.white,
              marginLeft: SIZES.base,
              ...FONTS.h4,
            }}
          >
            {movie?.details?.ratings}
          </Text>
        </View>
      </View>
    );
  }

  function renderMovieDetails() {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
          marginTop: SIZES.padding,
          justifyContent: " space-around",
        }}
      >
        {/* title, running, progressBar */}

        <View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                flex: 1,
                color: COLORS.white,
                ...FONTS.h4,
              }}
            >
              {movie?.details?.currentEpisode}
            </Text>

            <Text
              style={{
                flex: 1,
                color: COLORS.lightGray,
                ...FONTS.body4,
              }}
            >
              {movie?.details?.runningTime}
            </Text>
          </View>

          {/* progressBar */}
          <ProgressBar
            containerStyle={{
              marginTop: SIZES.radius,
              marginBottom: SIZES.radius,
            }}
            barStyle={{
              height: 5,
              borderRadius: 3,
            }}
            barPercentage={movie?.details?.progress}
          />
        </View>

        {/* watch */}

        <TouchableOpacity
          style={{
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: Platform.OS === "ios" ? SIZES.padding * 2 : 2,
            borderRadius: 25,
            backgroundColor: COLORS.primary,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h2,
            }}
          >
            {movie?.details?.progress === "0%"
              ? "WATCH NOW"
              : "CONTINUE WATCHING"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView
      contentContainerStyle={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}
      style={{
        backgroundColor: COLORS.black,
      }}
    >
      <ScrollView>
        {renderHeaderSection()}

        {renderCategoryAndRatings()}

        {renderMovieDetails()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    marginTop: SIZES.base,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SIZES.base,
    paddingVertical: 3,
    backgroundColor: COLORS.gray1,
  },
});

export default MovieDetail;
