import { Title, Text, Stack, Group, Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { ShellLayout } from "~/features/workspace";

function PlaylistsPage() {
  return (
    <>
      <Group justify="space-between">
        <Stack gap={0}>
          <Title>Playlists</Title>
          <Text>Manage your playlists</Text>
        </Stack>
        <Button leftSection={<IconPlus size="1.2rem" stroke="1.5" />}>
          Create playlist
        </Button>
      </Group>
    </>
  );
}

PlaylistsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ShellLayout>{page}</ShellLayout>;
};

export default PlaylistsPage;
