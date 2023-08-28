/* eslint-disable */
import { Component } from 'solid-js'
import { LinkBoxProperties } from '../patterns/link-box'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type LinkBoxProps = LinkBoxProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof LinkBoxProperties >


export declare const LinkBox: Component<LinkBoxProps>