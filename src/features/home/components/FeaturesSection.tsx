import {
  Text,
  Title,
  Stack,
  Container,
  Avatar,
  Card,
  SimpleGrid,
} from "@mantine/core";

export default function FeaturesSection() {
  const features = [
    {
      icon: "🖥️",
      title: "Dynamic Content Management",
      description:
        "Effortlessly control content on various screens from a central hub. Customize displays globally or individually for a tailored viewer experience.",
    },
    {
      icon: "🔧",
      title: "Personalized Playback Configuration",
      description:
        "Create unique playlists for each screen. Seamlessly switch between videos and images, ensuring a perfect showcase for your brand.",
    },
    {
      icon: "✌",
      title: "Intuitive User Interface",
      description:
        "Navigate our platform easily. Our user-friendly interface simplifies content uploads, screen settings, and subscription management for effortless use.",
    },
    {
      icon: "☁️",
      title: "Secure and Reliable Hosting",
      description:
        "Rest easy knowing your content is safe. Our robust hosting ensures reliable playback and fortified security for all your valuable media.",
    },
  ];

  return (
    <section id="features">
      <Container size="xl" my={100}>
        <Stack align="center">
          <Title order={2} size="2rem" ta="center">
            Innovative tools for seamless screen mastery
          </Title>
          <Text c="dimmed" maw={720} ta="center">
            Discover an arsenal of cutting-edge features engineered to simplify
            and elevate your content display experience. Dive into a realm where
            managing screens becomes an art form, effortlessly executed with
            DisplayLyft&apos;s ingenious tools.
          </Text>

          <SimpleGrid mt="lg" cols={{ base: 1, lg: 2 }} spacing="xl">
            {features.map((feature, index) => (
              <Card key={index} p="xl" withBorder>
                <Card.Section mb="md">
                  <Avatar size="lg">{feature.icon}</Avatar>
                </Card.Section>
                <Card.Section>
                  <Title order={4}>{feature.title}</Title>
                  <Text c="dimmed">{feature.description}</Text>
                </Card.Section>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </section>
  );
}
