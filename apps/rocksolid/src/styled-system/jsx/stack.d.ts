/* eslint-disable */
import type { Component } from 'solid-js'
import type { StackProperties } from '../patterns/stack';
import type { HTMLStyledProps } from '../types/jsx';
import type { DistributiveOmit } from '../types/system-types';

export type StackProps = StackProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof StackProperties >


export declare const Stack: Component<StackProps>