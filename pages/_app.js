import React from "react";
import { wrapper } from "../redux/store";
import "../styles/Home.module.css";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);
