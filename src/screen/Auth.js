import { Box, Button, Image, Text } from "native-base";
import Welcome from "../../assets/home.png";
import Waystodo from "../../assets/wd.png";

function Auth({ navigation }) {
  return (
    <Box
      display="flex"
      flex={1}
      alignItems="center"
      justifyContent="center"
      bg="white"
    >
      <Image
        source={Welcome}
        width={300}
        height={300}
        resizeMode="contain"
        alt="Welcome"
      />
      <Image 
      source={Waystodo} 
      alt="Waystodo" 
      resizeMode="contain" 
      />
      <Text textAlign="center" width={250} marginTop={5}>
        Write your activity and finish your activity. Fast, Simple and Easy to
        Use
      </Text>
      <Box marginTop={10} width="80%">
        <Button
          bg="error.500"
          _hover={{ backgroundColor: "error.600" }}
          py={3}
          _text={{
            fontSize: "md",
            fontWeight: "bold",
          }}
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Button>
        <Button
          bg="muted.400"
          width="100%"
          _hover={{ backgroundColor: "muted.500" }}
          py={3}
          _text={{
            fontSize: "md",
            fontWeight: "bold",
          }}
          marginTop={4}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
}

export default Auth;
