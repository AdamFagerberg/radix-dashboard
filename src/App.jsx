import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { Flex, Separator } from "@radix-ui/themes";
import "./index.css";

export default function MyApp() {
  return (
    <>
      <Flex direction="column" gap="5" className="m-10">
        <Navbar />
        <Separator orientation="horizontal" size="4" />
        <Dashboard />
      </Flex>
    </>
  );
}
