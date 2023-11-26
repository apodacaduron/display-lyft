import { Title, Text, Stack, Group, Button } from "@mantine/core";
import { IconFile, IconUpload } from "@tabler/icons-react";
import { FeedbackMessage, ShellLayout } from "~/features/workspace";

function LibraryPage() {
  const uploadButton = (
    <Button leftSection={<IconUpload size="1.2rem" stroke="1.5" />}>
      Upload
    </Button>
  );

  return (
    <Stack gap="xl">
      <Group justify="space-between">
        <Stack gap={0}>
          <Title>Library</Title>
          <Text>Upload images, videos and music for your ads</Text>
        </Stack>
        {uploadButton}
      </Group>

      <FeedbackMessage
        icon={<IconFile size="2.5rem" stroke="1.5" />}
        title="Library empty"
        description="Your library is currently empty. Start uploading images, videos, and content to organize and manage your media assets."
      >
        {uploadButton}
      </FeedbackMessage>
    </Stack>
  );
}

LibraryPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ShellLayout>{page}</ShellLayout>;
};

export default LibraryPage;
