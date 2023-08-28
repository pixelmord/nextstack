/* eslint-disable */
import { Component } from 'solid-js'
import { FloatProperties } from '../patterns/float'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type FloatProps = FloatProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof FloatProperties >


export declare const Float: Component<FloatProps>