import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const selectDefaultVariants = {
  "size": "md"
}
const selectCompoundVariants = []

const selectSlotNames = [
  [
    "label",
    "select__label"
  ],
  [
    "positioner",
    "select__positioner"
  ],
  [
    "trigger",
    "select__trigger"
  ],
  [
    "option",
    "select__option"
  ],
  [
    "optionGroup",
    "select__optionGroup"
  ],
  [
    "optionGroupLabel",
    "select__optionGroupLabel"
  ],
  [
    "content",
    "select__content"
  ]
]
const selectSlotFns = selectSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, selectDefaultVariants, getSlotCompoundVariant(selectCompoundVariants, slotName))])

const selectFn = (props = {}) => {
  return Object.fromEntries(selectSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const selectVariantKeys = [
  "size"
]

export const select = Object.assign(selectFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: selectVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, selectVariantKeys)
  },
})