import {
  Text,
  Title,
  Stack,
  Container,
  Card,
  Avatar,
  Divider,
  SimpleGrid,
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
            Pricing plans
          </Title>
          <Text c="dimmed" maw={720} ta="center">
            Explore our flexible subscription options tailored to meet your
            content management requirements. Find the ideal plan that suits your
            business goals and allows seamless control over your displays.
          </Text>

          <SimpleGrid mt="lg" cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
            {memberships.map((membership, index) => (
              <Card key={index} p="xl" withBorder>
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
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </section>
  );
}
