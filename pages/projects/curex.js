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
                    <Meta>Website</Meta>
                        <Link href="https://www.inkdrop.app/">
                            https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/iOS/Andriod</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>NodeJS, Electron, React Native</span>
                </ListItem>
            </List>

            <WorkImage src="/images/placeholder_cat.jpg" alt="Placeholder Cat"/>
            </Container>
        </Layout>
    )
}
export default Work