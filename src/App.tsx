import "./App.css";
import API from "@aws-amplify/api";
import React from "react";
import ReactDOM from "react-dom";
import { VictoryBar } from "victory";
import Amplify from "aws-amplify";
import {
  AmplifyProvider,
  Authenticator,
  Button,
  Flex,
  Image,
  Text,
  Theme,
  View,
} from "@aws-amplify/ui-react";
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);

function App() {
  return (
    <AmplifyProvider theme={theme}>
      <Authenticator>
        {({ signOut, user }) => (
          <Flex
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            alignContent="flex-start"
            wrap="nowrap"
            gap="1rem"
            textAlign="center"
          >
            {user && (
              <View width="100%">
                <Text>Hello {user.username}</Text>
                <Button onClick={signOut}>
                  <Text>Sign Out</Text>
                </Button>
              </View>
            )}

            <View width="100%"></View>
          </Flex>
        )}
      </Authenticator>
    </AmplifyProvider>
  );
}

const theme: Theme = {
  name: "cra-my-theme",
  tokens: {
    colors: {
      font: {
        primary: { value: "#008080" },
      },
    },
  },
};

export default App;
