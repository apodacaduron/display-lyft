import { SignInButton } from "@clerk/nextjs";
import { AppShell, Button, Container, Group, rem, Text } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import Head from "next/head";
import { HeroSection } from "~/features/home";

export default function Home() {
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <>
      <Head>
        <title>
          DisplayLyft - Web-Based Advertising Display Management Tool
        </title>
        <meta
          name="description"
          content="Simplify advertising display management with DisplayLyft. Effortlessly control content, schedule displays, and streamline your brand's visibility. Sign up today!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AppShell
          header={{ height: 60, collapsed: !pinned, offset: false }}
          padding="md"
        >
          <AppShell.Header>
            <Container h="100%" size="xl">
              <Group h="100%" px="md" justify="space-between">
                <Text fw="bold" size="xl" style={{ userSelect: "none" }}>
                  DisplayLyft
                </Text>
                <Group>
                  <Button component={SignInButton} variant="default">
                    Sign in
                  </Button>
                  <Button component={SignInButton}>Sign up</Button>
                </Group>
              </Group>
            </Container>
          </AppShell.Header>

          <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
            <HeroSection />
          </AppShell.Main>
        </AppShell>
      </main>
    </>
  );
}
