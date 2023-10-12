import INTERNALS_LINKS from "@/config/routes";
import { SvgIconComponent } from "@mui/icons-material";
import GridView from "@mui/icons-material/GridView";
import Code from "@mui/icons-material/Code";
import Settings from "@mui/icons-material/Settings";

const sidebarLinks: {
  title: string;
  uri: INTERNALS_LINKS;
  Icon: SvgIconComponent;
}[] = [
  { title: "Dashboard", uri: INTERNALS_LINKS.DASHBOARD, Icon: GridView },
  { title: "Freelance", uri: INTERNALS_LINKS.DASHBOARD, Icon: Code },
  {
    title: "Video Production",
    uri: INTERNALS_LINKS.DASHBOARD,
    Icon: GridView,
  },
  { title: "Real Estate", uri: INTERNALS_LINKS.DASHBOARD, Icon: GridView },
  { title: "Account", uri: INTERNALS_LINKS.SETTINGS, Icon: Settings },
];

export { sidebarLinks };
