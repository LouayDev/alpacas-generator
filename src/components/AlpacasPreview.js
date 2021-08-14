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

   const randomize = (part) => {
   	return stylesOptions.[part][Math.floor(Math.random() * (stylesOptions.[part].length - 0) + 0)]
   }

   const handleRandomize = () => {
   	Object.keys(stylesOptions).map((value, index) => {
     props.setOptions(prevOptions => ({
     	...prevOptions,
     	[value]: randomize(value)
     }))

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