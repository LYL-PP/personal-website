// 作品集数据（双语）。5 大板块 → 点击展开作品详情。
// 纯数据驱动：增删板块 / 作品只改本文件，Works.jsx 仅负责渲染。
//
// 板块字段：
//   id        唯一标识（用于 framer layoutId 共享元素动画）
//   no        编号 '01'…'05'
//   title     板块标题
//   tagline   索引行右侧一句话
//   items[]   扁平作品列表：{ name, meta?, tags?, link? }
//             点击 item 弹出全屏详情，可补充可选媒体/文案字段：
//             { image?, video?, year?, desc? }（缺省时媒体用占位、简介回退 meta/标签）
//   groups[]  分组作品（与 items 二选一）：{ heading, items: string[] }
//   awards[]  奖项 chip（可选）
//   footer    底部技术/备注一行（可选）

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailLabel: string
  demoLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  zh: {
    title: 'Works',
    closeLabel: '返回',
    openLabel: '展开作品',
    hint: '继续下滑',
    awardsLabel: '获奖',
    visitLabel: '访问作品',
    detailLabel: '查看详情',
    demoLabel: '体验链接',
    detailPlaceholder: '你的作品介绍',
    phImageLabel: '图片 / 视频',
    phButtonLabel: '跳转按钮',
    countLabel: (n) => `${n} 件作品`,
    sections: [
      {
        id: 'ai-demo',
        no: '01',
        title: 'AI 销售智能体产品 Demo',
        tagline: '可交互产品 Demo · 已部署上线',
        items: [
          {
            name: 'AI 销售增长智能体（Growth Agent）',
            meta: '2026.01 – 2026.05',
            tags: ['Next.js', 'TypeScript'],
            link: 'https://ai-sales-growth-agent.vercel.app/',
            slug: 'growth-agent',
          },
        ],
        footer: 'Prompt Engineering · 多 Agent 流程设计 · 知识库/RAG 应用',
      },
      {
        id: 'ai-collab',
        no: '02',
        title: 'AI 协作开发 3D 游戏',
        tagline: '人机协作工作流 · 从 0 到 1',
        items: [
          {
            name: '3D 叙事推理游戏《无人生还：士兵岛》',
            meta: '2026.06 – 2026.08',
            tags: ['Three.js', '数据驱动架构'],
            link: 'https://ai-game-liard.vercel.app/',
            slug: 'soldier-island',
          },
        ],
        footer: '里程碑拆解 · 提示词工程 · 长程任务上下文管理 · 自动化验收',
      },
      {
        id: 'ai-review',
        no: '03',
        title: 'AI 产品评测',
        tagline: '20W+ 粉丝科技公众号合作撰稿人',
        items: [
          {
            name: 'AI 产品评测内容创作',
            meta: '2026.06 – 至今',
            tags: ['累计阅读 10w+', '单篇最高 5w+'],
            link: 'https://mp.weixin.qq.com/s/oiN69Kk3XYASMYavwoXzyA',
            slug: 'ai-product-reviews',
          },
        ],
        footer: '真实场景极限实测 · 同题横向对比 · 选型建议',
      },
    ],
  },
  en: {
    title: 'Works',
    closeLabel: 'Back',
    openLabel: 'Explore',
    hint: 'Keep scrolling',
    awardsLabel: 'Awards',
    visitLabel: 'Visit site',
    detailLabel: 'Details',
    demoLabel: 'Live demo',
    detailPlaceholder: 'Your work description',
    phImageLabel: 'Image / Video',
    phButtonLabel: 'Link button',
    countLabel: (n) => `${n} works`,
    sections: [
      {
        id: 'ai-demo',
        no: '01',
        title: 'AI Sales Agent Product Demo',
        tagline: 'Interactive demo · Deployed live',
        items: [
          {
            name: 'AI Sales Growth Agent',
            meta: '2026.01 – 2026.05',
            tags: ['Next.js', 'TypeScript'],
            link: 'https://ai-sales-growth-agent.vercel.app/',
            slug: 'growth-agent',
          },
        ],
        footer: 'Prompt engineering · Multi-agent workflow design · Knowledge base / RAG',
      },
      {
        id: 'ai-collab',
        no: '02',
        title: 'AI-Assisted 3D Game Dev',
        tagline: 'Human-AI workflow · 0 to 1',
        items: [
          {
            name: 'And Then There Were None: Soldier Island — 3D narrative mystery game',
            meta: '2026.06 – 2026.08',
            tags: ['Three.js', 'Data-driven architecture'],
            link: 'https://ai-game-liard.vercel.app/',
            slug: 'soldier-island',
          },
        ],
        footer: 'Milestone breakdown · Prompt engineering · Long-horizon context management · Automated acceptance',
      },
      {
        id: 'ai-review',
        no: '03',
        title: 'AI Product Reviews',
        tagline: 'Contributing writer for a 200K+ follower tech media account',
        items: [
          {
            name: 'AI product review content creation',
            meta: '2026.06 – Now',
            tags: ['100K+ total reads', 'Top single piece 50K+'],
            link: 'https://mp.weixin.qq.com/s/oiN69Kk3XYASMYavwoXzyA',
            slug: 'ai-product-reviews',
          },
        ],
        footer: 'Real-scenario stress tests · Head-to-head comparisons · Selection advice',
      },
    ],
  },
}

// 板块三联图位（每张卡片中部的 3 张项目图）。图片放到 public/works/covers/ 下，
// 按顺序填入数组；不足 3 张时剩余位置显示虚线占位框，放图后自动点亮。
export const SECTION_SHOTS: Record<string, string[]> = {
  'ai-demo': [`${import.meta.env.BASE_URL}works/covers/ai-demo.png`],
  'ai-collab': [
    `${import.meta.env.BASE_URL}works/covers/ai-collab.png`,
    `${import.meta.env.BASE_URL}works/covers/ai-collab-2.png`,
    `${import.meta.env.BASE_URL}works/covers/ai-collab-3.png`,
  ],
  'ai-review': [`${import.meta.env.BASE_URL}works/covers/ai-review.png`],
}

// 统计一个板块的作品数（items 或 groups 求和），用于索引行 hover 显示
export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
