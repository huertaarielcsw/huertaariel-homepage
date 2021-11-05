import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="My NFT Collection">
    <Container>
      <Title>
        My NFT Collection <Badge>2021-</Badge>
      </Title>
      <P>
        Programmatically generate a NFT collection, wrote + deployed a smart
        contract in Solidity, and built a React dApp to let users connect their
        wallets and interact with NFTs as part of the{' '}
        <strong> Build a Web3 App: Mint Your Own NFT collection</strong>{' '}
        project! from buildspace.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://square-nft-collection.vercel.app/">
            https://square-nft-collection.vercel.app/{' '}
            <ExternalLinkIcon mx="2px" />
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
        src="/images/works/funnyNftSquare_eyecatch.png"
        alt="My NFT Collection"
      />
      <WorkImage
        src="/images/works/funnyNftSquare_01.png"
        alt="My NFT Collection"
      />
    </Container>
  </Layout>
)

export default Work
