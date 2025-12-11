---
title: "Consistency Tracker"
description: "A minimal habit tracking system built with TypeScript and local-first architecture"
category: "tools"
year: "2024"
tech: ["TypeScript", "IndexedDB", "Web Workers", "PWA"]
link: "#"
---

A deliberately simple habit tracker that works entirely offline.

## The Problem

Most habit trackers are bloated with features nobody needs. Streaks, badges, social features, AI insights. They're designed to keep you in the app, not help you build habits.

I wanted something that gets out of the way.

## The Solution

A local-first PWA that stores everything in IndexedDB. No account. No server. No analytics tracking you. Just you and your habits.

**Features:**
- Track daily habits (yes/no)
- View consistency over time
- Export your data as JSON
- Works offline
- Syncs across devices via your own cloud storage

## Technical Details

Built with vanilla TypeScript to keep it fast and simple. Uses Web Workers for background sync. IndexedDB for storage. Service Workers for offline support.

The entire app is under **50KB gzipped**.

---

*To add screenshots:* Place your image in `/public/images/projects/` and reference it:

```markdown
![App screenshot](/images/projects/consistency-tracker-screenshot.png)
```
