# Research Impact Prototype — File Index

## 📌 Start Here
- **[000-START-HERE.md](000-START-HERE.md)** — Overview of what was built + next steps

## 🎯 For Different Audiences

### Leadership (8-minute walkthrough)
- **[LEADERSHIP-WALKTHROUGH.md](LEADERSHIP-WALKTHROUGH.md)** — Full script + talking points + Q&A

### Quick Reference
- **[QUICK-START.md](QUICK-START.md)** — One-page card (what to click, signals meanings)

### Product / Implementation
- **[README.md](README.md)** — Technical guide + customization + data structure
- **[DELIVERY.md](DELIVERY.md)** — Full delivery summary + success criteria + implementation roadmap

## 🛠️ Prototype Code

```
src/
├── main.tsx              # React DOM entry
├── App.tsx              # Root component wrapper
├── styles.css           # Global styles (hexa imports)
└── components/
    └── ResearchImpactRank.tsx  # Main prototype (all logic)
```

## 📦 Configuration Files

```
package.json             # hexa-web dependencies + scripts
vite.config.ts          # Build config (Vite + React + Tailwind)
tsconfig.json           # TypeScript configuration
tsconfig.node.json      # TypeScript config for build tools
index.html              # Entry point (BEES theme, Google Fonts)
```

## 🚀 How to Run

```bash
cd "BEES/BEES Cross/Research/prototypes/research-impact-rank"
npm install  # (already done)
npm run dev
# Visit http://localhost:5173
```

## 📋 Which File Should I Read?

| I want to... | Read this |
|--------------|-----------|
| Show this to leadership (8 min) | LEADERSHIP-WALKTHROUGH.md |
| Understand what I'm looking at | QUICK-START.md |
| Get the full context | 000-START-HERE.md |
| Customize the prototype | README.md |
| Understand implementation path | DELIVERY.md |
| See the code | src/components/ResearchImpactRank.tsx |

## 🎨 Component Breakdown

**ResearchImpactRank.tsx** (350 lines) contains:
- `ResearchEvidenceBadge` — Shows ✓ Research: Strong / Medium badge
- `SignalCard` — Single signal card (YES/PARTIAL/NO)
- `RankRow` — One Global Rank row (collapsible)
- `ResearchImpactRank` — Main component (table + all rows)

All using HEXA design system components (Card, Button, Badge, etc.)

## 📊 Data Structure

```typescript
const mockData: GlobalRankInitiative[] = [
  {
    id: string
    rank: number
    title: string
    pillar: string
    gmv: string
    status: 'on-track' | 'at-risk' | 'blocked'
    researchEvidence: 'strong' | 'medium' | 'weak' | 'none'
    linkedStudy?: { ... }
    signals?: { ... }
    decisionLog?: { ... }
  }
]
```

See README.md for full structure.

## 🎯 Feature Checklist

- ✅ Global Rank table with 5 initiatives
- ✅ Research evidence badge on each row
- ✅ Expandable research dossier (chevron toggle)
- ✅ Four signals (Executive Demand, Commercial Impact, Reach, Confidence)
- ✅ Decision log (Sequencing/Scope/Kill + narrative)
- ✅ Study artifact links (BEESIP, BEESUXR, Confluence)
- ✅ Mobile responsive (320px+)
- ✅ HEXA components only (no composition)
- ✅ BEES theme (switchable to HEXA)
- ✅ TypeScript + TSX

## 🔗 Related Documentation

- **Presentation deck**: `skills/bees-powerpoint/examples/research-impact-suri-july-2026.json`
- **Impact framework**: `BEES/BEES Cross/Research/Research_Impact.md`
- **HEXA prototype skill**: `.cursor/skills/hexa-prototype/SKILL.md`

## ❓ FAQ

**Q: Is this production-ready?**
A: No, it's a prototype with mock data. Designed to get leadership feedback before engineering integration.

**Q: Can I add more rows?**
A: Yes, edit `mockData` array in src/components/ResearchImpactRank.tsx.

**Q: Can I change colors?**
A: Yes, use HEXA token classes (bg-success-light, text-warning-dark, etc.). Don't override with custom CSS.

**Q: Does this work on mobile?**
A: Yes, responsive from 320px+.

**Q: Can this connect to a real database?**
A: This prototype uses mock data. Post-pilot, engineer the B&P Hub integration to pull from live APIs.

---

**Status:** ✅ Complete. Ready for leadership walkthrough.
