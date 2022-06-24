import { DefineFunction, Schema } from "deno-slack-sdk/mod.ts";

export const GetListOfMarkets = DefineFunction({
  callback_id: "getlistofmarkets",
  title: "List of markets",
  description: "Display de list of markets existing at the API",
  source_file: "functions/marketRequests/getMarkets.ts",
  input_parameters: {
    properties: {},
    required: [],
  },
  output_parameters: {
    properties: {
      marketsList: {
        type: Schema.types.array,
        description: "An array with the markets",
      },
    },
    required: ["marketsList"],
  },
});
