import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
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
import Loader from "../../../components/loader";
import RNFetchBlob from "rn-fetch-blob";

const data: any = [
  { label: "Report Date", value: "March 6, 2023" },
  { label: "Incident Date", value: "March 6, 2023" },
  { label: "Location", value: "101" },
  { label: "Report mode", value: "AC Issue" },
];
const IncidentReportList = (props: any) => {
  const filterActionSheet = useRef<any>(null);
  const [loading, setLoading] = React.useState<boolean>(true); // Loading state
  const [incidentListData, setIncidentListData] = React.useState([]);
  const handleOpenActionSheet = () => {
    filterActionSheet.current?.show();
  };
  const handleCloseActionSheet = () => {
    filterActionSheet.current?.hide();
  };
  const getIncidentList = async () => {
    setLoading(true);
    const organizationId = await getItem<string>("organizationId");
    try {
      await axiosInstance
        .get(`${URLS.GET_INCIDENT_LIST}`, {
          params: {
            OID: organizationId,
          },
        })
        .then((response: any) => {
          console.log(incidentListData[0], "incidentListData");
          setIncidentListData(response?.data);
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
    getIncidentList();
  }, []);
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
          <BackButtonHead
            title="Incident Report"
            props={props}
            rightIcon={<Plus />}
            onPressRight={() =>
              props.navigation.navigate(ScreeName.INCIDENT_REPORT_ADD, {
                id: "new",
              })
            }
          />
        </View>
        {loading ? (
          <Loader />
        ) : (
          incidentListData?.map((elem: any, index: number) => {
            const data: any = [
              { label: "Report Date", value: elem?.ReportDate },
              { label: "Incident Date", value: elem?.IncidentDate },
              { label: "Location", value: elem?.Location },
              { label: "Report made", value: elem?.ReportBy },
            ];
            return (
              <DetailCard
                key={index}
                props={props}
                listData={data}
                title={elem?.AccidentCause}
                onPress={() =>
                  props.navigation.navigate(ScreeName.INCIDENT_REPORT_DETAIL, {
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

export default IncidentReportList;

const styles = StyleSheet.create({
  filterButton: {
    position: "absolute",
    bottom: 20,
    right: 10,
  },
});
