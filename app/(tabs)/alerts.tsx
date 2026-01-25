import ReminderCard from "@/components/reminderCard";
import ThemeToggler from "@/components/themeToggler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import reminders from "../../data/reminder.json";

const Alerts = () => {
  const insets = useSafeAreaInsets();

  const attentionReminders = reminders.filter((d) => d.attention == true);
  const upcomingReminders = reminders.filter((d) => d.attention == false);

  let tag = "all";

  return (
    <View
      style={{ paddingTop: insets.top + 20 }}
      className="flex-1 px-5 bg-[#f7f9ff] dark:bg-[#0b1020]"
    >
      {/* header */}
      <View className="border-b border-[#ebebeb] pb-4 dark:border-b-0 ">
        <Text className=" font-spaceBold text-2xl dark:text-[#e6f0ff]">
          Reminders
        </Text>
      </View>
      {/* header */}

      {/* main content */}
      <View className="flex-1">
        {/* filter section */}
        <View className="flex flex-row justify-between my-6">
          <Pressable className="bg-[#1bcfb4] dark:bg-[#00ffd1] px-4 py-2 rounded-full ">
            <Text className="font-spaceSemibold text-[#0b1330] text-sm">
              All
            </Text>
          </Pressable>
          <Pressable className="bg-white dark:bg-[#0f1726] dark:border-0 border border-[#ebebeb]  px-4 py-2 rounded-full  ">
            <Text className="text-[#8b93b8] dark:text-[#9aa7c7] font-spaceSemibold text-sm ">
              Due Soon
            </Text>
          </Pressable>
          <Pressable className="bg-white dark:bg-[#0f1726] dark:border-0 border border-[#ebebeb]  px-4 py-2 rounded-full  ">
            <Text className="text-[#8b93b8] dark:text-[#9aa7c7]  font-spaceSemibold text-sm ">
              Overdue
            </Text>
          </Pressable>
          <Pressable className="bg-white dark:bg-[#0f1726] dark:border-0 border border-[#ebebeb]  px-4 py-2 rounded-full   ">
            <Text className="text-[#8b93b8] dark:text-[#9aa7c7]  font-spaceSemibold text-sm ">
              Completed
            </Text>
          </Pressable>
        </View>

        <FlatList
          data={attentionReminders}
          keyExtractor={(item) => item.name}
          ListHeaderComponent={
            <>
              {attentionReminders.length > 0 && (
                <Text className="uppercase text-[#8b93b8] font-medium text-sm font-spaceBold dark:text-white ">
                  needs attention
                </Text>
              )}
            </>
          }
          renderItem={({ item, index }) => <ReminderCard data={item} />}
          ListFooterComponent={
            tag == "all" ? (
              <>
                {upcomingReminders.length > 0 && (
                  <>
                    <Text className="uppercase text-[#8b93b8] font-medium text-sm mt-2 font-spaceBold dark:text-white ">
                      upcoming
                    </Text>
                    <FlatList
                      data={upcomingReminders}
                      keyExtractor={(item) => item.name}
                      contentContainerStyle={{ gap: 8 }}
                      renderItem={({ item, index }) => (
                        <ReminderCard data={item} />
                      )}
                      scrollEnabled={false} // IMPORTANT
                    />
                  </>
                )}
              </>
            ) : (
              <></>
            )
          }
        />
      </View>
      <ThemeToggler />
      <StatusBar style="auto" />
    </View>
  );
};

export default Alerts;
