/* eslint-disable */
import { Component } from 'solid-js'
import { StackProperties } from '../patterns/stack'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type StackProps = StackProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof StackProperties >


export declare const Stack: Component<StackProps>