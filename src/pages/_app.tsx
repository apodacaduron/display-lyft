import type { AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import "@mantine/core/styles.css";
import { ClerkProvider } from "@clerk/nextjs";
import { MantineProvider, createTheme } from "@mantine/core";
import type { NextPage } from "next";
import type { Session } from "@clerk/nextjs/server";

const theme = createTheme({
  /** Put your mantine theme override here */
});

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppType & {
  Component: NextPageWithLayout;
  pageProps: { session: Session | null };
};

function MyApp({
  Component,
  pageProps: { session: _session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <MantineProvider theme={theme}>
      <ClerkProvider {...pageProps}>
        {getLayout(<Component {...pageProps} />)}
      </ClerkProvider>
    </MantineProvider>
  );
}

export default api.withTRPC(MyApp);
