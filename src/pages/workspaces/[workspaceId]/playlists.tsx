import { Title, Text, Stack, Group, Button } from "@mantine/core";
import { IconPlaylist, IconPlus } from "@tabler/icons-react";
import { FeedbackMessage, ShellLayout } from "~/features/workspace";

function PlaylistsPage() {
  const createPlaylistButton = (
    <Button leftSection={<IconPlus size="1.2rem" stroke="1.5" />}>
      Create playlist
    </Button>
  );

  return (
    <Stack gap="xl">
      <Group justify="space-between">
        <Stack gap={0}>
          <Title>Playlists</Title>
          <Text>Manage your playlists</Text>
        </Stack>
        {createPlaylistButton}
      </Group>

      <FeedbackMessage
        icon={<IconPlaylist size="2.5rem" stroke="1.5" />}
        title="No playlists available"
        description="You haven't created any playlists yet. Begin organizing your content for displays by creating your first playlist."
      >
        {createPlaylistButton}
      </FeedbackMessage>
    </Stack>
  );
}

PlaylistsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ShellLayout>{page}</ShellLayout>;
};

export default PlaylistsPage;
