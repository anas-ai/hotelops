import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { globalStyles } from "../../../utils/globalStyle";
import BackButtonHead from "../../../components/backButtonHead";
import CustomButton from "../../../components/button";
import { colors } from "../../../styles/colores";
import DetailCard from "../../../components/detailCard";
import Alarm from "../../../assets/Images/alarm.svg";
import Check from "../../../assets/Images/circlecheck.svg";
import Filter from "../../../assets/Images/filter.svg";
import ActionSheetModule from "../../../components/actionSheet";
import FilterForm from "./filterForm";
import { ScreeName } from "../../../utils/constants";
import JobParkConfirmModal from "./jobParkConfirmModal";
import CustomModal from "./jobParkConfirmModal";
import JobCompletedModal from "./jobCompletedModal";
import { getItem } from "../../../utils/asyncStorage";
import axiosInstance from "../../../utils/axios";
import { URLS } from "../../../api";
const data: any = [
  { label: "Date & Time", value: "March 6, 2023 04:10 pm" },
  { label: "Guest Name", value: "Vishal Menaria" },
  { label: "Room", value: "101" },
  { label: "Complaint", value: "AC Issue" },
  { label: "Guest Name", value: "Vishal Menaria" },
  { label: "Room", value: "101" },
  { label: "Complaint", value: "AC Issue" },
];
const SrmsList = (props: any) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isJobModalVisible, setJobModalVisible] = useState(false);
  const [masterData, setMasterData] = useState<any>([]);
  const filterActionSheet = useRef<any>(null);
  const handleOpenActionSheet = () => {
    filterActionSheet.current?.show();
  };
  const handleCloseActionSheet = () => {
    filterActionSheet.current?.hide();
  };

  const getServiceRequestMaster = async () => {
    const organizationId = await getItem<string>("organizationId");
    try {
      await axiosInstance
        .get(`${URLS.GET_MASTER_REQUESTS}`, {
          params: {
            OrganizationID: organizationId,
          },
        })
        .then((res: any) => {
          if (res.status == 200) {
            setMasterData(res?.data);
          }
        })
        .catch((err: any) => {
          console.log(err, "getServiceRequestMaster Api");
        });
      } catch (error) {
        console.log(error, "errors");
      }
    };
    useEffect(() => {
      getServiceRequestMaster();
    }, []);
    console.log(masterData,'masterData');
  

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingVertical: 20,
        }}
      >
        <View style={{ marginBottom: 10 }}>
          <BackButtonHead title="SRMS" props={props} />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Manage Shift"
            size="lg"
            fontSize={18}
            fontFamily="Gilroy-Medium"
            color="#F0F8FE"
            radius={20}
            fontColor={colors.black}
            ExStyle={styles.btnWidth}
            onPress={() =>
              props.navigation.navigate(ScreeName.SRMS_MANAGE_SHIFT)
            }
            titleStyle={{ paddingVertical: 10 }}
          />
          <CustomButton
            title="New Request"
            size="lg"
            radius={20}
            fontSize={18}
            fontFamily="Gilroy-Medium"
            color="#F0F8FE"
            onPress={() => props.navigation.navigate(ScreeName.SRMS_ADD)}
            fontColor={colors.black}
            ExStyle={styles.btnWidth}
            titleStyle={{ paddingVertical: 10 }}
          />
        </View>
        <DetailCard
          props={props}
          listData={data}
          title="Request No. 1118"
          headerIcon={
            <>
              <Check onPress={() => setModalVisible(true)} />
              <Alarm onPress={() => setJobModalVisible(true)} />
            </>
          }
        />
        <DetailCard
          props={props}
          listData={data}
          title="Request No. 1118"
          headerIcon={
            <>
              <Check onPress={() => setModalVisible(true)} />
              <Alarm onPress={() => setJobModalVisible(true)} />
            </>
          }
        />

        <JobParkConfirmModal
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
        />
        <JobCompletedModal
          setJobModalVisible={setJobModalVisible}
          isJobModalVisible={isJobModalVisible}
        />
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

export default SrmsList;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    width: "100%",
    columnGap: 16,
  },
  btnWidth: {
    width: "100%",
    flex: 1,
  },
  filterButton: {
    position: "absolute",
    bottom: 20,
    right: 10,
  },
});
