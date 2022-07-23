import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import placeholderCat from '../public/images/placeholder_cat.jpg'

const Projects = () => (
    <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="curex" title="Curex" thumbnail={placeholderCat}>
                        A simple application that allows a user to compare the current exchange rates of various currencies, and view a historical graph of the fluxuations of two currencies
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Projects
