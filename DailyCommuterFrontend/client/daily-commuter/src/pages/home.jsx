import { Box, Button, Card, Stack, Center, Tabs } from "@chakra-ui/react";
import { LuFolder } from "react-icons/lu";
import { FaTrain } from "react-icons/fa6";
import NewCommuteForm from "../components/new-commute-form";
import background from "../assets/background.png";
import MyCommutesForm from "../components/my-commutes-form";
import { handleSignOut } from "../components/utils/auth";

export default function HomePage() {
  return (
    <Box
      bgImage={`url(${background})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      bgAttachment="fixed"
      minHeight="100vh"
      position="relative"
      overflow="hidden"
    >
      <Button onClick={handleSignOut}> Sign Out</Button>
      <Center minH="100vh">
        <Stack gap="4" direction="row" wrap="wrap">
          <Card.Root bg={"#161616"} borderColor={"gray"} borderRadius="33.5px">
            <Card.Body gap="2">
              <Tabs.Root
                variant="line"
                w="900px"
                defaultValue="new commute"
                fitted
              >
                <Tabs.List>
                  <Tabs.Trigger
                    value="new commute"
                    _selected={{
                      color: "white",
                    }}
                  >
                    <FaTrain />
                    New Commute
                  </Tabs.Trigger>
                  <Tabs.Trigger
                    value="my commutes"
                    _selected={{
                      color: "white",
                    }}
                  >
                    <LuFolder />
                    My Commutes
                  </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="new commute">
                  <NewCommuteForm />
                </Tabs.Content>
                <Tabs.Content value="my commutes">
                  <MyCommutesForm />
                </Tabs.Content>
              </Tabs.Root>
            </Card.Body>
          </Card.Root>
        </Stack>
      </Center>
    </Box>
  );
}
