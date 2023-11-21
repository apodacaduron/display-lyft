import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { AppShell, Group, NavLink, ScrollArea, Text } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { ROUTES } from "~/features/data/routes";

type Props = {
  children: ReactNode;
};

export default function ShellLayout(props: Props) {
  const route = useRouter();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm" }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Text fw="bold" size="xl" style={{ userSelect: "none" }}>
            DisplayLyft
          </Text>
          <UserButton />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppShell.Section>
          <OrganizationSwitcher hidePersonal />
        </AppShell.Section>
        <AppShell.Section grow my="md" component={ScrollArea}>
          {Object.values(ROUTES).map((navLink, index) => (
            <NavLink
              key={index}
              label={navLink.label}
              leftSection={<navLink.icon />}
              active={route.pathname === navLink.pathname}
              style={{ borderRadius: "8px" }}
              component={Link}
              href={navLink.path(route.query.workspaceId?.toString() ?? "")}
            />
          ))}
        </AppShell.Section>
        <AppShell.Section></AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  );
}
