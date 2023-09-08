'use client'
import * as Ark from '@ark-ui/solid/tabs'

import { createStyleContext } from '@/lib/create-style-context'
import { styled } from '@/styled-system/jsx'
import type {TabsVariantProps} from '@/styled-system/recipes';
import { tabs  } from '@/styled-system/recipes'

const { withProvider, withContext } = createStyleContext(tabs)

export * from '@ark-ui/solid/tabs'
export type TabsProps = Ark.TabsProps & TabsVariantProps

const TabsRoot = withProvider(styled(Ark.Tabs), 'root')
export const TabContent = withContext(styled(Ark.TabContent), 'content')
export const TabIndicator = withContext(styled(Ark.TabIndicator), 'indicator')
export const TabList = withContext(styled(Ark.TabList), 'list')
export const TabTrigger = withContext(styled(Ark.TabTrigger), 'trigger')

export const Tabs = Object.assign(TabsRoot, {
  Root: TabsRoot,
  Content: TabContent,
  Indicator: TabIndicator,
  List: TabList,
  Trigger: TabTrigger,
})
