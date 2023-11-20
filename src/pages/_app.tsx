import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import "@mantine/core/styles.css";
import { ClerkProvider } from "@clerk/nextjs";
import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <MantineProvider theme={theme}>
      <ClerkProvider {...pageProps}>
        <Component {...pageProps} />
      </ClerkProvider>
    </MantineProvider>
  );
};

export default api.withTRPC(MyApp);
