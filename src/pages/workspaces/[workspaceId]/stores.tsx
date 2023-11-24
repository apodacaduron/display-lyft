import { Title, Text, Stack, Group, Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { ShellLayout } from "~/features/workspace";

function StoresPage() {
  return (
    <>
      <Group justify="space-between">
        <Stack gap={0}>
          <Title>Stores</Title>
          <Text>Manage your stores and the displays of each</Text>
        </Stack>
        <Button leftSection={<IconPlus size="1.2rem" stroke="1.5" />}>
          Create store
        </Button>
      </Group>
    </>
  );
}

StoresPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ShellLayout>{page}</ShellLayout>;
};

export default StoresPage;
