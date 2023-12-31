/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'
import type { DistributiveOmit } from '../types/system-types'

type SelectVariant = {
  size: "sm" | "md" | "lg"
}

type SelectVariantMap = {
  [key in keyof SelectVariant]: Array<SelectVariant[key]>
}

export type SelectVariantProps = {
  [key in keyof SelectVariant]?: ConditionalValue<SelectVariant[key]>
}

interface SelectRecipe {
  __type: SelectVariantProps
  (props?: SelectVariantProps): Pretty<Record<"label" | "positioner" | "trigger" | "option" | "optionGroup" | "optionGroupLabel" | "content", string>>
  raw: (props?: SelectVariantProps) => SelectVariantProps
  variantMap: SelectVariantMap
  variantKeys: Array<keyof SelectVariant>
  splitVariantProps<Props extends SelectVariantProps>(props: Props): [SelectVariantProps, Pretty<DistributiveOmit<Props, keyof SelectVariantProps>>]
}

/** A select style */
export declare const select: SelectRecipe