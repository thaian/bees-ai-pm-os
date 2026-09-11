# Quick Start Card

## 🚀 Open Prototype

```bash
cd "BEES/BEES Cross/Research/prototypes/research-impact-rank"
npm run dev
# Visit http://localhost:5173
```

**Status:** Dev server running ✅

---

## 📊 What You're Looking At

**Global Rank Table with Research Layer**

Each row shows:
- **Rank** (#1, #2, #3...)
- **Initiative title** (e.g., "BEES One Platform Evolution")
- **Business pillar** (Core, Monetization, Retention, etc.)
- **GMV** (Annual addressable, e.g., $2.8B)
- **Status badge** (On Track / At Risk / Blocked)
- **Research evidence badge** (✓ Research: Strong / Medium)

---

## 🎯 What to Click

### See Research Dossier
Click **chevron down** on any row (e.g., row #1)

You'll see:
- **Study artifacts** → Links to JIRA epic + UXR study + Confluence readout
- **Four signals** → YES/PARTIAL/NO grid (Executive Demand, Commercial Impact, Reach, Confidence)
- **Decision impact** → "Sequencing," "Scope," or "Kill/Defer" + narrative
- **Action buttons** → "Review Full Study," "Add to Planning"

### Collapse
Click **chevron up** to close the dossier

---

## 🔢 The Four Signals Explained

| Signal | Means | Example (LWC) |
|--------|-------|---------------|
| **Executive Demand** | Is this initiative on the ranked stack? | YES → BEESIP-7149 In Implementation |
| **Commercial Impact** | What GMV / business KPI is linked? | YES → $1.2B addressable |
| **Userbase Reach** | What % of the BC user pool? | PARTIAL → 13.5k accounts defined; query pending |
| **Study Confidence** | Is study linked + documented? | YES → BEESUXR-1514 published, linked to BEESIMP |

**Reading: 3 YES + 1 PARTIAL = "Ready to inform decisions, one data gap to close"**

---

## 💡 The Narrative

**Problem 1:**
"Where does research sit on the ranked demand I already look at?"
**→ Answer: Research evidence badge on row**

**Problem 2:**
"What signals tell me this research actually matters?"
**→ Answer: Four signals (YES/PARTIAL/NO) when expanded**

**Impact:**
"How does research change what Product does?"
**→ Answer: Decision log (Sequencing Grow vs Customer)**

---

## 📋 For Leadership Walkthrough

**Time: 8 minutes**

1. **Setup (1 min)** — Frame the problem
2. **Row #1 list view (1.5 min)** — Show research badge
3. **Row #1 expanded (2.5 min)** — Walk through dossier + all 4 signals
4. **Rows #2–5 quick scan (1 min)** — Show signal patterns repeat
5. **Closing (2 min)** — Key messages + Q&A

**Script:** See `LEADERSHIP-WALKTHROUGH.md`

---

## ✏️ Customization (Quick)

### Change research evidence for row #1
Edit `src/components/ResearchImpactRank.tsx` line ~38:
```typescript
researchEvidence: 'strong',  // Change to: 'medium', 'weak', 'none'
```

### Change a signal
Edit lines ~50–53:
```typescript
signals: {
  executiveDemand: 'yes',        // Change to: 'partial', 'no'
  commercialImpact: 'yes',
  userbaseReach: 'partial',
  studyConfidence: 'yes',
}
```

### Update decision log text
Edit lines ~57–60:
```typescript
decisionLog: {
  impact: 'sequencing',  // or 'scope', 'kill-defer'
  description: 'Your new narrative here',
}
```

---

## 🎨 Theme

**Current:** BEES (yellow/green)

To switch to HEXA (purple):
Edit `index.html` line 2:
```html
<html lang="en" data-theme="hexa">
```

---

## 📱 Responsive

Works on:
- ✅ Mobile (320px+)
- ✅ Tablet (426px+)
- ✅ Desktop (1025px+)

Resize browser to test.

---

## 🔗 Related Files

- **Technical README** → `README.md`
- **Presentation script** → `LEADERSHIP-WALKTHROUGH.md`
- **Delivery summary** → `DELIVERY.md`

---

## ❓ Common Questions

**Q: Is this live?**
A: No, prototype with mock data. Links go to real Jira/Confluence (wired in code).

**Q: Can we export signals to a database?**
A: Not in this prototype, but yes in production (feeds into decision log / impact register).

**Q: What if a signal is "no"?**
A: Shows red indicator. Study not yet ready for this ranked bet. Come back when criterion is met.

**Q: Does this change Global Rank priorities?**
A: No. Research layer is **read-only**. Product owns the rank. Research informs sequencing *within* that rank.

---

**Ready to present.** Use `LEADERSHIP-WALKTHROUGH.md` as your script.
