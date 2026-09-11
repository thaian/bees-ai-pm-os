# Research Impact Prototype — Delivery Summary

## ✅ What's Built

A working, interactive prototype demonstrating research impact integration on the BEES B&P Hub's Global Rank view. Built with React + HEXA design system components.

**Location:**
```
BEES/BEES Cross/Research/prototypes/research-impact-rank/
```

**Running:**
```bash
cd "BEES/BEES Cross/Research/prototypes/research-impact-rank"
npm run dev
# Visit http://localhost:5173
```

---

## 🎯 Narrative Demonstrated

### Problem 1: Visibility
**Statement:** "Research delivers, but visibility is fragmented. Hard to see which studies sit on ranked demand."

**Solution shown:** Global Rank rows now display a research evidence badge (`✓ Research: Strong`). One glance tells leadership which of the top 5 bets have research backing.

### Problem 2: Interpretation
**Statement:** "How do we interpret what studies tell us about impact without a parallel priority system?"

**Solution shown:** Four signals (YES/PARTIAL/NO) appear when row is expanded:
1. **Executive Demand** — Is linked demand on the Product stack?
2. **Commercial Impact** — What commercial KPIs are linked?
3. **Userbase Reach** — What % of the BC addressable segment?
4. **Study Confidence** — Is study linked and documented?

### Impact Model
**Statement:** "Research informs decisions (scope · sequencing · kill) tied to ranked demand, not GMV attribution."

**Solution shown:** Decision log section shows how the study changed Product priorities:
- **Sequencing change** (LWC UK example): "Grow capacity before Customer self-service — 54% telesales driven by system gaps, not digital resistance."

---

## 📐 Component Inventory (HEXA Design System)

| Component | Used For | Status |
|-----------|----------|--------|
| Card | Research dossier container | ✅ @hexa/card |
| Button | Review Study / Add to Planning actions | ✅ @hexa/button |
| TextButton | External links (JIRA, Confluence) | ✅ @hexa/text-button |
| IconButton | Expand/collapse row chevrons | ✅ @hexa/icon-button |
| BadgeStatus | Initiative status (On Track, At Risk) | ✅ @hexa/badge-status |
| Chip | Initiative tag (LWC UK Onboarding) | ✅ @hexa/chip |
| Divider | Section breaks in dossier | ✅ @hexa/divider |
| Icons | Checkmark, Alert, Chevron, External link | ✅ @hexa/icons |

**All real components from hexa-web.** No composition, no HTML simulation, no tokens overridden.

---

## 🗂️ File Structure

```
research-impact-rank/
├── package.json                    # hexa-web dependencies
├── vite.config.ts                  # Build config
├── index.html                      # Entry (BEES theme, Google Fonts)
├── tsconfig.json, tsconfig.node.json
├── src/
│   ├── main.tsx                    # React DOM render
│   ├── App.tsx                     # Root wrapper
│   ├── styles.css                  # Global styles (hexa imports)
│   └── components/
│       └── ResearchImpactRank.tsx  # Entire prototype (all logic)
├── README.md                       # Technical + implementation guide
└── LEADERSHIP-WALKTHROUGH.md       # 8-min presentation script
```

---

## 💻 Live Preview

**Dev server running:** `http://localhost:5173/`

**Test these interactions:**

1. **List view** — Scroll through all 5 initiatives
   - See research evidence badges (Strong/Medium)
   - Notice status indicators (On Track, At Risk)
   - Note GMV and pillar labels

2. **Expand row #1 (LWC UK)** — Click chevron
   - View study artifact links (BEESIP-7149, BEESUXR-1514)
   - See four signals layout (YES/PARTIAL/NO)
   - Read decision log (sequencing change)
   - See action buttons (Review Full Study, Add to Planning)

3. **Collapse + expand #4 (Rewards)** — Demonstrate toggling
   - Shows "Medium" evidence (fewer signals visible, but same structure)
   - Illustrates signal patterns

4. **Mobile responsiveness** — Resize browser
   - Signals grid collapses to single column on tablet/mobile
   - Buttons stack vertically
   - All interactive elements remain functional

---

## 🎬 Leadership Presentation (8 min)

**Script:** See `LEADERSHIP-WALKTHROUGH.md`

**Key talking points:**
1. ✓ Research layer doesn't rewrite Global Rank (Product owns it)
2. ✓ Four signals read existing indexes (not a new scorecard)
3. ✓ Impact = decisions logged, not GMV attributed
4. ✓ PARTIAL signals are honest (we know what data we're missing)

**Q&A prep:**
- "How is this different from the impact score?" → Signals are real-time fit to a ranked bet; impact score is historical quality assessment
- "What if a study is PARTIAL on Reach?" → That's good. We run the warehouse query before scale. Guide-not-gate.
- "Who fills in signals?" → Research (1h), Product OPs spot-check (30m)

---

## 📊 Data Model

Mock data includes **5 initiatives** with full details:

```typescript
{
  rank: 1
  title: "BEES One Platform Evolution"
  gmv: "$2.8B"
  status: "on-track"
  researchEvidence: "strong"
  
  linkedStudy: {
    title: "LWC UK Onboarding Research"
    beesuxrId: "BEESUXR-1514"
    beesipId: "BEESIP-7149"
    confluenceUrl: "https://ab-inbev.atlassian.net/wiki/spaces/BEESPKM/pages/5758484539"
  }
  
  signals: {
    executiveDemand: "yes"
    commercialImpact: "yes"
    userbaseReach: "partial"
    studyConfidence: "yes"
  }
  
  decisionLog: {
    impact: "sequencing"
    description: "Sequencing Grow vs Customer investment — 54% telesales driven by system gaps..."
  }
}
```

---

## 🔧 How to Customize

### Add a new initiative
Edit `src/components/ResearchImpactRank.tsx` → add object to `mockData` array with same structure.

### Change status color
Edit `statusConfig` in `RankRow` component. Variants: `'success'`, `'warning'`, `'destructive'`.

### Update signal values
Change `signals` object: `'yes'` → `'no'`, `'partial'` → anything in YES/PARTIAL/NO set.

### Switch theme
In `index.html`, change `data-theme="bees"` to `data-theme="hexa"` (HEXA purple theme).

### Adjust signal definitions
Edit the `<ul>` in Signal Definitions section (at bottom of expanded dossier).

---

## 🌐 Responsive Breakpoints (HEXA Standard)

| Device | Breakpoint | Layout | Status |
|--------|-----------|--------|--------|
| Mobile | 320–425px | Single column (signals stack) | ✅ Tested |
| Tablet | 426–1024px | Single column (wider) | ✅ Tested |
| Desktop | 1025px+ | Multi-column (signals grid 2x2) | ✅ Primary |

All interactions (expand/collapse) work on all sizes.

---

## 📋 Implementation Readiness

### BEESUXR → BEESIMP linking (hub integration prerequisite)

The B&P Hub **cannot pull Confluence** for the research dossier. Studies must connect to Global Rank rows via a direct Jira link:

```text
BEESUXR epic  ──Discovers──►  BEESIMP BC/FR  (Global Rank row)
```

**BEESIP is not ranked** — parent initiative links alone are insufficient for hub dossier population.

Researchers use the Cursor skill:

```text
@skills/research-beesimp-linker/SKILL.md
```

| Mode | What it does |
|------|----------------|
| **Audit** | Lists your BEESUXR epics, suggests BEESIMP, flags gaps |
| **Resolve** | Picks best BC when parent has multiple linked demand |
| **Apply** | Sets parent BEESIP + creates Discovers links (when MCP permissions allow) |

Pilot audit (27 epics, Thaian): **0/27** had Discovers links before skill rollout. See [`skills/research-beesimp-linker/examples/thaian-pilot-audit.md`](../../../../skills/research-beesimp-linker/examples/thaian-pilot-audit.md).

**Retroactive cleanup:** Each researcher runs audit mode on their assigned epics and applies confirmed mappings. Target: 100% of product-facing studies linked to a ranked BC where one exists.

**MCP note:** Cross-project links to BEESIMP may require manual creation in Jira UI if OAuth lacks link permission on BEESIMP. The skill outputs a checklist when this happens.

---

**For Pilot (6 weeks, LWC UK):**

1. **Research side:**
   - Publish BEESUXR-1514 readout (Confluence v13) ✅ Done
   - Link to BEESIP-7149 epic ✅ Done
   - **Discovers link BEESUXR-1514 → BEESIMP-21978** ← **ACTION: Create in Jira** (Linked work items · discovers)
   - Populate four signals based on research data ← **ACTION: Research fills this in**

2. **Product OPs side:**
   - Link BC (BEESIMP-21978) to BEESIP-7149 ← **ACTION: ProdOps verifies**
   - Spot-check signal accuracy ← **ACTION: ProdOps + Research monthly**

3. **Leadership side:**
   - Use this prototype in weekly prioritization meeting ← **ACTION: Leadership triages decisions**
   - Document: "Did research change sequencing? Yes/No? Why?"

4. **Engineering (post-pilot):**
   - If pilot is successful, integrate with live Global Rank API
   - Auto-populate signals from BEESIMP metadata
   - Wire decision log to B&P Hub workflow

---

## 🎯 Success Criteria

**Pilot success = leadership uses the prototype to:**
- ✅ Identify which ranked bets have research backing (in <5 sec)
- ✅ Understand signal meanings (YES/PARTIAL/NO)
- ✅ Make sequencing decisions based on decision log
- ✅ Feed back: "What's missing? What should we change?"

**Iteration triggers:**
- If leadership says "I don't understand PARTIAL" → Simplify signal language
- If Product OPs say "Signals take too long to populate" → Automate from BC metadata
- If signals never match Product sequencing → Reframe research layer (maybe different signals needed)

---

## 📞 Next Steps

### Immediate (this week):
- [ ] Leadership reviews prototype at http://localhost:5173
- [ ] Use LEADERSHIP-WALKTHROUGH.md script for 8-min walkthrough
- [ ] Gather feedback: "Does this help you prioritize?"

### Short-term (2 weeks):
- [ ] Researchers run `@skills/research-beesimp-linker` audit on assigned BEESUXR epics
- [ ] Apply Discovers links for pilot batch (BEESUXR-1514, 1610, 1611, 1554, 1451)
- [ ] Research fills in four signals for LWC UK study
- [ ] ProdOps verifies links (BC → BEESIMP → BEESIP)
- [ ] Schedule weekly meeting with prototype on screen

### Medium-term (6 weeks):
- [ ] Run pilot with LWC UK Onboarding
- [ ] Log monthly decision impact (scope · sequencing · kill)
- [ ] Roll signals into Q3 research impact register

### Long-term (post-pilot):
- [ ] Evaluate: Did research layer change Product decisions?
- [ ] If successful, scope engineering work for B&P Hub integration
- [ ] If not, iterate on signal definitions or presentation

---

## 📚 Related Artifacts

- **BEESUXR → BEESIMP linker skill**: `skills/research-beesimp-linker/SKILL.md`
- **Presentation deck**: `skills/bees-powerpoint/examples/research-impact-suri-july-2026.json` (slides 1–20)
- **Impact register**: `BEES/BEES Cross/Research/Research_Impact.md`
- **Framework doc**: `BEES/BEES Cross/Research/Research_Impact.md` (first section)
- **LWC study readout**: Confluence v13 (linked in prototype)

---

## ✨ Deliverables Summary

| Artifact | Purpose | Location |
|----------|---------|----------|
| **Prototype** | Working UI (React + HEXA) | `research-impact-rank/src/components/` |
| **README.md** | Technical docs + customization guide | `research-impact-rank/README.md` |
| **LEADERSHIP-WALKTHROUGH.md** | 8-min presentation script + Q&A | `research-impact-rank/LEADERSHIP-WALKTHROUGH.md` |
| **Live server** | http://localhost:5173 | Running now |

---

**Status: ✅ Complete and ready for leadership review.**

Next: Open http://localhost:5173, follow LEADERSHIP-WALKTHROUGH.md script, and gather feedback.
