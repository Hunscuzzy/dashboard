import INTERNALS_LINKS from "@/config/routes";
import { SvgIconComponent } from "@mui/icons-material";
import GridViewIcon from "@mui/icons-material/GridView";

const sidebarLinks: {
  title: string;
  uri: INTERNALS_LINKS;
  Icon: SvgIconComponent;
}[] = [
  { title: "Dashboard", uri: INTERNALS_LINKS.DASHBOARD, Icon: GridViewIcon },
];

export { sidebarLinks };
