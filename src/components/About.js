import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Image,
} from "@chakra-ui/react";
import profile from "../data/Profile";
//import ProfileArray from "./ProfileArray";

export default function About({ color }) {
  //const profile = ProfileArray();
  return (
    <>
      <Container maxW={"5xl"} id="about">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          {/* Agrega tu foto aquí */}
          <Stack align="start" direction="row" px={4}>
            <Image
              src="../assets/pic.png"
              alt="Alejandro Padilla"
              borderRadius="30px"
              boxSize={{ base: "150px", md: "400px" }}
              mx="auto"
              // mt={{ base: 4, md: 8 }}
            />
            <div>
              <Text color={"gray.300"} fontSize={"xl"} px={4} align={"left"}>
                Forward-thinking professional with a proven track record of
                empowering organizations through innovative software solutions.
                I thrive on transforming intricate processes, enhancing customer
                experiences, and pushing boundaries. From concept inception to
                execution, I take ownership of procedures, translating core
                customer needs into viable development roadmaps, and eagerly
                embracing new technologies across dynamic work streams.
              </Text>
              <br />
              <Text color={"gray.300"} fontSize={"xl"} px={4} align={"left"}>
                My passion for technology and web/mobile development drives my
                creative and innovative approach. I revel in challenges and am
                unwaveringly committed to delivering excellence. With a penchant
                for aesthetics, I specialize in crafting visually captivating
                user interfaces while consistently producing top-tier,
                maintainable, and reusable code.
              </Text>
              <br />
              <Text color={"gray.300"} fontSize={"xl"} px={4} align={"left"}>
                My journey is marked by a talent for accelerating project
                timelines, minimizing bugs, and breathing new life into
                corporate applications. Beyond just coding, I excel in
                establishing secure, scalable infrastructures and deploying
                feature-rich applications for iOS and Android platforms.
              </Text>
              <br />
              <Text color={"gray.300"} fontSize={"xl"} px={4} align={"left"}>
                Let's connect and embark on a transformative technological
                journey together. As Alejandro Padilla, I am not just a
                developer – I am a passionate tech enthusiast who thrives on
                turning ideas into reality.
              </Text>
            </div>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
