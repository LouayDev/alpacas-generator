import {Grid, Button, Box, Heading, Container, useColorModeValue} from "@chakra-ui/react"
import {useState} from "react"
import stylesOptionsList from "./stylesOptionsList"


export default function Parts(props){
	const buttonsBg = useColorModeValue("blue.200","blue.700" )
	const ButtonStylesParts = {
     size:"sm",
     variant:"outline",
     rounded:"3xl",
     w: 28,
	 py:6,
	 colorScheme:"blue",
	 _focus: {
	  bg: buttonsBg,
	 }
	}

	const [indexPart, setIndexPart] = useState(0)
	const [currentPart, setCurrentPart] = useState("")

	const handleChange = (event) => {
		props.setStyleOptions(prevStyleOptions => ({
			...prevStyleOptions,
			[currentPart]: event.target.innerText
		}))
	}

	return(
		<Container centerContent  mt={20} w={{base: "xs", sm: "sm"}} >
		 <Heading mb={4} as="h1" size="md">Accesorize the Alpacas</Heading>
			<Grid templateColumns="repeat(3,1fr)" gap={1}>
			{Object.keys(stylesOptionsList).map((part, index) => {
	            return(<Button key={part} onClick={() => {setCurrentPart(part); setIndexPart(index)}} {...ButtonStylesParts} >{part}</Button>)
	            })}
			</Grid>
			<Box mb={12} mt={5}>
			<Heading  justifySelf="center"  mb={4} as="h1" textAlign="center" center="true" size="md">Style</Heading>
			<Grid templateColumns="repeat(3,3fr)" gap={1}>
			{Object.values(stylesOptionsList)[indexPart].map(style => {
				return(<Button key={style} onClick={handleChange} {...ButtonStylesParts}>{style}</Button>)
			})}
			</Grid>
			</Box>
		</Container>
	)
}