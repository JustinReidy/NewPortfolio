import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta} from "../../components/project"
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"
const Work = () => {
    return(
        <Layout title="Curex">
            <Container>

                <Title>
                    Curex <Badge>2019</Badge>
                </Title>
            <P>
            A simple application that allows a user to compare the current exchange rates of various currencies, and view a historical graph of the fluxuations of two currencies
            </P>
            <List ml={4} my={4}>
                
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>NodeJS, React, Express, TailwindCSS</span>
                </ListItem>
                <ListItem>
                    <Meta>Github</Meta>
                    <Link href="https://github.com/JustinReidy/vschool-assignments/tree/master/projects/curex">
                        Repo
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Note</Meta>
                    <span>This site is not currently active. I am in the process of getting it running again</span>
                </ListItem>
            </List>

            <WorkImage src="/images/Curex_Screengrab1.png" alt="Main Interface of Curex"/>
            </Container>
        </Layout>
    )
}
export default Work