import type { ComponentProps } from 'solid-js'

import { styled } from '@/styled-system/jsx'
import type {BadgeVariantProps} from '@/styled-system/recipes';
import { badge  } from '@/styled-system/recipes'

export type BadgeProps = BadgeVariantProps & ComponentProps<'div'>
export const Badge = styled('div', badge)
