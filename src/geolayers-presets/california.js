/*
 * California geologic "stack story" presets for the GeoLayers reader.
 *
 * IMPORTANT: Many of California's iconic sites are IGNEOUS or METAMORPHIC
 * landscapes, not deep layered sedimentary columns. Those are represented
 * HONESTLY here: e.g. Yosemite is a glacier-carved Sierra Nevada batholith
 * (granite/granodiorite plutons under thin glacial fill), and Joshua Tree is
 * Cretaceous monzogranite intruded into Proterozoic gneiss. No fake
 * sedimentary stack has been forced onto a plutonic/glacial landscape.
 *
 * All formation/unit NAMES, AGES, and rough THICKNESSES below are drawn from
 * authoritative sources (NPS geology & Geodiversity Atlas pages, USGS, and
 * USGS-sourced compilations). `material` and `note` are factual plain-language
 * descriptions; `color` is cosmetic only (earthy hex roughly matching the
 * rock). `coords` are verifiable known coordinates for each place.
 *
 * Layers are ordered TOP (youngest / surface) -> DOWN (older).
 * Igneous "ages" are emplacement (crystallization) ages.
 *
 * ---------------------------------------------------------------------------
 * SOURCES BY LOCATION
 * ---------------------------------------------------------------------------
 *
 * Yosemite Valley (Sierra Nevada batholith granites; glacial valley):
 *   - NPS, "Granite - Yosemite National Park" (plutons, mineralogy,
 *     batholith emplaced ~120-85 Ma; El Capitan Granite, Half Dome
 *     Granodiorite, Cathedral Peak, Diorite of North America):
 *     https://www.nps.gov/yose/learn/nature/granite.htm
 *   - NPS, "Geology - Yosemite National Park" (Tioga glaciation began
 *     ~26,000 yr ago, max ~18,000 yr ago; U-shaped valley; sediment fill;
 *     moraines, erratics, striations):
 *     https://www.nps.gov/yose/learn/nature/geology.htm
 *   - USGS / N. King Huber, "The Geologic Story of Yosemite National Park"
 *     (El Capitan Granite ~103 Ma; pluton sequence):
 *     https://www.yosemite.ca.us/library/geologic_story_of_yosemite/rocks.html
 *   - El Capitan Granite (~103 Ma; landmarks El Capitan, Three Brothers,
 *     Cathedral Rocks, Turtleback Dome):
 *     https://en.wikipedia.org/wiki/El_Capitan_Granite
 *   - Half Dome Granodiorite (early Late Cretaceous ~85-83.4 Ma, avg ~84 Ma;
 *     Tuolumne Intrusive Suite; mineral composition):
 *     https://en.wikipedia.org/wiki/Half_Dome_Granodiorite
 *
 * Death Valley - Badwater & Black Mountains / Panamint section
 * (Holocene salt pan over the deep Neoproterozoic-Cambrian column):
 *   - Wikipedia, "Geology of the Death Valley area" (Wikipedia summary of
 *     USGS/NPS mapping: Noonday Dolomite ~800-1000 ft; Johnnie Fm >4000 ft;
 *     Stirling Quartzite ~2000 ft; Wood Canyon Fm ~2570 ft; Kingston Peak Fm
 *     ~7000 ft / 700-800 Ma; Badwater playa salt <100 ft, halite/borate
 *     evaporites):
 *     https://en.wikipedia.org/wiki/Geology_of_the_Death_Valley_area
 *   - California Division of Mines & Geology, Special Report 106, "Geologic
 *     Features Death Valley" (NPS History library; formation descriptions):
 *     http://npshistory.com/publications/geology/state/ca/cdmg-sr-106/sec7.htm
 *
 * Mono Lake (tufa + Pleistocene Lake Russell + Mono Craters rhyolite;
 * regional Bishop Tuff):
 *   - USGS, "Geology and History of Mono Lake Volcanic Field" (Lake Russell
 *     filled basin in Pleistocene, ~130 m above modern level; tufa = calcium
 *     carbonate; young domes/flows <~1000 yr; Paoha Island uplift ~350 yr):
 *     https://www.usgs.gov/volcanoes/mono-lake-volcanic-field/science/geology-and-history-mono-lake-volcanic-field
 *   - USGS, "Long Valley Caldera Field Guide - Mono Lake":
 *     https://www.usgs.gov/volcanoes/long-valley-caldera/science/long-valley-caldera-field-guide-mono-lake
 *   - Wikipedia, "Mono Lake" (tufa = calcite CaCO3, forms at sub-lake springs;
 *     Lake Russell; Mono-Inyo Craters rhyolite; Long Valley / Bishop Tuff
 *     eruption ~760,000 yr ago):
 *     https://en.wikipedia.org/wiki/Mono_Lake
 *   - Wikipedia, "Bishop Tuff" (welded rhyolitic ash-flow tuff, 764,800 +/-
 *     600 yr ago, Long Valley Caldera eruption):
 *     https://en.wikipedia.org/wiki/Bishop_Tuff
 *
 * Joshua Tree (Cretaceous monzogranite intruded into Proterozoic gneiss):
 *   - NPS, "Geologic Formations - Joshua Tree National Park" (monzogranite
 *     plutonic intrusion; overlying gneiss; aplite/pegmatite/andesite dikes;
 *     boulder-pile weathering of jointed monzogranite):
 *     https://www.nps.gov/jotr/learn/nature/geologicformations.htm
 *   - NPS Geodiversity Atlas - Joshua Tree NP (oldest rocks Proterozoic
 *     1.7-1.4 Ga; Mesozoic batholith of Triassic-Late Cretaceous plutons):
 *     https://www.nps.gov/articles/nps-geodiversity-atlas-joshua-tree-national-park-california.htm
 *   - USGS, "Geology of Joshua Tree National Park" (Pinto/augen gneiss
 *     1.7-1.4 Ga metamorphics; five+ igneous bodies of Mesozoic age):
 *     https://www.usgs.gov/geology-and-ecology-of-national-parks/geology-joshua-tree-national-park
 *   - "Geology is the Way - granite meets gneiss in Joshua Tree NP" (White
 *     Tank monzogranite Jurassic-Cretaceous; Pinto Gneiss ~1.7 Ga, formerly
 *     granitoid; ~1.5 Gyr age gap across intrusive contact):
 *     https://geologyistheway.com/we-have-contact-granite-meets-gneiss-in-joshua-tree-np-california-u-s-a/
 *
 * Point Reyes (Salinian-block Cretaceous granite + Miocene cover; offset
 * north along the San Andreas Fault):
 *   - USGS, "Geology of Point Reyes National Seashore" (Salinian block of
 *     Cretaceous granite west of the San Andreas Fault; Franciscan Complex
 *     east of it):
 *     https://www.usgs.gov/geology-and-ecology-of-national-parks/geology-point-reyes-national-seashore
 *   - NPS Geodiversity Atlas - Point Reyes NS (unit list: Cretaceous
 *     granodiorite of Inverness Ridge / of Point Reyes, tonalite of Tomales
 *     Point; Eocene Point Reyes Conglomerate; Miocene Laird Sandstone,
 *     Monterey Fm, Santa Cruz Mudstone, Santa Margarita Fm; Mio-Pliocene
 *     Purisima Fm; Plio-Pleistocene Merced Fm):
 *     https://www.nps.gov/articles/nps-geodiversity-atlas-point-reyes-national-seashore-california.htm
 *   - USGS Open-File 2005-1127, ch. 9, "Geology at Point Reyes National
 *     Seashore and Vicinity" (Salinian basement nonconformably overlain by
 *     mid-upper Miocene Laird Sandstone + Monterey Formation, sequence up to
 *     ~1610 m / 5300 ft thick):
 *     https://pubs.usgs.gov/of/2005/1127/chapter9.pdf
 *   - Point Reyes granodiorite K-Ar age ~82 Ma; Salinian block rafted ~350 mi
 *     north from the Tehachapi region by the San Andreas Fault:
 *     https://en.wikipedia.org/wiki/Point_Reyes
 *
 * ---------------------------------------------------------------------------
 * OMITTED (and why)
 * ---------------------------------------------------------------------------
 *  - Yosemite: precise per-pluton thicknesses are not meaningful for plutonic
 *    bodies (they are kilometers-deep 3-D masses, not tabular beds), so
 *    `thickness` is given as "massive pluton (no bedding)" rather than an
 *    invented figure. The full Tuolumne Intrusive Suite sequence (Kuna Crest,
 *    Sentinel, Taft, Cathedral Peak, etc.) is simplified to the units that
 *    actually build Yosemite Valley walls and floor.
 *  - Death Valley: the Badwater/Black Mountains preset uses the regional
 *    Pahrump-to-Cambrian section as documented for the Death Valley area; the
 *    very deepest Pahrump Group units and the crystalline basement are omitted
 *    because they are not the units a Badwater-area visitor reads, and unit
 *    ages of the Noonday/Kingston Peak interval are debated in the literature
 *    (given as approximate ranges, not invented precision). Numerous additional
 *    Cambrian-and-younger formations (Zabriskie, Carrara, Bonanza King, etc.)
 *    are omitted to keep a 4-7 layer near-surface stack.
 *  - Mono Lake: the "stack" is shown as the real near-surface sequence
 *    (Holocene tufa & lake mud over Pleistocene Lake Russell sediments over
 *    Quaternary volcanics over regional Bishop Tuff). The Sierra granite/
 *    Cenozoic basement beneath the basin fill is noted only generically; deep
 *    basin-fill thicknesses are not precisely published as a simple column.
 *  - Joshua Tree: exact radiometric Ma for the White Tank Monzogranite is not
 *    cleanly published in the consulted public sources, so its age is given as
 *    the verified Cretaceous (Mesozoic batholith) range, not a fabricated
 *    single date. Several distinct Mesozoic plutons (Palms Granite, Queen
 *    Mountain Monzogranite, etc.) are collapsed into the dominant White Tank
 *    Monzogranite that builds the Wonderland-of-Rocks boulder piles.
 *  - Point Reyes: the Franciscan Complex is real but lies EAST of the San
 *    Andreas Fault (the Bolinas/Olema side), not under the Point Reyes
 *    headland itself, so it is not stacked into this peninsula column; it is
 *    only mentioned in the summary/story. Several Miocene-Pliocene cover units
 *    are simplified to the Monterey Formation + Laird Sandstone over the
 *    granite, which is the documented near-surface succession on the peninsula.
 */

export const californiaPresets = [
  {
    id: 'yosemite-valley',
    name: 'Yosemite Valley',
    query: 'Yosemite Valley, CA',
    state: 'California',
    coords: { lat: 37.7456, lng: -119.5936 },
    threshold: 0.5,
    summary: 'A glacier-carved granite gorge in the Sierra Nevada batholith, where thin valley-floor sediment rests on great Cretaceous plutons of granite and granodiorite.',
    story: 'Nearly all of Yosemite is crystalline rock of the Sierra Nevada batholith, magma that crystallized deep underground between about 120 and 85 million years ago and was later uplifted and unroofed. During the Ice Age, Pleistocene glaciers (the last peaking around 18,000 years ago) ground the river canyon into the broad U-shaped valley, polishing the granite and leaving moraines and erratics. The flat valley floor today is sediment and former lake fill lying on top of the granite, with named plutons like the El Capitan Granite and Half Dome Granodiorite forming the soaring walls.',
    layers: [
      { name: 'Valley-floor sediment & glacial fill', age: 'Pleistocene to Holocene (last ~2 Ma)', material: 'sand, silt, gravel, glacial till and outwash', thickness: 'tens to a few hundred ft of fill', note: 'Flat valley floor: river and former-lake sediment plus glacial debris over the granite bedrock.', color: '#C9BFA6' },
      { name: 'Glacial deposits (moraines & erratics)', age: 'Pleistocene (Tioga glaciation peaked ~18,000 yr ago)', material: 'unsorted till, boulders, polished/striated bedrock surfaces', thickness: 'patchy, where preserved', note: 'Moraines, perched erratics, and glacially polished rock record the ice that carved the valley.', color: '#A8A492' },
      { name: 'Half Dome Granodiorite', age: 'Early Late Cretaceous (~85-83 Ma)', material: 'granodiorite (plagioclase, quartz, K-feldspar, biotite, hornblende)', thickness: 'massive pluton (no bedding)', note: 'Younger pluton of the Tuolumne Intrusive Suite; forms Half Dome and the east-valley walls near Glacier Point.', color: '#CFC7BC' },
      { name: 'Diorite of North America', age: 'Cretaceous', material: 'dark, hornblende-rich diorite', thickness: 'dikes / sheets within the granite', note: 'Dark intrusive rock that forms the "Map of North America" stain on El Capitan.', color: '#6E6B66' },
      { name: 'El Capitan Granite', age: 'mid-Cretaceous (~103 Ma)', material: 'light granite (quartz, plagioclase, orthoclase, biotite)', thickness: 'massive pluton (no bedding)', note: 'Pale, mostly unjointed granite of the west valley; builds El Capitan, Three Brothers, and Cathedral Rocks.', color: '#DAD2C4' },
      { name: 'Older Sierra batholith plutons & country rock', age: 'Jurassic to Cretaceous (older than ~103 Ma)', material: 'older granitoids and metamorphic wall rock', thickness: 'deep crustal mass', note: 'The El Capitan Granite intruded these older plutonic and metamorphic rocks of the batholith.', color: '#8C8377' },
    ],
  },
  {
    id: 'death-valley-badwater',
    name: 'Death Valley (Badwater Basin)',
    query: 'Badwater Basin, Death Valley, CA',
    state: 'California',
    coords: { lat: 36.2301, lng: -116.7677 },
    threshold: 0.6,
    summary: 'A modern salt-pan playa at the lowest point in North America, set against a deeply exposed Neoproterozoic-to-Cambrian sedimentary section in the surrounding mountains.',
    story: 'Badwater Basin is an active salt flat where evaporating groundwater leaves crusts of halite and borate minerals over basin fill. The bordering Black and Panamint mountains expose a thick, ancient sequence of late Precambrian and early Cambrian rocks, from the Noonday Dolomite down through the glacial-looking Kingston Peak Formation, that were once a continuous miles-deep pile of nearshore sediment before faulting and tilting. Together the playa and the tilted strata show both today\'s desert chemistry and a record of early oceans and "Snowball Earth" glaciation.',
    layers: [
      { name: 'Badwater salt pan (playa salts)', age: 'Holocene (active today)', material: 'halite crust with borates, gypsum, silt and fan gravel', thickness: 'less than ~100 ft on the playa floor', note: 'Evaporite crusts left as saline groundwater dries at the lowest point in North America (~282 ft below sea level).', color: '#E8E4D8' },
      { name: 'Noonday Dolomite', age: 'Late Neoproterozoic', material: 'cream-to-gray dolomite (algal carbonate bank)', thickness: 'about 800-1000 ft', note: 'Pale cliff-forming carbonate, the lowest of the classic Death Valley sedimentary formations.', color: '#CFC4A6' },
      { name: 'Johnnie Formation', age: 'Late Neoproterozoic', material: 'shale with basal dolomite and quartzite', thickness: 'more than ~4000 ft', note: 'Thick olive-to-purple shale section deposited on a subsiding nearshore margin.', color: '#8A7E63' },
      { name: 'Stirling Quartzite', age: 'Late Neoproterozoic', material: 'cross-bedded quartzite with purple shale partings', thickness: 'about 2000 ft', note: 'Resistant, well-bedded quartzite of an ancient shoreline.', color: '#B59A74' },
      { name: 'Wood Canyon Formation', age: 'Latest Neoproterozoic to Early Cambrian', material: 'quartzite, shale and dolomite (early trilobites)', thickness: 'about 2570 ft', note: 'Spans the Precambrian-Cambrian boundary; upper beds carry early Cambrian trilobites and archaeocyathids.', color: '#9C8460' },
      { name: 'Kingston Peak Formation', age: 'Neoproterozoic (~700-800 Ma)', material: 'thick conglomerate and diamictite (glacial-looking debris)', thickness: 'up to ~7000 ft', note: 'Boulder-bearing beds interpreted as deposits of a severe ("Snowball Earth") glaciation.', color: '#6E5E4A' },
    ],
  },
  {
    id: 'mono-lake',
    name: 'Mono Lake',
    query: 'Mono Lake, CA',
    state: 'California',
    coords: { lat: 38.0017, lng: -119.0124 },
    threshold: 0.4,
    summary: 'A salty desert lake studded with calcium-carbonate tufa towers, the shrunken remnant of Ice-Age Lake Russell, ringed and floored by young volcanic rocks.',
    story: 'Mono Lake is the alkaline remnant of Pleistocene Lake Russell, which once stood roughly 130 m higher and left old shorelines on the surrounding hills. The lake\'s famous tufa towers are calcium carbonate (calcite) that precipitated where freshwater springs welled up into the carbonate-rich lake, then were exposed as the water dropped. The basin sits in the youthful Mono-Inyo volcanic field, with rhyolite domes erupted within the last ~1000 years and the regional Bishop Tuff laid down by the giant Long Valley eruption about 760,000 years ago.',
    layers: [
      { name: 'Tufa towers & lake-bottom mud', age: 'Holocene (still forming)', material: 'calcium carbonate (calcite) tufa; saline lake silt', thickness: 'towers up to tens of ft; thin mud', note: 'Tufa precipitates where freshwater springs meet the alkaline lake; spires emerge as lake level falls.', color: '#DAD3C2' },
      { name: 'Lake Russell sediments', age: 'Pleistocene (Ice Age)', material: 'lake silt, sand, and shoreline gravels', thickness: 'tens of ft of exposed beach/lake beds', note: 'Deposits of the much larger Ice-Age lake that stood ~130 m above the modern shoreline.', color: '#C2B79C' },
      { name: 'Mono Craters rhyolite (young volcanics)', age: 'late Holocene (some flows <~1000 yr; Paoha uplift ~350 yr)', material: 'rhyolite domes, obsidian, pumice and ash', thickness: 'domes and flows tens to hundreds of ft', note: 'A chain of very young volcanoes south of the lake; Paoha Island was pushed up by magma ~350 years ago.', color: '#7A7370' },
      { name: 'Bishop Tuff', age: 'Pleistocene (~764,800 yr ago)', material: 'welded rhyolitic ash-flow tuff (pumice and ash)', thickness: 'tens to hundreds of ft regionally', note: 'Erupted during the cataclysmic Long Valley Caldera eruption; caps ridges around the region.', color: '#B7A9A0' },
      { name: 'Older volcanic & Sierra basement rocks', age: 'Cenozoic volcanics over Mesozoic granite', material: 'older lavas/ash over Sierra Nevada granitic basement', thickness: 'deep basin floor', note: 'The Mono basin fill rests on older volcanic rocks and ultimately Sierra Nevada batholith granite.', color: '#8A8076' },
    ],
  },
  {
    id: 'joshua-tree',
    name: 'Joshua Tree (Wonderland of Rocks)',
    query: 'Joshua Tree National Park, CA',
    state: 'California',
    coords: { lat: 34.0124, lng: -116.168 },
    threshold: 0.5,
    summary: 'Piled, rounded boulders of Cretaceous monzogranite, intruded long ago into far older Proterozoic gneiss and now sculpted by groundwater weathering.',
    story: 'The signature boulder piles of Joshua Tree are White Tank Monzogranite, magma that cooled miles underground during Mesozoic (largely Cretaceous) time. That granite intruded much older Pinto Gneiss, a metamorphic rock roughly 1.7 billion years old, leaving a dramatic intrusive contact between rocks separated by well over a billion years. Groundwater seeping along the granite\'s rectangular joints rounded the blocks underground; later erosion stripped away the cover, leaving the stacked, rounded boulders seen today.',
    layers: [
      { name: 'Boulder piles & desert soil', age: 'Quaternary (active weathering)', material: 'rounded granite corestones, grus (granite sand), thin soil', thickness: 'surface veneer / piled blocks', note: 'Stacks of rounded monzogranite boulders left after weathered material washed away.', color: '#CDBE9E' },
      { name: 'Dikes (aplite, pegmatite, andesite)', age: 'Mesozoic to younger', material: 'light aplite and pegmatite; darker andesite', thickness: 'thin sheets (inches to feet)', note: 'Pale and dark dikes that filled fractures cutting the monzogranite.', color: '#B8A98C' },
      { name: 'White Tank Monzogranite', age: 'Mesozoic batholith, largely Cretaceous', material: 'coarse-grained monzogranite (light granitic rock)', thickness: 'massive pluton (no bedding)', note: 'The light, blocky-jointed granite that forms the Wonderland of Rocks boulder fields.', color: '#D8CCB6' },
      { name: 'Pinto Gneiss', age: 'Paleoproterozoic (~1.7 Ga)', material: 'banded and folded gneiss (metamorphosed granitoid)', thickness: 'deep crustal basement', note: 'The park\'s oldest rock; the monzogranite intruded it, an age gap of well over a billion years.', color: '#7E756A' },
    ],
  },
  {
    id: 'point-reyes',
    name: 'Point Reyes',
    query: 'Point Reyes National Seashore, CA',
    state: 'California',
    coords: { lat: 37.9968, lng: -123.0198 },
    threshold: 0.4,
    summary: 'A wandering slab of Cretaceous Salinian granite, rafted hundreds of miles north along the San Andreas Fault and capped by Miocene marine rocks.',
    story: 'The Point Reyes headland is built of Cretaceous granitic rock (about 82 million years old) belonging to the Salinian block, granite that was carried roughly 350 miles north along the San Andreas Fault from the southern Sierra/Tehachapi region. The San Andreas Fault, running through Tomales Bay and the Olema Valley, separates this granite from the very different Franciscan Complex rocks east of the fault. On the peninsula the granite is overlain by Miocene marine sediments, including the silica-rich Monterey Formation, recording a later seafloor that buried the eroded granite surface.',
    layers: [
      { name: 'Monterey Formation', age: 'Middle to Late Miocene', material: 'siliceous mudstone, porcelanite, and shale (from diatoms)', thickness: 'part of a marine section up to ~5300 ft thick', note: 'Deep-water silica-rich rock that overlies the granite; classic California oil-source unit.', color: '#C9C2AE' },
      { name: 'Laird Sandstone', age: 'Middle Miocene', material: 'marine sandstone', thickness: 'basal unit beneath the Monterey Fm', note: 'Sandy beds deposited directly on the eroded granite surface as the sea returned.', color: '#C2AE86' },
      { name: 'Granodiorite of Point Reyes (Salinian block)', age: 'Late Cretaceous (~82 Ma)', material: 'granodiorite / granite (Salinian basement)', thickness: 'massive pluton (no bedding)', note: 'The granite headland itself; rafted ~350 mi north along the San Andreas Fault.', color: '#D4CCBE' },
      { name: 'Older Salinian metamorphic rocks', age: 'Paleozoic and/or Mesozoic', material: 'metamorphic rocks of Inverness Ridge', thickness: 'basement wall rock', note: 'Older crystalline rocks the Salinian granite intruded, exposed along Inverness Ridge.', color: '#8A8074' },
    ],
  },
]
