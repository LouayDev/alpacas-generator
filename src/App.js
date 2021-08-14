
import Hero from "./components/Hero"
import AlpacasPreview from "./components/AlpacasPreview"
import Parts from "./components/Parts"
import {useState} from "react"
import {Flex} from "@chakra-ui/react"

function App() {
  const [options, setOptions ] = useState({
    accessories: "earings", 
    backgrounds: "blue50",
      ears: "default",
      eyes: "angry", 
      hair: "bang",
      leg: "bubble-tea",
      mouth: "astonished", 
      neck: "bend-backward", 
    })

  return (
    <>
    <Hero />
    <Flex mb={30} flexDirection={{base: "column", md:"row"}} justifyContent="space-between" alignItems="center">
    <AlpacasPreview options={options} setOptions={setOptions} />
    <Parts setOptions={setOptions} options={options} />
    </Flex>
    </>
  );
}

export default App;
