/* eslint-disable */
import type { Component } from 'solid-js'
import type { BleedProperties } from '../patterns/bleed';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export type BleedProps = BleedProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof BleedProperties >


export declare const Bleed: Component<BleedProps>