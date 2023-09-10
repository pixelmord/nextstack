import type { ComponentProps } from 'solid-js';

import { styled } from '@/styled-system/jsx';
import type { ButtonVariantProps } from '@/styled-system/recipes';
import { button } from '@/styled-system/recipes';

export type ButtonProps = ButtonVariantProps & ComponentProps<'button'>;
export const Button = styled('button', button);
