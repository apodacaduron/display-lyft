import { Title, Text, Stack, Group, Button } from "@mantine/core";
import { IconUpload } from "@tabler/icons-react";
import { ShellLayout } from "~/features/workspace";

function LibraryPage() {
  return (
    <>
      <Group justify="space-between">
        <Stack gap={0}>
          <Title>Library</Title>
          <Text>Upload images, videos and music for your ads</Text>
        </Stack>
        <Button leftSection={<IconUpload size="1.2rem" stroke="1.5" />}>
          Upload
        </Button>
      </Group>
    </>
  );
}

LibraryPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ShellLayout>{page}</ShellLayout>;
};

export default LibraryPage;
