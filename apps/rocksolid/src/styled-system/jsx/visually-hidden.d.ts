/* eslint-disable */
import { Component } from 'solid-js'
import { VisuallyHiddenProperties } from '../patterns/visually-hidden'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type VisuallyHiddenProps = VisuallyHiddenProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof VisuallyHiddenProperties >


export declare const VisuallyHidden: Component<VisuallyHiddenProps>