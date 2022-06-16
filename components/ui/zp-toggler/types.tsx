import { LidoComponentProps } from '@lidofinance/utils';

export enum TogglerSize {
  xxs,
  xs,
  sm,
  md,
  lg,
}
export type TogglerSizes = keyof typeof TogglerSize;

export enum TogglerVariant {
  filled,
  outlined,
  text,
  ghost,
  translucent,
}
export type TogglerVariants = keyof typeof TogglerVariant;

export enum TogglerColor {
  primary,
  secondary,
  warning,
  error,
  success,
}
export type TogglerColors = keyof typeof TogglerColor;

export type TogglerProps = LidoComponentProps<
  'button',
  {
    size?: TogglerSizes;
    variant?: TogglerVariants;
    color?: TogglerColors;
    fullwidth?: boolean;
    square?: boolean;
    loading?: boolean;
    active?: boolean;
    as?: never;
  }
>;

export type TogglerIconProps = {
  icon: React.ReactNode;
} & TogglerProps;
