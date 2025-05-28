import { prompt } from "prompts";
import { lookupAddress } from "addressless";

const main = async () => {
  const { postcode } = await prompt({
    type: "text",
    name: "postcode",
    message: "Postcode:",
  });
  const { housenumber } = await prompt({
    type: "text",
    name: "housenumber",
    message: "Housenumber:",
  });
  const address = await lookupAddress(postcode, housenumber);
  console.dir(address, {
    depth: null,
    colors: true,
    sorted: true,
  });
};

main();
