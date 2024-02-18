<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<NavItem[]>('navigation', [])
const { metaSymbol } = useShortcuts()
const stats = useStats()

const { header } = useAppConfig()
</script>

<template>
  <UHeader :links="header.links">
    <template #logo>
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <UColorModeImage v-bind="{ class: 'h-6 w-auto', ...header?.logo }" />
      </template>
      <template v-else>
        <Logo class="w-6" />
        <span>
          <span class="sm:text-primary-500 dark:sm:text-primary-400">Vue</span>Email
        </span>
        <UBadge label="Docs" variant="subtle" class="mb-0.5" />
      </template>
    </template>

    <template #right>
      <UTooltip text="Search" :shortcuts="[metaSymbol, 'K']">
        <UDocsSearchButton v-if="header?.search" :label="null" />
      </UTooltip>
      <UTooltip :text="$colorMode.preference === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'">
        <UColorModeButton v-if="header?.colorMode" />
      </UTooltip>
      <UTooltip text="GitHub Stars">
        <UButton
          icon="i-simple-icons-github"
          to="https://github.com/vue-email/vue-email"
          target="_blank"
          :label="stats && stats.stats && stats.stats.stars ? formatNumber(stats.stats.stars) : '...'"
          class="hidden md:block"
          v-bind="$ui.button.secondary as any"
        />
      </UTooltip>
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
