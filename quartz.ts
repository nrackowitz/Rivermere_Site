import { componentRegistry } from "./quartz/components/registry"
import type { SortFn } from "./quartz/components/PageList"
import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const sortByTitle: SortFn = (a, b) =>
  (a.frontmatter?.title ?? a.slug ?? "").localeCompare(
    b.frontmatter?.title ?? b.slug ?? "",
    undefined,
    { sensitivity: "base", numeric: true },
  )

componentRegistry.setOptionOverrides("folder-page", { sort: sortByTitle })

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()