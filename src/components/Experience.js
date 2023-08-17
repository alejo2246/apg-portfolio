import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Badge,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  ButtonGroup,
  Center,
} from "@chakra-ui/react";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
// import { Fade } from "react-reveal";
import { useState, useEffect } from "react";

export default function Experience({ color }) {
  const options = [
    {
      value: "Freelance",
    },
  ];
  const [selected, setSelected] = useState("");
  useEffect(() => {
    if (options.length > 0) {
      setSelected(options[0].value);
    }
  }, []);

  const handleSelected = (value) => {
    setSelected(value);
  };
  const experiences = [
    {
      badges: [
        { name: "Javascript", colorScheme: "yellow" },
        { name: "ReactJs", colorScheme: "cyan" },
        { name: "Flutter", colorScheme: "cyan" },
        { name: "PHP", colorScheme: "blue" },
        { name: "Wordpress", colorScheme: "red" },
        { name: "NodeJs", colorScheme: "green" },
        { name: "Laravel", colorScheme: "red" },
        { name: "HTML5", colorScheme: "orange" },
        { name: "CSS3", colorScheme: "pink" },
        { name: "Redux", colorScheme: "purple" },
        { name: "Firebase", colorScheme: "orange" },
        { name: "MySQL", colorScheme: "orange" },
        { name: "AWS", colorScheme: "yellow" },
        { name: "Strapi", colorScheme: "purple" },
        { name: "Git", colorScheme: "gray" },
      ],
      company: "Esloogan Agency",
      duration: "Oct'21 - Present",
      image: "../assets/logo-esloogan.png",
      listItems: [
        "Designed and developed responsive web applications for seamless cross-platform compatibility, ensuring optimal performance and enhanced user experiences.",
        "Created feature-rich applications for iOS and Android platforms, delivering exceptional digital experiences and advanced functionalities.",
        "Collaborated closely with development teams and clients to understand and meet customer needs effectively.",
        "Develop around 9 custom WordPress plugins, tailored to the client's e-commerce and website enhancement needs.",
        "Enhanced e-commerce operations by integrating payment systems, facilitating seamless product imports, enabling efficient inventory management, and optimizing SEO, resulting in an improved user experience.",
      ],
      position: "Full-Stack & Mobile Applications Developer",
      tags: "Freelance",
    },
    {
      badges: [
        { name: "Javascript", colorScheme: "yellow" },
        { name: "ReactJs", colorScheme: "cyan" },
        { name: "Flutter", colorScheme: "cyan" },
        { name: "PHP", colorScheme: "blue" },
        { name: "NodeJs", colorScheme: "green" },
        { name: "HTML5", colorScheme: "orange" },
        { name: "CSS3", colorScheme: "pink" },
        { name: "Redux", colorScheme: "purple" },
        { name: "Firebase", colorScheme: "orange" },
        { name: "MySQL", colorScheme: "orange" },
        { name: "AWS", colorScheme: "yellow" },
        { name: "Strapi", colorScheme: "purple" },
        { name: "Git", colorScheme: "gray" },
      ],
      company: "Miami Signature Designs",
      duration: "Nov'22 - Present",
      image: "../assets/logo-miami.png",
      listItems: [
        "Developed and executed innovative solutions and enhancements for mobile applications, resulting in elevated user experiences and increased customer satisfaction.",
        "Conducted comprehensive testing and debugging of software applications, ensuring the delivery of reliable, secure, and scalable solutions.",
        "Specialized in Flutter-based mobile app development and created advanced administration panels using Strapi and Node.js for seamless management and control.",
      ],
      position: "Full-Stack Developer & Mobile Applications Developer",
      tags: "Freelance",
    },
    {
      badges: [
        { name: "Javascript", colorScheme: "yellow" },
        { name: "Typescript", colorScheme: "blue" },
        { name: "ReactJs", colorScheme: "cyan" },
        { name: "VUEJS", colorScheme: "green" },
        { name: "Flutter", colorScheme: "cyan" },
        { name: "React Native", colorScheme: "cyan" },
        { name: "PHP", colorScheme: "blue" },
        { name: "Wordpress", colorScheme: "red" },
        { name: "NodeJs", colorScheme: "green" },
        { name: "NextJs", colorScheme: "gray" },
        { name: "Laravel", colorScheme: "red" },
        { name: "HTML5", colorScheme: "orange" },
        { name: "CSS3", colorScheme: "pink" },
        { name: "Redux", colorScheme: "purple" },
        { name: "ExpressJs", colorScheme: "yellow" },
        { name: "Python", colorScheme: "green" },
        { name: "Firebase", colorScheme: "orange" },
        { name: "MySQL", colorScheme: "orange" },
        { name: "MongoDB", colorScheme: "green" },
        { name: "PostgreSQL", colorScheme: "teal" },
        { name: "GraphQL", colorScheme: "green" },
        { name: "AWS", colorScheme: "yellow" },
        { name: "Strapi", colorScheme: "purple" },
        { name: "Git", colorScheme: "gray" },
        { name: "Github", colorScheme: "orange" },
      ],
      company: "Workana LLC",
      duration: "Jan'23 - Present",
      image: "../assets/workana-logo.svg",
      listItems: [
        "Extensive experience crafting and enhancing innovative solutions for both web and mobile applications, spanning the entire development lifecycle.",
        "Expert in implementing advanced features and performance enhancements to ensure exceptional user experiences.",
        "Ranked #3 among freelancers in Colombia on the Workana platform, showcasing dedication and quality project delivery.",
        "Effective collaboration with multidisciplinary teams and clients to understand and meet specific project requirements.",
        "Proven track record of successful projects and positive client feedback on Workana.",
      ],
      position: "Full-Stack Developer & Mobile Applications Developer",
      tags: "Freelance",
      link: true,
    },
  ];
  return (
    <>
      <Container maxW={"3xl"} id="experience">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Experience</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Center px={4}>
            <ButtonGroup variant="outline">
              {options.map((option, index) => (
                <Button
                  key={`category-${index}`}
                  colorScheme={selected === option.value ? `${color}` : "gray"}
                  onClick={() => handleSelected(option.value)}
                >
                  {option.value}
                </Button>
              ))}
            </ButtonGroup>
          </Center>
          <Stack px={4} spacing={4}>
            {experiences
              .filter((exp) => exp.tags.includes(selected))
              .map((exp, index) => (
                <div key={index}>
                  <Card key={exp.company} size="sm">
                    <CardHeader>
                      <Flex justifyContent="space-between">
                        <HStack>
                          <Image src={exp.image} h={50} />
                          <Box px={2} align="left">
                            <Text
                              fontWeight={600}
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              {exp.company}
                              {exp.link && (
                                <a
                                  href="https://www.workana.com/freelancer/df0f98926ef3e3bc6a7fab44fd87cdc5"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    marginLeft: "15px",
                                    height: "auto",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <ExternalLinkIcon />
                                </a>
                              )}
                            </Text>

                            <Text>{exp.position}</Text>
                          </Box>
                        </HStack>
                        <Text px={2} fontWeight={300}>
                          {exp.duration}
                        </Text>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <Flex>
                        <List align="left" spacing={3}>
                          {exp.listItems.map((item, index) => (
                            <ListItem key={index}>
                              <ListIcon
                                boxSize={6}
                                as={ChevronRightIcon}
                                color={`${color}.500`}
                                height={"100%"}
                              />
                              {item}
                            </ListItem>
                          ))}
                        </List>
                      </Flex>
                    </CardBody>
                    <CardFooter>
                      <Flex
                        justifyContent="flex-start"
                        flexWrap="wrap"
                        gap="5px"
                      >
                        {exp.badges.map((badge) => (
                          <Badge
                            key={badge.name}
                            colorScheme={badge.colorScheme}
                          >
                            {badge.name}
                          </Badge>
                        ))}
                      </Flex>
                    </CardFooter>
                  </Card>
                </div>
              ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
