import {
  SignInButton,
  SignUpButton,
  useAuth,
  useOrganization,
  useClerk,
  useOrganizationList,
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
import { useCallback, useEffect } from "react";
import { ROUTES } from "~/features/data/routes";
import {
  ContactSection,
  FAQSection,
  FeaturesSection,
  FooterSection,
  HeroSection,
  PricingSection,
} from "~/features/home";

export default function HomePage() {
  const router = useRouter();
  const clerk = useClerk();
  const auth = useAuth();
  const organization = useOrganization();
  const organizationList = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  const pinned = useHeadroom({ fixedAt: 120 });

  const setActiveOrganization = useCallback(
    async (orgId: string) => {
      await organizationList.setActive?.({ organization: orgId });
    },
    [organizationList]
  );

  useEffect(() => {
    if (!auth.isLoaded || !organization.isLoaded || !organizationList.isLoaded)
      return;
    if (!auth.isSignedIn) return;
    if (organizationList.userMemberships.isLoading) return;

    const userMembership = organizationList.userMemberships.data?.find(Boolean);
    const org = organization.organization ?? userMembership?.organization;

    if (org?.id) {
      setActiveOrganization(org.id).catch(console.error);
      return router.push(ROUTES.WORKSPACE.path(org.id));
    }
    return clerk.redirectToCreateOrganization();
  }, [
    auth.isLoaded,
    organization.isLoaded,
    organizationList.isLoaded,
    organizationList.userMemberships.isLoading,
    auth.isSignedIn,
    organization.organization,
    clerk,
    router,
    organizationList.userMemberships.data,
    setActiveOrganization,
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
          footer={{ height: 60 }}
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
            <FeaturesSection />
            <PricingSection />
            <FAQSection />
            <ContactSection />
          </AppShell.Main>

          <AppShell.Footer pos="initial">
            <FooterSection />
          </AppShell.Footer>
        </AppShell>
      </main>
    </>
  );
}
