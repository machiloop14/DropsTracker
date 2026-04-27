import api from "@/api/api";
import AirdropCard from "@/components/airdropCard";
import ThemeToggler from "@/components/themeToggler";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface dataType {
  projectName: string;
  category: string;
  endDate: Date | null;
  id: string;
  notes: string | null;
  repeat: number;
  startAlarm: Date | null;
  startDate: Date;
  userId: string;
  walletAddress: string;
}

const Dashboard = () => {
  const insets = useSafeAreaInsets();
  const { colorScheme } = useColorScheme();
  const router = useRouter();

  const [data, setData] = useState<dataType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalData, setTotalData] = useState<number | null>();

  const fetchAirdrops = async (page: number) => {
    try {
      const res = await api.get(`/drops?page=${page}&limit=5`);

      if (!res.data.success) {
        console.log("res success is false");
        return;
      }
      console.log(res.data.data[0]);

      // setData((prevData) => [...prevData, ...res.data.data]);
      setData((prev) => {
        const merged = [...prev, ...res.data.data];

        return merged.filter(
          (item, index, self) =>
            index === self.findIndex((d) => d.id === item.id)
        );
      });
      // setData(res.data.data);
      setCurrentPage(page);
      setTotalPages(res.data.pagination.totalPages);
      setTotalData(res.data.pagination.total);
      console.log("total pages 1: " + totalPages);
    } catch (error) {
      console.log("dashboard error: " + error);
    } finally {
      console.log(data?.length);
    }
  };

  useEffect(() => {
    fetchAirdrops(1);
    console.log("total pages 2: " + totalPages);
  }, []);

  const fetchMoreAirdrops = (page: number) => {
    if (page > totalPages) return;

    fetchAirdrops(page);
  };

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "zkSync Era",
      type: "Bridge & Swap",
      status: "Due in 2h",
      percentage: 75,
      frequency: "weekly",
    },
    {
      id: "cd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "Marios",
      type: "Layer 1",
      status: "Due in 4h",
      percentage: 52,
      frequency: "Bi-weekly",
    },
    {
      id: "dd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "Trove",
      type: "Testnet",
      status: "Due in 4h",
      percentage: 26,
      frequency: "weekly",
    },
    {
      id: "ed7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "Grass",
      type: "Depin",
      status: "Due in 1d",
      percentage: 69,
      frequency: "monthly",
    },
    {
      id: "fd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "Dawn",
      type: "Depin",
      status: "Due in 1h",
      percentage: 96,
      frequency: "Daily",
    },
    {
      id: "gd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "Xantha",
      type: "Telegram",
      status: "Due in 3h",
      percentage: 80,
      frequency: "Daily",
    },
  ];

  return (
    <View
      style={{ paddingTop: insets.top }}
      className="bg-[#f7f9ff] dark:bg-[#0b1020] flex-1 px-5"
    >
      {/* header */}
      <View className="flex flex-row justify-between items-center pt-8 pb-2">
        <View className="flex-row gap-2 items-center">
          <View className="bg-[#1bcfb4] dark:bg-[#00ffd1] px-[5px] py-[5px] rounded-md">
            <MaterialCommunityIcons
              name="cube-outline"
              size={18}
              // color={colorScheme == "dark" ? "black" : "white"}
              color="black"
            />
          </View>
          <Text className=" dark:text-[#e6f0ff] font-spaceBold text-2xl">
            AirTrack
          </Text>
        </View>
        <View className="flex-row gap-2 items-center">
          <View className="bg-white dark:bg-[#1e293b] px-[5px] py-[5px] rounded-md">
            <MaterialCommunityIcons
              name="filter-outline"
              size={22}
              color={colorScheme == "dark" ? "#f8fafc" : "#6b7280"}
            />
          </View>
          <View className="bg-white dark:bg-[#1e293b] px-[5px] py-[5px] rounded-md">
            {/* <MaterialCommunityIcons
              name="bell-outline"
              size={20}
              color="#6b7280"
            /> */}
            <ThemeToggler />
          </View>
        </View>
      </View>
      {/* summary section */}
      <View className="flex-row justify-between w-full  pt-2">
        <View className="bg-white dark:bg-[#0f1726] w-[47%] py-4 px-3 rounded-lg gap-4">
          <View className="flex-row items-center justify-between">
            <Text className="font-spaceRegular text-sm  text-[#6b7280] dark:text-[#e6e9ff]">
              Tasks due
            </Text>
            <MaterialCommunityIcons
              name="clock-outline"
              color="#f59e0b"
              size={14}
            />
          </View>
          <Text className="text-[#1bcfb4] dark:text-[#00ffd1] font-spaceBold text-2xl">
            10
          </Text>
        </View>
        <View className="bg-white dark:bg-[#0f1726] w-[47%] py-4 px-3 rounded-lg gap-4">
          <View className="flex-row items-center justify-between">
            <Text className="font-spaceRegular text-sm  text-[#6b7280] dark:text-[#e6e9ff]">
              Total drops
            </Text>
            <Ionicons name="sparkles-outline" color="#8b5cf6" size={14} />
          </View>
          <Text className=" text-[#1bcfb4] dark:text-[#00ffd1] font-spaceBold text-2xl">
            {totalData ? totalData : "0"}
          </Text>
        </View>
      </View>

      {/* Drops List */}
      <View className="flex-1">
        <View className="flex-row justify-between items-center pt-6">
          <Text className="text-base text-[#020617] dark:text-[#e6f0ff] font-spaceBold">
            Active Drops
          </Text>
          <Text className="text-sm text-[#009e86] dark:text-[#00ffd1] font-spaceMedium">
            View all
          </Text>
        </View>
        <View className="flex-1 mb-4">
          {/* flatlist */}
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <AirdropCard item={item} index={index} />
              // <Text className="text-white bg-red-400 py-24">
              //   {item?.projectName}
              // </Text>
            )}
            showsVerticalScrollIndicator={false}
            onEndReached={() => fetchMoreAirdrops(currentPage + 1)}
            onEndReachedThreshold={0.4}
            className="mb-2"
          />

          {/* flatlist */}
        </View>
      </View>
      <Pressable
        className="w-12 h-12 bg-[#1bcfb4] dark:bg-[#00ffd1] rounded-full items-center justify-center absolute bottom-4 right-4"
        onPress={() => router.push("/submit")}
      >
        <MaterialCommunityIcons name="plus" size={30} color="black" />
      </Pressable>
      {/* status bar */}
      <StatusBar style="auto" />
    </View>
  );
};

export default Dashboard;
