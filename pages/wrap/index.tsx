import { FC, FormEventHandler } from 'react';
import { GetServerSideProps } from 'next';
import {
  Link,
  DataTable,
  DataTableRow,
  Input,
  Steth,
} from '@lidofinance/lido-ui';
import Block from '../../components/ui/zp-block/Block'
import Button from '../../components/ui/zp-button/button';
import Toggler from '../../components/ui/zp-toggler/toggler';
import Head from 'next/head';
import Wallet from 'components/wallet';
import Section from 'components/section';
import ColumnSection from 'components/colsection';
import Layout from 'components/layout';
import Main from 'components/main';
import Faq from 'components/faq';
import { FAQItem, getFaqList } from 'lib/faqList';
import styled from 'styled-components';
import { useContractSWR, useSTETHContractRPC } from '@lido-sdk/react';

interface HomeProps {
  faqList: FAQItem[];
}

const InputWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spaceMap.md}px;
`;

const Home: FC<HomeProps> = ({ faqList }) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = (e) => {
    e.preventDefault();
    alert('Submitted');
  };

  const contractRpc = useSTETHContractRPC();
  const tokenName = useContractSWR({
    contract: contractRpc,
    method: 'name',
  });

  return (
    <Layout
      title="Wrap & Unwrap"
      subtitle="Stable-balance $ZAP wrapper for DeFi"
    >
      <Head>
        <title>Zaptos | Liquidity Staking</title>
      </Head>
      <Wallet />
      <ColumnSection>
        <div className="stake-pane">
          <Toggler>
            <div className="toggler-btn"><button>Wrap</button></div>
            <div className="toggler-btn"><button>Unwrap</button></div>
          </Toggler>
          <Block>
            <form action="" method="post" onSubmit={handleSubmit}>
              <InputWrapper>
                <Input
                  fullwidth
                  placeholder="0"
                  leftDecorator={<Steth />}
                  label="Token amount"
                />
              </InputWrapper>
              <Button fullwidth type="submit">
                Submit
              </Button>
            </form>
            <div className="info-text">
              You will receive: <span className="info-value">$ZAP</span>
            </div>
            <div className="info-text">
              Exchange Rate: <span className="info-value">$ZAP</span>
            </div>
            <div className="info-text">
              Transaction Cost: <span className="info-value">$ZAP</span>
            </div>
            <div className="info-text">
              Reward fee: <span className="info-value">$ZAP</span>
            </div>
          </Block>
        </div>
        <div className="faq-pane">
        <Section title="Statistics">
          <Block>
            <div className="info-text">
              Statistic 1: <span className="info-value">$ZAP</span>
            </div>
            <div className="info-text">
              Statistic 2: <span className="info-value">$ZAP</span>
            </div>
            <div className="info-text">
              Statistic 3: <span className="info-value">$ZAP</span>
            </div>
            <div className="info-text">
              Statistic 4:<span className="info-value">$ZAP</span>
            </div>
          </Block>
        </Section>
        </div>
        {/* <div className="faq-pane">
          <Faq faqList={faqList} />
        </div> */}
      </ColumnSection>
      
      {/* <Section title="Data table" headerDecorator={<Link href="#">Link</Link>}>
        <Block>
          <DataTable>
            <DataTableRow title="Token name" loading={tokenName.initialLoading}>
              {tokenName.data}
            </DataTableRow>
          </DataTable>
        </Block>
      </Section> */}
    </Layout>
    
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // list of .md files from /faq/
  const fileList = ['lido-frontend-template'];
  const faqList = await getFaqList(fileList);

  return { props: { faqList } };
};
