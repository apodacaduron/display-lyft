import { Title, Text, Stack, Group, Button } from "@mantine/core";
import { IconBuildingStore, IconPlus } from "@tabler/icons-react";
import { FeedbackMessage, ShellLayout } from "~/features/workspace";

function StoresPage() {
  const createStoreButton = (
    <Button leftSection={<IconPlus size="1.2rem" stroke="1.5" />}>
      Create store
    </Button>
  );

  return (
    <Stack gap="xl">
      <Group justify="space-between">
        <Stack gap={0}>
          <Title>Stores</Title>
          <Text>Manage your stores and the displays of each</Text>
        </Stack>
        {createStoreButton}
      </Group>

      <FeedbackMessage
        icon={<IconBuildingStore size="2.5rem" stroke="1.5" />}
        title="No stores found"
        description="Looks like there are no stores created yet. Get started by adding your first store to manage your displays and content."
      >
        {createStoreButton}
      </FeedbackMessage>
    </Stack>
  );
}

StoresPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ShellLayout>{page}</ShellLayout>;
};

export default StoresPage;
