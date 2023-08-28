/* eslint-disable */
import { Component } from 'solid-js'
import { CircleProperties } from '../patterns/circle'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type CircleProps = CircleProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof CircleProperties >


export declare const Circle: Component<CircleProps>