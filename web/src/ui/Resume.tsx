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
        period: '2026.09 – 2028.06',
        place: 'The Chinese University of Hong Kong, Shenzhen',
        role: 'M.Sc. in Data Science (enrolled)',
        logo: { src: `${import.meta.env.BASE_URL}logos/cuhksz.png`, alt: '香港中文大学（深圳）', size: 75 },
      },
      {
        period: '2022.09 – 2026.06',
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
          'Designed the AI sales quality-inspection system: broke down key sales actions (needs-discovery, progress review, course pitching, closing) into inspection dimensions and scoring rules, and designed the AI-first-score, issue-attribution, human-review and feedback flow — upgrading sales professionalism assessment from manual sampling to full automated inspection; inspection results matched human evaluation at 95%+, cutting manual sampling costs.',
          'Contributed to a conversation-data-based user profiling & tagging system: designed 100+ tags and extraction rules across scenarios such as purchase intent, learning goals, price objections, feedback and risk signals, with T+1 auto-tagging via agents and continuous rule iteration driven by human review and sales feedback; core tag accuracy 85%+, supporting user segmentation, follow-up strategy and user-profile accumulation.',
          'Contributed to lead-scoring and conversion prediction across the trial-to-annual-course funnel: broke down scenarios (new-user conversion, mid-course conversion, silent-user reactivation) and designed the AI-side tiered prediction scheme; drove internal/external feature integration on 150K+ historical samples, completing feature selection, data cleaning, baseline evaluation and tier thresholds. In offline validation, an XGBoost model on internal features performed best — the top 30% high-score leads converted at ~17% vs a 5.4% overall baseline, informing high-potential user identification, differentiated lead allocation and follow-up conversion experiments.',
        ],
      },
      {
        period: '2025.07 – 2025.11',
        place: 'JD.com',
        role: 'International Supply Chain PM Intern',
        logo: { src: `${import.meta.env.BASE_URL}logos/jd.png`, alt: '京东', size: 75 },
        points: [
          'Independently led the design of the international supply-chain charging mechanism, targeting missed/incorrect charges, manual adjustments and unclear P&L attribution caused by inconsistent billing nodes, fee items and settlement standards across business lines: abstracted standard billing nodes (inbound, outbound, trunk line, customs clearance, last mile) along the fulfillment chain, consolidated 50+ offline billing scenarios into system modules (fee-item management, rule configuration, service orders, approval, receivables, settlement & reconciliation, exception adjustment), and drove requirement reviews and rollout with R&D, settlement, operations and cross-team stakeholders — covering a department-level business at tens-of-billions scale, significantly reducing manual adjustments and missed charges.',
          'Owned the 0-to-1 design and launch of Europe cross-border line products, coordinating with sales and operations on requirements and commercialization: decomposed business needs by cargo attributes, destination distribution, daily/peak volumes, timeliness, customs and last-mile requirements; designed time-priority, cost-priority and balanced route plans matched with trunk-line, customs and local European carrier resources; validated via trial runs on end-to-end metrics (on-time fulfillment, delivery success, exception rate, tracking completeness), drove commercial launch across 10+ European countries, reaching 20K+ monthly orders with 95%+ delivery success.',
          'Located fulfillment bottlenecks through data analysis across the end-to-end metrics system (inbound, outbound, pickup, transport, delivery, signed), and drove process and product optimization with operations and support teams: +15% timely pickup rate, +8% final delivery rate, ~10% overall product P&L improvement.',
          'Continuously tracked international logistics and cross-border supply-chain industry trends, competitor routes and pricing strategies; delivered regular competitor analysis and pricing recommendations, supporting route-product iteration and commercial quote optimization.',
        ],
      },
      {
        period: '2024.12 – 2025.04',
        place: 'CICC (CICC Wealth Management)',
        role: 'Investment Management Middle-Platform Product Intern',
        logo: { src: `${import.meta.env.BASE_URL}logos/cicc.png`, alt: '中金公司', size: 75 },
        points: [
          'Contributed to the design of middle-platform systems covering the full asset-management product lifecycle (creation, issuance, filing, operation); structured core elements — risk level, client suitability, fee structure, benchmark, subscription/redemption rules — into system fields and configuration rules, helping standardize product workflows and improving the efficiency of product information maintenance, process routing and compliance checks.',
          'Built Python-based data automation pipelines processing 100K+ daily records of subscription/redemption flows, NAV and holdings: field unification, missing-value checks, cross-table matching and risk-metric computation; generated regulatory reports and post-investment reports from templates, automatically flagging anomalous data for human review.',
          'Tracked asset & wealth management industry trends and benchmarked competing products on structure, fees, risk classification and redemption terms; delivered 5 research reports combining client research — dissecting differences in process and product design with actionable takeaways — and participated in feasibility studies for new business models, informing middle-platform capability planning.',
        ],
      },
    ],
  },
  zh: {
    title: 'Résumé',
    entries: [
      {
        period: '2026.09 – 2028.06',
        place: '香港中文大学（深圳）',
        role: '数据科学 · 硕士（在读）',
        logo: { src: `${import.meta.env.BASE_URL}logos/cuhksz.png`, alt: '香港中文大学（深圳）', size: 75 },
      },
      {
        period: '2022.09 – 2026.06',
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
          '负责AI销售质检体系方案设计，围绕挖需、学情点评、铺课、关单等关键销售动作拆解质检维度与评分规则，设计AI初评、问题归因、人工复核与结果反馈流程，将销售专业度评估从人工抽检升级为全量自动化质检；质检结果与人工评估一致率达95%+，降低人工抽检成本。',
          '参与建设基于会话数据的用户画像与标签系统，围绕购买意向、学习目标、价格异议、反馈评价、风险信号等场景设计100+标签及抽取规则，结合Agent实现T+1自动打标，并基于人工复核与销售反馈持续迭代规则；核心标签准确率达85%+，支撑用户分层、销售跟进策略与用户档案沉淀。',
          '参与客户线索分级与转化预测项目，围绕体验课到年课转化链路，拆解新用户转化、行课期转化、沉默期召回等场景，设计AI侧分层预测方案；基于15w+历史数据推动内外部特征库打通，完成特征筛选、数据清洗、baseline评估及分级阈值设计。离线验证中，基于内部特征的XGBoost模型表现最佳，前30%高分线索转化率约17%，显著高于5.4%整体基线，为高潜用户识别、销售差异化分配与后续转化验证提供依据。',
        ],
      },
      {
        period: '2025.07 – 2025.11',
        place: '京东',
        role: '国际供应链产品经理实习生',
        logo: { src: `${import.meta.env.BASE_URL}logos/jd.png`, alt: '京东', size: 75 },
        points: [
          '独立主导国际供应链收费机制产品设计，针对各业务线计费节点、费用项与结算口径不统一导致的漏收错收、人工调账与损益归因不清问题，按履约链路抽象入库、出库、干线、清关、尾程等标准计费节点，将50+线下计费场景沉淀为费用项管理、计费规则配置、服务单创建、审批确认、应收生成、结算对账、异常调账等系统模块，协同研发、结算、运营及跨部门业务团队完成需求评审与方案落地，覆盖部门级百亿规模业务，显著降低人工调账与漏收风险；',
          '负责欧洲跨境线路产品从0到1的方案设计与上线，协同销售、运营团队完成需求对接与商业化推广：基于货物属性、目的国分布、日均/峰值单量、时效、清关及末端派送要求拆解业务需求，设计时效优先、成本优先与均衡三类线路方案，并匹配干线、清关及欧洲本地服务商资源；以端到端时效达成率、准时妥投率、异常率、轨迹回传完整率为核心指标完成试跑验证，推动线路商业化上线，覆盖欧洲10余国，上线后月均单量2万+单，妥投率95%+；',
          '围绕国际供应链全链路指标体系（入库、出库、揽收、运输、派送、妥投），通过数据分析定位履约瓶颈，联合经营、运营及综支团队推动流程与产品优化，实现及时揽收率提升15%、尾单妥投率提升8%，相关产品整体损益改善约10%；',
          '持续跟踪国际物流与跨境供应链行业动态、竞品线路及价格策略，定期输出竞品分析与定价策略建议，支持线路产品迭代与商业化报价优化。',
        ],
      },
      {
        period: '2024.12 – 2025.04',
        place: '中金公司（中金财富）',
        role: '投资管理中台产品实习生',
        logo: { src: `${import.meta.env.BASE_URL}logos/cicc.png`, alt: '中金公司', size: 75 },
        points: [
          '参与资产管理产品全生命周期中台系统设计，覆盖产品创设、发行、备案、运作等流程；将风险等级、客户适当性、费用结构、业绩比较基准、申赎规则等核心要素结构化为系统字段与配置规则，协助沉淀标准化产品流程，提升产品信息维护、流程流转与合规校验效率。',
          '使用Python搭建数据自动化处理流程，日均处理10w+条申赎流水、产品净值及持仓数据，完成字段统一、缺失值检查、跨表匹配与风控指标计算，按模板生成监管报表、投后报告等标准材料，并自动标记异常数据供人工复核。',
          '跟踪资管与财富管理行业动态，围绕产品结构、费率设计、风险等级划分、申赎安排等核心维度对同类竞品进行对标分析，结合客户调研输出研究报告5份，拆解竞品在流程设计与产品结构上的差异并提炼可借鉴点，参与新业务模式的可行性论证，为中台产品能力建设提供决策参考。',
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
