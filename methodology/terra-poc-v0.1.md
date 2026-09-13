# ZWSO TERRA POC Methodology v0.1

## Status

Experimental extension. This does not replace ZWSO Methodology v0.2 and does not rewrite historical ZWSO snapshots.

Authority: TERRA Canon State v0.3 and locked protocol TERRA-US-POC-001, 2026-09-13.

## Objective

Test whether ZWSO can serve as the sole evidence-ingestion and reconciliation plane for one bounded TERRA market-decision POC while preserving provenance, uncertainty, missingness, longitudinal state and source-family disagreement.

Reference market: United States.
Primary product/team: TERRA v0.3 / Infinity Forge market-decision system, operated by Founder authority + ChatGPT controller/development node + ZWSO evidence plane. Claude is reserved for later independent replication/challenge.

## Non-goals

- Do not turn the weekly ZWSO core into a real-time crawler by default.
- Do not claim population-representative investor mood from public-source sentiment.
- Do not fill UNKNOWN with model guesses.
- Do not rewrite prior ZWSO snapshots.
- Do not bypass ZWSO with an ad hoc parallel pipeline merely to make the POC appear complete.

## Evidence envelope

The TERRA extension may acquire and reconcile public evidence across:

1. Public-company universe and market state
   - market capitalization with observation timestamp
   - exchange/ticker/entity identity
   - sector/industry
   - listing status and corporate actions
   - mega, large, mid, small, micro and nano-cap strata

2. Non-public strategic nodes
   - private firms
   - state-linked entities
   - regulators
   - critical infrastructure
   - banks/capital networks
   - distribution/logistics systems
   - research/university systems
   - labor/talent networks where strategically material

3. Longitudinal company/market evidence
   - revenue, earnings, margins and cash-flow trends where available
   - guidance and revisions
   - valuation and price-state changes
   - material filings and restatements
   - regulatory and corporate events
   - historical depth and comparability flags

4. Sentiment/proxy populations kept separate
   - management/issuer tone
   - analyst/professional-investor tone and estimate revisions
   - institutional/market-implied proxies such as flows, positioning, short interest or options where defensibly sourced
   - retail/public discussion or survey evidence where available

No sentiment population may be collapsed into a generic claim about what investors or the public think without an explicit aggregation method and uncertainty statement.

## Public-company cap-band convention

Reference POC bands in USD market capitalization at observation time:

- mega: >= $200B
- large: $10B to < $200B
- mid: $2B to < $10B
- small: $300M to < $2B
- micro: $50M to < $300M
- nano: < $50M

These are explicit POC conventions, not universal taxonomy. Boundary sensitivity must be tested if a conclusion depends materially on an adjacent threshold.

## Adaptive sampling

Initial target: n=50 heterogeneous discovery nodes.

The initial batch must include every available public cap band, sector diversity and reserved capacity for non-public strategic node classes. It is a stratified discovery sample, not automatically a population-representative sample.

Subsequent batches: 50-100 nodes targeted toward unresolved uncertainty, missing strata, anomalous tails or network gaps. Expansion may continue to 500+ nodes if decision-relevant convergence is not reached sooner.

Any aggregate population claim requires design/post-stratification weights or must be labeled unweighted.

## Prospective convergence rules

Convergence requires two successive sample expansions satisfying all applicable locked heuristics:

- Jensen-Shannon divergence <= 0.05 for cap-band, sector and node-class composition
- Spearman rank correlation >= 0.90 for centrality ranks among shared nodes
- Jaccard overlap >= 0.80 for top-10 strategic-node and route sets
- eligible 0-100 score-distribution median drift <= 5 points
- exact same market gate state
- no newly surfaced HIGH-salience anomaly that changes route or gate

A new decision-changing HIGH-salience anomaly resets the consecutive-convergence count.

These thresholds are prospective POC heuristics. They are not claimed as externally validated universal constants.

## ZWSO ceiling

The POC explicitly measures the practical ZWSO operating envelope:

- source breadth
- cap-band/sector/node-class coverage
- company-level field coverage
- historical depth
- freshness latency
- entity-resolution error
- duplicate rate
- provenance completeness
- extraction success
- source conflict and contamination
- RATUM burden

When a material field cannot be obtained reproducibly within current ZWSO capability, mark it UNKNOWN and record the failure mode. Do not substitute model inference for missing retrieval.

ZWSO_CEILING is reached when additional acquisition effort within the current extension cannot materially improve required evidence coverage without introducing a new infrastructure class, source-access mode or methodology change. Reaching the ceiling is a valid POC result.

## Evidence states

Use TERRA evidence classes:

OBSERVED | RETRIEVED | REPORTED | INFERRED | FORECAST | SPECULATION | UNKNOWN.

Every mutable external observation requires source and as-of timestamp. Historical decision inputs are immutable snapshots.

## Scientific controls

- hypothesis, primary outcome, stop rule and tolerances are frozen before outcome-bearing acquisition
- post-lock changes are amendments/contamination events
- UNKNOWN is not zero
- raw Pukot, Sulog and TAM-U vectors precede scalar projections
- sensitivity analysis is mandatory before material gate use
- source-family disagreement remains visible
- named-person protected traits are never inferred
- discovery evidence does not silently become validation evidence

## Required outputs

- strategic sample ledger with inclusion rationale and evidence lineage
- longitudinal evidence panel
- separated sentiment/proxy ledger
- ZWSO coverage and ceiling report
- convergence sequence
- Pukot/Sulog/TAM-U raw vectors where evidence permits
- route ranking and market gate
- anomaly register plus SAMAR/FUJI/TEMPORAL/RATUM records when triggered
- contamination/amendment log
- next experiment with explicit resolver

## Current baseline limitation

The durable ZWSO database surface observed at POC start exposes `zwso.zeitgeist_snapshots`, whose latest stored snapshot is 2026-08-26 and is designed for weekly world-state context. It does not yet expose the company-level stratified universe, financial-history panel or investor-sentiment ledgers required by this POC. Closing or measuring that gap is part of the experiment rather than grounds for bypassing ZWSO.
