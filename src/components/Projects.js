import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Image,
  Heading,
  SimpleGrid,
  Badge,
  Link,
  Center,
} from "@chakra-ui/react";
// import { Fade } from "react-reveal";
import { useState } from "react";

export default function Projects({ color }) {
  const projects = [
    {
      name: "Factory Tv Play",
      image: "../assets/portada-factory.png",
      description:
        "Android TV, Android, and iOS application enabling users to stream TV shows, series, and movies via IPTV. Designed an appealing landing page to showcase the app's features and offerings. Successfully integrated with XtreamCode X, a powerful content management and streaming platform, to ensure smooth content delivery. Engineered an intuitive administration panel for streamlined user, permissions, and content management.",
      tags: [],
      buttons: [],
      badges: [
        { text: "Flutter", colorScheme: "cyan" },
        { text: "NodeJs", colorScheme: "green" },
        { text: "Reactjs", colorScheme: "blue" },
        { text: "Firebase", colorScheme: "orange" },
        { text: "MYSQL", colorScheme: "teal" },
      ],
    },
    {
      name: "Cuvo Streaming",
      image: "../assets/portada-cuvo.png",
      description:
        "Established an advertising campaign application, enabling random playback of diverse promotional content, all displaying the company's logo, on an Android TV device. Facilitated seamless management of users and campaigns through a synchronised panel connected to Google Drive.",
      tags: ["Category 2"],
      buttons: [{ text: "Link", href: "https://example.com" }],
      badges: [
        { text: "Flutter", colorScheme: "cyan" },
        { text: "NodeJs", colorScheme: "green" },
        { text: "Reactjs", colorScheme: "blue" },
        { text: "Firebase", colorScheme: "orange" },
        { text: "Api Google drive", colorScheme: "yellow" },
        { text: "MongoDB", colorScheme: "green" },
      ],
    },
    {
      name: "Project Trading",
      image: "../assets/portada-project.png",
      description: `Drove various pivotal tasks to enhance app performance and user engagement. Transformed frontend for a visually captivating and user-friendly interface. Engineered a robust RESTful API with Node.js and Strapi, streamlining order and user management for efficient data flow across components.  Introduced an innovative chat feature, integrating image sharing, push notifications, and video calling to enhance user interactions and elevate the overall user experience. This app focuses on import management.`,
      tags: [],
      buttons: [],
      badges: [
        { text: "Flutter", colorScheme: "cyan" },
        { text: "NodeJs", colorScheme: "green" },
        { text: "Reactjs", colorScheme: "blue" },
        { text: "Firebase", colorScheme: "orange" },
      ],
    },
  ];
  const otherProjects = [
    {
      name: "PROJECT Aasd",
      description: "Description",
      tags: ["Category 1"],
      buttons: [{ text: "Link", href: "https://example.com" }],
      badges: [{ text: "Badges", colorScheme: "blue" }],
    },
    {
      name: "PROJECT Aasd",
      description: "Description",
      tags: ["Category 1"],
      buttons: [{ text: "Link", href: "https://example.com" }],
      badges: [{ text: "Badges", colorScheme: "blue" }],
    },
    {
      name: "PROJECT Aasd",
      description: "Description",
      tags: ["Category 1"],
      buttons: [{ text: "Link", href: "https://example.com" }],
      badges: [{ text: "Badges", colorScheme: "blue" }],
    },
  ];
  const options2 = [
    {
      value: "Category 1",
    },
    {
      value: "Category 2",
    },
    {
      value: "Category 3",
    },
  ];
  const [selected, setSelected] = useState("All");

  const handleSelected = (value) => {
    setSelected(value);
  };
  return (
    <>
      <Container maxW={"3xl"} id="projects">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Projects</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack px={4} spacing={4}>
            {projects.map((project) => (
              <Card
                key={project.name}
                direction={{
                  base: "column",
                }}
                overflow="hidden"
              >
                <Image
                  objectFit="fill"
                  src={project.image}
                  height={"350px"}
                  borderRadius={"6px"}
                />

                <Stack>
                  <CardBody align="left">
                    <Heading size="md">{project.name}</Heading>

                    <Text py={2}>{project.description}</Text>

                    {/* <HStack py={2}>
                      {project.buttons.map((button) => (
                        <a key={button.text} href={button.href}>
                          <Button color={`${color}.400`}>{button.text}</Button>
                        </a>
                      ))}
                    </HStack> */}
                    <HStack pt={2} spacing={2}>
                      {project.badges.map((badge) => (
                        <Badge key={badge.text} colorScheme={badge.colorScheme}>
                          {badge.text}
                        </Badge>
                      ))}
                    </HStack>
                  </CardBody>
                </Stack>
              </Card>
            ))}
          </Stack>
          <Text color={"gray.600"} fontSize={"xl"} px={4}>
            Other Projects
          </Text>
          <Center px={4}>
            <ButtonGroup variant="outline">
              <Button
                colorScheme={selected === "All" ? `${color}` : "gray"}
                onClick={() => handleSelected("All")}
              >
                All
              </Button>
              {options2.map((option, index) => (
                <Button
                  key={`filter-${index}`}
                  colorScheme={selected === option.value ? `${color}` : "gray"}
                  onClick={() => handleSelected(option.value)}
                >
                  {option.value}
                </Button>
              ))}
            </ButtonGroup>
          </Center>
          <SimpleGrid columns={[1, 2, 3]} px={4} spacing={4}>
            {otherProjects
              .filter((other) => {
                if (selected === "All") {
                  return true;
                } else {
                  return other.tags.includes(selected);
                }
              })
              .map((other, index) => (
                <div key={`proyecto-${index}`}>
                  <Card key={other.name}>
                    <Stack>
                      <CardBody align="left" h={[null, "40vh"]}>
                        <Heading size="sm">{other.name}</Heading>

                        <Text fontSize="sm" py={2}>
                          {other.description}
                        </Text>

                        <HStack spacing={2}>
                          {other.buttons.map((button) => (
                            <Link
                              key={button.text}
                              href={button.href}
                              color={`${color}.400`}
                            >
                              {button.text}
                            </Link>
                          ))}
                        </HStack>
                        <HStack flexWrap="wrap" pt={4} spacing={2}>
                          {other.badges.map((badge) => (
                            <Badge
                              my={2}
                              key={badge.text}
                              colorScheme={badge.colorScheme}
                            >
                              {badge.text}
                            </Badge>
                          ))}
                        </HStack>
                      </CardBody>
                    </Stack>
                  </Card>
                </div>
              ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}
