import { FC } from 'react';
import { MainStyle } from './mainStyles';

const Main: FC = (props) => {
  return <MainStyle size="full" forwardedAs="main" {...props} />;
};

export default Main;
