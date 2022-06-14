import styled, { css } from 'styled-components'
import { Theme } from '@lidofinance/theme'
import { TogglerVariants, TogglerColors } from './types'

type InjectedProps = {
  $variant: TogglerVariants
  $color: TogglerColors
  $paddingLess: boolean
  theme: Theme
}

export const TogglerStyle = styled.div<InjectedProps>`
  margin: 0px auto 24px;
  border-radius: 24px;
  width: 268px;
  height: 44px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundDarken};
`

export const TogglerContentStyle = styled.div<InjectedProps>`
  display: flex;
  text-align: center;
  justify-content: space-between;

  .toggler-btn {
    width: 132px;
    height: 40px;
    justify-content: center;

    button {
      transition: background-color 0.3s ease 0s;
      border-radius: 20px;
      width: 150%;height: 110%;
      border-style: none;
      font-size: 18px;
      background-color:  ${({ theme }) => theme.colors.background};
      color: ${( { theme }) => theme.colors.primaryContrast};

      :focus {
        background-color: rgb(52,52,61);
      }
      
    }
  }
`