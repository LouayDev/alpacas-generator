import {useRef, useEffect} from "react"
import mergeImages from "merge-images";
import {Container, Button, Box, Flex, Image,} from "@chakra-ui/react"
import stylesOptionsList from "./stylesOptionsList"

export default function AlpacasPreview(props){
	const previewImage = useRef(null)
	const downloadImage = useRef()

	//merging the images together 
   useEffect(() => {
 	   	mergeImages([
  `alpaca/backgrounds/${props.styleOptions.backgrounds}.png`,
  `alpaca/ears/${props.styleOptions.ears}.png`,
  `alpaca/neck/${props.styleOptions.neck}.png`,
  'alpaca/nose.png',
  `alpaca/hair/${props.styleOptions.hair}.png`, 
  `alpaca/accessories/${props.styleOptions.accessories}.png`,
  `alpaca/eyes/${props.styleOptions.eyes}.png`,
  `alpaca/mouth/${props.styleOptions.mouth}.png`,
  `alpaca/leg/${props.styleOptions.leg}.png`,

  ]) 
  .then(b64 => {previewImage.current.src = b64; downloadImage.current.href = b64} ); 
 })

   //the randomize formla 
   const randomize = (part) => {
   	return stylesOptionsList.[part][Math.floor(Math.random() * (stylesOptionsList.[part].length - 0) + 0)]
   }

   const handleRandomize = () => {
   	Object.keys(stylesOptionsList).map((value, index) => {
     props.setStyleOptions(prevOptions => ({
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