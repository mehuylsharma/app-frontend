import { FC } from 'react';
import { Link } from '@lidofinance/lido-ui';
import { LidoLogo } from '@lidofinance/lido-logo';
import {
  HeaderStyle,
  HeaderLogoStyle,
  HeaderActionsStyle,
} from './headerStyles';
import HeaderWallet from './headerWallet';

const Header: FC = () => (
  <HeaderStyle size="full" forwardedAs="header">
    <HeaderLogoStyle>
      <div className="header-logo"><Link href="/">
              <LidoLogo />
            </Link>
      </div>
      <div className="header-link"><Link href="/">Stake</Link></div>
      <div className="header-link"><Link href="/wrap">Wrap</Link></div>
      <div className="header-link"><Link href="/rewards">Rewards</Link></div>
    </HeaderLogoStyle>
    <HeaderActionsStyle>
      <Link href="/">
        FAQ
      </Link>
      <HeaderWallet />
    </HeaderActionsStyle>
  </HeaderStyle>
);

export default Header;
