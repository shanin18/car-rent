import Home from "./home-2/page";
import Wrapper from "./layout/wrapper";

export const metadata = {
  title: "Home || Niljyoti",
  description: `Niljyoti - Car rent service provider.`,
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
