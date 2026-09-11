# Research Impact on Global Rank Prototype

## 🎯 Purpose

Interactive prototype demonstrating how research evidence can be integrated into the BEES B&P Hub's Global Rank view. This prototype walks leadership through:

1. **Problem 1**: Place research evidence on Global Rank rows (visible at a glance)
2. **Problem 2**: Four signals to interpret likelihood of impact (visible when expanded)
3. **Narrative**: How research informs leadership decisions without parallel priority systems

---

## 📍 Location

```
BEES/BEES Cross/Research/prototypes/research-impact-rank/
```

**Run locally:**
```bash
cd "BEES/BEES Cross/Research/prototypes/research-impact-rank"
npm install
npm run dev
# Visit http://localhost:5173
```

---

## 🗂️ Information Architecture

### Global Rank View (Collapsed)
Shows the traditional Global Rank table with one addition per row:

```
Rank | Initiative Title        | GMV    | Status    | Research Evidence | ▼
-----|-------------------------|--------|-----------|-------------------|---
#1   | BEES One Platform       | $2.8B  | On Track  | ✓ Research: Strong| ▼
#2   | Promotions Clarity      | $1.8B  | On Track  | ✓ Research: Strong| ▼
#3   | OOS Transparency        | $1.2B  | On Track  | ✓ Research: Strong| ▼
```

**What leadership sees:**
- Green checkmark + "Strong" label = research evidence is documented and linked to this ranked initiative
- Supports quick filtering: "Which bets have research behind them?"

---

### Research Dossier (Expanded Row)
Click any row to expand and see the full research impact layer:

#### Part 1: Study Artifacts
```
Study Artifacts
└─ BEESIP-7149 (link)
└─ BEESUXR-1514 (link)
```
**Navigate to:** Jira initiative, UXR study readout, Confluence analysis

#### Part 2: Four Research Impact Signals
```
┌─────────────────────────────────┐
│ Executive Demand: YES           │
│ Is linked demand on stack?      │
│                                 │
│ Commercial Impact: YES          │
│ What commercial KPIs linked?    │
│                                 │
│ Userbase Reach: PARTIAL         │
│ What % of BC addressable pool?  │
│                                 │
│ Study Confidence: YES           │
│ Is study linked & documented?   │
└─────────────────────────────────┘
```

**Interpretation:**
- **YES** = Signal present, criterion met
- **PARTIAL** = Incomplete, need more data or definition
- **NO** = Signal absent, criterion not met

#### Part 3: Decision Impact
```
🎯 Sequencing Change
"Sequencing Grow vs Customer investment — admin load blocks upsell on ranked demand."
```

**Three types:**
- **Scope**: What we build / who we build for changes
- **Sequencing**: What order on the stack changes
- **Kill / Defer**: What we stop funding

#### Part 4: Call to Action
```
[Review Full Study] [Add to Planning]
```

---

## 💡 The LWC UK Example (What Leadership Sees)

**Initiative:** BEES Marketplace · LWC UK Onboarding

**Why on Global Rank #1?**
- First 3P BEES launch in UK/Europe
- BEESIMP-21978: $1.2B annual partner GMV
- Consolidates fragmented ordering (telesales 54%+)

**Research Signals:**
- ✓ **Executive Demand: YES** — BEESIP-7149 (LWC Onboarding, In Implementation, Top 10 Global Rank)
- ✓ **Commercial Impact: YES** — $1.2B addressable, 50–70k orders/month, £1,000 AOV
- ~ **Userbase Reach: PARTIAL** — 13,500 UK accounts defined; wh_am query pending
- ✓ **Study Confidence: YES** — 14 interviews (9 internal + 5 POC), linked to BEESIP, Confluence v13

**Decision:**
> *Sequencing Grow vs Customer investment — 54% telesales driven by system gaps (stock, pricing sync, search, delivery tracking), not digital resistance.*

**What this means for leadership:**
- Research evidence **informs sequencing**, not GMV attribution
- Grow capacity vs Customer self-service prioritization is data-driven
- Impact is logged when Product records scope · sequencing · kill tied to the study

---

## 🎨 Component Inventory

| Component | Source | Purpose |
|-----------|--------|---------|
| Card | @hexa/card | Research dossier container |
| Button | @hexa/button | Review / Action buttons |
| TextButton | @hexa/text-button | External links (JIRA, Confluence) |
| IconButton | @hexa/icon-button | Expand/collapse rows |
| BadgeStatus | @hexa/badge-status | Initiative status (On Track, At Risk, Blocked) |
| Chip | @hexa/chip | Initiative tag (LWC UK Onboarding) |
| Divider | @hexa/divider | Section breaks |
| Icons | @hexa/icons | Checkmark, Alert, Chevron, External link |

**All components** from `@hexa/*` via hexa-web library — no composition, no HTML simulation.

---

## 📊 Data Structure

```typescript
interface GlobalRankInitiative {
  id: string                          // Unique row ID
  rank: number                        // #1, #2, #3...
  title: string                       // Initiative name
  pillar: string                      // Business pillar
  gmv: string                         // Annual GMV estimate
  status: 'on-track' | 'at-risk' | 'blocked'
  researchEvidence: 'strong' | 'medium' | 'weak' | 'none'
  
  linkedStudy?: {
    title: string                     // Study title
    beesuxrId: string                // BEESUXR-####
    beesipId: string                 // BEESIP-####
    confluenceUrl: string            // Readout link
  }
  
  signals?: {
    executiveDemand: 'yes' | 'partial' | 'no'
    commercialImpact: 'yes' | 'partial' | 'no'
    userbaseReach: 'yes' | 'partial' | 'no'
    studyConfidence: 'yes' | 'partial' | 'no'
  }
  
  decisionLog?: {
    impact: 'scope' | 'sequencing' | 'kill-defer'
    description: string
  }
}
```

---

## 🎯 Leadership Walkthrough Script

### Frame (30 seconds)
> "Research delivers on ranked demand, but visibility is fragmented. We see Global Rank — but where does research evidence sit? And how do we interpret what studies tell us about impact?"

### Show Problem 1 (30 seconds)
> **Click row #1:** "See this green badge? 'Research Evidence: Strong.' Product and leadership can scan the table instantly: which bets have research behind them? No guessing. One click tells us research was linked, published, and triangulated against the business case."

### Show Problem 2 (60 seconds)
> **Expand the research dossier:** "Here's what 'Strong' means — four signals. Executive demand: YES. Is LWC onboarding on the stack? Yes, it's in implementation. Commercial impact: YES. The business case cites $1.2B addressable GMV, 54% telesales — that's the commercial prayer. Userbase reach: PARTIAL. We have 13,500 accounts defined, but the warehouse query is pending — honest about gaps. Study confidence: YES. Linked to BEESIP, published readout, method fits. Signals place the study on the stack."

### Show Decision Impact (30 seconds)
> **Point to Decision Log:** "Here's where impact happens: sequencing. The study answers — should we invest in Grow capacity or Customer self-service first? 54% of orders come from telesales, driven by system gaps (stock, pricing, search) — not digital resistance. That informs Product's sequencing on the ranked stack."

### Close (30 seconds)
> "This is guide-not-gate. Research reads the stack; never writes Global Rank. Four signals say 'here's the evidence.' The study says 'here's what changed because of it.' That's impact — decisions logged, not GMV attributed."

---

## 🔧 Customization Guide

### Add New Initiative
Edit `src/components/ResearchImpactRank.tsx`:

```typescript
const mockData: GlobalRankInitiative[] = [
  // ... existing items
  {
    id: 'gr-6',
    rank: 6,
    title: 'Your Initiative',
    pillar: 'Your Pillar',
    gmv: '$XXM',
    status: 'on-track',
    researchEvidence: 'strong', // or 'medium', 'weak', 'none'
    linkedStudy: {
      title: 'Your Study Title',
      beesuxrId: 'BEESUXR-####',
      beesipId: 'BEESIP-####',
      confluenceUrl: 'https://...',
    },
    signals: {
      executiveDemand: 'yes', // or 'partial', 'no'
      commercialImpact: 'yes',
      userbaseReach: 'partial',
      studyConfidence: 'yes',
    },
    decisionLog: {
      impact: 'sequencing', // or 'scope', 'kill-defer'
      description: 'Your decision narrative',
    },
  },
]
```

### Change Theme
In `index.html`, change `data-theme`:
```html
<html lang="en" data-theme="hexa">  <!-- or "bees" -->
```

### Adjust Colors
- Use HEXA token classes: `bg-success-light`, `text-warning-dark`, `bg-informative-light`
- Do not override with custom CSS

---

## 📐 Responsive Breakpoints

| Breakpoint | Min Width | Status |
|-----------|-----------|--------|
| Mobile | 320px | Tested (single-column layout) |
| Tablet | 426px | Tested |
| Desktop | 1025px | Primary (grid layout) |

**Prototype is mobile-responsive.** Expand/collapse works on all sizes.

---

## 🚀 Next Steps

### For Leadership Review
1. Open http://localhost:5173
2. Walkthrough: Start with #1 (LWC UK), expand to show research dossier
3. Highlight: Green badge → Four signals → Decision impact
4. Discuss: "How does this change where you prioritize next quarter?"

### For Product Implementation
1. **Intake phase**: Add "Research" field to BC submission form (link prior studies)
2. **Ranking phase**: Auto-populate four signals from linked BEESIP + BC metadata
3. **Planning phase**: Research dossier panel on Global Rank view (pilot with LWC UK)

### For Research Operations
1. Maintain study artifact links (Confluence, BEESUXR, BEESIMP)
2. Log decision impact monthly (scope · sequencing · kill)
3. Feed signal evaluation into quarterly impact register

---

## 📋 Files

```
research-impact-rank/
├── package.json              # Dependencies (hexa-web components)
├── vite.config.ts            # Build config
├── index.html                # Entry point (BEES theme, fonts)
├── src/
│   ├── main.tsx              # React DOM render
│   ├── App.tsx               # Root component
│   ├── styles.css            # Global styles
│   └── components/
│       └── ResearchImpactRank.tsx  # Main prototype (all logic here)
├── tsconfig.json             # TypeScript config
└── README.md                 # This file
```

---

## 🔗 Related Documents

- **Presentation deck**: `skills/bees-powerpoint/examples/research-impact-suri-july-2026.json`
- **Impact register**: `BEES/BEES Cross/Research/Research_Impact.md`
- **Experimentation framework**: `skills/bees-powerpoint/examples/research-impact-suri-july-2026.json` (slides 15–20)

---

## 📞 Questions?

- **"How do the four signals differ from the 5-question impact score?"** → Signals read **existing indexes** (Global Rank, BC GMV, BEESIP chain, Confluence). Impact score is **qualitative assessment**. Signals are **quantitative filters**.

- **"What if a study scores PARTIAL on Reach?"** → That's honest. Warehouse queries take time. PARTIAL signals you need to run them before scaling the bet. Guide-not-gate.

- **"Who owns updating the signals?"** → Research + Product OPs co-own. Research qualifies the study; ProdOps verifies the signals map to the BC + BEESIMP chain.

- **"Can we export this data?"** → Yes. Decision log feeds into quarterly impact register (Research_Impact.md). Signals feed into experiment backlog prioritization.

---

**Status:** Prototype complete. Ready for leadership walkthrough. Next iteration: integrate with B&P Hub's actual Global Rank API (post-pilot).
