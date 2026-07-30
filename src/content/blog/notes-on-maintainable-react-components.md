---
title: "Notes on Writing Maintainable React Components"
description: "A short list of habits that keep React components easy to change six months later."
date: "2026-04-03"
tags: ["React", "Frontend"]
---

Every component I write eventually gets read by someone who isn't me, including future me. A few habits consistently pay off.

## Keep components honest about what they need

If a component needs seven props to render correctly, that's a signal — either it's doing too much, or the data shape passed to it should be restructured. I try to keep prop lists short enough to read in one line.

## Colocate state with the component that owns it

Lifting state up is useful, but lifting it too far creates a prop-drilling mess. I only lift state as high as the nearest common consumer actually requires — not higher "just in case."

## Prefer composition over configuration

A component with ten boolean props (`showHeader`, `hideFooter`, `compactMode`...) is harder to reason about than a few smaller components composed together. Slots and children props usually age better than flags.

## Name things for what they do, not how they're built

`UserCard` ages better than `FlexRowWithAvatar`. The implementation will change; the responsibility usually won't.

## Write the empty and error states first

It's tempting to build the happy path and bolt on loading/error handling later. Doing it in the opposite order tends to produce cleaner data-fetching logic, since the component has to account for "no data yet" from the start.

None of this is groundbreaking — it's just what's held up across enough projects that I now do it by default.
