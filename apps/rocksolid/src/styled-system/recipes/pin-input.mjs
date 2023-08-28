import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const pinInputDefaultVariants = {}
const pinInputCompoundVariants = []

const pinInputSlotNames = [
  [
    "root",
    "pinInput__root"
  ],
  [
    "label",
    "pinInput__label"
  ],
  [
    "input",
    "pinInput__input"
  ],
  [
    "control",
    "pinInput__control"
  ]
]
const pinInputSlotFns = pinInputSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, pinInputDefaultVariants, getSlotCompoundVariant(pinInputCompoundVariants, slotName))])

const pinInputFn = (props = {}) => {
  return Object.fromEntries(pinInputSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const pinInputVariantKeys = []

export const pinInput = Object.assign(pinInputFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: pinInputVariantKeys,
  variantMap: {},
  splitVariantProps(props) {
    return splitProps(props, pinInputVariantKeys)
  },
})