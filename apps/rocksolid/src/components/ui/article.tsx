import type { ComponentProps } from 'solid-js';

import { styled } from '@/styled-system/jsx';
import type { ArticleVariantProps } from '@/styled-system/recipes';
import { article } from '@/styled-system/recipes';

export type ArticleProps = ArticleVariantProps & ComponentProps<'article'>;
export const Article = styled('article', article);
