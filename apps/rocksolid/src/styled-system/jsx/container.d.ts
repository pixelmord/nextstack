/* eslint-disable */
import { Component } from 'solid-js'
import { ContainerProperties } from '../patterns/container'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type ContainerProps = ContainerProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof ContainerProperties >


export declare const Container: Component<ContainerProps>