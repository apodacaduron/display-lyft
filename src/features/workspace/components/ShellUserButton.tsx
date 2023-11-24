import { useAuth, useClerk, useUser } from "@clerk/nextjs";
import { Avatar, Menu, NavLink, Skeleton } from "@mantine/core";
import {
  IconChevronRight,
  IconLogout,
  IconSettings,
} from "@tabler/icons-react";

export default function ShellUserButton() {
  const clerk = useClerk();
  const user = useUser();
  const auth = useAuth();

  return (
    <>
      <Menu shadow="lg" position="right" width={256}>
        <Menu.Target>
          <NavLink
            leftSection={<Avatar src={user.user?.imageUrl} />}
            label={user.user?.fullName ?? <Skeleton w={140} h={16} />}
            rightSection={<IconChevronRight size="1rem" stroke="1.5" />}
            styles={{ label: { fontSize: "16px", fontWeight: 500 } }}
            p="lg"
          />
        </Menu.Target>

        <Menu.Dropdown styles={{ dropdown: { borderRadius: "12px" } }} p="6px">
          <Menu.Item
            leftSection={<IconSettings size="1.8rem" stroke="1.5" />}
            onClick={() => clerk.openUserProfile()}
            styles={{
              itemLabel: { fontSize: "16px" },
              item: { borderRadius: "6px" },
            }}
          >
            Manage account
          </Menu.Item>
          <Menu.Item
            leftSection={<IconLogout size="1.8rem" stroke="1.5" />}
            onClick={() => auth.signOut()}
            styles={{ itemLabel: { fontSize: "16px" } }}
          >
            Sign out
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
