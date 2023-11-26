import { Avatar, Stack, Text, Title } from "@mantine/core";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function FeedbackMessage(props: Props) {
  return (
    <Stack align="center" gap="lg">
      <Avatar size="xl">{props.icon}</Avatar>
      <Stack align="center" gap="xs">
        <Title order={4} ta="center" size="1.5rem">
          {props.title}
        </Title>
        <Text maw={420} ta="center" c="dimmed">
          {props.description}
        </Text>
      </Stack>
      {props.children}
    </Stack>
  );
}
