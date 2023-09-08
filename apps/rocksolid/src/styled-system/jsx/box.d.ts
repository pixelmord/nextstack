/* eslint-disable */
import type { Component } from 'solid-js'
import type { BoxProperties } from '../patterns/box';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export type BoxProps = BoxProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof BoxProperties >


export declare const Box: Component<BoxProps>