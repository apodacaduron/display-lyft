import type { AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import "@mantine/core/styles.css";
import { ClerkProvider } from "@clerk/nextjs";
import { MantineProvider } from "@mantine/core";
import type { NextPage } from "next";
import type { Session } from "@clerk/nextjs/server";
import { DM_Sans } from "next/font/google";
import { dark } from "@clerk/themes";
import { mantineTheme } from "~/features/data/mantineTheme";

const dmSans = DM_Sans({ subsets: ["latin"] });

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
    <div className={dmSans.className}>
      <MantineProvider theme={mantineTheme} defaultColorScheme="dark">
        <ClerkProvider
          appearance={{
            baseTheme: dark,
            signIn: { baseTheme: dark },
            signUp: { baseTheme: dark },
          }}
          {...pageProps}
        >
          {getLayout(<Component {...pageProps} />)}
        </ClerkProvider>
      </MantineProvider>
    </div>
  );
}

export default api.withTRPC(MyApp);
