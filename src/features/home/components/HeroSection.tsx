import { SignUpButton } from "@clerk/nextjs";
import {
  Text,
  Title,
  Image,
  Center,
  Stack,
  Container,
  Button,
} from "@mantine/core";
import NextImage from "next/image";

export default function HeroSection() {
  return (
    <Container size="xl" my={100}>
      <Stack align="center">
        <Title order={1} size="3rem" ta="center">
          Unlock the Power of <br /> Web-Based{" "}
          <Text span c="blue" inherit>
            Screen Management
          </Text>
        </Title>
        <Text c="dimmed" maw={720} ta="center">
          Welcome to DisplayLyft, your all-in-one platform for managing and
          displaying content effortlessly across multiple screens. Say goodbye
          to outdated USB drives and hello to a seamless web-based solution.
        </Text>
        <Button size="lg" component={SignUpButton}>
          Get Started Free
        </Button>
        <Image
          radius="md"
          component={NextImage}
          src="/preview.png"
          alt="My image"
          width={400}
          height={400}
          my="xl"
        />
      </Stack>
    </Container>
  );
}
