import type { ComponentProps } from 'solid-js';

import { styled } from '@/styled-system/jsx';
import type {InputVariantProps} from '@/styled-system/recipes';
import { input  } from '@/styled-system/recipes';

export type InputProps = InputVariantProps & ComponentProps<'input'>;
export const Input = styled('input', input);
