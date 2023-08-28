/* eslint-disable */
import { Component } from 'solid-js'
import { LinkOverlayProperties } from '../patterns/link-overlay'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type LinkOverlayProps = LinkOverlayProperties & DistributiveOmit<HTMLStyledProps<'a'>, keyof LinkOverlayProperties >


export declare const LinkOverlay: Component<LinkOverlayProps>