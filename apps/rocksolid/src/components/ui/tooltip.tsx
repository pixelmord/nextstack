import * as Ark from '@ark-ui/solid/tooltip'

import { createStyleContext } from '@/lib/create-style-context'
import { styled } from '@/styled-system/jsx'
import type {TooltipVariantProps} from '@/styled-system/recipes';
import { tooltip  } from '@/styled-system/recipes'

const { withProvider, withContext } = createStyleContext(tooltip)

export * from '@ark-ui/solid/tooltip'
export type TooltipProps = Ark.TooltipProps & TooltipVariantProps

const TooltipRoot = withProvider(styled(Ark.Tooltip), 'root')
export const TooltipArrow = withContext(styled(Ark.TooltipArrow), 'arrow')
export const TooltipArrowTip = withContext(styled(Ark.TooltipArrowTip), 'arrowTip')
export const TooltipContent = withContext(styled(Ark.TooltipContent), 'content')
export const TooltipPositioner = withContext(styled(Ark.TooltipPositioner), 'positioner')
export const TooltipTrigger = withContext(styled(Ark.TooltipTrigger), 'trigger')

export const Tooltip = Object.assign(TooltipRoot, {
  Root: TooltipRoot,
  Arrow: TooltipArrow,
  ArrowTip: TooltipArrowTip,
  Content: TooltipContent,
  Positioner: TooltipPositioner,
  Trigger: TooltipTrigger,
})
