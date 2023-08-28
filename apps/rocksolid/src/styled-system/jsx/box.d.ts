/* eslint-disable */
import { Component } from 'solid-js'
import { BoxProperties } from '../patterns/box'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type BoxProps = BoxProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof BoxProperties >


export declare const Box: Component<BoxProps>