import {
  Text,
  Title,
  Stack,
  Container,
  Avatar,
  Card,
  Grid,
} from "@mantine/core";

export default function FeaturesSection() {
  const features = [
    {
      icon: "🖥️",
      title: "Dynamic Content Management",
      description: "Nice feature description",
    },
    {
      icon: "🔧",
      title: "Personalized Playback Configuration",
      description: "Nice feature description",
    },
    {
      icon: "✌",
      title: "Intuitive User Interface",
      description: "Nice feature description",
    },
    {
      icon: "☁️",
      title: "Secure Hosting",
      description: "Nice feature description",
    },
  ];

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

          <Grid mt="lg">
            {features.map((feature, index) => (
              <Grid.Col maw="25%" key={index}>
                <Card p="xl" withBorder>
                  <Card.Section mb="md">
                    <Avatar size="lg">{feature.icon}</Avatar>
                  </Card.Section>
                  <Card.Section>
                    <Title order={4}>{feature.title}</Title>
                    <Text c="dimmed">{feature.description}</Text>
                  </Card.Section>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </section>
  );
}
