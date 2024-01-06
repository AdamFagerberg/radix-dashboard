import {
  Flex,
  Text,
  Button,
  Avatar,
  TextField,
  DropdownMenu,
  Link,
  Separator,
} from "@radix-ui/themes";

import {
  MagnifyingGlassIcon,
  CaretDownIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";

const SmallAvatar = <Avatar size="1" radius="full" fallback="A" color="gray" />;

const SearchDropDown = (
  <TextField.Root>
    <TextField.Slot>
      <MagnifyingGlassIcon height="16" width="16" />
    </TextField.Slot>
    <TextField.Input variant="soft" placeholder="Search team…" />
  </TextField.Root>
);

const LinkList = (
  <>
    <Flex gap="5" align="center">
      <Link size="2" color="gray" underline="none">
        <Text className="hover:text-black hover:no-underline">Overview</Text>
      </Link>
      <Link size="2" color="gray" underline="none">
        <Text className="hover:text-black hover:no-underline">Customers</Text>
      </Link>
      <Link size="2" color="gray" underline="none">
        <Text className="hover:text-black hover:no-underline">Products</Text>
      </Link>
      <Link size="2" color="gray" underline="none">
        <Text className="hover:text-black hover:no-underline">Settings</Text>
      </Link>
    </Flex>
  </>
);

function DropMenu() {
  return (
    <>
      <Flex gap="5">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="outline">
              {SmallAvatar}
              <Text className="text-black"> Alicia Koch</Text>
              <CaretDownIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <Flex direction="column" gap="2">
              <DropdownMenu.Item>{SearchDropDown}</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <Text size="1">Personal Account</Text>
              <DropdownMenu.Item>{SmallAvatar} Alicia Koch</DropdownMenu.Item>
              <Text size="1">Teams</Text>
              <DropdownMenu.Item>{SmallAvatar} Acme Inc.</DropdownMenu.Item>
              <DropdownMenu.Item>{SmallAvatar} Monsters Inc.</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>
                <PlusCircledIcon height="16" width="16" /> Create Team
              </DropdownMenu.Item>
            </Flex>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        {LinkList}
      </Flex>
    </>
  );
}

function AvatarDropDown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button radius="full" variant="ghost" size="0">
          {SmallAvatar}
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <Flex direction="column" gap="2">
          <Flex direction="column" gap="2">
            <Text size="2" weight="bold">
              Alicia Koch
            </Text>
            <Text size="1" weight="thin">
              alicia.koch@email.com
            </Text>
            <Separator orientation="horizontal" size="4" />
          </Flex>
          <DropdownMenu.Item shortcut="⇧⌘P">Profile</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ B">Billing</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ S">Settings</DropdownMenu.Item>
          <DropdownMenu.Item>New Team </DropdownMenu.Item>
          <Separator orientation="horizontal" size="4" />
          <DropdownMenu.Item shortcut="⇧⌘Q">Log Out</DropdownMenu.Item>
        </Flex>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

function SearchArea() {
  return (
    <>
      <Flex gap="5" align="center">
        <TextField.Root className="border-gray-300 border rounded shadow indent-4 placeholder-black">
          <TextField.Input variant="outline" placeholder="Search..." />
        </TextField.Root>
        <AvatarDropDown />
      </Flex>
    </>
  );
}

export default function Navbar() {
  return (
    <>
      <Flex justify="between" direction="row" gap="5">
        <DropMenu />
        <SearchArea />
      </Flex>
    </>
  );
}
