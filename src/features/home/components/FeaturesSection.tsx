import { Text, Title, Stack, Container } from "@mantine/core";

export default function FeaturesSection() {
  return (
    <section id="features">
      <Container size="xl" my={100}>
        <Stack align="center">
          <Title order={2} size="2rem" ta="center">
            Features
          </Title>
          <Text c="dimmed" maw={720} ta="center">
            Welcome to DisplayLyft, your all-in-one platform for managing and
            displaying content effortlessly across multiple screens.
          </Text>
          TODO: Add my features
        </Stack>
      </Container>
    </section>
  );
}
