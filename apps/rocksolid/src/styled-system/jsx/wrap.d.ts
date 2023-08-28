/* eslint-disable */
import { Component } from 'solid-js'
import { WrapProperties } from '../patterns/wrap'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type WrapProps = WrapProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof WrapProperties >


export declare const Wrap: Component<WrapProps>