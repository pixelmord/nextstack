/* eslint-disable */
import type { Component } from 'solid-js'
import type { WrapProperties } from '../patterns/wrap';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export type WrapProps = WrapProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof WrapProperties >


export declare const Wrap: Component<WrapProps>