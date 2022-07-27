import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import CurEx from '../public/images/Curex_Screengrab1.png'
import ForumSite from '../public/images/ForumSite_Screengrab1.png'

const Projects = () => (
    <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="curex" title="Curex" thumbnail={CurEx}>
                        A simple application that allows a user to compare the current exchange rates of various currencies, and view a historical graph of the fluxuations of two currencies
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="forumsite" title="ForumSite" thumbnail={ForumSite}>
                        A Reddit "Clone" built by myself and 3 others over a week as our capstone project at VSchool
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Projects
