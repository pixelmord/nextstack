import type { Component } from 'solid-js'

import { css, cx } from '@/styled-system/css'

import type {ButtonProps} from './button';
import { Button  } from './button'

export type IconButtonProps = ButtonProps & { icon?: Component; 'aria-label': string }

export const IconButton = (props: IconButtonProps) => {
  if (props.icon) {
    const Icon = props.icon
    return (
      <Button {...props} class={cx(css({ px: '0' }), props.class)}>
        <Icon aria-hidden />
      </Button>
    )
  }
  return <Button {...props} class={cx(css({ px: '0' }), props.class)} />
}
