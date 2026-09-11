# Leadership Walkthrough Script
## Research Impact on Global Rank Prototype

---

## 🎬 Full Presentation (8 minutes)

### **Slide 0: Frame the problem (1 minute)**

**What you'll see:**
A mockup of the BEES B&P Hub Global Rank view — the list of prioritized initiatives Product and leadership review weekly.

**The challenge:**
- Product leadership owns Global Rank (GMV, demand, strategic fit)
- Research delivers insights, but visibility is fragmented
- Hard to see: Which studies sit on ranked demand? What artefacts exist? What decision did they inform?
- Leadership asks: "Is Research capacity on the right stacks?"

**Two problems we're solving today:**

1. **Visibility problem**: Where does research evidence appear on the row I'm already looking at?
2. **Interpretation problem**: When I see "research," what signals tell me this study actually matters to this bet?

---

### **Interaction 1: Show Problem 1 — Research evidence on rows (1.5 minutes)**

**Your action:** Point to **row #1** on the screen (BEES One Platform Evolution).

**What you'll see:**
```
Rank | Initiative                  | GMV    | Status    | Research Evidence
-----|:----------------------------|--------|-----------|──────────────────
#1   | BEES One Platform Evolution | $2.8B  | On Track  | ✓ Research: Strong
```

**What this means:**
"See the green badge with the checkmark? 'Research: Strong.' Product and leadership can scan this table in seconds. Which of our top 5 bets have research behind them? All of them. No guessing. One glance tells us:
- Research was linked to this initiative
- Study was published and accessible
- Evidence was triangulated against the business case"

**Why this matters:**
"This is the **visibility layer**. Before this, if you asked 'Does LWC Onboarding have research?' Product would need to dig through Jira, Confluence, BEESUXR — 10 minutes of work. Now: one badge."

---

### **Interaction 2: Expand row to show research dossier (2.5 minutes)**

**Your action:** Click the **chevron down** on row #1 to expand. 

**The view changes.** Now you see:

```
RESEARCH IMPACT DOSSIER
─────────────────────────────────────────

Study Artifacts
• BEESIP-7149 (link)
• BEESUXR-1514 (link)

─────────────────────────────────────────

Research Impact Signals

Executive Demand: YES
Is linked demand on the Product stack?

Commercial Impact: YES
What commercial KPIs are linked?

Userbase Reach: PARTIAL
What % of BC addressable segment?

Study Confidence: YES
Is study linked & documented?

─────────────────────────────────────────

Decision Impact

🎯 Sequencing Change
"Sequencing Grow vs Customer investment — 54% telesales 
driven by system gaps (stock, pricing sync, search), not 
digital resistance."
```

**Walk through each section:**

**Part A: Study Artifacts (20 seconds)**
"Click those links. One takes you to the Jira epic (BEESIP-7149). Another takes you to the UXR readout (BEESUXR-1514). Readout has the interview findings, methodology, capability mapping table. Product can review it in 10 minutes, raise questions, and decide if it changes sequencing."

**Part B: Four Signals (1 minute)**
"Now here's the key: **what does 'Research: Strong' actually mean?**"

- **Executive Demand = YES**: Is this ranked initiative on the Product stack? BEESIP-7149 is In Implementation. LWC Onboarding is a strategic priority for partner expansion in UK/Europe. That's a YES.

- **Commercial Impact = YES**: Is business value quantified? BEESIMP-21978 says $1.2B annual partner GMV. Telesales is 54% of volume — that's the channel mix decision. That's a YES.

- **Userbase Reach = PARTIAL**: How many people does this affect? BC says 13,500 UK retail accounts (excl. Modern Trade). Defined. But the warehouse query on GB active ordering POCs is pending. We're honest about the gap — PARTIAL, not NO. We'll run that query before we scale the bet.

- **Study Confidence = YES**: Is the study linked and documented? BEESIP-7149 parent-links to BEESUXR-1514. Confluence readout v13. 14 interviews (9 internal, 5 POC). Published and accessible. Triangulation works. That's a YES.

**What this tells you:**
"Three YES and one PARTIAL. If I saw three NOs and a PARTIAL, I'd say: 'Not ready. Come back when Reach is defined.' That's the signal system at work."

**Part C: Decision Impact (30 seconds)**
"The study answers this question: Should we invest in Grow (telesales tooling — stock, pricing, search) or Customer (self-service, digital experience) first?"

The data says: "Admin load blocks upsell. 54% of orders come from telesales — that's a system bottleneck, not user preference. Sequence Grow capacity first."

**Why this is impact:**
"It's not 'the study was interesting.' It's 'the study changed what order we ship things on a ranked bet.' That's documented sequencing change tied to evidence."

---

### **Interaction 3: Show multiple rows (1 minute)**

**Scroll up to see rows #2–5 all collapsed.**

"Notice: All 5 top initiatives have 'Research: Strong' or 'Research: Medium' badges. 
- #2: Promotions & Commerce Clarity — Strong
- #3: Out of Stock Transparency — Strong
- #4: Rewards Tier Visibility — Medium
- #5: Finance Hub Integration — Strong

If I click on #5 (Finance Hub), I'd see: Commercial Impact YES, Reach PARTIAL (same as LWC — warehouse query pending), Confidence YES, Executive Demand YES. Same signal pattern: research informs sequencing, not bucket funding."

---

### **Frame the outcome (2 minutes)**

**Close the expanded row. Return to the list view.**

"Here's what changed:

**Before this prototype:**
- Rank #1 = $2.8B GMV · Status = On Track
- Question: 'Do we have research on this?'
- Answer: 'Uh... let me ask around.'

**After integration (what you're seeing):**
- Rank #1 = $2.8B GMV · Status = On Track · **✓ Research: Strong**
- Question: 'What signals confirm this research matters?'
- Answer: 'Click to expand. Four signals + decision log right here.'

**Why this works:**

1. **For Product**: Research layer doesn't rewrite Global Rank. It reads it. "Here's what's already ranked #1, #2, #3. Here's what research says about sequencing that stack."

2. **For Leadership**: Decision confidence increases. "We're not making up priorities. We're sequencing a ranked bet based on evidence."

3. **For Research**: Impact is measurable. "When we log 'sequencing change,' it rolls up to the quarterly impact register. No more 'we don't know if research mattered.'"

---

## 📋 Key Messages to Emphasize

### Message 1: "This is not a replacement for Global Rank"
> "Research doesn't write the rank. Product owns GMV, demand, strategy. Research reads the rank and says: 'On this ranked stack, here's what evidence tells us about how to sequence.' It's triangulation, not a grade."

### Message 2: "Four signals are yes/partial/no — not points"
> "You don't add up signals to get a score. You read them as a pattern. Three YES + one PARTIAL says: 'Study is ready to inform decisions, but we need to close one data gap.' Three NO + one PARTIAL says: 'Not ready. Come back when you have more evidence.'"

### Message 3: "Impact = decisions logged, not GMV attributed"
> "We never say: 'Research moved $1.2B.' We say: 'Research on LWC Onboarding informed sequencing: Grow capacity before Customer self-service.' Measurement Zone owns the post-ship GMV proof."

### Message 4: "Pilot with LWC UK this quarter"
> "We'll run this on LWC Onboarding for the next 6 weeks. Research: publish signals + decision log. Product: link in BC + BEESIMP. Leadership: use this view in weekly prioritization meeting. We'll iterate based on what's missing or unclear."

---

## 🎯 Anticipated Questions & Answers

### Q: "How is this different from the impact score in Research_Impact.md?"

**A:** "Good catch. Impact score (Reach, Pain, Confidence, Strategic, Aproveitamiento) tells us: 'Should this research ever be published?' Signals (Executive Demand, Commercial Impact, Reach, Study Confidence) tell us: 'Does this study fit this ranked bet right now?'

Example: Stepped Discounts research scored 24/25 (Critical). All four signals are YES. That research is high-value AND fits the Promotions stack (ranked #2). Both are true at the same time."

### Q: "What if a study is strong but doesn't sit on any ranked initiative?"

**A:** "Then it informs design principles and future roadmap work — but it doesn't get a research dossier on Global Rank. It lives in the research library. We don't force-fit studies onto ranked demand. That's the 'guide not gate' principle."

### Q: "Why PARTIAL on Userbase Reach for LWC? That feels risky."

**A:** "Honest accounting. We have 13,500 accounts defined from the BC. But we don't have the warehouse query that says 'what % of those 13.5k are active ordering POCs?' That takes 48 hours to run. Rather than guess, we say PARTIAL. Product and leadership know: 'We're committing to this sequencing, but we'll validate reach before scale.' It's a commitment + a trigger."

### Q: "Who fills in the four signals? How long does it take?"

**A:** "Research leads fill it in during study readout (1 hour). They verify: 'Is this linked to a ranked BEESIMP?' (Demand), 'What GMV does the BC claim?' (Commercial), 'What's the user pool?' (Reach), 'Is readout published + linked?' (Confidence). It's not extra work — it's structuring data we already have. Then Product OPs spot-checks it: 'Do the links work? Is metadata accurate?' Another 30 min."

### Q: "Do we update signals after launch?"

**A:** "Only if the linked BC or BEESIMP changes. Signals lock to the ranked bet at a point in time: 'On this date, here's what research said about this stack.' Post-launch, Measurement Zone owns new GMV data. Research signals don't change retroactively."

---

## 🚀 Call to Action

**For Leadership:**
"This is a pilot. We'll run it with LWC Onboarding for 6 weeks. Join the weekly prioritization meeting and use this view. Tell us: 'Does this help you make sequencing calls? What's missing?'"

**For Product OPs:**
"Help Research link BC metadata to BEESIMP chains. Make sure initiative text is clear. Spot-check signals with us monthly."

**For Research:**
"Maintain study artifact links. Log decisions monthly: scope · sequence · kill. This feeds into Q3 impact register."

---

## ⏱️ Timing Breakdown

- **Opening frame**: 1 minute
- **Problem 1 walkthrough**: 1.5 minutes
- **Research dossier expanded (all 4 signals + decision)**: 2.5 minutes
- **Multiple rows quick scan**: 1 minute
- **Outcome + messaging**: 2 minutes
- **Q&A**: Flexible (5–10 min reserve)

**Total: ~8 minutes for full walkthrough + Q&A**

---

## 📸 Screenshot Suggestions (If Presenting Remotely)

Take these before the call:
1. **Collapsed list** — All 5 rows visible, research badges showing
2. **Row #1 expanded** — Full dossier, all four signals visible
3. **Close-up on signals** — To highlight YES/PARTIAL/NO pattern
4. **Decision log section** — To show "sequencing" impact type

---

**Ready to present.** Open http://localhost:5173 and start with the opening frame.
