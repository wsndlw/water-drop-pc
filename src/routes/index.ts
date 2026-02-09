import Course from "../containers/Course";
import Home from "../containers/Home";
import My from "../containers/My";
import NoOrg from "../containers/NoOrg";
import Org from "../containers/Org";
import Page404 from "../containers/Page404";
import Product from "../containers/Product";
import Teacher from "../containers/Teacher";
import { ROUTE_KEY } from "./menus";



export const ROUTE_COMPONENT = {
  [ROUTE_KEY.HOME]: Home,
  [ROUTE_KEY.MY]: My,
  [ROUTE_KEY.ORG]: Org,
  [ROUTE_KEY.COURSE]: Course,
  [ROUTE_KEY.PRODUCT]: Product,
  [ROUTE_KEY.TEACHER]: Teacher,
  
  [ROUTE_KEY.NOORG]: NoOrg,
  [ROUTE_KEY.PAGE_404]: Page404,
};