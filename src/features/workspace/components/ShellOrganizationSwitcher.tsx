import { useClerk, useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Avatar, Menu, NavLink } from "@mantine/core";
import {
  IconCheck,
  IconChevronRight,
  IconLogout,
  IconSettings,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { ROUTES } from "~/features/data/routes";

export default function ShellOrganizationSwitcher() {
  const router = useRouter();
  const clerk = useClerk();
  const organization = useOrganization();
  const organizationList = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  function handleSelectOrganization(organizationId: string) {
    organizationList.setActive?.({
      organization: organizationId,
    });
    router.push(ROUTES.DASHBOARD.path(organizationId));
  }

  return (
    <>
      <Menu shadow="lg" position="right" width={320}>
        <Menu.Target>
          <NavLink
            leftSection={<Avatar src={organization.organization?.imageUrl} />}
            label={organization.organization?.name}
            description={`${organization.organization?.membersCount} members`}
            rightSection={<IconChevronRight size="1rem" stroke="1.5" />}
            styles={{ label: { fontSize: "16px", fontWeight: 500 } }}
            p="lg"
          />
        </Menu.Target>

        <Menu.Dropdown styles={{ dropdown: { borderRadius: "12px" } }} p="6px">
          <Menu.Label>Organizations</Menu.Label>
          {organizationList.userMemberships.data?.map((userMembership) => (
            <NavLink
              key={userMembership.organization.id}
              leftSection={
                <Avatar src={userMembership.organization?.imageUrl} />
              }
              label={userMembership.organization?.name}
              description={`${userMembership.organization?.membersCount} members`}
              rightSection={
                userMembership.organization.id ===
                  organization.organization?.id && (
                  <IconCheck size="1rem" stroke="1.5" />
                )
              }
              styles={{
                label: {
                  fontSize: "16px",
                  fontWeight: 500,
                },
                root: {
                  borderRadius: "6px",
                },
              }}
              active={
                userMembership.organization.id === organization.organization?.id
              }
              px="lg"
              onClick={() =>
                handleSelectOrganization(userMembership.organization.id)
              }
            />
          ))}
          <Menu.Label mt="md">Options</Menu.Label>
          <Menu.Item
            leftSection={<IconSettings size="1.8rem" stroke="1.5" />}
            onClick={() => clerk.openOrganizationProfile()}
            styles={{
              itemLabel: { fontSize: "16px" },
              item: { borderRadius: "6px" },
            }}
          >
            Manage active organization
          </Menu.Item>
          <Menu.Item
            leftSection={<IconLogout size="1.8rem" stroke="1.5" />}
            onClick={() => clerk.openCreateOrganization()}
            styles={{ itemLabel: { fontSize: "16px" } }}
          >
            Create organization
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
