import { Card, Heading, Text, Flex, Avatar, Box } from "@radix-ui/themes";

function User1() {
  return (
    <Flex direction="row" justify="between">
      <Flex gap="5">
        <Avatar size="3" radius="full" fallback="O" />
        <Flex direction="column">
          <Text size="2" weight="bold">
            Olivia Martin
          </Text>
          <Text size="2" color="gray">
            olivia.martin@email.com
          </Text>
        </Flex>
      </Flex>
      <Text weight="bold">+$1,999.00</Text>
    </Flex>
  );
}

function User2() {
  return (
    <Flex direction="row" justify="between">
      <Flex gap="5">
        <Avatar size="3" radius="full" fallback="J" />
        <Flex direction="column">
          <Text size="2" weight="bold">
            Jackson Lee
          </Text>
          <Text size="2" color="gray">
            jackson.lee@email.com
          </Text>
        </Flex>
      </Flex>
      <Text weight="bold">+$39.00</Text>
    </Flex>
  );
}

function User3() {
  return (
    <Flex direction="row" justify="between">
      <Flex gap="5">
        <Avatar size="3" radius="full" fallback="I" />
        <Flex direction="column">
          <Text size="2" weight="bold">
            Isabella Nguyen
          </Text>
          <Text size="2" color="gray">
            isabella.nguyen@email.com
          </Text>
        </Flex>
      </Flex>
      <Text weight="bold">+$299.00</Text>
    </Flex>
  );
}

function User4() {
  return (
    <Flex direction="row" justify="between">
      <Flex gap="5">
        <Avatar size="3" radius="full" fallback="W" />
        <Flex direction="column">
          <Text size="2" weight="bold">
            William Kim
          </Text>
          <Text size="2" color="gray">
            will@email.com
          </Text>
        </Flex>
      </Flex>
      <Text weight="bold">+99.00</Text>
    </Flex>
  );
}

function User5() {
  return (
    <Flex direction="row" justify="between">
      <Flex gap="5">
        <Avatar size="3" radius="full" fallback="S" />
        <Flex direction="column">
          <Text size="2" weight="bold">
            Sofia Davis
          </Text>
          <Text size="2" color="gray">
            sofia.davis@email.com
          </Text>
        </Flex>
      </Flex>
      <Text weight="bold">+39.00</Text>
    </Flex>
  );
}

function RecentSalesHeading() {
  return (
    <Flex direction="column" className="m-2 mb-5">
      <Heading size="4">Recent Sales</Heading>
      <Text size="1" weight="light">
        You made 265 sales this month
      </Text>
    </Flex>
  );
}

export default function RecentSales() {
  return (
    <Card className="shadow-md">
      <RecentSalesHeading />
      <Flex direction="column" gap="5" className="m-2">
        <User1 />
        <User2 />
        <User3 />
        <User4 />
        <User5 />
      </Flex>
    </Card>
  );
}
