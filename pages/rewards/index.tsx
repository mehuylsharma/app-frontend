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
  display: flex;

  button {
    flex-grow: 2;
  }
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
      title="Reward History"
      subtitle="Track your Aptos staking rewards with Zaptos."
    >
      <Head>
        <title>Zaptos | Liquidity Staking</title>
      </Head>
      <Wallet />
      <Section>
        <div className="stake-pane">
          <Block>
            <form className="horizontal-search" action="" method="post" onSubmit={handleSubmit}>
              <InputWrapper>
                <Input
                  fullwidth
                  placeholder="0x"
                  label="Aptos Address"
                />
                <Button type="submit">
                  Calculate
                </Button>
              </InputWrapper>
              
            </form>
            <div className="info-block">

            </div>
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
        </div>
        {/* <div className="faq-pane">
          <Faq faqList={faqList} />
        </div> */}
      </Section>
      
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
