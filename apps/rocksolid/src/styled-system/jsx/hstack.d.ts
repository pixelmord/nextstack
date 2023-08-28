/* eslint-disable */
import { Component } from 'solid-js'
import { HstackProperties } from '../patterns/hstack'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type HstackProps = HstackProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof HstackProperties >


export declare const HStack: Component<HstackProps>