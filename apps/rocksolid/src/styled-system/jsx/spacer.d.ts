/* eslint-disable */
import { Component } from 'solid-js'
import { SpacerProperties } from '../patterns/spacer'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type SpacerProps = SpacerProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof SpacerProperties >


export declare const Spacer: Component<SpacerProps>