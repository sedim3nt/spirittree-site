/*
 * new-mexico.js — Curated geologic "stack stories" for iconic New Mexico locations.
 *
 * Same object shape as the existing GeoLayers.jsx PRESETS (with an added `state` field).
 * Layers run TOP (youngest / surface) -> DOWN (older). Colors are cosmetic earthy hex.
 * Formation names, ages, and approximate thicknesses are taken from the sources cited
 * below. Thicknesses are rough, region-dependent ranges meant for a general-audience
 * reader — not survey-precise values. Where a unit is volcanic/young, the "stack" is
 * intentionally shallow and honest about what is actually present.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * SOURCES (per location)
 * ────────────────────────────────────────────────────────────────────────────
 *
 * Carlsbad Caverns (Capitan reef + Artesia Group backreef shelf):
 *   - NPS, Carlsbad Caverns Geologic Formations:
 *       https://www.nps.gov/cave/learn/nature/geologicformations.htm
 *   - NPS Geodiversity Atlas, Carlsbad Caverns:
 *       https://www.nps.gov/articles/nps-geodiversity-atlas-carlsbad-caverns-national-park-new-mexico.htm
 *   - USGS, Geology of Carlsbad Caverns National Park:
 *       https://www.usgs.gov/geology-and-ecology-of-national-parks/geology-carlsbad-caverns-national-park
 *   - NM Geological Society Guidebook 44, Hill (1993), "Geologic walking tour of
 *     Carlsbad Cavern" (Fig. 3 stratigraphy: Tansill > Yates > Seven Rivers > Queen
 *     backreef interfingering with massive Capitan reef and forereef breccia):
 *       https://nmgs.nmt.edu/publications/guidebooks/downloads/44/44_p0117_p0128.pdf
 *   - USGS Geolex, Artesia Group (Tansill/Yates/Seven Rivers/Queen, Guadalupian):
 *       https://ngmdb.usgs.gov/Geolex/UnitRefs/ArtesiaRefs_6558.html
 *
 * White Sands National Park (gypsum dunefield, Tularosa Basin):
 *   - NPS, Geology of White Sands:
 *       https://www.nps.gov/whsa/learn/geology-of-white-sands.htm
 *   - NPS, White Sands Geology overview:
 *       https://www.nps.gov/whsa/geology.htm
 *   - NM Bureau of Geology virtual tour, White Sands general geology
 *     (Permian Yeso & San Andres formations as gypsum source):
 *       https://geoinfo.nmt.edu/tour/federal/parks/whitesands/geology.html
 *
 * Bandelier National Monument (Bandelier Tuff, Pajarito Plateau):
 *   - NPS, Bandelier "Tuff":
 *       https://www.nps.gov/band/learn/nature/tuff.htm
 *   - NPS, Bandelier "Basalt" (Cerros del Rio basalt underlies the tuff):
 *       https://www.nps.gov/band/learn/nature/basalt.htm
 *   - Bandelier Tuff (members, ages, thickness):
 *       https://en.wikipedia.org/wiki/Bandelier_Tuff
 *   - NM Bureau of Geology, OFGM-42 Frijoles quadrangle report
 *     (Tshirege thickness ~1000 ft west, thinning to ~260 ft eastward):
 *       https://geoinfo.nmt.edu/publications/maps/geologic/ofgm/downloads/42/OFGM-42_FrijolesReport.pdf
 *
 * Ship Rock (minette volcanic neck / diatreme, Navajo Volcanic Field):
 *   - NM Bureau of Geology virtual tour, Shiprock:
 *       https://geoinfo.nmt.edu/tour/landmarks/shiprock/home.html
 *   - NM Museum of Natural History, Navajo (Dine) Volcanic Field:
 *       https://www.nmnaturalhistory.org/volcanoes/navajo-volcanic-field
 *   - Shiprock (minette ~27 Ma; rises ~482 m above plain; intrudes Mancos Shale):
 *       https://en.wikipedia.org/wiki/Shiprock
 *
 * Rio Grande Gorge near Taos (Servilleta Basalt, Taos Plateau Volcanic Field):
 *   - Servilleta Basalt (Pliocene tholeiitic olivine basalt; up to ~460 m near
 *     Embudo; rests on Santa Fe Group):
 *       https://en.wikipedia.org/wiki/Servilleta_Basalt
 *   - NM Museum of Natural History, Taos Plateau Volcanic Field:
 *       https://nmnaturalhistory.org/volcanoes/taos-plateau-volcanic-field
 *   - NM Bureau of Geology, Geologic history of Taos (Santa Fe Group rift fill;
 *     >800 ft of basalt + sediment exposed in the gorge):
 *       https://geoinfo.nmt.edu/geoscience/projects/astronauts/geologic_history.html
 *
 * ────────────────────────────────────────────────────────────────────────────
 * OMISSIONS (verify-or-omit; not invented)
 * ────────────────────────────────────────────────────────────────────────────
 *   - Goat Seep Dolomite (older Guadalupian reef beneath the Capitan, hosting deeper
 *     Lechuguilla passages) is OMITTED from the Carlsbad stack: it is real and
 *     sourced, but it is not exposed at the cavern itself and adding it would imply a
 *     deeper section than the public part of the park shows. Kept the stack to the
 *     reef + backreef shelf that visitors actually walk through.
 *   - Carlsbad backreef thicknesses: deep-well "tops" in the Artesia Group source run
 *     to 1,000+ ft each, but those are cumulative subsurface depths, not unit
 *     thicknesses. Outcrop-area thicknesses near Carlsbad are far thinner; the ranges
 *     used below are conservative surface/near-surface estimates flagged as approximate.
 *   - White Sands: no single named, thickness-quantified bedrock formation is given by
 *     NPS for the basin floor, so the basin-fill and Permian source bedrock layers are
 *     described by unit name (Yeso / San Andres) and age only, with "variable" or
 *     "not specified" thickness rather than a fabricated number.
 *   - Bandelier: the Otowi Member, Guaje Pumice, and Cerro Toledo interval are real and
 *     sourced but thin/locally absent across the plateau; included only the well-
 *     constrained units. Puye Formation conglomerate is present beneath the tuff
 *     regionally but is not consistently exposed in the monument, so it is summarized
 *     under "older basin fill" rather than given a precise thickness.
 *   - Ship Rock is a volcanic neck, not a sedimentary stack. The "layers" describe the
 *     minette/breccia neck and the Cretaceous Mancos Shale it pierces — there is no
 *     deep ordered sedimentary column to read here, and none is invented.
 *   - Rio Grande Gorge: individual Servilleta flow counts/thicknesses vary along the
 *     gorge; used the sourced overall range (thins to ~15 m, up to ~460 m near Embudo)
 *     and the >800 ft basalt-plus-sediment exposure figure rather than per-flow detail.
 */

export const newMexicoPresets = [
  {
    id: 'carlsbad-caverns',
    name: 'Carlsbad Caverns',
    query: 'Carlsbad Caverns National Park, NM',
    state: 'New Mexico',
    coords: { lat: 32.1479, lng: -104.5567 },
    threshold: 0.6,
    summary:
      'A walk down through an ancient Permian sea: a fossil reef and the lagoon-shelf beds behind it, with caves dissolved up from below.',
    story:
      'About 265 million years ago a horseshoe-shaped reef of sponges and algae — the Capitan — grew along the edge of an inland sea, with lagoon and tidal-flat beds (the Artesia Group) stacked behind it on the shelf. Uplift later lifted the whole reef complex into the Guadalupe Mountains. Much later, hydrogen-sulfide-rich water rising from below mixed with groundwater to make sulfuric acid, dissolving the caverns out of the limestone from the inside.',
    layers: [
      { name: 'Tansill Formation', age: 'Late Permian (Guadalupian)', material: 'dolomite, siltstone, evaporite (backreef shelf)', thickness: '~150-300 ft (approx.)', note: 'The cavern entrance is developed in Tansill rock; this is the youngest backreef shelf unit, with tepee structures and tidal-flat beds.', color: '#D8C9A8' },
      { name: 'Yates Formation', age: 'Late Permian (Guadalupian)', material: 'sandstone, dolomite, siltstone (backreef shelf)', thickness: '~250-270 ft', note: 'Lagoon-side shelf beds behind the reef; impermeable silty layers helped steer the groundwater that carved the caves.', color: '#CDBB94' },
      { name: 'Seven Rivers Formation', age: 'Late Permian (Guadalupian)', material: 'dolomite, gypsum, siltstone (backreef shelf)', thickness: '~300-400 ft (approx.)', note: 'Evaporite-rich backreef shelf unit; some Guadalupe caves form along its contact with the reef.', color: '#C2AF87' },
      { name: 'Capitan Limestone (reef)', age: 'Late Permian (Guadalupian)', material: 'massive reef limestone & dolomite', thickness: 'up to ~1,800 ft', note: 'The horseshoe-shaped fossil reef the caverns are dissolved within — built by sponges, algae, and bryozoans, not coral.', color: '#C7BBA6' },
      { name: 'Capitan Limestone (forereef breccia)', age: 'Late Permian (Guadalupian)', material: 'steeply dipping reef-talus breccia', thickness: 'wedge thickening basinward', note: 'Broken reef debris that slid down the seaward front of the reef toward the deep Delaware Basin.', color: '#A99B82' },
    ],
  },
  {
    id: 'white-sands',
    name: 'White Sands',
    query: 'White Sands National Park, NM',
    state: 'New Mexico',
    coords: { lat: 32.7872, lng: -106.3257 },
    threshold: 0.6,
    summary:
      'The largest gypsum dunefield on Earth: white sand recycled from an evaporated Ice Age lake over older basin fill, all sourced from a Permian sea.',
    story:
      'Gypsum laid down in a Permian sea was later raised into the San Andres and Sacramento Mountains, then rain dissolved it and washed it into the closed Tularosa Basin. During the Ice Age it pooled as Lake Otero; when that lake dried, wind picked the gypsum off the playa and the Alkali Flat and piled it into dunes that are still marching today.',
    layers: [
      { name: 'Active Gypsum Dunes', age: 'Holocene (present)', material: 'wind-blown gypsum (selenite) sand', thickness: 'dunes up to ~60 ft', note: 'The bright white dunes themselves — soft gypsum sand still being moved by prevailing winds.', color: '#F2EDE2' },
      { name: 'Interdune & Playa Deposits', age: 'Holocene', material: 'gypsum sand, selenite crystals, mud (Lake Lucero, Alkali Flat)', thickness: 'variable', note: 'Damp flats and the Alkali Flat where new selenite crystals grow and break down into fresh dune sand.', color: '#E4DAC6' },
      { name: 'Lake Otero Bed', age: 'Pleistocene', material: 'gypsum-rich lake sediment', thickness: 'variable', note: 'Floor of the vanished Ice Age lake (~24,000-12,000 yrs ago) that concentrated the gypsum now feeding the dunes.', color: '#D6C7A9' },
      { name: 'Tularosa Basin Fill', age: 'Cenozoic (Quaternary-Neogene)', material: 'alluvium, playa sediment, eroded mountain debris', thickness: 'variable (basin not specified)', note: 'Sediment shed into the closed, fault-bounded rift basin between the San Andres and Sacramento mountains.', color: '#C2AC85' },
      { name: 'Yeso & San Andres Formations', age: 'Permian', material: 'gypsum, limestone, dolomite (source bedrock)', thickness: 'not specified', note: 'The original Permian-sea gypsum, now in the flanking mountains; the ultimate source of all the white sand.', color: '#A8916B' },
    ],
  },
  {
    id: 'bandelier',
    name: 'Bandelier / Pajarito Plateau',
    query: 'Bandelier National Monument, NM',
    state: 'New Mexico',
    coords: { lat: 35.7781, lng: -106.2706 },
    threshold: 0.5,
    summary:
      'Mesas and canyons carved into thick volcanic ash from giant Jemez eruptions, sitting on older lava flows and basin fill.',
    story:
      'A pair of enormous caldera eruptions in the Jemez Mountains, about 1.6 and 1.25 million years ago, blanketed the region in glowing ash that welded into the Bandelier Tuff. Streams then carved that soft, layered tuff into the finger-mesas and canyons of the Pajarito Plateau — soft enough that people later carved cliff dwellings into it. Beneath the tuff lie older basalt lava flows exposed in the lower canyons.',
    layers: [
      { name: 'Bandelier Tuff — Tshirege Member', age: 'Pleistocene (~1.25 Ma)', material: 'rhyolitic ash-flow tuff (ignimbrite)', thickness: '~260-1,000 ft (thins eastward)', note: 'The mesa-capping, cliff-forming tuff of the plateau; soft enough to erode into cavates and the canyons people settled.', color: '#E0CFB0' },
      { name: 'Cerro Toledo Interval', age: 'Pleistocene (~1.6-1.25 Ma)', material: 'reworked tuff, pumice, ash, gravel', thickness: 'thin / locally absent', note: 'A pause between the two great eruptions: reworked ash and pumice between the tuff members.', color: '#D2BE98' },
      { name: 'Bandelier Tuff — Otowi Member', age: 'Pleistocene (~1.61 Ma)', material: 'rhyolitic ash-flow tuff over Guaje Pumice', thickness: 'up to ~390 ft', note: 'The lower, earlier tuff sheet, resting on the easily mined Guaje pumice fall at its base.', color: '#C6B086' },
      { name: 'Cerros del Rio Basalt', age: 'Pliocene-Pleistocene', material: 'basalt lava flows', thickness: 'variable', note: 'Dark older lavas exposed in the lower canyons of the monument, beneath the pale tuff cliffs.', color: '#6E665E' },
      { name: 'Older Basin Fill (Puye / Santa Fe Group)', age: 'Miocene-Pliocene', material: 'volcanic conglomerate, sand, gravel (rift fill)', thickness: 'variable', note: 'River-laid gravels and rift-basin sediment underlying the volcanic cover regionally.', color: '#9C8A6F' },
    ],
  },
  {
    id: 'ship-rock',
    name: 'Ship Rock',
    query: 'Shiprock, NM',
    state: 'New Mexico',
    coords: { lat: 36.6875, lng: -108.8364 },
    threshold: 0.3,
    summary:
      'The eroded throat of an ancient volcano — a hard plug of rare minette standing nearly 1,600 ft above soft Cretaceous shale.',
    story:
      'About 27 million years ago, gas-charged magma of an unusual potassium-rich rock called minette blasted a vent up through flat-lying Cretaceous seabed shale, part of the Navajo Volcanic Field. The volcano itself eroded away, but its solidified throat — once 2,500-3,000 ft underground — was too tough to wear off. Millions of years of erosion stripped the soft shale around it, leaving the spire and its long radiating dikes.',
    layers: [
      { name: 'Minette Volcanic Neck', age: 'Oligocene (~27 Ma)', material: 'minette (potassic lamprophyre) & volcanic breccia', thickness: 'rises ~1,580 ft above plain', note: 'The hard, eroded throat of the volcano — the spire itself; once solidified deep underground.', color: '#4E463F' },
      { name: 'Radiating Minette Dikes', age: 'Oligocene (~27 Ma)', material: 'sheet intrusions of minette', thickness: 'wall-like, up to tens of ft wide', note: 'Wall-like sheets of the same magma that fed sideways from the neck and now stand out as long ridges.', color: '#5C534A' },
      { name: 'Mancos Shale', age: 'Late Cretaceous (~90 Ma)', material: 'marine claystone, siltstone, minor sandstone', thickness: 'thick regional unit', note: 'The soft, flat-lying seabed shale the neck pierced and now rises from; its erosion exposed the spire.', color: '#7C7A72' },
    ],
  },
  {
    id: 'rio-grande-gorge',
    name: 'Rio Grande Gorge (Taos)',
    query: 'Rio Grande Gorge, Taos, NM',
    state: 'New Mexico',
    coords: { lat: 36.4716, lng: -105.7505 },
    threshold: 0.4,
    summary:
      'A deep chasm sliced by the Rio Grande through stacked basalt lava flows of the Taos Plateau, exposing older rift-basin sediments below.',
    story:
      'As the Rio Grande rift pulled the crust apart, lava of the Taos Plateau Volcanic Field — chiefly the Pliocene Servilleta Basalt — poured out as broad sheet flows that filled and capped the basin. Earlier, rivers and uplift erosion had been packing the rift with the sands and gravels of the Santa Fe Group. The Rio Grande then carved down through the hard basalt cap and into that softer fill, opening the gorge.',
    layers: [
      { name: 'Servilleta Basalt (upper flows)', age: 'Pliocene (~5.5-3 Ma)', material: 'tholeiitic olivine basalt sheet flows', thickness: 'up to ~460 ft near Embudo (thins elsewhere)', note: 'The dark, hard lava sheets that cap the gorge rim and resist erosion, holding up the cliffs.', color: '#4A453F' },
      { name: 'Interbedded Flows & Alluvium', age: 'Pliocene', material: 'basalt flows with thin sediment beds between', thickness: 'within the basalt sequence', note: 'Stream sediments caught between successive lava flows record quiet periods between eruptions.', color: '#7A6E5C' },
      { name: 'Santa Fe Group', age: 'Miocene-Pleistocene', material: 'rift-basin sand, silt, and gravel', thickness: 'thick basin fill (>800 ft section exposed with basalt)', note: 'Softer rift-fill sediments exposed in the lower gorge below the basalt cap.', color: '#B59A72' },
    ],
  },
]
