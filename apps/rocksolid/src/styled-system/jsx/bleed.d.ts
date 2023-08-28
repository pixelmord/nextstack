/* eslint-disable */
import { Component } from 'solid-js'
import { BleedProperties } from '../patterns/bleed'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type BleedProps = BleedProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof BleedProperties >


export declare const Bleed: Component<BleedProps>