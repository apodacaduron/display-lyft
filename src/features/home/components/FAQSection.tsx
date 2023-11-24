import { Text, Title, Stack, Container } from "@mantine/core";

export default function FAQSection() {
  return (
    <section id="faq">
      <Container size="xl" my={100}>
        <Stack align="center">
          <Title order={2} size="2rem" ta="center">
            FAQ
          </Title>
          <Text c="dimmed" maw={720} ta="center">
            Welcome to DisplayLyft, your all-in-one platform for managing and
            displaying content effortlessly across multiple screens.
          </Text>
          TODO: Add my FAQ
        </Stack>
      </Container>
    </section>
  );
}
