import * as Ark from '@ark-ui/solid/splitter';

import { createStyleContext } from '@/lib/create-style-context';
import { styled } from '@/styled-system/jsx';
import type { SplitterVariantProps } from '@/styled-system/recipes';
import { splitter } from '@/styled-system/recipes';

const { withProvider, withContext } = createStyleContext(splitter);

export * from '@ark-ui/solid/splitter';
export type SplitterProps = Ark.SplitterProps & SplitterVariantProps;

const SplitterRoot = withProvider(styled(Ark.Splitter), 'root');
export const SplitterPanel = withContext(styled(Ark.SplitterPanel), 'panel');
export const SplitterResizeTrigger = withContext(styled(Ark.SplitterResizeTrigger), 'resizeTrigger');

export const Splitter = Object.assign(SplitterRoot, {
  Root: SplitterRoot,
  Panel: SplitterPanel,
  ResizeTrigger: SplitterResizeTrigger,
});
