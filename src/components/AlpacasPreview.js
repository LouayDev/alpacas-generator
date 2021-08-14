import {useRef, useEffect} from "react"
import mergeImages from "merge-images";
import {Container, Button, Box, Flex, Image,} from "@chakra-ui/react"
import stylesOptions from "./stylesOptions"

export default function AlpacasPreview(props){
	const previewImage = useRef(null)
	const downloadImage = useRef()

 useEffect(() => {
 		mergeImages([
`alpaca/backgrounds/${props.options.backgrounds}.png`,
`alpaca/ears/${props.options.ears}.png`,
`alpaca/neck/${props.options.neck}.png`,
'alpaca/nose.png',
`alpaca/hair/${props.options.hair}.png`, 
`alpaca/accessories/${props.options.accessories}.png`,
`alpaca/eyes/${props.options.eyes}.png`,
`alpaca/mouth/${props.options.mouth}.png`,
`alpaca/leg/${props.options.leg}.png`,

]) 
  .then(b64 => {previewImage.current.src = b64; downloadImage.current.href = b64} ); 
 })

    const handleRandomize = () => {
    props.setOptions({
      accessories: stylesOptions.accessories[Math.floor(Math.random() * (stylesOptions.accessories.length - 0) + 0)], 
      backgrounds: stylesOptions.backgrounds[Math.floor(Math.random() * (stylesOptions.backgrounds.length - 0) + 0)],
      ears: stylesOptions.ears[Math.floor(Math.random() * (stylesOptions.ears.length - 0) + 0)],
      eyes: stylesOptions.eyes[Math.floor(Math.random() * (stylesOptions.eyes.length - 0) + 0)], 
      hair: stylesOptions.hair[Math.floor(Math.random() * (stylesOptions.hair.length - 0) + 0)],
      leg: stylesOptions.leg[Math.floor(Math.random() * (stylesOptions.leg.length - 0) + 0)],
      mouth: stylesOptions.mouth[Math.floor(Math.random() * (stylesOptions.mouth.length - 0) + 0)], 
      neck: stylesOptions.neck[Math.floor(Math.random() * (stylesOptions.neck.length - 0) + 0)],
    })
  }

	return(
		<Container centerContent boxSize={{base: "xs", sm: "sm"}} >
			<Box mb={10} pos="relative">
			<Image boxSize="90%" left={3} pos="relative" top={8} ref={previewImage} src="alpaca/frame.png" alt="alpacas" />
			<Image top={0}   boxSize="120%" w="140%" pos="absolute" src="alpaca/frame.png" alt="alpacas" />
			</Box>
			<Flex justifyContent="center" mt={8}>
				<Button onClick={() => handleRandomize()}  w="full" colorScheme="cyan" mr={3}>
				  Randome 🎲
				</Button>
				<Button ref={downloadImage} href="" as="a" download="newname" w="full"  colorScheme="green" ml={3}>
					Download 🖼
				</Button>
			</Flex>
		</Container>
	)
}