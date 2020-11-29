import App from "./Root.svelte";
import { render } from "@testing-library/svelte";

it("renders the App component", async () => {
  const name = "testName";
  const { getByText } = render(App, { name });

  expect(getByText(`${name} is mounted!`)).toBeInTheDocument();
});
