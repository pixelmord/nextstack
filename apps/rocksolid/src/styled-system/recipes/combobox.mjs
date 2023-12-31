import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const comboboxDefaultVariants = {
  "size": "md"
}
const comboboxCompoundVariants = []

const comboboxSlotNames = [
  [
    "root",
    "combobox__root"
  ],
  [
    "label",
    "combobox__label"
  ],
  [
    "input",
    "combobox__input"
  ],
  [
    "positioner",
    "combobox__positioner"
  ],
  [
    "control",
    "combobox__control"
  ],
  [
    "trigger",
    "combobox__trigger"
  ],
  [
    "content",
    "combobox__content"
  ],
  [
    "clearTrigger",
    "combobox__clearTrigger"
  ],
  [
    "option",
    "combobox__option"
  ],
  [
    "optionGroup",
    "combobox__optionGroup"
  ],
  [
    "optionGroupLabel",
    "combobox__optionGroupLabel"
  ]
]
const comboboxSlotFns = comboboxSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, comboboxDefaultVariants, getSlotCompoundVariant(comboboxCompoundVariants, slotName))])

const comboboxFn = (props = {}) => {
  return Object.fromEntries(comboboxSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const comboboxVariantKeys = [
  "size"
]

export const combobox = Object.assign(comboboxFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: comboboxVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, comboboxVariantKeys)
  },
})