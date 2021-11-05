import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbBricoTech from '../public/images/works/bricotech_eyecatch.png'
import thumbWavePortal from '../public/images/works/wavePortal_eyecatch.png'
import thumbFunnyNftSquare from '../public/images/works/funnyNftSquare_eyecatch.png'
import thumbGodMission from '../public/images/works/godMission_eyecatch.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="bricotech"
              title="Bricotech"
              thumbnail={thumbBricoTech}
            >
              An ad platform with React and MongoDB. The web app helps users
              when buying DIY tools by providing information on the 5
              best-selling products on Amazon Spain in each category and
              provides an affiliate link to go to the purchase page.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.1}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.2}>
            <WorkGridItem
              id="wavePortal"
              thumbnail={thumbWavePortal}
              title="Wave Portal"
            >
              Built a Web3 App with Solidity + Ethereum Smart Contracts as part
              of the <strong>Intro to Web3</strong> project! from buildspace .
              Wrote and deployed the smart contract and built the website that
              let people connect their wallets and interact with the smart
              contract.
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="funnyNftSquare"
              thumbnail={thumbFunnyNftSquare}
              title="My NFT Collection"
            >
              Programmatically generate a NFT collection, wrote + deployed a
              smart contract in Solidity, and built a React dApp to let users
              connect their wallets and interact with NFTs as part of the{' '}
              <strong> Build a Web3 App: Mint Your Own NFT collection</strong>{' '}
              project! from buildspace.
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="godMission"
              thumbnail={thumbGodMission}
              title="God's Mission"
            >
              Created a mini turn-based NFT Game with Solidity and React as part
              of the <strong> Create a NFT Game </strong> project from
              buildspace. The game allows people mint their own NFTs and make
              them playable characters that join others to defeat the big boss.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
