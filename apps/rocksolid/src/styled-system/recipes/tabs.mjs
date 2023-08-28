import { splitProps, getSlotCompoundVariant } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const tabsDefaultVariants = {
  "size": "md"
}
const tabsCompoundVariants = []

const tabsSlotNames = [
  [
    "root",
    "tabs__root"
  ],
  [
    "list",
    "tabs__list"
  ],
  [
    "trigger",
    "tabs__trigger"
  ],
  [
    "content",
    "tabs__content"
  ],
  [
    "indicator",
    "tabs__indicator"
  ]
]
const tabsSlotFns = tabsSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, tabsDefaultVariants, getSlotCompoundVariant(tabsCompoundVariants, slotName))])

const tabsFn = (props = {}) => {
  return Object.fromEntries(tabsSlotFns.map(([slotName, slotFn]) => [slotName, slotFn(props)]))
}

const tabsVariantKeys = [
  "size"
]

export const tabs = Object.assign(tabsFn, {
  __recipe__: false,
  raw: (props) => props,
  variantKeys: tabsVariantKeys,
  variantMap: {
  "size": [
    "sm",
    "md"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, tabsVariantKeys)
  },
})