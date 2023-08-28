/* eslint-disable */
import { Component } from 'solid-js'
import { SquareProperties } from '../patterns/square'
import { HTMLStyledProps } from '../types/jsx'
import { DistributiveOmit } from '../types/system-types'

export type SquareProps = SquareProperties & DistributiveOmit<HTMLStyledProps<'div'>, keyof SquareProperties >


export declare const Square: Component<SquareProps>