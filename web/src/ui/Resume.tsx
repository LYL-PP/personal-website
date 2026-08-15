import { motion } from 'framer-motion'
import { SOCIAL_ICONS } from './SocialIcons'
import { FOCUS_POINTS } from '../data/focusPoints'

// 履历数据（双语）。英文为译稿，可按需润色。
interface ResumeGroup {
  heading?: string
  logo?: string
  logoImg?: string
  sub?: string
  link?: string
  items?: string[]
  links?: { id: string; label: string; href: string }[]
}
interface ResumeEntry {
  period: string
  place: string
  role?: string
  logo?: { src: string; alt: string; size?: number }
  points?: string[]
  groups?: ResumeGroup[]
}
const RESUME: Record<'en' | 'zh', { title: string; entries: ResumeEntry[] }> = {
  en: {
    title: 'Résumé',
    entries: [
      {
        period: '2026.09 – 2028.07',
        place: 'The Chinese University of Hong Kong, Shenzhen',
        role: 'M.Sc. in Data Science (enrolled)',
        logo: { src: `${import.meta.env.BASE_URL}logos/cuhksz.png`, alt: '香港中文大学（深圳）', size: 75 },
      },
      {
        period: '2022.09 – 2026.07',
        place: 'Sun Yat-sen University',
        role: 'B.B.A. in Business Administration',
        logo: { src: `${import.meta.env.BASE_URL}logos/sysu.png`, alt: '中山大学' },
      },
      {
        period: '2026.01 – 2026.04',
        place: 'Chengdu Shusheng Technology',
        role: 'AI Product Manager Intern',
        logo: { src: `${import.meta.env.BASE_URL}logos/shusheng.png`, alt: '书声科技', size: 50 },
        points: [
          'Helped build a sales AI agent covering night-shift standby, conversion Q&A and proactive needs-discovery: designed the collaboration workflow across four agents (intent recognition, needs-discovery, Q&A, safety check) on a modular FAQ / intent / SOP configuration, with a tiered human-handoff mechanism; overall intent-classification F1 90%+, response accuracy 90%+, and 40%+ deal rate on handed-off high-intent leads.',
          'Helped build an AI sales quality-inspection system with differentiated scoring criteria for key actions (needs-discovery, progress review, course pitching, closing); inspection accuracy 95%+.',
          'Helped build a conversation-data-based user profiling & tagging system: designed 100+ tags and extraction rules with T+1 auto-tagging via agents; core tag accuracy 85%+.',
          'Contributed to lead-scoring prediction and conversion strategy on 150K+ historical samples (baseline conversion ~5.4%): feature selection, data cleaning, baseline evaluation and tier thresholds; Top 30% high-potential leads converted at 16.4% (~3× baseline).',
        ],
      },
      {
        period: '2025.07 – 2025.11',
        place: 'JD.com',
        role: 'International Supply Chain PM Intern',
        logo: { src: `${import.meta.env.BASE_URL}logos/jd.png`, alt: '京东', size: 75 },
        points: [
          'Independently led the design of an international supply-chain charging mechanism with a full PRD: abstracted standard billing nodes (inbound, outbound, trunk line, customs clearance, last mile) and consolidated 50+ offline billing scenarios into system modules (fee-item management, rule configuration, service orders, approval, receivables, settlement & reconciliation, exception adjustment), covering a department-level business at tens-of-billions scale.',
          'Owned the 0-to-1 design and launch of Europe cross-border line products: designed time-priority, cost-priority and balanced route plans validated on end-to-end metrics (on-time fulfillment, delivery success, exception rate, tracking completeness), covering 10+ European countries with 20K+ monthly orders after launch.',
          'Located fulfillment bottlenecks via the end-to-end metrics system and drove process & product optimization: +15% timely pickup rate, +8% final delivery rate, ~10% overall P&L improvement.',
        ],
      },
      {
        period: '2024.12 – 2025.04',
        place: 'CICC (CICC Wealth Management)',
        role: 'Investment Management Middle-Platform Product Intern',
        logo: { src: `${import.meta.env.BASE_URL}logos/cicc.png`, alt: '中金公司', size: 75 },
        points: [
          'Contributed to middle-platform systems across the full asset-management product lifecycle (creation, issuance, filing, operation), structuring core elements — risk level, client suitability, fee structure, benchmark, subscription/redemption rules — into system fields and configuration rules.',
          'Built Python-based data automation pipelines processing 100K+ daily records of subscription/redemption flows, NAV and holdings, supporting regulatory reports and post-investment reporting.',
          'Benchmarked competing products on structure, fees, risk level and redemption terms; delivered 5 research reports informing middle-platform capability planning.',
        ],
      },
    ],
  },
  zh: {
    title: 'Résumé',
    entries: [
      {
        period: '2026.09 – 2028.07',
        place: '香港中文大学（深圳）',
        role: '数据科学 · 硕士（在读）',
        logo: { src: `${import.meta.env.BASE_URL}logos/cuhksz.png`, alt: '香港中文大学（深圳）', size: 75 },
      },
      {
        period: '2022.09 – 2026.07',
        place: '中山大学',
        role: '工商管理 · 本科',
        logo: { src: `${import.meta.env.BASE_URL}logos/sysu.png`, alt: '中山大学' },
      },
      {
        period: '2026.01 – 2026.04',
        place: '成都书声科技有限公司',
        role: 'AI 产品经理实习生',
        logo: { src: `${import.meta.env.BASE_URL}logos/shusheng.png`, alt: '书声科技', size: 50 },
        points: [
          '参与搭建销售 AI 智能体，覆盖夜间值守、转化答疑、主动挖需等场景：设计意图识别、主动挖需、答疑、安全检测四类 Agent 的协作工作流，基于 FAQ 知识库、意图分类与 SOP 模块化配置承接用户咨询，并围绕安全风险、高意向转化、知识边界建立分层转人工机制；项目意图分类整体 F1 达 90%+、AI 回复准确率达 90%+，高意向线索转人工后成交率达 40%+；',
          '参与搭建 AI 销售质检体系，围绕挖需、学情点评、铺课、关单等关键动作设计差异化评分标准，质检准确率达 95%+；',
          '参与建设基于会话数据的用户画像与标签系统，设计 100+ 标签及抽取规则，结合 Agent 实现 T+1 自动打标与规则迭代，核心标签准确率达 85%+；',
          '参与客户线索分级预测与销售转化策略项目，基于 15w+ 历史样本（基线转化率约 5.4%）设计 AI 侧产品方案，完成特征筛选、数据清洗、baseline 评估与分级阈值设计；内部特征模型下 Top 30% 高潜线索转化率达 16.4%（约 3 倍基线）。',
        ],
      },
      {
        period: '2025.07 – 2025.11',
        place: '京东',
        role: '国际供应链产品经理实习生',
        logo: { src: `${import.meta.env.BASE_URL}logos/jd.png`, alt: '京东', size: 75 },
        points: [
          '独立主导国际供应链收费机制产品设计，输出完整 PRD：按履约链路抽象入库、出库、干线、清关、尾程等标准计费节点，将 50+ 线下计费场景沉淀为费用项管理、计费规则配置、服务单创建、审批确认、应收生成、结算对账、异常调账等系统模块，覆盖部门级百亿规模业务，显著降低人工调账与漏收风险；',
          '独立负责欧洲跨境线路产品从 0 到 1 的方案设计与上线：设计时效优先、成本优先与均衡三类线路方案，以端到端时效达成率、准时妥投率、异常率、轨迹回传完整率为核心指标完成试跑验证，覆盖欧洲 10 余国，上线后月均单量 2 万+ 单；',
          '围绕国际供应链全链路指标体系定位履约瓶颈，推动流程与产品优化，实现及时揽收率提升 15%、尾单妥投率提升 8%、整体损益改善约 10%。',
        ],
      },
      {
        period: '2024.12 – 2025.04',
        place: '中金公司（中金财富）',
        role: '投资管理中台产品实习生',
        logo: { src: `${import.meta.env.BASE_URL}logos/cicc.png`, alt: '中金公司', size: 75 },
        points: [
          '围绕资产管理产品全生命周期（创设、发行、备案、运作）参与中台系统建设，将风险等级、客户适当性、费用结构、业绩比较基准、申赎规则等核心要素结构化为系统字段与配置规则；',
          '使用 Python 搭建数据自动化处理流程，日均处理 10w+ 条申赎流水、产品净值及持仓数据，支撑监管报表、投后报告生成；',
          '围绕产品结构、费率设计、风险等级、申赎安排等维度对同类竞品进行对标分析，输出研究报告 5 份，为中台产品能力建设提供决策参考。',
        ],
      },
    ],
  },
}

// 履历条目依次对应 glb 里的聚焦锚点（相机停靠点），顺序须与 entries 一致。
// 名单是唯一真源，见 data/focusPoints.ts（Scene.tsx 也从那里取）。
const POINT_ORDER = FOCUS_POINTS

const EASE = [0.22, 1, 0.36, 1]
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}
const itemV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

function Group({ group }: { group: ResumeGroup }) {
  const heading = group.link ? (
    <a className="about-link" href={group.link} target="_blank" rel="noopener noreferrer">
      {group.heading}
    </a>
  ) : (
    <span>{group.heading}</span>
  )

  return (
    <motion.div className="tl-group" variants={itemV}>
      <div className="tl-group-head">
        {group.logoImg && (
          <span className="tl-group-logo">
            <img src={group.logoImg} alt={group.heading || ''} loading="lazy" />
          </span>
        )}
        {heading}
        {group.sub && <span className="tl-group-sub">{group.sub}</span>}
      </div>
      {group.items && (
        <ul className="tl-points">
          {group.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      )}
      {group.links && (
        <div className="tl-logos">
          {group.links.map((l) => {
            const Icon = SOCIAL_ICONS[l.id as keyof typeof SOCIAL_ICONS]
            return (
              <a
                key={l.id}
                className="tl-logo"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                title={l.label}
              >
                <Icon />
              </a>
            )
          })}
        </div>
      )}
    </motion.div>
  )
}

function Entry({ entry, index }: { entry: ResumeEntry; index: number }) {
  return (
    <motion.div
      className="tl-entry"
      data-point={POINT_ORDER[index]}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
    >
      <motion.span className="tl-dot" variants={itemV} aria-hidden="true" />
      {/* tl-body 包住文字内容（点保持在外做时间轴标记）：移动端可给它加卡片衬底，
          且它紧贴内容高度，不含 tl-entry 用于排布的大 padding。
          用普通 div（非 motion）：framer 变体经 React context 穿透它，叶子元素仍是
          tl-entry 的直接 stagger 子级，入场动画与包裹前完全一致。 */}
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
          {entry.logo && (
            <span
              className="tl-logo-chip"
              style={entry.logo.size ? { width: entry.logo.size, height: entry.logo.size } : undefined}
            >
              <img src={entry.logo.src} alt={entry.logo.alt} loading="lazy" />
            </span>
          )}
          <h3 className="tl-place">{entry.place}</h3>
        </motion.div>
        {entry.role && (
          <motion.div className="tl-role" variants={itemV}>
            {entry.role}
          </motion.div>
        )}
        {entry.points && (
          <motion.ul className="tl-points" variants={itemV}>
            {entry.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </motion.ul>
        )}
        {entry.groups && entry.groups.map((g, i) => <Group key={i} group={g} />)}
      </div>
    </motion.div>
  )
}

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  const data = RESUME[lang]
  return (
    <section className="resume" lang={lang}>
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {data.title}
      </motion.h2>
      <div className="timeline">
        {data.entries.map((e, i) => (
          <Entry key={i} entry={e} index={i} />
        ))}
      </div>
    </section>
  )
}
