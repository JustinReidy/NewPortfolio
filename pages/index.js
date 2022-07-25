import NextLink from 'next/link'
import { Container, Box, Heading, Image, Button, SimpleGrid, Link, List, ListItem, Icon, useColorModeValue } from "@chakra-ui/react"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragrpah from "../components/paragraph"
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {IoLogoTwitter, IoLogoGithub} from 'react-icons/io5'

import placeholderCat from '../public/images/placeholder_cat.jpg'

const Page = () => {
  return (
	<Layout>
		<Container>
			<Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
				Hello, I'm a full-stack developer based in Denver, Colorado! This site is still in active development, and as such, may be imcomplete.
			</Box>

			<Box display={{md:'flex'}}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Justin Reidy
					</Heading>
					<p>(Developer / Hockey Fan / Outdoor Enthusist)</p>
				</Box>
				<Box flexShrink={0} mt={{base: 5, md: 0}} ml={{md: 6}} align="center">
					<Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/justin.jpg" aria-label="Profile Image"/>
				</Box>
			</Box>

			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					Who is Justin
				</Heading>
				<Paragrpah>I am a software developer based out of Denver, Colorado. My background is in Web Applications, working primaryly with the MERN stack. But in my current role I am working on Business Central development for RSM US. In this role I work with a language called AL, and write customizations to Microsofts base system to meet client needs. </Paragrpah>
				<Box align="center" my={4}>
					<NextLink href="/projects">
						<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">Projects</Button>
					</NextLink>
				</Box>
			</Section>
			<Section delay={0.2}>
				<Heading as="h3" variant="section-title">
					Bio
				</Heading>
				<BioSection>
					<BioYear>1999</BioYear>
					Born in Colorado Springs, Colorado
				</BioSection>
				<BioSection>
					<BioYear>2010</BioYear>
					Began learning to program with Batch
				</BioSection>
				<BioSection>
					<BioYear> 2019</BioYear>
					Attended VSchool in Salt Lake City, Utah
				</BioSection>
				<BioSection>
					<BioYear>2021</BioYear>
					Went through Cook Systems FastTrack program
					Completed placement and hired on full time with RSM
				</BioSection>
			</Section>
			
			<Section delay={0.3}>
				<Heading as='h3' variant="section-title">
					On the web
				</Heading>
				<List>
					<ListItem>
						<Link href="https://github.com/JustinReidy" target="_blank">
							<Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>JustinReidy</Button>
						</Link>
					</ListItem>
					<ListItem>
						<Link href="https://twitter.com/ReidyJustin" target="_blank">
							<Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter}/>}>@ReidyJustin</Button>
						</Link>
					</ListItem>
				</List>

			</Section>
		</Container>
	</Layout>
  )
}
export default Page