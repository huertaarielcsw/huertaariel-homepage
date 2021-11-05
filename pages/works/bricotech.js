import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Bricotech">
    <Container>
      <Title>
        Bricotech <Badge>2021-</Badge>
      </Title>
      <P>
        The web app helps users when buying DIY tools by providing information
        on the 5 best-selling products on Amazon Spain in each category and
        provides an affiliate link to go to the purchase page.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://bricotechs.com/">
            https://bricotechs.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, NextJS, MongoDB, React</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/bricotech_01.png" alt="Bricotech" />
      <WorkImage src="/images/works/bricotech_02.png" alt="Bricotech" />
    </Container>
  </Layout>
)

export default Work
