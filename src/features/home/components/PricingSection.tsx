import {
  Text,
  Title,
  Stack,
  Container,
  Grid,
  Card,
  Avatar,
  Divider,
} from "@mantine/core";

export default function PricingSection() {
  const memberships = [
    {
      icon: "🖥️",
      title: "Basic",
      description: "Nice feature description",
      price: 0,
      perks: [
        {
          icon: "1",
          text: "Nice",
        },
      ],
    },
    {
      icon: "🖥️",
      title: "Essential",
      description: "Nice feature description",
      price: 9,
      perks: [
        {
          icon: "",
          text: "",
        },
      ],
    },
    {
      icon: "🖥️",
      title: "Professional",
      description: "Nice feature description",
      price: 29,
      perks: [
        {
          icon: "",
          text: "",
        },
      ],
    },
    {
      icon: "🖥️",
      title: "Enterprise",
      description: "Nice feature description",
      price: 99,
      perks: [
        {
          icon: "",
          text: "",
        },
      ],
    },
  ];

  return (
    <section id="pricing">
      <Container size="xl" my={100}>
        <Stack align="center">
          <Title order={2} size="2rem" ta="center">
            Pricing
          </Title>
          <Text c="dimmed" maw={720} ta="center">
            Welcome to DisplayLyft, your all-in-one platform for managing and
            displaying content effortlessly across multiple screens.
          </Text>

          <Grid mt="lg">
            {memberships.map((membership, index) => (
              <Grid.Col maw="25%" key={index}>
                <Card p="xl" withBorder>
                  <Card.Section mb="md">
                    <Avatar size="lg">{membership.icon}</Avatar>
                  </Card.Section>
                  <Card.Section>
                    <Title order={4}>{membership.title}</Title>
                    <Text c="dimmed">{membership.description}</Text>
                    <Text>
                      <Text span size="32px">
                        ${membership.price}
                      </Text>{" "}
                      / per month
                    </Text>

                    <Divider my="sm" />

                    {membership.perks.map((perk, idx) => (
                      <Text key={idx}>
                        {perk.icon} {perk.text}
                      </Text>
                    ))}
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
