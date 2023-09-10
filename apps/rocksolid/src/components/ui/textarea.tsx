import { styled } from '@/styled-system/jsx';
import type { TextareaVariantProps } from '@/styled-system/recipes';
import { textarea } from '@/styled-system/recipes';

export type TextareaProps = TextareaVariantProps;
export const Textarea = styled('textarea', textarea);
