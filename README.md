# ZWSO . Zeitgeist World State Observatory

ZWSO is a weekly, public-by-design world-state instrument.

It preserves what the observable world looked like at a fixed point in time so later analysis and forecasting do not have to reconstruct the past from today's information.

## Current methodology

**Methodology v0.4** reconciles the original weekly world-state archive with the later v0.3 context-conditioned question work.

The weekly snapshot is again the core product.

v0.3's question and context-elasticity machinery remains an optional downstream consumer of immutable ZWSO context packets.

See [methodology/v0.4.md](methodology/v0.4.md).

Historical methodology and snapshots remain unchanged.

## Four state layers

1. **Fast state** . news, conflict, markets, FX, energy, cyber, weather and attention.
2. **Structural state** . trade/globalisation, climate, demographics, poverty, labour, capital, projects, inequality and innovation.
3. **Belief state** . Metaculus, Kalshi and institutional forecast references.
4. **Outcome state** . official observations and resolved events used to score forecasts.

## Production principle

One self-contained weekly production path:

~~~text
public sources
+ GSV public-data stores
+ FX references
+ external forecast references
+ Pukot paper-market scorecard
→ freeze weekly cutoff
→ research + synthesis
→ GSV Supabase zwso.zeitgeist_snapshots
→ zwso.context_packets
→ GitHub snapshots/YYYY/YYYY-MM-DD.md
~~~

GSV Supabase is canonical operational state.

GitHub is the immutable public archive.

The original ZWSO Neon database is legacy and migration evidence, not a production writer.

## Weekly snapshot

A v0.4 snapshot includes:

- fast-state synthesis
- structural regime synthesis
- belief-state read
- outcome and resolution read
- FX rates and recent movement
- dogfood predictive-market performance
- strategic capital allocation
- context indices
- major, emerging and fading themes
- coverage and missingness
- uncertainty and disagreement
- source provenance
- comparison with the previous snapshot

## Forecasting role

ZWSO is a context plane, not an oracle.

Its value should be tested by comparing baseline forecasting performance against fast-state, structural-state, belief-state and full-ZWSO variants.

If a source family does not improve out-of-sample forecasting or useful decision quality, it should lose weight or be removed.

## Public by design

ZWSO uses public-source information and derived analysis. Source rights and allowed use are tracked in the canonical GSV source catalog.

## Repository structure

Keep the public repository small:

- README.md
- methodology/
- snapshots/YYYY/

## Cadence

One public snapshot each Wednesday.

The archive remains weekly even when underlying observations and forecasts update more frequently.

## Status

Experimental and production-active under v0.4.
