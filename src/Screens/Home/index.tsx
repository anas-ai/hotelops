import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import React from "react";
import { globalStyles } from "../../utils/globalStyle";
import { colors } from "../../styles/colores";
import { useAuth } from "../../hooks/useAuth";
import Profile from "../../assets/Images/blackprofile.svg";
import Search from "../../assets/Images/search.svg";
import { TextBox } from "../../components/form/textBox";
import { useForm } from "react-hook-form";
import { ScreeName } from "../../utils/constants";

const cardModules = [
  {
    id: 1,
    name: "Guest Glitch",
    backgroundColor: "#F0F8FE",
    screenNavigation: ScreeName.GUEST_GLITCH_LIST,
  },
  {
    id: 2,
    name: "Incident Report",
    backgroundColor: "#F3FFE9",
    screenNavigation: ScreeName.INCIDENT_REPORT_LIST,
  },
  {
    id: 3,
    name: "SRMS",
    backgroundColor: "#FFF2FD",
    screenNavigation: ScreeName.SRMS_LIST,
  },
  {
    id: 4,
    name: "Daily Revenue Report",
    backgroundColor: "#E3F9FF",
    screenNavigation: ScreeName.DAILY_REVENUE_REPORT,
  },
  {
    id: 5,
    name: "Daily Sales Report",
    backgroundColor: "#F0F8FE",
    screenNavigation: "DailySalesReportScreen",
  },
  {
    id: 6,
    name: "Gatepass Management",
    backgroundColor: "#F3FFE9",
    screenNavigation: "GatepassManagementScreen",
  },
  {
    id: 7,
    name: "PADP Report",
    backgroundColor: "#FFF2FD",
    screenNavigation: "PADPReportScreen",
  },
  {
    id: 8,
    name: "Capex",
    backgroundColor: "#E3F9FF",
    screenNavigation: "CapexScreen",
  },
];
const HomeScreen = (props: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { search: "" } });


  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={Styles.scrollContent}
      >
        <View style={Styles.headerContainer}>
          <View>
            <Text style={Styles.hotelOpsText}>HotelOps</Text>
            <Text style={Styles.nameText}>Yashwant</Text>
          </View>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <View style={Styles.profileIconContainer}>
              <Profile />
            </View>
          </TouchableOpacity>
        </View>
        <TextBox
          control={control}
          name="search"
          placeholder="Search Modules"
          startIcon={<Search width={20} height={20} />}
        />
        <View>
          <Text style={Styles.moduleText}>Modules</Text>
          <View>
            {cardModules?.map((items: any, index: number) => {
              return (
                <View
                  style={[
                    Styles.shadowBox,
                    { backgroundColor: `${items?.backgroundColor}` },
                  ]}
                  key={items?.id}
                >
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate(items?.screenNavigation)
                    }
                  >
                    <Text style={Styles.moduleItemText}>{items?.name}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  hotelOpsText: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: "Gilroy-Medium",
  },
  nameText: {
    fontSize: 35,
    color: colors.black,
    fontFamily: "Gilroy-SemiBold",
    letterSpacing: 2,
  },
  profileIconContainer: {
    borderColor: "#E2EEF7",
    borderWidth: 1,
    borderRadius: 15,
    height: 53,
    width: 53,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F8FE",
  },
  moduleText: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 14,
    color: colors.black,
    fontFamily: "Gilroy-SemiBold",
  },
  shadowBox: {
    marginBottom: 26,
    elevation: 3,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  moduleItemText: {
    fontSize: 18,
    marginTop: 16,
    marginBottom: 14,
    color: colors.black,
    fontFamily: "Gilroy-Medium",
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
});
