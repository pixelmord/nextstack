import * as Ark from '@ark-ui/solid/radio-group'
import { styled } from '@/styled-system/jsx'
import { radioButtonGroup, type RadioButtonGroupVariantProps } from '@/styled-system/recipes'

import { createStyleContext } from '@/lib/create-style-context'

export * from '@ark-ui/solid/radio-group'

const { withProvider, withContext } = createStyleContext(radioButtonGroup)

export type RadioGroupProps = Ark.RadioGroupProps & RadioButtonGroupVariantProps

const RadioGroupRoot = withProvider(styled(Ark.RadioGroup), 'root')
const RadioGroupLabel = withContext(styled(Ark.RadioGroupLabel), 'label')
const Radio = withContext(styled(Ark.Radio), 'radio')
const RadioLabel = withContext(styled(Ark.RadioLabel), 'radioLabel')
const RadioControl = withContext(styled(Ark.RadioControl), 'radioControl')

const RadioButtonGroup = Object.assign(RadioGroupRoot, {
  Root: RadioGroupRoot,
  Label: RadioGroupLabel,
  Radio: Radio,
  RadioLabel: RadioLabel,
  RadioControl: RadioControl,
})

export { Radio, RadioButtonGroup, RadioControl, RadioGroupLabel, RadioLabel }
