/* eslint-disable */
import { Component } from 'solid-js'
import { GridItemProperties } from '../patterns/grid-item'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type GridItemProps = GridItemProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof GridItemProperties >


export declare const GridItem: Component<GridItemProps>