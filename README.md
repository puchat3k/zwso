# ZWSO . Zeitgeist World State Observatory

ZWSO is an experiment in creating persistent, contemporaneous snapshots of the observable global information and cultural environment.

Once a week, ZWSO surveys a broad public-source landscape across world affairs, politics, business, technology and AI, entertainment, sport, health, cyber security, climate and significant weather, internet culture and memes. It records a structured snapshot of what appears salient, what may be changing, and where the evidence is uncertain or contradictory.

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

## Immutability

Historical snapshots are not rewritten when the methodology improves. Methodology changes create a new version. Original records remain intact.

Historical reconstructions are explicitly labelled `retrospective_backfill` and should not be treated as equivalent to snapshots generated contemporaneously.

## Public by design

ZWSO is built exclusively from public-source information and derived analysis.

## Architecture

The initial implementation is intentionally small:

public web research → weekly synthesis → immutable snapshot → longitudinal archive

No crawler, real-time feed infrastructure, dashboard or dedicated sentiment-analysis pipeline is required unless actual use later demonstrates a need.

## Status

Experimental. If the snapshots do not prove useful, the correct outcome is to stop the experiment rather than expand infrastructure to justify it.
