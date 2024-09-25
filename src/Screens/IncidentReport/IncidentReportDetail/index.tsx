import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Download from "../../../assets/Images/donwloadCircle.svg";
import Edit from "../../../assets/Images/edit.svg";
import { globalStyles } from "../../../utils/globalStyle";
import BackButtonHead from "../../../components/backButtonHead";
import DetailCard from "../../../components/detailCard";
import { ScreeName } from "../../../utils/constants";
import { useRoute } from "@react-navigation/native";
import axiosInstance from "../../../utils/axios";
import { URLS } from "../../../api";
import RNFetchBlob from "rn-fetch-blob";

const IncidentReportDetail = (props: any) => {
  const [loading, setLoading] = React.useState<boolean>(true); // Loading state
  const [incidentDetail, setIncidentDetail] = React.useState<any>([]);
  const { params }: any = useRoute();
  const getIncidentDetail = async (params: any) => {
    setLoading(true);
    try {
      await axiosInstance
        .get(`${URLS.GET_INCIDENT_DETAILS}`, {
          params: {
            OID: params?.organizationId,
            IID: params?.id,
          },
        })
        .then((response: any) => {
          console.log(response?.data?.Table1?.[0], "routes");
          setIncidentDetail(response?.data?.Table1?.[0]);
          setLoading(false);
        })
        .catch((err: any) => {
          setLoading(false);
          console.log(err, "Incident Detail Error");
        });
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  const downloadPDF = () => {
    let date = new Date();
    let pdfURL = `http://hotelops.in/api/IncidentReportAPI/GeneratePDF?ID=${params?.id}&OID=${params.organizationId}`;
    let ext = ".pdf";

    const { config, fs } = RNFetchBlob;
    let DocumentDir = fs.dirs.DownloadDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        title: "Nile Hospitality",
        mime: "application/pdf",
        mediaScannable: true,
        overwrite: true,
        path:
          DocumentDir +
          "/NILEHospitality" +
          // dayjs(myDate).format('MMM-YY') +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: "PDF File Downloaded Successfully",
        notification: true,
      },
    };

    config(options)
      .fetch("GET", pdfURL, {
        "hotel-api-token":
          "ujhj45ON8BKl!udLGPu!szcWtY!e9MTm4jpXSqD7wNM1HITpnbJhhp=aElxgkShcdaBhvgqLeOMjz9G?qliY6FK/AcJN0iTB3fIl5g55bllJHdrF-Yh-O4W-eEjKaPk/DBGqHU6XDhbG5m68RtVxZGH?B6n1F5u=F84npBeJIMS/SzrT7=dXuAj=8aqDyvRpIh=nswd!XPTMobzhw2jKxocrOYJkzo0osZFSMxK1hMqRbqGJIKR=bgRfS!cea11f",
      })
      .then((res: any) => {
        console.log("res -> ", JSON.stringify(res));
        Alert.alert("PDF downloaded successfully");
      });
  };
  useEffect(() => {
    getIncidentDetail(params);
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
            title="Incident Details"
            props={props}
            rightIcon={<Download onPress={() => downloadPDF()} />}
            // onPressRight={() =>
            //   props.navigation.navigate(ScreeName.g)
            // }
          />
        </View>

        <DetailCard
          props={props}
          listData={[
            { label: "Report Date", value: incidentDetail?.ReportDate },
            { label: "Incident Date", value: incidentDetail?.IncidentDate },
            { label: "Incident Time", value: incidentDetail?.Time },
            { label: "Location", value: incidentDetail?.Location },
          ]}
          title="Information"
        />
        <DetailCard
          props={props}
          paragraph={incidentDetail?.AccidentCause || "N/A"}
          title="Accident Cause"
        />
        <DetailCard
          props={props}
          paragraph={incidentDetail?.Anycasualty || "N/A"}
          title="Any Casualty"
        />
        <DetailCard
          props={props}
          paragraph={incidentDetail?.Description || "N/A"}
          title="Description"
        />
      </ScrollView>
      <TouchableOpacity style={styles.filterButton}>
        <Edit
          onPress={() =>
            props.navigation.navigate(ScreeName.INCIDENT_REPORT_ADD, {
              id: "edit",
            })
          }
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default IncidentReportDetail;

const styles = StyleSheet.create({
  filterButton: {
    position: "absolute",
    bottom: 20,
    right: 10,
  },
});
