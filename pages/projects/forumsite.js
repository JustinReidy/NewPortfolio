import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Title, WorkImage, Meta} from "../../components/project"
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article"
const Work = () => {
    return(
        <Layout title="ForumSite">
            <Container>

                <Title>
                    Forum Site <Badge>2019</Badge>
                </Title>
            <P>
            A Reddit "clone" that was built by myself and 3 others over a week as our capstone at VSchool.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://robforum.herokuapp.com/">https://robforum.herokuapp.com/ <ExternalLinkIcon mx="2px" /></Link>
                </ListItem>
                
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>NodeJS, React, Express, MongoDB</span>
                </ListItem>
                <ListItem>
                    <Meta>Github</Meta>
                    <Link href="https://github.com/JustinReidy/forum_site">
                        Repo
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Note</Meta>
                    <span>For some reason the comment addition no longer seems to be working, I am working on getting this fixed</span>
                </ListItem>
            </List>

            <WorkImage src="/images/ForumSite_Screengrab1.png" alt="Main Interface of Forum Site"/>
            <WorkImage src="/images/ForumSite_Screengrab2.png" alt="Search and Comment interface"/>
            </Container>
        </Layout>
    )
}
export default Work