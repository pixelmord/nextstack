/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'
import type { DistributiveOmit } from '../types/system-types'

type NumberInputVariant = {
  size: "md" | "lg" | "xl"
}

type NumberInputVariantMap = {
  [key in keyof NumberInputVariant]: Array<NumberInputVariant[key]>
}

export type NumberInputVariantProps = {
  [key in keyof NumberInputVariant]?: ConditionalValue<NumberInputVariant[key]>
}

interface NumberInputRecipe {
  __type: NumberInputVariantProps
  (props?: NumberInputVariantProps): Pretty<Record<"root" | "label" | "input" | "control" | "incrementTrigger" | "decrementTrigger" | "scrubber", string>>
  raw: (props?: NumberInputVariantProps) => NumberInputVariantProps
  variantMap: NumberInputVariantMap
  variantKeys: Array<keyof NumberInputVariant>
  splitVariantProps<Props extends NumberInputVariantProps>(props: Props): [NumberInputVariantProps, Pretty<DistributiveOmit<Props, keyof NumberInputVariantProps>>]
}

/** A number input style */
export declare const numberInput: NumberInputRecipe