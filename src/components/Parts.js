import {Grid, Button, Box, Heading, Container, useColorModeValue} from "@chakra-ui/react"
import {useState} from "react"
import stylesOptions from "./stylesOptions"


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
		props.setOptions(prevOptions => ({
			...prevOptions,
			[currentPart]: event.target.innerText
		}))
	}

	return(
		<Container centerContent  mt={20} w={{base: "xs", sm: "sm"}} >
		 <Heading mb={4} as="h1" size="md">Accesorize the Alpacas</Heading>
			<Grid templateColumns="repeat(3,1fr)" gap={1}>
			{Object.keys(stylesOptions).map((part, index) => {
	            return(<Button key={part} onClick={() => {setCurrentPart(part); setIndexPart(index)}} {...ButtonStylesParts} >{part}</Button>)
	            })}
			</Grid>
			<Box mb={12} mt={5}>
			<Heading  justifySelf="center"  mb={4} as="h1" textAlign="center" center size="md">Style</Heading>
			<Grid templateColumns="repeat(3,3fr)" gap={1}>
			{Object.values(stylesOptions)[indexPart].map(style => {
				return(<Button key={style} onClick={handleChange} {...ButtonStylesParts}>{style}</Button>)
			})}
			</Grid>
			</Box>
		</Container>
	)
}