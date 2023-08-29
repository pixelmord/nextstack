import type { AvatarProps as ArkAvatarProps } from '@ark-ui/solid/avatar';
import {
  Avatar as ArkAvatarRoot,
  AvatarFallback as ArkAvatarFallback,
  AvatarImage as ArkAvatarImage,
} from '@ark-ui/solid/avatar';

import { createStyleContext } from '@/lib/create-style-context';
import { styled } from '@/styled-system/jsx';
import type { AvatarVariantProps } from '@/styled-system/recipes';
import { avatar } from '@/styled-system/recipes';

const { withProvider, withContext } = createStyleContext(avatar);

export * from '@ark-ui/solid/avatar';
export type AvatarProps = ArkAvatarProps & AvatarVariantProps;

const AvatarRoot = withProvider(styled(ArkAvatarRoot), 'root');
export const AvatarFallback = withContext(styled(ArkAvatarFallback), 'fallback');
export const AvatarImage = withContext(styled(ArkAvatarImage), 'image');

export const Avatar = Object.assign(AvatarRoot, {
  Root: AvatarRoot,
  Fallback: AvatarFallback,
  Image: AvatarImage,
});
