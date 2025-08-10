import CardContainerContext from "./MainContent/CardContainerContext";
import { PokemonContextProvider } from "../context/PokemonContext";

export default function MainContent() {
  return (
    <>
      {/* <HeroSection /> */}
      <PokemonContextProvider>
        <CardContainerContext />
      </PokemonContextProvider>
    </>
  );
}
