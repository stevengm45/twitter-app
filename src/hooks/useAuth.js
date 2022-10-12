import { useContext } from "react";
import { AuthContext} from "../utils/contexts";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => useContext(AuthContext);