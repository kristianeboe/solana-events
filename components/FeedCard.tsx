import React from "react";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  createStyles,
  Center,
  Button,
} from "@mantine/core";
import { GasStation, Gauge, ManualGearbox, Users } from "tabler-icons-react";
import { FeedEvent } from "../pages";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: "uppercase",
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[5],
  },
}));

const mockdata = [
  { label: "4 passengers", icon: Users },
  { label: "100 km/h in 4 seconds", icon: Gauge },
  { label: "Automatic gearbox", icon: ManualGearbox },
  { label: "Electric", icon: GasStation },
];

export function FeedCard(props: { feedEvent: FeedEvent }) {
  const { classes } = useStyles();
  const nft = props.feedEvent.nft!;
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size={18} className={classes.icon} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image width={600} src={nft.image} alt={nft.name} />
      </Card.Section>

      <Group position="apart" mt="md">
        <div>
          <Text weight={500}>{nft.name}</Text>
        </div>
        <Badge variant="outline">{props.feedEvent.__typename}</Badge>
      </Group>
    </Card>
  );
}