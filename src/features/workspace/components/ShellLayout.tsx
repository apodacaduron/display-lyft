import { AppShell, NavLink, ScrollArea } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { SIDEBAR_ROUTES } from "~/features/data/routes";
import { ShellOrganizationSwitcher, ShellUserButton } from ".";

type Props = {
  children: ReactNode;
};

export default function ShellLayout(props: Props) {
  const route = useRouter();

  return (
    <AppShell navbar={{ width: 300, breakpoint: "sm" }} padding="md">
      <AppShell.Navbar>
        <AppShell.Section>
          <ShellOrganizationSwitcher />
        </AppShell.Section>
        <AppShell.Section grow my="md" px="lg" component={ScrollArea}>
          {Object.values(SIDEBAR_ROUTES).map((navLink, index) => (
            <NavLink
              key={index}
              label={navLink.label}
              leftSection={
                <navLink.icon
                  size="1.8rem"
                  stroke="1.5"
                  {...(route.pathname === navLink.pathname
                    ? {}
                    : { color: "gray" })}
                />
              }
              active={route.pathname === navLink.pathname}
              style={{ borderRadius: "8px" }}
              component={Link}
              href={navLink.path(route.query.workspaceId?.toString() ?? "")}
              styles={{ label: { fontSize: "16px", fontWeight: "500" } }}
            />
          ))}
        </AppShell.Section>
        <AppShell.Section>
          <ShellUserButton />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>{props.children}</AppShell.Main>
    </AppShell>
  );
}
