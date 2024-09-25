import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Plus from "../../../assets/Images/pluscircle.svg";
import Filter from "../../../assets/Images/filter.svg";
import { globalStyles } from "../../../utils/globalStyle";
import BackButtonHead from "../../../components/backButtonHead";
import DetailCard from "../../../components/detailCard";
import Tabination from "../../../components/tabination";
import ActionSheetModule from "../../../components/actionSheet";
import FilterForm from "./filterForm";
import { ScreeName } from "../../../utils/constants";
import { getItem } from "../../../utils/asyncStorage";
import axiosInstance from "../../../utils/axios";
import { URLS } from "../../../api";
import { colors } from "../../../styles/colores";
import Loader from "../../../components/loader";

const GuestGlitchList = (props: any) => {
  const [selectedTab, setSelectedTab] = React.useState("open");
  const [loading, setLoading] = React.useState<boolean>(true); // Loading state
  const [glitchListData, setGlitchListData] = React.useState([]);
  const filterActionSheet = useRef<any>(null);

  const handleOpenActionSheet = () => {
    filterActionSheet.current?.show();
  };
  const handleCloseActionSheet = () => {
    filterActionSheet.current?.hide();
  };
  const getGuestList = async () => {
    setLoading(true);
    const organizationId = await getItem<string>("organizationId");
    try {
      await axiosInstance
        .get(`${URLS.GET_GLITCH_LIST}`, {
          params: {
            OID: organizationId,
            status: selectedTab,
          },
        })
        .then((response: any) => {
          setGlitchListData(response?.data);
          setLoading(false);
        })
        .catch((err: any) => {
          setLoading(false);
          console.log(err, "Glitch Error");
        });
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getGuestList();
  }, [selectedTab]);

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 20,
        }}
      >
        <BackButtonHead
          title="Guest Glitch"
          props={props}
          rightIcon={<Plus />}
          onPressRight={() =>
            props.navigation.navigate(ScreeName.GUEST_GLITCH_ADD)
          }
        />
        <View style={{ marginBottom: 5, marginTop: 14 }}>
          <Tabination
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            count={
              selectedTab == "open" && !loading
                ? glitchListData?.length
                : "Loading"
            }
          />
        </View>
        {loading ? (
          <Loader />
        ) : (
          glitchListData?.map((elem: any, index: number) => {
            const data: any = [
              { label: "Date & Time", value: elem?.EntryDate },
              { label: "Guest Name", value: elem?.GuestName },
              { label: "Room", value: elem?.RoomNumber },
              { label: "Complaint", value: elem?.Complaint },
            ];
            return (
              <DetailCard
                key={index}
                props={props}
                listData={data}
                title={elem?.CompanyName}
                onPress={() =>
                  props.navigation.navigate(ScreeName.GUEST_GLITCH_DETAIL, {
                    id: elem?.ID,
                    organizationId: elem?.OrganizationID,
                  })
                }
              />
            );
          })
        )}
      </ScrollView>
      <TouchableOpacity style={styles.filterButton}>
        <Filter onPress={handleOpenActionSheet} />
      </TouchableOpacity>
      <ActionSheetModule actionRef={filterActionSheet}>
        <FilterForm handleCloseActionSheet={handleCloseActionSheet} />
      </ActionSheetModule>
    </SafeAreaView>
  );
};

export default GuestGlitchList;

const styles = StyleSheet.create({
  filterButton: {
    position: "absolute",
    bottom: 20,
    right: 10,
  },
});
