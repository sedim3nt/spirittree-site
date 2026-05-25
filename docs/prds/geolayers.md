# PRD: GeoLayers

**Status:** Ready to build  
**State in SpiritTree:** Inside the organism  
**Version:** v1  
**Product type:** Educational utility  
**Initial territory:** Utah-first

## Thesis

GeoLayers turns a location into a readable ground story.

A user enters an address or coordinates and receives a geological layer schematic, a plain-language explanation of the local stack, and a short interpretation of what that stack means for the experience of the place.

The product should help people read land with more precision. It should stay focused on that job.

## Why SpiritTree Should Build It

- It widens human agency by making public geologic knowledge legible.
- It strengthens sovereignty by helping people understand the ground beneath where they live, hike, build, or study.
- It serves the commons because the core data is public, durable, and civic in character.
- It compounds over time: every new region, layer mapping, and explanation system improves the whole.
- It can be beautiful without becoming decorative nonsense.

## Product Position

GeoLayers is a place-reading tool.

Its posture should be:

- scientific enough to trust
- simple enough to use
- visual enough to invite exploration
- grounded enough to matter

## Primary Users

### Primary

- hikers and place-curious residents
- landowners evaluating a parcel or region
- students and educators who need local geology explained clearly

### Secondary

- landscape designers and architects seeking site context
- developers needing first-pass terrain and substrate literacy
- artists and writers looking for grounded place narratives

## Core User Problems

Users can already find maps, PDFs, and technical geology layers. Most cannot turn them into an intelligible story.

The product solves a translation problem:

- What is under this place?
- In what order did it form?
- Why does the terrain look like this?
- What should a non-specialist understand from this stack?

## Jobs To Be Done

- When I enter a place, help me understand what ground I am standing on.
- When I evaluate a region, show me a trustworthy first-pass picture of its geological layers.
- When I want to learn local geology, make it legible without dumbing it down.
- When I want to share a place with someone else, give me a visual and narrative explanation I can actually use.

## MVP Scope

### Inputs

- street address
- latitude and longitude
- preset demo places

### Outputs

- location summary
- geological stack schematic
- plain-language layer-by-layer explanation
- short regional formation story
- trust note describing precision limits

### Geographic scope

- Utah first
- 3 to 8 high-confidence demo regions
- sandstone-heavy regions preferred for the opening experience

## Non-Goals For v1

- nationwide parcel-grade geological accuracy
- drilling, permitting, or engineering advice
- hydrology, seismic, or environmental compliance workflows
- arbitrary user-generated geology annotations
- 3D terrain modeling

## User Experience Principles

- Start with one input field and one clear promise.
- Make the stack the center of the experience.
- Translate terms without flattening them into trivia.
- Always separate observed data from inference.
- Never imply site-specific certainty when the result is regional or generalized.

## Trust Model

GeoLayers should explicitly label what kind of answer it is giving.

Every result must indicate:

- source layer resolution
- whether the result is exact, interpolated, or demo-derived
- key limits on what the product can say

The product should prefer honest approximation over fake precision.

## Data Sources For v1

- USGS geological map data
- Utah Geological Survey datasets
- public DEM and topographic context layers
- stratigraphic reference sources such as Macrostrat if coverage and licensing fit

## Functional Requirements

- User can enter free text or coordinates.
- System can resolve known Utah demo areas even before full geocoding exists.
- System displays a vertical or ordered stack of layers.
- Each layer includes formation name, relative order, approximate material, and a plain-language meaning.
- System generates a concise “what this means here” interpretation.
- System shows a confidence or fidelity label.

## Product Risks

### Risk: False scientific authority

Mitigation:
- label results clearly
- show source provenance
- distinguish demo mode from data-backed mode

### Risk: Pretty but useless

Mitigation:
- optimize around decisions and comprehension

### Risk: GIS creep

Mitigation:
- keep v1 focused on readable geology stories

## Success Criteria

- A user can understand the local stack in under 90 seconds.
- A non-specialist can explain the place back in plain language after using it.
- At least one core user group uses it for a real decision.
- The Utah-first demo earns trust from a geologically literate user.

## Build Recommendation

Build a narrow, high-trust prototype with:

- Utah-first
- preset-backed
- story-led
- explicit about uncertainty

That scope is enough to test demand for place literacy and public geologic translation.
