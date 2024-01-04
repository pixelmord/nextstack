/* eslint-disable */
import type { Component } from 'solid-js'
import type { HstackProperties } from '../patterns/hstack';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export type HstackProps = HstackProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof HstackProperties >


export declare const HStack: Component<HstackProps>