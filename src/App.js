
import Hero from "./components/Hero"
import AlpacasPreview from "./components/AlpacasPreview"
import Parts from "./components/Parts"
import {useState} from "react"
import {Flex} from "@chakra-ui/react"

function App() {
  const [options, setOptions ] = useState({
    accessories: "earings", 
    backgrounds: "galaxy",
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
    <Flex  flexDirection={{base: "column", md:"row"}} justifyContent="space-between" alignItems="center">
    <AlpacasPreview options={options} setOptions={setOptions} />
    <Parts setOptions={setOptions} options={options} />
    </Flex>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L48,80C96,64,192,32,288,53.3C384,75,480,149,576,186.7C672,224,768,224,864,202.7C960,181,1056,139,1152,149.3C1248,160,1344,224,1392,256L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </>
  );
}

export default App;
