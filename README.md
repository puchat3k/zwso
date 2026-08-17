# ZWSO . Zeitgeist World State Observatory

ZWSO is an experiment in creating persistent, contemporaneous snapshots of the observable global information and cultural environment.

Once a week, ZWSO surveys a broad public-source landscape across world affairs, politics, business, technology and AI, entertainment, sport, health, cyber security, climate and significant weather, internet culture and memes. It records a structured snapshot of what appears salient, what may be changing, and where the evidence is uncertain or contradictory.

## Project stage

ZWSO is at an early experimental stage. The immediate objective is not to build a comprehensive world-modeling platform. It is to test whether a small, consistent weekly snapshot creates useful longitudinal context.

The project should remain deliberately narrow until the data proves otherwise:

- one weekly snapshot cadence
- a stable methodology
- immutable historical records
- a small set of directional context indices
- explicit uncertainty and source-family divergence
- simple public documentation

The default is **not to add infrastructure, files, dashboards, services, or taxonomies unless repeated use creates a concrete need**.

## Why?

Ad hoc current-information retrieval has a weakness: the past is continually reconstructed from the perspective of the present.

ZWSO instead preserves what the observable information environment appeared to look like at a particular point in time. Over time, those immutable snapshots may help examine when concerns became salient, which apparently major stories disappeared, which weak signals persisted, and how observable narratives moved.

## What ZWSO is not

ZWSO is not a public-opinion poll and does not claim to measure what humanity thinks or feels.

Its indices are synthetic estimates derived from a defined public-source research process. They describe the observed ZWSO source environment and are primarily useful relative to ZWSO's own historical series.

## Method

Methodology v0.2 uses four source families so conventional news selection does not silently become a proxy for world mood:

1. **News and events** . mainstream, regional, local and multilingual reporting where useful.
2. **Public-attitude measurements** . polling, consumer confidence, search behaviour and other direct measurements when available.
3. **Culture and behaviour** . entertainment, sport, memes, creator/social discourse, popular searches and cultural consumption.
4. **Slow reality** . economic statistics, health indicators, scientific and climate observations, technology adoption, markets and other measured conditions.

ZWSO does not force positive stories to counterbalance negative reporting. Instead it records source-family divergence explicitly, including separate media/news mood and broader observed-state signals where the evidence permits.

Each snapshot distinguishes **observed salience**, **interpretation**, **regional or source disagreement**, and **uncertainty**.

## Early signal to watch

The initial retrospective series suggests a potentially useful distinction between **media/news mood** and **broader observed state**. In the most recent reconstructed weeks, news remained negative while economic, cultural and behavioural signals were materially more resilient.

This is not yet a validated finding. The backfill is retrospective and the series is short. It is a hypothesis the contemporaneous Wednesday snapshots can now test.

A second early pattern is that AI excitement and AI anxiety can rise together. ZWSO should preserve that kind of tension rather than collapsing attitudes into one positive/negative score.

## Immutability

Historical snapshots are not rewritten when the methodology improves. Methodology changes create a new version. Original records remain intact.

Historical reconstructions are explicitly labelled `retrospective_backfill` and should not be treated as equivalent to snapshots generated contemporaneously.

## Downstream use

ZWSO should act as a **second-pass contextual overlay**, not as an ambient authority over other reasoning.

For example, an idea should be assessed on its own merits first. ZWSO may then inform timing, saturation, cultural resonance, risk or writing context without changing the intrinsic quality judgment simply because a topic is currently salient.

## Public by design

ZWSO is built exclusively from public-source information and derived analysis.

## Architecture

The initial implementation is intentionally small:

public web research → weekly synthesis → immutable snapshot → longitudinal archive

No crawler, real-time feed infrastructure, dashboard or dedicated sentiment-analysis pipeline is required unless actual use later demonstrates a need.

## Repository structure

Keep the repository simple. At this stage, a small number of durable files is preferable to a deep taxonomy.

Recommended structure:

- `README.md`
- `methodology/`
- `snapshots/YYYY/`

Do not create new folders or supporting documents merely because a concept can be separated. Add structure only when the existing layout becomes genuinely hard to use.

## Status

Experimental. If the snapshots do not prove useful, the correct outcome is to stop the experiment rather than expand infrastructure to justify it.
