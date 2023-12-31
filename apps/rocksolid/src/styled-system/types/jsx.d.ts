/* eslint-disable */
import type { ComponentProps, Component, JSX } from 'solid-js'
import type { Assign, JsxStyleProps, JsxHTMLProps } from './system-types'
import type { RecipeDefinition, RecipeSelection, RecipeVariantRecord } from './recipe'

type Dict = Record<string, unknown>

type ElementType<P = any> = keyof JSX.IntrinsicElements | Component<P>

export type StyledComponent<T extends ElementType, P extends Dict = {}> = {
  (props: JsxHTMLProps<ComponentProps<T>, Assign<JsxStyleProps, P>>): JSX.Element
  displayName?: string
}

type RecipeFn = { __type: any }

interface JsxFactory {
  <T extends ElementType>(component: T): StyledComponent<T, {}>
  <T extends ElementType, P extends RecipeVariantRecord>(component: T, recipe: RecipeDefinition<P>): StyledComponent<
    T,
    RecipeSelection<P>
  >
  <T extends ElementType, P extends RecipeFn>(component: T, recipeFn: P): StyledComponent<T, P['__type']>
}

type JsxElements = { [K in keyof JSX.IntrinsicElements]: StyledComponent<K, {}> }

export type Styled = JsxFactory & JsxElements

export type HTMLStyledProps<T extends ElementType> = JsxHTMLProps<ComponentProps<T>, JsxStyleProps>