import { ForwardedRef, forwardRef } from 'react';
import { TogglerStyle, TogglerContentStyle } from './ToggleStyles';
import { TogglerProps } from './types';

const loaderSizes = {
  xxs: 'small',
  xs: 'small',
  sm: 'small',
  md: 'medium',
  lg: 'medium',
} as const;

function Toggler(props: TogglerProps, ref?: ForwardedRef<HTMLButtonElement>) {
  const {
    size = 'md',
    variant = 'filled',
    color = 'primary',
    square = false,
    fullwidth = false,
    loading = false,
    active = false,
    onClick,
    disabled,
    children,
    ...rest
  } = props;

  return (
    <TogglerStyle
      $size={size}
      $variant={variant}
      $fullwidth={fullwidth}
      $color={color}
      $square={square}
      $loading={loading}
      $active={active}
      disabled={disabled || loading}
      type="button"
      ref={ref}
      {...rest}
    >
      <TogglerContentStyle $hidden={loading}>{children}</TogglerContentStyle>
    </TogglerStyle>
  );
}

export default forwardRef(Toggler);
