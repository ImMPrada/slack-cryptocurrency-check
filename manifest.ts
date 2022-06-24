import { DefineFunction, Manifest, Schema } from "deno-slack-sdk/mod.ts";
import { GetListOfMarkets } from "./marketRequestsFuncDeclarations.ts";

export const ReverseFunction = DefineFunction({
  callback_id: "reverse",
  title: "Reverse",
  description: "Takes a string and reverses it",
  source_file: "functions/reverse.ts",
  input_parameters: {
    properties: {
      stringToReverse: {
        type: Schema.types.string,
        description: "The string to reverse",
      },
    },
    required: ["stringToReverse"],
  },
  output_parameters: {
    properties: {
      reverseString: {
        type: Schema.types.string,
        description: "The string in reverse",
      },
    },
    required: ["reverseString"],
  },
});

export default Manifest({
  name: "slack-cryptocurrency-check",
  description: "Reverse a string",
  icon: "assets/icon.png",
  functions: [ReverseFunction, GetListOfMarkets],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
