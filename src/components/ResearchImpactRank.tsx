import React, { useState } from 'react'

type InitiativeType = 'Business Case' | 'Feature Request'

interface ResearchStudy {
  title: string
  summary: string
  beesuxr?: string
  beesuxrUrl?: string
  reportUrl: string
}

interface BusinessCaseDetails {
  status: string
  description: string
  commercialImpact: string
  successCriteria: string[]
  reporter: string
  assignee: string
  created: string
  updated: string
  researchSummary: string
  researchVerdict?: string
  studies: ResearchStudy[]
}

interface Initiative {
  globalRank: number
  aiRank: number
  vpRank: number
  owner: string
  ownerAvatar: string
  id: string
  type: InitiativeType
  title: string
  progress: number
  progressColor: string
  frs?: number
  ips: number
  pillar: string
  details?: BusinessCaseDetails
}

const businessCaseDetails: Record<string, BusinessCaseDetails> = {
  '22219': {
    status: 'Backlog',
    description:
      'Flex Discounts are a critical commercial lever for BEES, enabling partners and markets to apply dynamic price discounts across SKUs, customers, and scenarios. However, as Flex Discounts adoption increased, the current implementation exposed scalability, performance, and governance limitations.\n\nAcross BEESIMP-21347, BEESIMP-21753, and Flex Discount improvement initiatives, recurring challenges include limited flexibility to configure complex discount rules at scale, performance degradation during discount creation and updates, lack of sufficient governance and visibility to control discount application, and high operational dependency on manual adjustments and support teams.',
    commercialImpact:
      'Commercial and pricing teams trying to configure and manage flexible discounts at scale often experience slow setup, limited rule control, and unreliable performance — resulting in delayed campaigns, operational risk, and missed revenue opportunities.\n\n7 distributors in Brazil explicitly require this capability to operate fully in BEES. 1,977 BDRs impacted across live and in-implementation distributors.',
    successCriteria: [
      'Pending commercial review',
      'Within 3 months from go-live, on Okajima, Luddovico, Vila Nova and Solfarma partners increase ≥15% on GMV',
      'Within 3 months after flex discount launch on Force, across 3 partners in indirect distributors, increase ≥10pp in GMV share of orders with flex discounts',
      'Within 3 months after flex discount launch on Link, across 5 partners in indirect distributors, increase ≥10pp in GMV share of orders with flex discounts',
    ],
    reporter: 'Mires Camargo, Tatiana',
    assignee: 'Unassigned',
    created: 'Jan 15, 2026',
    updated: 'Mar 10, 2026',
    researchVerdict: 'Strong — commercial + customer',
    researchSummary:
      'Seven distributors cannot operate in BEES without flex and reps need ION-level wallet autonomy to close deals — but stepped-discount research shows opaque tiers kill conversion before flex ships (5/6 POCs skipped better discounts). Opportunities: pilot-first standardization, kill opaque pricing patterns, treat savings-in-money as a dependency for the ≥15% GMV and ≥10pp share targets.',
    studies: [
      {
        title: 'Flex Discounts — Q3/2024',
        summary:
          'Commercial discovery with 7 sellers and 8 buyers in Brazil. Flex is a revenue-management lever for non-exclusive indirect distributors; reps rely on ION/MOBI today. Recommends experimental pilots over digitize-as-is — wallet guardrails and supervisor approval are the governance model partners already use.',
        beesuxr: 'BEESUXR-920',
        beesuxrUrl: 'https://ab-inbev.atlassian.net/browse/BEESUXR-920',
        reportUrl: 'https://ab-inbev.atlassian.net/wiki/spaces/BEESPKM/pages/4187035111',
      },
      {
        title: 'Stepped Discounts Research — Q1/2026',
        summary:
          'Evaluative research with 6 POCs in São Paulo. 5 of 6 skipped buying more units despite better tier discounts — cognitive load and rule confusion, not price sensitivity. 0/6 noticed the discount badge on PLP. Supports savings-in-money and plain-language tier communication for flex surfaces.',
        beesuxr: 'BEESUXR-1453',
        beesuxrUrl: 'https://ab-inbev.atlassian.net/browse/BEESUXR-1453',
        reportUrl: 'https://ab-inbev.atlassian.net/wiki/spaces/BEESPKM/pages/5595824217',
      },
      {
        title: 'Promotions Buying Decision — Q2/2026',
        summary:
          'Critical-impact study on how POCs evaluate and act on promotions. Direct input to promo transparency value stream — informs legibility requirements for flex and stepped mechanics on Customer-facing surfaces.',
        beesuxr: 'BEESUXR-1578',
        beesuxrUrl: 'https://ab-inbev.atlassian.net/browse/BEESUXR-1578',
        reportUrl: 'https://ab-inbev.atlassian.net/wiki/spaces/BEESPKM/pages/6174212112',
      },
    ],
  },
  '21978': {
    status: 'In Implementation',
    description:
      'LWC customers currently place orders through fragmented channels, including legacy systems, offline methods, a web-based eB2B platform, and multiple EDI providers. Migrating all ordering activity to BEES is essential to streamline processes, improve operational efficiency, and maximize sales. Ensuring BEES matches or exceeds the functionality of legacy tools is particularly important for the telesales channel, which contributes over 50% of GMV.',
    commercialImpact:
      'LWC is the largest independent drinks wholesaler in the UK, with a national footprint and annual GMV of USD 1.2 billion. This project marks the first third-party BEES implementation in both the UK and Europe. 13,500 accounts (excl. Modern Trade), 50,000–70,000 orders/month, GBP 1,000 average order value.',
    successCriteria: [
      'Adoption: 90% BEES Buyers, 90% BEES GMV and 65% BEES Customer GMV by End of Pilot (4 months)',
      'Means & Engagement: as per picture of success',
      'Value Creation: GMV/POC, SKU/POC (Digital outperforming non-digital by end of Pilot)',
    ],
    reporter: 'Brian Murphy',
    assignee: 'LWC Onboarding Squad',
    created: 'Nov 8, 2025',
    updated: 'Jul 2, 2026',
    researchVerdict: 'Strong — sequencing',
    researchSummary:
      '54% telesales GMV is driven by system gaps (stock, pricing sync, search, delivery tracking) — not digital resistance. Research sequenced the bet: fix Grow/Force tooling for telesales and AMs first, then pursue hybrid self-service. Opportunities: hold the line on Grow before Customer to protect 90% Buyers, 90% GMV, and 65% Customer GMV targets.',
    studies: [
      {
        title: 'BEES Expansion, LWC UK — Discovery Research',
        summary:
          '14 interviews (9 LWC internal, 5 UK retailers). 54% telesales GMV driven by system gaps — not digital resistance. Critical blockers: no real-time stock, 24h pricing sync, broken search, no delivery tracking. Research sequenced Grow/Force investment before Customer self-service.',
        beesuxr: 'BEESUXR-1514',
        beesuxrUrl: 'https://ab-inbev.atlassian.net/browse/BEESUXR-1514',
        reportUrl: 'https://ab-inbev.atlassian.net/wiki/spaces/BEESPKM/pages/5758484539',
      },
    ],
  },
  '21404': {
    status: 'In Progress',
    description:
      'Portfolio tasks represent a key execution lever to drive distribution & volume in BEES. However, the current experience is operationally limited. BDRs lack visibility and incentives to exceed volume targets per POC; the ability to view multiple tasks at once without continuous scrolling; a clear distinction between stable and incremental SKUs; and easy access to the POC\'s purchase history.',
    commercialImpact:
      'Markets aim to drive portfolio strategy execution and maximize volume and SKU distribution per POC through tasks. The current Portfolio Task Tab is not aligned with ABI\'s renewed strategy to reignite volume growth. The experience does not enable effective portfolio management at the POC level.',
    successCriteria: [
      'POCs reaching the volume challenge target (goal: 70%)',
      'Stable SKUs remaining stable every month (goal: 95%)',
    ],
    reporter: 'Abílio Secchi',
    assignee: 'Force Tasks Squad',
    created: 'Aug 22, 2025',
    updated: 'Jun 15, 2026',
    researchVerdict: 'Strong — execution blockers identified',
    researchSummary:
      'BDRs want stepped targets (100% desirability) but 4/5 cannot see tasks except on visit days and validation lags 1–3 days — the 70% volume KPI is unmeasurable until then. Stable/incremental SKU tags and sales-lever consolidation are validated. Opportunities: ship anytime task visibility, purchased-SKU context on one screen, and real-time validation before claiming success on volume targets.',
    studies: [
      {
        title: 'New Portfolio Tasks Screens — Q4/2025',
        summary:
          'Prototype eval with 5 BDRs across Brazil. Stepped progress bar: 100% desirability, 20% comprehension. Stable/incremental SKU tags: 100% comprehension. #1 pain (4/5): tasks only visible on visit days — prevents monthly planning.',
        beesuxr: 'BEESUXR-1465',
        beesuxrUrl: 'https://ab-inbev.atlassian.net/browse/BEESUXR-1465',
        reportUrl: 'https://ab-inbev.atlassian.net/wiki/spaces/BEESPKM/pages/5498208284',
      },
      {
        title: 'Portfolio Tasks Research — Q2/2026',
        summary:
          'Field research with 4 BDRs + 1 Sales Manager. Hectoliters are the #1 operational blocker (15 min/visit on conversion). 3/4 BDRs need distinct products already purchased visible during negotiation. Information fragmented across 3–5 screens.',
        reportUrl: 'https://ab-inbev.atlassian.net/wiki/spaces/BEESPKM/pages/5945459444',
      },
      {
        title: 'Portfolio Task Conversion — Q4/2024',
        summary:
          'Earlier conversion study on portfolio task mechanics in Force. Informs sustain vs incremental SKU distinction and task-to-order conversion patterns referenced in Force VS strategy.',
        reportUrl: 'https://ab-inbev.atlassian.net/wiki/spaces/BEESPKM/pages/4534600242',
      },
    ],
  },
  '21233': {
    status: 'Backlog',
    description:
      'Time-bounded progressive promotion mechanic ("Batalha Naval" / Battleship) for indirect distribution. Enables campaign-window unlock deals with tiered thresholds — aligned with BEESIP-28697 time-bounded campaign cluster on Force and Customer.',
    commercialImpact:
      'Indirect distributors rely on time-bounded campaigns to drive volume and distribution within defined commercial windows. Mechanic must work across Customer discovery surfaces and Force order-taking for BDR-assisted selling.',
    successCriteria: [
      'Campaign mechanic configurable in Offer Creator with thresholds and durations (BEESIP-23069)',
      'POC comprehension of unlock conditions and tier progression validated before launch',
      'Force/Customer parity on time-bound deal presentation',
    ],
    reporter: 'João Dahne',
    assignee: 'Unassigned',
    created: 'Jun 3, 2025',
    updated: 'Mar 18, 2026',
    researchVerdict: 'Partial — adjacent evidence only',
    researchSummary:
      'Colgate time-bound studies validate tier-card UX and shopping-first entry, but benefit framing ("unlock up to X%") remains a gap — same cognitive-load pattern as stepped discounts. No dedicated Batalha Naval readout yet (BEESUXR-1528 unpublished). Opportunities: apply plain-language tiers and explicit deadline copy; flag partial confidence in prioritization until battleship-specific eval ships.',
    studies: [
      {
        title: 'Time Bound Deals — Q1/2026',
        summary:
          'Research epic linked to BEESIP-28697 time-bounded campaign mechanism. Done — readout publication pending. Expected to inform battleship mechanic rules for Force Orders in indirect distributor models.',
        beesuxr: 'BEESUXR-1528',
        beesuxrUrl: 'https://ab-inbev.atlassian.net/browse/BEESUXR-1528',
        reportUrl: 'https://ab-inbev.atlassian.net/browse/BEESUXR-1528',
      },
      {
        title: 'Colgate Time Bound Deal: Progressive Combo Usability — Q4/2025',
        summary:
          'First iteration usability on time-bound progressive combo flow. Established baseline comprehension patterns for tier unlock mechanics and promotion-first vs shopping-first entry points.',
        beesuxr: 'BEESUXR-1468',
        beesuxrUrl: 'https://ab-inbev.atlassian.net/browse/BEESUXR-1468',
        reportUrl: 'https://ab-inbev.atlassian.net/wiki/spaces/BEESPKM/pages/5496603171',
      },
      {
        title: 'Colgate Progressive Combo First Iteration — Q1/2026',
        summary:
          'Shopping-first flow reduces entry friction vs promotion-first. Collections work as browsable entry points. Benefit framing ("unlock up to X%") remains a critical gap — same legibility lesson as stepped discounts.',
        reportUrl: 'https://ab-inbev.atlassian.net/wiki/spaces/BEESPKM/pages/5895815219',
      },
      {
        title: "Colgate's Time Bound Deal — Q2/2026",
        summary:
          'Non-pharmacy POC eval in São Paulo. Tier cards and dual unlock conditions (min spend + collections) supported for comprehension. Deadline ambiguity (purchase-by vs delivery-by) needs explicit copy.',
        reportUrl: 'https://ab-inbev.atlassian.net/wiki/spaces/BEESPKM/pages/5973639530',
      },
    ],
  },
}

const initiatives: Initiative[] = [
  {
    globalRank: 1,
    aiRank: 4,
    vpRank: 1,
    owner: 'João Dahne',
    ownerAvatar: 'https://i.pravatar.cc/48?u=joao',
    id: '22219',
    type: 'Business Case',
    title: 'Improve and Standardize Flex Discounts',
    progress: 39,
    progressColor: '#E85D4C',
    frs: 3,
    ips: 29,
    pillar: 'BEES Link, ...',
  },
  {
    globalRank: 2,
    aiRank: 2,
    vpRank: 2,
    owner: 'João Dahne',
    ownerAvatar: 'https://i.pravatar.cc/48?u=joao2',
    id: '21664',
    type: 'Business Case',
    title: 'Multivendor Enablement for Distributors and Pharma Partners',
    progress: 0,
    progressColor: '#D1D5DB',
    ips: 13,
    pillar: 'BEES Platfo...',
  },
  {
    globalRank: 3,
    aiRank: 1,
    vpRank: 1,
    owner: 'Brian Mur...',
    ownerAvatar: 'https://i.pravatar.cc/48?u=brian',
    id: '21978',
    type: 'Business Case',
    title: 'UK: LWC Drinks - Launch',
    progress: 41,
    progressColor: '#F5A623',
    frs: 6,
    ips: 39,
    pillar: 'BEES Custo...',
  },
  {
    globalRank: 4,
    aiRank: 22,
    vpRank: 1,
    owner: 'Abílio Sec...',
    ownerAvatar: 'https://i.pravatar.cc/48?u=abilio',
    id: '21404',
    type: 'Business Case',
    title: 'Volume tasks with stepped targets to drive growth, with easy management of ea...',
    progress: 82,
    progressColor: '#22C55E',
    frs: 1,
    ips: 15,
    pillar: 'BEES Force',
  },
  {
    globalRank: 5,
    aiRank: 6,
    vpRank: 3,
    owner: 'João Dahne',
    ownerAvatar: 'https://i.pravatar.cc/48?u=joao3',
    id: '21233',
    type: 'Feature Request',
    title: 'Batalha Naval promotion mechanic',
    progress: 20,
    progressColor: '#E85D4C',
    ips: 9,
    pillar: 'BEES Custo...',
  },
  {
    globalRank: 6,
    aiRank: 7,
    vpRank: 2,
    owner: 'Abílio Sec...',
    ownerAvatar: 'https://i.pravatar.cc/48?u=abilio2',
    id: '21366',
    type: 'Business Case',
    title: 'Enhance Promo Mechanic Versatility to Boost Volume and Distribution',
    progress: 6,
    progressColor: '#D1D5DB',
    frs: 2,
    ips: 12,
    pillar: 'BEES Custo...',
  },
  {
    globalRank: 7,
    aiRank: 28,
    vpRank: 4,
    owner: 'João Dahne',
    ownerAvatar: 'https://i.pravatar.cc/48?u=joao4',
    id: '21776',
    type: 'Feature Request',
    title: 'Improvements Offline Order Taking',
    progress: 38,
    progressColor: '#E85D4C',
    ips: 13,
    pillar: 'BEES Force',
  },
  {
    globalRank: 8,
    aiRank: 5,
    vpRank: 5,
    owner: 'João Dahne',
    ownerAvatar: 'https://i.pravatar.cc/48?u=joao5',
    id: '21749',
    type: 'Business Case',
    title: 'Catalog Segmentation For Customer and Force',
    progress: 29,
    progressColor: '#E85D4C',
    frs: 2,
    ips: 9,
    pillar: 'BEES Force',
  },
]

function getResearchCount(id: string): number {
  return businessCaseDetails[id]?.studies.length ?? 0
}

function BriefcaseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  )
}

function LightbulbIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18h6M10 22h4M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.41 3.5.76.76 1.23 1.52 1.41 2.5" />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#7C3AED">
      <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" />
    </svg>
  )
}

function FlagIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#B45309" strokeWidth="2">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}

function ResearchIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function TypeBadge({ type }: { type: InitiativeType }) {
  const isBC = type === 'Business Case'
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 10px',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: 500,
        whiteSpace: 'nowrap',
        backgroundColor: isBC ? '#E8F0FE' : '#E8F8EE',
        color: isBC ? '#1A56DB' : '#0F7B3A',
        border: `1px solid ${isBC ? '#C7DDFC' : '#B8E6C8'}`,
      }}
    >
      {isBC ? <BriefcaseIcon /> : <LightbulbIcon />}
      {type}
    </span>
  )
}

function CollapsibleSection({
  icon,
  title,
  children,
  defaultExpanded = false,
}: {
  icon: string
  title: string
  children: React.ReactNode
  defaultExpanded?: boolean
}) {
  const [expanded, setExpanded] = useState(defaultExpanded)

  return (
    <div style={{ borderBottom: '1px solid #E5E7EB', paddingBottom: '16px', marginBottom: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
        <span style={{ fontSize: '14px' }}>{icon}</span>
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#6B7280', letterSpacing: '0.06em' }}>
          {title}
        </span>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: '#374151',
          lineHeight: 1.6,
          maxHeight: expanded ? 'none' : '72px',
          overflow: 'hidden',
          whiteSpace: 'pre-wrap',
        }}
      >
        {children}
      </div>
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        style={{
          marginTop: '8px',
          border: 'none',
          background: 'transparent',
          color: '#2563EB',
          fontSize: '13px',
          fontWeight: 500,
          cursor: 'pointer',
          padding: 0,
        }}
      >
        {expanded ? 'Show less' : 'Show more'}
      </button>
    </div>
  )
}

function ResearchStudiesCollapsible({ studies }: { studies: ResearchStudy[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        border: '1px solid #E5E7EB',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          padding: '12px 14px',
          border: 'none',
          backgroundColor: '#F9FAFB',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ResearchIcon />
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#6D28D9', letterSpacing: '0.06em' }}>
            RESEARCH STUDIES
          </span>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 600,
              color: '#6D28D9',
              backgroundColor: '#EDE9FE',
              padding: '2px 8px',
              borderRadius: '10px',
            }}
          >
            {studies.length}
          </span>
        </span>
        <span
          style={{
            fontSize: '14px',
            color: '#6B7280',
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.15s ease',
          }}
        >
          ›
        </span>
      </button>

      {open && (
        <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {studies.map((study) => (
            <div
              key={study.title}
              style={{
                padding: '14px 16px',
                backgroundColor: '#FAF5FF',
                border: '1px solid #DDD6FE',
                borderRadius: '8px',
              }}
            >
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#111827', marginBottom: '6px' }}>
                {study.title}
              </div>
              <p style={{ margin: '0 0 10px', fontSize: '13px', color: '#374151', lineHeight: 1.55 }}>
                {study.summary}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {study.beesuxr && study.beesuxrUrl && (
                  <a
                    href={study.beesuxrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 500,
                      color: '#6D28D9',
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #DDD6FE',
                      textDecoration: 'none',
                    }}
                  >
                    {study.beesuxr}
                    <ExternalLinkIcon />
                  </a>
                )}
                <a
                  href={study.reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#2563EB',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #BFDBFE',
                    textDecoration: 'none',
                  }}
                >
                  Report
                  <ExternalLinkIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function BusinessCaseModal({
  item,
  onClose,
}: {
  item: Initiative
  onClose: () => void
}) {
  const details = businessCaseDetails[item.id]
  if (!details) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bc-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        backgroundColor: 'rgba(17, 24, 39, 0.45)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div style={{ padding: '24px 24px 0', position: 'relative' }}>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              border: 'none',
              background: 'transparent',
              fontSize: '20px',
              color: '#9CA3AF',
              cursor: 'pointer',
              lineHeight: 1,
            }}
          >
            ×
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <TypeBadge type={item.type} />
            <span style={{ fontSize: '13px', color: '#6B7280' }}>{item.id}</span>
          </div>

          <h2 id="bc-modal-title" style={{ margin: '0 0 12px', fontSize: '22px', fontWeight: 700, color: '#111827' }}>
            {item.title}
          </h2>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <span
              style={{
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 500,
                backgroundColor: '#F3F4F6',
                color: '#374151',
              }}
            >
              {details.status}
            </span>
            <span
              style={{
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 500,
                backgroundColor: '#FFF4E5',
                color: '#C2410C',
              }}
            >
              VP Rank: {item.vpRank}
            </span>
            {details.studies.length > 0 && (
              <CountBadge label={`${details.studies.length} R`} variant="research" />
            )}
          </div>
        </div>

        {/* Modal body */}
        <div style={{ padding: '0 24px 24px' }}>
          <CollapsibleSection icon="📋" title="DESCRIPTION" defaultExpanded>
            {details.description}
          </CollapsibleSection>

          <CollapsibleSection icon="📈" title="HIGH LEVEL COMMERCIAL IMPACT">
            {details.commercialImpact}
          </CollapsibleSection>

          <CollapsibleSection icon="✅" title="SUCCESS CRITERIA">
            <ul style={{ margin: 0, paddingLeft: '18px' }}>
              {details.successCriteria.map((criterion) => (
                <li key={criterion} style={{ marginBottom: '6px' }}>
                  {criterion}
                </li>
              ))}
            </ul>
          </CollapsibleSection>

          {/* Research supporting evidence */}
          <div style={{ borderBottom: 'none', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <ResearchIcon />
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#6D28D9', letterSpacing: '0.06em' }}>
                RESEARCH SUPPORTING EVIDENCE
              </span>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#6D28D9',
                  backgroundColor: '#EDE9FE',
                  padding: '2px 8px',
                  borderRadius: '10px',
                }}
              >
                {details.studies.length} {details.studies.length === 1 ? 'study' : 'studies'}
              </span>
              {details.researchVerdict && (
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: details.researchVerdict.startsWith('Partial') ? '#B45309' : '#0F7B3A',
                    backgroundColor: details.researchVerdict.startsWith('Partial') ? '#FFF4E5' : '#E8F8EE',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    marginLeft: 'auto',
                  }}
                >
                  {details.researchVerdict}
                </span>
              )}
            </div>

            {/* Summary of Research Initiatives */}
            <div
              style={{
                padding: '14px 16px',
                marginBottom: '16px',
                backgroundColor: '#FAF5FF',
                border: '1px solid #DDD6FE',
                borderRadius: '8px',
                borderLeft: '4px solid #7C3AED',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#6D28D9',
                  letterSpacing: '0.06em',
                  marginBottom: '8px',
                }}
              >
                SUMMARY OF RESEARCH INITIATIVES
              </div>
              <p style={{ margin: 0, fontSize: '14px', color: '#111827', lineHeight: 1.65 }}>
                {details.researchSummary}
              </p>
            </div>

            <ResearchStudiesCollapsible studies={details.studies} />
          </div>

          {/* Footer metadata */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              paddingTop: '16px',
              borderTop: '1px solid #E5E7EB',
            }}
          >
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#9CA3AF', marginBottom: '6px' }}>REPORTER</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#374151' }}>
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: '#E5E7EB',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                  }}
                >
                  {details.reporter.charAt(0)}
                </span>
                {details.reporter}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#9CA3AF', marginBottom: '6px' }}>ASSIGNEE</div>
              <div style={{ fontSize: '13px', color: '#374151' }}>{details.assignee}</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#9CA3AF', marginBottom: '6px' }}>CREATED</div>
              <div style={{ fontSize: '13px', color: '#374151' }}>📅 {details.created}</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#9CA3AF', marginBottom: '6px' }}>UPDATED</div>
              <div style={{ fontSize: '13px', color: '#374151' }}>📅 {details.updated}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CountBadge({
  label,
  variant,
}: {
  label: string
  variant: 'fr' | 'ip' | 'research'
}) {
  const styles = {
    fr: { bg: '#E8F8EE', color: '#0F7B3A', border: '#B8E6C8', icon: <LightbulbIcon /> },
    ip: { bg: '#FFF4E5', color: '#C2410C', border: '#FDE68A', icon: <LinkIcon /> },
    research: { bg: '#EDE9FE', color: '#6D28D9', border: '#DDD6FE', icon: <ResearchIcon /> },
  }[variant]

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 10px',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: 500,
        whiteSpace: 'nowrap',
        backgroundColor: styles.bg,
        color: styles.color,
        border: `1px solid ${styles.border}`,
      }}
    >
      {styles.icon}
      {label}
    </span>
  )
}

function InitiativeRow({ item, onView }: { item: Initiative; onView: () => void }) {
  const researchCount = getResearchCount(item.id)
  const hasDetails = Boolean(businessCaseDetails[item.id])

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '14px 16px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E8EAED',
        borderRadius: '10px',
        marginBottom: '8px',
      }}
    >
      {/* Rank cluster */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
        <div style={{ textAlign: 'center', minWidth: '44px' }}>
          <div style={{ fontSize: '28px', fontWeight: 700, color: '#EA580C', lineHeight: 1 }}>
            {item.globalRank}
          </div>
          <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '2px' }}>Global</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <SparkleIcon />
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>{item.aiRank}</span>
            <span style={{ fontSize: '10px', color: '#9CA3AF' }}>AI</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <FlagIcon />
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>{item.vpRank}</span>
            <span style={{ fontSize: '10px', color: '#9CA3AF' }}>VP</span>
          </div>
        </div>
      </div>

      {/* Owner */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '120px', flexShrink: 0 }}>
        <img
          src={item.ownerAvatar}
          alt=""
          style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
        />
        <span style={{ fontSize: '13px', color: '#374151', whiteSpace: 'nowrap' }}>{item.owner}</span>
      </div>

      {/* ID */}
      <a
        href="#"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          fontSize: '13px',
          fontWeight: 600,
          color: '#EA580C',
          textDecoration: 'none',
          flexShrink: 0,
        }}
      >
        {item.id}
        <ExternalLinkIcon />
      </a>

      {/* Type badge */}
      <TypeBadge type={item.type} />

      {/* Title + progress */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: '14px',
            fontWeight: 600,
            color: '#111827',
            marginBottom: '8px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {item.title}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              flex: 1,
              height: '3px',
              backgroundColor: '#E5E7EB',
              borderRadius: '2px',
              overflow: 'hidden',
              maxWidth: '180px',
            }}
          >
            <div
              style={{
                width: `${item.progress}%`,
                height: '100%',
                backgroundColor: item.progressColor,
                borderRadius: '2px',
              }}
            />
          </div>
          <span style={{ fontSize: '12px', color: '#6B7280', minWidth: '32px' }}>{item.progress}%</span>
        </div>
      </div>

      {/* FR / IP / Research badges */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
        {item.frs !== undefined && <CountBadge label={`${item.frs} FRs`} variant="fr" />}
        <CountBadge label={`${item.ips} IPs`} variant="ip" />
        {researchCount > 0 && <CountBadge label={`${researchCount} R`} variant="research" />}
      </div>

      {/* Pillar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '13px',
          color: '#374151',
          minWidth: '130px',
          flexShrink: 0,
        }}
      >
        <GlobeIcon />
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.pillar}</span>
        <span style={{ color: '#9CA3AF' }}>›</span>
      </div>

      {/* Trailing actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
        <img
          src={item.ownerAvatar}
          alt=""
          style={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }}
        />
        <button
          type="button"
          onClick={hasDetails ? onView : undefined}
          style={{
            border: 'none',
            background: 'transparent',
            color: hasDetails ? '#374151' : '#9CA3AF',
            cursor: hasDetails ? 'pointer' : 'default',
            padding: '4px',
            fontSize: '16px',
          }}
          aria-label="View business case"
        >
          👁
        </button>
        <button
          type="button"
          onClick={hasDetails ? onView : undefined}
          style={{
            border: 'none',
            background: 'transparent',
            color: hasDetails ? '#9CA3AF' : '#D1D5DB',
            cursor: hasDetails ? 'pointer' : 'default',
            padding: '4px',
            fontSize: '14px',
          }}
          aria-label="Expand business case"
        >
          ›
        </button>
      </div>
    </div>
  )
}

function FilterDropdown({ label }: { label: string }) {
  return (
    <button
      type="button"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        border: '1px solid #D1D5DB',
        borderRadius: '6px',
        backgroundColor: '#FFFFFF',
        fontSize: '13px',
        color: '#374151',
        cursor: 'pointer',
      }}
    >
      {label}
      <span style={{ color: '#9CA3AF', fontSize: '10px' }}>▼</span>
    </button>
  )
}

export function ResearchImpactRank() {
  const [sortBy, setSortBy] = useState<'global' | 'ai' | 'vp' | 'pillar'>('global')
  const [baselineOpen, setBaselineOpen] = useState(true)
  const [selectedItem, setSelectedItem] = useState<Initiative | null>(null)

  const sortPills: { id: typeof sortBy; label: string }[] = [
    { id: 'global', label: 'Global Rank' },
    { id: 'ai', label: 'AI Rank' },
    { id: 'vp', label: 'VP Rank' },
    { id: 'pillar', label: 'Pillar' },
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F3F4F6', fontFamily: "'Work Sans', sans-serif" }}>
      {/* Page header */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E5E7EB',
          padding: '20px 32px 0',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '28px', fontWeight: 700, color: '#111827' }}>Prioritization</h1>
            <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6B7280' }}>
              Prioritize Business Cases and Feature Requests by VP Rank
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              type="button"
              style={{
                padding: '8px 14px',
                border: '1px solid #D1D5DB',
                borderRadius: '8px',
                backgroundColor: '#FFFFFF',
                fontSize: '13px',
                color: '#374151',
                cursor: 'pointer',
              }}
            >
              ✨ What&apos;s new
            </button>
            <button
              type="button"
              style={{
                padding: '8px 14px',
                border: 'none',
                borderRadius: '8px',
                backgroundColor: '#7C3AED',
                fontSize: '13px',
                fontWeight: 600,
                color: '#FFFFFF',
                cursor: 'pointer',
              }}
            >
              ☰ VP Centric View (924)
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '12px 0',
            borderTop: '1px solid #F3F4F6',
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            style={{
              border: 'none',
              background: 'transparent',
              fontSize: '13px',
              color: '#6B7280',
              cursor: 'pointer',
            }}
          >
            ← Back to Pillar View
          </button>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#111827' }}>🌐 Global Rank View</span>
          <input
            type="text"
            placeholder="Search by key or summary"
            style={{
              padding: '8px 12px',
              border: '1px solid #D1D5DB',
              borderRadius: '8px',
              fontSize: '13px',
              width: '220px',
              marginLeft: '8px',
            }}
          />
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '20px', fontSize: '13px' }}>
            <span>
              Total: <strong style={{ color: '#EA580C' }}>193</strong>
            </span>
            <span>
              Ranked: <strong style={{ color: '#EA580C' }}>103</strong>
            </span>
            <span>
              Pending: <strong>40</strong>
            </span>
            <span style={{ color: '#9CA3AF' }}>💼 137</span>
            <span style={{ color: '#9CA3AF' }}>💡 56</span>
            <span style={{ color: '#9CA3AF' }}>🏛 7 pillars</span>
            <button type="button" style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
              📄
            </button>
            <button
              type="button"
              style={{
                padding: '6px 12px',
                border: '1px solid #D1D5DB',
                borderRadius: '6px',
                backgroundColor: '#FFFFFF',
                fontSize: '13px',
                cursor: 'pointer',
              }}
            >
              ↻ Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ padding: '16px 32px 32px' }}>
        {/* Filters + sort */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <button
              type="button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                border: '1px solid #D1D5DB',
                borderRadius: '6px',
                backgroundColor: '#FFFFFF',
                fontSize: '13px',
                color: '#2563EB',
                cursor: 'pointer',
              }}
            >
              <span style={{ color: '#2563EB' }}>⏷</span> Filters
            </button>
            {['Pillar', 'Type', 'Product', 'IP status', 'BC/FR %', 'Tags'].map((f) => (
              <FilterDropdown key={f} label={f} />
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#6B7280' }}>
            <span>Sort by:</span>
            {sortPills.map((pill) => (
              <button
                key={pill.id}
                type="button"
                onClick={() => setSortBy(pill.id)}
                style={{
                  padding: '4px 10px',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: sortBy === pill.id ? 600 : 400,
                  color: sortBy === pill.id ? '#EA580C' : '#6B7280',
                  backgroundColor: sortBy === pill.id ? '#FFF4E5' : 'transparent',
                  cursor: 'pointer',
                }}
              >
                {pill.label} {sortBy === pill.id ? '↑' : '↑'}
              </button>
            ))}
          </div>
        </div>

        {/* Read-only banner */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 14px',
            backgroundColor: '#EFF6FF',
            border: '1px solid #BFDBFE',
            borderRadius: '8px',
            fontSize: '13px',
            color: '#1E40AF',
            marginBottom: '12px',
          }}
        >
          <span>👁</span>
          <span>
            You have <strong>read-only</strong> access to the Global Rank View. You can browse and export CSV, but
            cannot reorder, skip, freeze, or sync changes.
          </span>
        </div>

        {/* Baseline header */}
        <button
          type="button"
          onClick={() => setBaselineOpen(!baselineOpen)}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 14px',
            backgroundColor: '#EFF6FF',
            border: '1px solid #BFDBFE',
            borderRadius: '8px',
            fontSize: '13px',
            color: '#1E40AF',
            cursor: 'pointer',
            marginBottom: baselineOpen ? '12px' : '0',
            textAlign: 'left',
          }}
        >
          <span>🕐</span>
          <span>
            <strong>Global Rank vs March 12, 2026</strong> (105 ranked items)
          </span>
          <span style={{ color: '#6B7280', fontWeight: 400 }}>
            Compares today vs frozen baseline (Mar 12). Global Rank counts only when VP Rank is positive at that date.
          </span>
          <span style={{ marginLeft: 'auto' }}>{baselineOpen ? '▲' : '▼'}</span>
        </button>

        {/* List */}
        {baselineOpen && (
          <div style={{ marginTop: '4px' }}>
            {initiatives.map((item) => (
              <InitiativeRow key={item.id} item={item} onView={() => setSelectedItem(item)} />
            ))}
          </div>
        )}
      </div>

      {selectedItem && businessCaseDetails[selectedItem.id] && (
        <BusinessCaseModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  )
}
