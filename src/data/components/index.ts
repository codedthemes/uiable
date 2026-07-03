// project
import { accordionInfo } from "./accordion";
import { alertInfo } from "./alert";
import { alertDialogInfo } from "./alert-dialog";
import { aspectRatioInfo } from "./aspect-ratio";
import { avatarInfo } from "./avatar";
import { badgeInfo } from "./badge";
import { breadcrumbInfo } from "./breadcrumb";
import { buttonInfo } from "./button";
import { buttonGroupInfo } from "./button-group";
import { calendarInfo } from "./calendar";
import { cardInfo } from "./card";
import { carouselInfo } from "./carousel";
import { chartInfo } from "./chart";
import { checkboxInfo } from "./checkbox";
import { collapsibleInfo } from "./collapsible";
import { comboboxInfo } from "./combobox";
import { commandInfo } from "./command";
import { contextMenuInfo } from "./context-menu";
import { dataTableInfo } from "./data-table";
import { datePickerInfo } from "./date-picker";
import { dialogInfo } from "./dialog";
import { drawerInfo } from "./drawer";
import { dropdownMenuInfo } from "./dropdown-menu";
import { emptyInfo } from "./empty";
import { fieldInfo } from "./field";
import { fileUploadInfo } from "./file-upload";
import { hoverCardInfo } from "./hover-card";
import { inputInfo } from "./input";
import { inputGroupInfo } from "./input-group";
import { inputOtpInfo } from "./input-otp";
import { itemInfo } from "./item";
import { kbdInfo } from "./kbd";
import { labelInfo } from "./label";
import { listGroupInfo } from "./list-group";
import { menubarInfo } from "./menubar";
import { nativeSelectInfo } from "./native-select";
import { navbarInfo } from "./navbar";
import { navigationMenuInfo } from "./navigation-menu";
import { paginationInfo } from "./pagination";
import { popoverInfo } from "./popover";
import { progressInfo } from "./progress";
import { radioInfo } from "./radio";
import { radioGroupInfo } from "./radio-group";
import { resizableInfo } from "./resizable";
import { scrollAreaInfo } from "./scroll-area";
import { selectInfo } from "./select";
import { separatorInfo } from "./separator";
import { sheetInfo } from "./sheet";
import { sidebarInfo } from "./sidebar";
import { skeletonInfo } from "./skeleton";
import { sliderInfo } from "./slider";
import { sonnerInfo } from "./sonner";
import { spinnerInfo } from "./spinner";
import { switchInfo } from "./switch";
import { tableInfo } from "./table";
import { tabsInfo } from "./tabs";
import { textareaInfo } from "./textarea";
import { toggleInfo } from "./toggle";
import { toggleGroupInfo } from "./toggle-group";
import { tooltipInfo } from "./tooltip";
import { typographyInfo } from "./typography";

// types
import { CategoryInfo } from "./types";

export const categoryInfoMap: Record<string, CategoryInfo> = {
  accordion: accordionInfo,
  alert: alertInfo,
  "alert-dialog": alertDialogInfo,
  "aspect-ratio": aspectRatioInfo,
  avatar: avatarInfo,
  badge: badgeInfo,
  breadcrumb: breadcrumbInfo,
  button: buttonInfo,
  "button-group": buttonGroupInfo,
  calendar: calendarInfo,
  card: cardInfo,
  carousel: carouselInfo,
  chart: chartInfo,
  checkbox: checkboxInfo,
  collapsible: collapsibleInfo,
  combobox: comboboxInfo,
  command: commandInfo,
  "context-menu": contextMenuInfo,
  "data-table": dataTableInfo,
  "date-picker": datePickerInfo,
  dialog: dialogInfo,
  drawer: drawerInfo,
  "dropdown-menu": dropdownMenuInfo,
  empty: emptyInfo,
  field: fieldInfo,
  "file-upload": fileUploadInfo,
  "hover-card": hoverCardInfo,
  input: inputInfo,
  "input-group": inputGroupInfo,
  "input-otp": inputOtpInfo,
  item: itemInfo,
  kbd: kbdInfo,
  label: labelInfo,
  "list-group": listGroupInfo,
  menubar: menubarInfo,
  "native-select": nativeSelectInfo,
  navbar: navbarInfo,
  "navigation-menu": navigationMenuInfo,
  pagination: paginationInfo,
  popover: popoverInfo,
  progress: progressInfo,
  radio: radioInfo,
  "radio-group": radioGroupInfo,
  resizable: resizableInfo,
  "scroll-area": scrollAreaInfo,
  select: selectInfo,
  separator: separatorInfo,
  sheet: sheetInfo,
  sidebar: sidebarInfo,
  skeleton: skeletonInfo,
  slider: sliderInfo,
  sonner: sonnerInfo,
  spinner: spinnerInfo,
  switch: switchInfo,
  table: tableInfo,
  tabs: tabsInfo,
  textarea: textareaInfo,
  toggle: toggleInfo,
  "toggle-group": toggleGroupInfo,
  tooltip: tooltipInfo,
  typography: typographyInfo
};
