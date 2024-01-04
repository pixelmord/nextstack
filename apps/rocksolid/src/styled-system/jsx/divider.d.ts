/* eslint-disable */
import type { Component } from 'solid-js'
import type { DividerProperties } from '../patterns/divider';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export type DividerProps = DividerProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof DividerProperties >


export declare const Divider: Component<DividerProps>