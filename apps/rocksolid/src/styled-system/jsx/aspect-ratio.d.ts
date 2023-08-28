/* eslint-disable */
import { Component } from 'solid-js'
import { AspectRatioProperties } from '../patterns/aspect-ratio'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type AspectRatioProps = AspectRatioProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof AspectRatioProperties | 'aspectRatio'>


export declare const AspectRatio: Component<AspectRatioProps>