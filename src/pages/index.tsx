import {
  SignInButton,
  SignUpButton,
  useAuth,
  useOrganization,
  useClerk,
} from "@clerk/nextjs";
import {
  AppShell,
  Button,
  Container,
  Group,
  Loader,
  rem,
  Text,
} from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ROUTES } from "~/features/data/routes";
import { HeroSection } from "~/features/home";

export default function HomePage() {
  const router = useRouter();
  const clerk = useClerk();
  const auth = useAuth();
  const organization = useOrganization();
  const pinned = useHeadroom({ fixedAt: 120 });

  useEffect(() => {
    if (!auth.isLoaded || !organization.isLoaded) return;
    if (!auth.isSignedIn) return;
    if (organization.organization?.id) {
      return router.push(ROUTES.WORKSPACE.path(organization.organization.id));
    }
    return clerk.redirectToCreateOrganization();
  }, [
    auth.isLoaded,
    organization.isLoaded,
    auth.isSignedIn,
    organization.organization?.id,
    clerk,
    router,
  ]);

  function renderAuthActions() {
    if (!auth.isLoaded || !organization.isLoaded) {
      return <Loader color="blue" />;
    }
    if (auth.isSignedIn && organization.organization) {
      return <Button>Dashboard</Button>;
    }
    if (auth.isSignedIn && !organization.organization) {
      return <Button>Create workspace</Button>;
    }
    return (
      <>
        <Button component={SignInButton} variant="default">
          Sign in
        </Button>
        <Button component={SignUpButton}>Sign up</Button>
      </>
    );
  }

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
                <Group>{renderAuthActions()}</Group>
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
