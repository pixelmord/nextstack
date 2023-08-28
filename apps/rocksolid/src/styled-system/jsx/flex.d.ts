/* eslint-disable */
import { Component } from 'solid-js'
import { FlexProperties } from '../patterns/flex'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type FlexProps = FlexProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof FlexProperties >


export declare const Flex: Component<FlexProps>