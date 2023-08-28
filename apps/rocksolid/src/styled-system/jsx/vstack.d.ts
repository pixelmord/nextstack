/* eslint-disable */
import { Component } from 'solid-js'
import { VstackProperties } from '../patterns/vstack'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type VstackProps = VstackProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof VstackProperties >


export declare const VStack: Component<VstackProps>