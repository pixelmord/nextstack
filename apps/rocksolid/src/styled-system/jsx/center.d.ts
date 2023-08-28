/* eslint-disable */
import { Component } from 'solid-js'
import { CenterProperties } from '../patterns/center'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type CenterProps = CenterProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof CenterProperties >


export declare const Center: Component<CenterProps>