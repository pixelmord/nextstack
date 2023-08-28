/* eslint-disable */
import { Component } from 'solid-js'
import { DividerProperties } from '../patterns/divider'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type DividerProps = DividerProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof DividerProperties >


export declare const Divider: Component<DividerProps>