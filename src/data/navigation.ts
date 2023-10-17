import INTERNALS_LINKS from "@/config/routes";
import PointOfSale from "@mui/icons-material/PointOfSale";
import Videocam from "@mui/icons-material/Videocam";
import GridView from "@mui/icons-material/GridView";
import Settings from "@mui/icons-material/Settings";
import { SvgIconComponent } from "@mui/icons-material";

const sidebarLinks: {
  title: string;
  uri: INTERNALS_LINKS;
  Icon: SvgIconComponent;
}[] = [
  { title: "Dashboard", uri: INTERNALS_LINKS.DASHBOARD, Icon: GridView },
  { title: "Entries", uri: INTERNALS_LINKS.ENTRIES, Icon: PointOfSale },
  {
    title: "Video Production",
    uri: INTERNALS_LINKS.DASHBOARD,
    Icon: Videocam,
  },
  { title: "Real Estate", uri: INTERNALS_LINKS.DASHBOARD, Icon: GridView },
  { title: "Settings", uri: INTERNALS_LINKS.SETTINGS, Icon: Settings },
];

export { sidebarLinks };
