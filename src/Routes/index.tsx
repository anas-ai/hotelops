import ChangePasswordScreen from "../Screens/ChangePassword";
import DailyRevenueReport from "../Screens/DailyRevenueReport";
import DailySalesReportAccountEntry from "../Screens/DailySalesReport/DailySalesReportAccountEntry";
import DailySalesReportAddVisit from "../Screens/DailySalesReport/DailySalesReportAddVisit";
import DailySalesReportContactList from "../Screens/DailySalesReport/DailySalesReportContactList";
import DailySalesReportList from "../Screens/DailySalesReport/DailySalesReportList";
import DailySalesReport from "../Screens/DailySalesReport/DailySalesReportList";
import DailySalesReportNewContact from "../Screens/DailySalesReport/DailySalesReportNewContact";
import DailySalesReportVisitList from "../Screens/DailySalesReport/DailySalesReportVisitList";
import EnterOrgCodeScreen from "../Screens/EnterOrgCode";
import ForgetPassword from "../Screens/ForgetPassword";
import GuestGlitchDetail from "../Screens/GuestGlitch/GuestGlitchDetail";
import GuestGlitchEdit from "../Screens/GuestGlitch/GuestGlitchEdit";
import GuestGlitchEntry from "../Screens/GuestGlitch/GuestGlitchEntry";
import GuestGlitchList from "../Screens/GuestGlitch/GuestGlitchList";
import HomeScreen from "../Screens/Home";
import IncidentReportDetail from "../Screens/IncidentReport/IncidentReportDetail";
import IncidentReportEntry from "../Screens/IncidentReport/IncidentReportEntry";
import IncidentReportList from "../Screens/IncidentReport/IncidentReportList";
import OTPVerification from "../Screens/OTPVerification";
import ProfileScreen from "../Screens/Profile";
import ResetPassword from "../Screens/ResetPassword";
import SignScreen from "../Screens/SignIn";
import SrmsAdd from "../Screens/SRMS/SRMSAdd";
import SrmsList from "../Screens/SRMS/SRMSList";
import SRMSManageShift from "../Screens/SRMS/SRMSManageShift";
import { ScreeName } from "../utils/constants";

export const LoginStack = [
  { name: ScreeName.ENTER_ORG_CODE_SCREEN, component: EnterOrgCodeScreen },
  { name: ScreeName.SIGN_IN_SCREEN, component: SignScreen },
  { name: ScreeName.FORGET_PSWRD, component: ForgetPassword },
  { name: ScreeName.OTP_VERIFY, component: OTPVerification },
  { name: ScreeName.RESET_PSWRD, component: ResetPassword },
];
export const AuthStack = [
  { name: ScreeName.HOME_SCREEN, component: HomeScreen },
  { name: ScreeName.PROFILE, component: ProfileScreen },
  { name: ScreeName.CHANGE_PSWRD, component: ChangePasswordScreen },
  { name: ScreeName.GUEST_GLITCH_LIST, component: GuestGlitchList },
  { name: ScreeName.GUEST_GLITCH_ADD, component: GuestGlitchEntry },
  { name: ScreeName.GUEST_GLITCH_DETAIL, component: GuestGlitchDetail },
  { name: ScreeName.GUEST_GLITCH_EDIT, component: GuestGlitchEdit },
  { name: ScreeName.INCIDENT_REPORT_LIST, component: IncidentReportList },
  { name: ScreeName.INCIDENT_REPORT_ADD, component: IncidentReportEntry },
  { name: ScreeName.INCIDENT_REPORT_DETAIL, component: IncidentReportDetail },
  { name: ScreeName.SRMS_LIST, component: SrmsList },
  { name: ScreeName.SRMS_ADD, component: SrmsAdd },
  { name: ScreeName.SRMS_MANAGE_SHIFT, component: SRMSManageShift },
  { name: ScreeName.DAILY_REVENUE_REPORT, component: DailyRevenueReport },
  { name: ScreeName.DAILY_SALES_REPORT_LIST, component: DailySalesReportList },
  {
    name: ScreeName.DAILY_SALES_REPORT_ACCOUNT_ENTRY,
    component: DailySalesReportAccountEntry,
  },
  {
    name: ScreeName.DAILY_SALES_REPORT_ADD_VISIT,
    component: DailySalesReportAddVisit,
  },
  {
    name: ScreeName.DAILY_SALES_REPORT_CONTACT_LIST,
    component: DailySalesReportContactList,
  },
  {
    name: ScreeName.DAILY_SALES_REPORT_NEW_CONTACT,
    component: DailySalesReportNewContact,
  },
  {
    name: ScreeName.DAILY_SALES_REPORT_VISIT_LIST,
    component: DailySalesReportVisitList,
  },
];
