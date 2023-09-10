import type { ComponentProps } from 'solid-js';

import { styled } from '@/styled-system/jsx';
import type { LabelVariantProps } from '@/styled-system/recipes';
import { label } from '@/styled-system/recipes';

export type LabelProps = LabelVariantProps & ComponentProps<'label'>;
export const Label = styled('label', label);
