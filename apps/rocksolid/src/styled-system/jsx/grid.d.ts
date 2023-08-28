/* eslint-disable */
import { Component } from 'solid-js'
import { GridProperties } from '../patterns/grid'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type GridProps = GridProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof GridProperties >


export declare const Grid: Component<GridProps>