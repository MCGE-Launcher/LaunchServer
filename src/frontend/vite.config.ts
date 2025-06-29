import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import VitePluginRestart from "vite-plugin-restart";
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  plugins: [
    VueRouter({
      extensions: ['.vue', '.md'],
      dts: 'src/typed-router.d.ts',
      routesFolder: 'src/pages',
    }),

    Layouts({
      layoutsDirs: 'src/layouts',
      pagesDir: 'src/pages',
      defaultLayout: 'default'
    }),

    AutoImport({
      include: [/\.[jt]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: [
        'vue',
        'vue-i18n',
        '@vueuse/core',
        VueRouterAutoImports,
        {
          'vue-router/auto': ['useLink'],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
      ],
      vueTemplate: true,
    }),

    Components({
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true,
      dts: 'src/components.d.ts',
    }),

    vue(),

    VitePluginRestart({
      reload: ['src/layouts/**/*'],
    }),

    UnoCSS(),
  ],
  server: {
    host: true,
    port: 5173
  }
});