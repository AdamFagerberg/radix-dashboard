import {
  Tabs,
  Flex,
  Text,
  Button,
  Heading,
  Grid,
  Card,
} from "@radix-ui/themes";
import { PersonIcon, CardStackIcon, GlobeIcon } from "@radix-ui/react-icons";
import { Overview } from "./Overview";
import RecentSales from "./RecentSales";

const DashboardHeading = (
  <>
    <Flex justify="between" align="center">
      <Heading size="8" align="left">
        Dashboard
      </Heading>
      <button class="bg-black hover:bg-slate-800 text-white rounded px-2 text-sm h-9 font-semibold">
        Download
      </button>
    </Flex>
  </>
);

const DashboardTabs = (
  <Tabs.Root defaultValue="overview">
    <Tabs.List>
      <Tabs.Trigger value="overview">Text</Tabs.Trigger>
      <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
      <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
      <Tabs.Trigger>Notifications</Tabs.Trigger>
    </Tabs.List>
  </Tabs.Root>
);

function RevenueStats() {
  return (
    <>
      <Card size="3" className="shadow-md">
        <Flex direction="column">
          <Flex direction="row" justify="between">
            <Text weight="bold" size="1">
              Total Revenue
            </Text>
            <Text weight="thin">$</Text>
          </Flex>
          <Heading>$45,231.89</Heading>
          <Text weight="light" size="1">
            +20.1% from last month
          </Text>
        </Flex>
      </Card>
    </>
  );
}

function SubscriptionsStats() {
  return (
    <>
      <Card size="3" className="shadow-md">
        <Flex direction="column">
          <Flex direction="row" justify="between">
            <Text weight="bold" size="1">
              Subscriptions
            </Text>
            <PersonIcon height="24" width="16" />
          </Flex>
          <Heading>+2350</Heading>
          <Text weight="light" size="1">
            +180.1% from last month
          </Text>
        </Flex>
      </Card>
    </>
  );
}

function SalesStats() {
  return (
    <>
      <Card size="3" className="shadow-md">
        <Flex direction="column">
          <Flex direction="row" justify="between">
            <Text weight="bold" size="1">
              Sales
            </Text>
            <GlobeIcon height="24" width="16" />
          </Flex>
          <Heading>+12,234</Heading>
          <Text weight="light" size="1">
            +19% from last month
          </Text>
        </Flex>
      </Card>
    </>
  );
}

function ActiveStats() {
  return (
    <>
      <Card size="3" className="shadow-md">
        <Flex direction="column">
          <Flex direction="row" justify="between">
            <Text weight="bold" size="1">
              Active Now
            </Text>
            <CardStackIcon height="24" width="16" />
          </Flex>
          <Heading>+573</Heading>
          <Text weight="light" size="1">
            +201 since last hour
          </Text>
        </Flex>
      </Card>
    </>
  );
}

function StatBoxes() {
  return (
    <>
      <Grid columns={{ md: "4", initial: "2" }} gap="4">
        <RevenueStats />
        <SubscriptionsStats />
        <SalesStats />
        <ActiveStats />
      </Grid>
    </>
  );
}

function DashboardNav() {
  return (
    <>
      {DashboardHeading}
      {DashboardTabs}
    </>
  );
}

function OverviewCard() {
  return (
    <Card className="shadow-md">
      <Flex direction="column" gap="5">
        <Heading size="4" className="p-2">
          Overview
        </Heading>
        <Overview />
      </Flex>
    </Card>
  );
}

function OverviewAndRecent() {
  return (
    <>
      <Grid columns={{ md: "2", initial: "1" }} gap="4">
        <OverviewCard />
        <RecentSales />
      </Grid>
    </>
  );
}

export default function Dashboard() {
  return (
    <>
      <DashboardNav />
      <StatBoxes />
      <OverviewAndRecent />
    </>
  );
}
