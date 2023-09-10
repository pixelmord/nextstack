import * as Ark from '@ark-ui/solid/pin-input';

import { createStyleContext } from '@/lib/create-style-context';
import { styled } from '@/styled-system/jsx';
import type { PinInputVariantProps } from '@/styled-system/recipes';
import { pinInput } from '@/styled-system/recipes';

const { withProvider, withContext } = createStyleContext(pinInput);

export * from '@ark-ui/solid/pin-input';
export type PinInputProps = Ark.PinInputProps & PinInputVariantProps;

const PinInputRoot = withProvider(styled(Ark.PinInput), 'root');
export const PinInputControl = withContext(styled(Ark.PinInputControl), 'control');
export const PinInputInput = withContext(styled(Ark.PinInputField), 'input');
export const PinInputLabel = withContext(styled(Ark.PinInputLabel), 'label');

export const PinInput = Object.assign(PinInputRoot, {
  Root: PinInputRoot,
  Control: PinInputControl,
  Input: PinInputInput,
  Label: PinInputLabel,
});