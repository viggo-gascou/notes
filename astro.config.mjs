import { defineConfig, sharpImageService } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';

import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';


// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [sitemap(), tailwind(), react(), mdx()],
    markdown: {
        remarkPlugins: [
            remarkMath,
            remarkReadingTime,
        ],
        rehypePlugins: [
            [rehypeKatex, { 
                macros: {

                },
            }]
    ],
    },
    experimental: {
        assets: true,
      },
      image: {
        service: sharpImageService(),
      },
});
