import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Wave Portal">
    <Container>
      <Title>
        Wave Portal <Badge>2021-</Badge>
      </Title>
      <P>
        Built a Web3 App with Solidity + Ethereum Smart Contracts as part of the{' '}
        <strong>Intro to Web3</strong> project! from buildspace. Wrote and
        deployed the smart contract and built the website that let people
        connect their wallets and interact with the smart contract.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://wave-portal-ochre.vercel.app/">
            https://wave-portal-ochre.vercel.app// <ExternalLinkIcon mx="2px" />
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
        src="/images/works/wavePortal_eyecatch.png"
        alt="Wave Portal"
      />
      <WorkImage src="/images/works/wavePortal_01.png" alt="Wave Portal" />
    </Container>
  </Layout>
)

export default Work
