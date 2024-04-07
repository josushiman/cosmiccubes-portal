import { Layout } from "react-admin";

import CustomMenu from "./CustomMenu";
import CustomAppBar from "./CustomAppBar";

const CustomLayout = (props) => (
  <Layout {...props} menu={CustomMenu} appBar={CustomAppBar} />
);

export default CustomLayout;
