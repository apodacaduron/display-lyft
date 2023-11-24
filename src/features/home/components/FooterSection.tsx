import { Text, Container, Center } from "@mantine/core";

export default function FooterSection() {
  const currentYear = new Date();
  return (
    <Center h="100%">
      <Container size="xl">
        <Text c="dimmed" ta="center">
          {currentYear.getFullYear()} - DisplayLyft
        </Text>
      </Container>
    </Center>
  );
}
