import INTERNALS_LINKS from "@/config/routes";
import PointOfSale from "@mui/icons-material/PointOfSale";
import GridView from "@mui/icons-material/GridView";
import Settings from "@mui/icons-material/Settings";
import { SvgIconComponent } from "@mui/icons-material";

const sidebarLinks: {
  title: string;
  uri: INTERNALS_LINKS;
  Icon: SvgIconComponent;
}[] = [
  { title: "Dashboard", uri: INTERNALS_LINKS.DASHBOARD, Icon: GridView },
  { title: "Revenue", uri: INTERNALS_LINKS.REVENUE, Icon: PointOfSale },
  { title: "Settings", uri: INTERNALS_LINKS.SETTINGS, Icon: Settings },
];

export { sidebarLinks };
