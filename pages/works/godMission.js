import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="God's Mission">
    <Container>
      <Title>
        God&apos;s Mission <Badge>2021-</Badge>
      </Title>
      <P>
        Created a mini turn-based NFT Game with Solidity and React as part of
        the <strong> Create a NFT Game </strong> project from buildspace. The
        game allows people mint their own NFTs and make them playable characters
        that join others to defeat the big boss.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://god-s-mission.vercel.app/">
            https://god-s-mission.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Solidity, React</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/godMission_eyecatch.png"
        alt="God's Mission"
      />
      <WorkImage src="/images/works/godMission_01.png" alt="God's Mission" />
    </Container>
  </Layout>
)

export default Work
