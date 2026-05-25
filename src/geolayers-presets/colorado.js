/*
 * Colorado geologic "stack stories" — curated presets for GeoLayers.
 *
 * Object shape mirrors the existing Utah PRESETS in src/GeoLayers.jsx.
 * Layers are ordered TOP (youngest / nearest surface) -> DOWN (older).
 * Formation names, ages, lithologies, and rough thicknesses are taken from
 * the primary public sources cited per location below. Where a single tidy
 * value did not exist, conservative source-backed ranges are used and the
 * uncertainty is reflected in the note text. Cosmetic earthy `color` hexes are
 * the only non-sourced field.
 *
 * ---------------------------------------------------------------------------
 * SOURCES (per location)
 * ---------------------------------------------------------------------------
 * Garden of the Gods (garden-of-the-gods)
 *   - NPS National Natural Landmark designation:
 *     https://www.nps.gov/subjects/nnlandmarks/site.htm?Site=GAGO-CO
 *   - USGS Geolex — Lyons Sandstone (Permian; eolian quartzose sandstone;
 *     ~150–297 ft along Front Range, locally much thicker near Colorado Springs):
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/LyonsRefs_9129.html
 *   - USGS Geolex — Fountain Formation (Pennsylvanian; arkosic sandstone &
 *     conglomerate shed from the Ancestral Rockies; hundreds to thousands of ft):
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/FountainRefs_8179.html
 *   - USGS Geolex — Lykins Formation (Permian–Triassic; red siltstone & thin
 *     limestone): https://ngmdb.usgs.gov/Geolex/UnitRefs/LykinsRefs_9126.html
 *   - USGS State Geologic Map unit (Lykins/Lyons/Fountain, COTRPAlf):
 *     https://mrdata.usgs.gov/geology/state/sgmc-unit.php?unit=COTRPAlf
 *
 * Colorado National Monument (colorado-national-monument)
 *   - NPS Geodiversity Atlas — Colorado National Monument (full unit list,
 *     ages, thicknesses, basement ages 1,741–1,400 Ma):
 *     https://www.nps.gov/articles/nps-geodiversity-atlas-colorado-national-monument-colorado.htm
 *   - NPS — Geologic Formations, Colorado National Monument:
 *     https://www.nps.gov/colm/learn/nature/geologic-formations.htm
 *   - USGS — Geologic map of Colorado National Monument and adjacent areas (I-2740):
 *     https://pubs.usgs.gov/publication/i2740
 *
 * Dinosaur National Monument (dinosaur-national-monument)
 *   - NPS Geodiversity Atlas — Dinosaur National Monument (CO & UT; unit list
 *     and ages): https://www.nps.gov/articles/nps-geodiversity-atlas-dinosaur-national-monument-colorado-and-utah.htm
 *   - NPS — Morrison Formation, Dinosaur National Monument (Late Jurassic,
 *     ~157–150 Ma; quarry-bearing unit):
 *     https://www.nps.gov/dino/learn/nature/morrison-formation.htm
 *   - NPS — Geology, Dinosaur National Monument:
 *     https://www.nps.gov/dino/learn/nature/geology.htm
 *
 * Rocky Mountain National Park (rocky-mountain-national-park)
 *   - USGS — Geology of Rocky Mountain National Park (Precambrian schist/gneiss
 *     ~1.7 Ga; Boulder Creek batholith ~1.6 Ga; Bull Lake & Pinedale glaciation
 *     till/moraines): https://www.usgs.gov/geology-and-ecology-of-national-parks/geology-rocky-mountain-national-park
 *   - NPS Geodiversity Atlas — Rocky Mountain National Park (Silver Plume
 *     Granite ~1.4 Ga at Longs Peak; Precambrian igneous/metamorphic complex):
 *     https://www.nps.gov/articles/nps-geodiversity-atlas-rocky-mountain-national-park-colorado.htm
 *
 * Maroon Bells (maroon-bells)
 *   - USGS Geolex — Maroon Formation (Pennsylvanian–Permian; red shale,
 *     sandstone, arkose, conglomerate; thickness as much as ~4,500–7,000 ft;
 *     overlies Belden shale in west-central CO):
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/MaroonRefs_9192.html
 *   - USGS — Geologic map of the Maroon Bells quadrangle, Pitkin & Gunnison
 *     Counties, Colorado (GQ-788): https://pubs.usgs.gov/publication/gq788
 *   - USGS — Geology of the Aspen 15-minute quadrangle (PP-1073): the State
 *     Bridge Formation (Late Permian–Early Triassic) overlies the Maroon
 *     Formation after a hiatus: https://pubs.usgs.gov/publication/pp1073
 *   - USGS Geolex — State Bridge Formation:
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/StateBridgeRefs_10575.html
 *   - USGS Geolex — Belden Formation context via Maroon refs (underlying shale).
 *
 * ---------------------------------------------------------------------------
 * OMISSIONS & WHY
 * ---------------------------------------------------------------------------
 * - Garden of the Gods: the overlying Dakota / Cretaceous units form the higher
 *   hogbacks east of the park but are not the iconic park rocks; omitted to keep
 *   the stack focused on the verified Lykins–Lyons–Fountain sequence over the
 *   Pikes Peak Granite basement. Exact Fountain thickness within the park varies
 *   widely (the Colorado Springs folio cites figures up to several thousand ft),
 *   so a conservative sourced range is used.
 * - Colorado National Monument: the Burro Canyon and Dakota (Naturita) Cretaceous
 *   units listed in the NPS atlas cap mesas above the rim but are minor and
 *   discontinuous in the canyon walls; omitted to keep 4–7 layers focused on the
 *   cliff-forming Mesozoic sequence and the basement.
 * - Dinosaur National Monument: the full section has ~24 units (Late Cretaceous
 *   Mancos/Frontier/Mowry, Cedar Mountain, Stump/Carmel, Nugget, Chinle, and
 *   Paleozoic Park City/Weber/Morgan/Round Valley). The preset is centered on the
 *   famous Morrison quarry and its immediate neighbors; the deeper Paleozoic and
 *   uppermost Cretaceous units are omitted to stay within the 4–7 layer cap.
 *   Per-unit thicknesses are not published in the NPS atlas, so thickness is
 *   left as the honest 'see source' / qualitative descriptor rather than invented.
 * - Rocky Mountain National Park: distinct named Precambrian map units (e.g.,
 *   biotite gneiss vs. migmatite vs. specific granodiorite phases) are grouped,
 *   because the NPS/USGS overview pages describe them as an intermingled
 *   igneous–metamorphic complex without a clean stacked-thickness column.
 * - Maroon Bells: the underlying Eagle Valley Evaporite / Minturn / Leadville
 *   limestone interfinger laterally across the Eagle basin; only the directly
 *   verified Maroon-over-Belden relationship plus the broader older Paleozoic
 *   carbonate base are represented.
 */

export const coloradoPresets = [
  {
    id: 'garden-of-the-gods',
    name: 'Garden of the Gods',
    query: 'Garden of the Gods, Colorado Springs, CO',
    state: 'Colorado',
    coords: { lat: 38.8784, lng: -104.8694 },
    threshold: 0.4,
    summary:
      'Vertical red sandstone fins where rocks once laid flat were tilted on end by the rise of the modern Rockies.',
    story:
      'Sediment shed from the Ancestral Rocky Mountains built the thick red Fountain Formation, later capped by desert dune sand (Lyons) and tidal-flat muds (Lykins). When the modern Front Range pushed up during the Laramide uplift, these once-horizontal beds were rotated to near-vertical; harder layers now stand as the famous fins while softer beds eroded between them.',
    layers: [
      { name: 'Lykins Formation', age: 'Permian to Triassic', material: 'red siltstone, mudstone, thin limestone', thickness: '~150-200 ft', note: 'Softer tidal-flat and sabkha beds that weather to slopes between the harder fins.', color: '#8A4636' },
      { name: 'Lyons Sandstone', age: 'Permian', material: 'cross-bedded eolian quartz sandstone', thickness: '~150-300 ft', note: 'Ancient sand-dune deposit; forms several of the tallest, palest standing rocks in the park.', color: '#C9794A' },
      { name: 'Fountain Formation', age: 'Pennsylvanian', material: 'arkosic sandstone and conglomerate', thickness: 'hundreds to ~1000+ ft', note: 'Coarse debris shed off the Ancestral Rockies; builds the iconic deep-red Gateway fins.', color: '#A23E26' },
      { name: 'Pikes Peak Granite (Precambrian basement)', age: 'Mesoproterozoic (~1.1 Ga)', material: 'coarse pink granite', thickness: 'basement (great depth)', note: 'Crystalline basement the red sedimentary stack was deposited upon and later tilted against.', color: '#8C6F62' },
    ],
  },
  {
    id: 'colorado-national-monument',
    name: 'Colorado National Monument',
    query: 'Colorado National Monument, Grand Junction, CO',
    state: 'Colorado',
    coords: { lat: 39.05, lng: -108.69 },
    threshold: 0.5,
    summary:
      'Sheer red canyon walls of stacked Mesozoic sandstones standing on a 1.7-billion-year-old crystalline basement.',
    story:
      'A long Mesozoic sequence of floodplain muds, towering desert dunes, and river sands hardened into the cliff-and-bench layers seen along Rim Rock Drive. These sedimentary beds rest with a vast unconformity directly on Precambrian gneiss and schist, and regional uplift plus erosion later carved the deep canyons and freestanding monoliths.',
    layers: [
      { name: 'Morrison Formation', age: 'Late Jurassic (~155-148 Ma)', material: 'sandstone (Salt Wash) and mudstone (Brushy Basin)', thickness: '~400 ft', note: 'Colorful slope-forming beds above the rim; a major dinosaur-fossil unit regionally.', color: '#9A8254' },
      { name: 'Entrada Sandstone', age: 'Middle Jurassic', material: 'eolian sandstone (Slick Rock Member)', thickness: '~100-145 ft', note: 'Rounded, light-toned slickrock below the Morrison.', color: '#D49A5E' },
      { name: 'Kayenta Formation', age: 'Early Jurassic', material: 'silica-cemented sandstone', thickness: '~50-80 ft', note: 'Resistant cap rock that protects the Wingate cliffs and forms most canyon rims.', color: '#A66A42' },
      { name: 'Wingate Sandstone', age: 'Triassic to Early Jurassic (~202-195 Ma)', material: 'eolian sandstone', thickness: '~330 ft', note: 'The main vertical cliff-former; ancient desert dunes turned to sheer red walls.', color: '#A3472E' },
      { name: 'Chinle Formation', age: 'Late Triassic (~205 Ma)', material: 'reddish mudstone and siltstone', thickness: '~90 ft', note: 'Soft floodplain beds resting directly on the basement across a huge unconformity.', color: '#7B5A4E' },
      { name: 'Precambrian basement', age: 'Paleoproterozoic (~1741-1721 Ma)', material: 'metaigneous gneiss and dark schist with later dikes', thickness: 'basement (great depth)', note: 'Crystalline core; intruded by dikes ~1,400 Ma, then deeply eroded before the sediments fell on top.', color: '#5F5650' },
    ],
  },
  {
    id: 'dinosaur-national-monument',
    name: 'Dinosaur National Monument',
    query: 'Dinosaur National Monument Quarry, Jensen, UT',
    state: 'Colorado',
    coords: { lat: 40.4375, lng: -109.3045 },
    threshold: 0.6,
    summary:
      'A tilted slab of Late Jurassic river rock packed with dinosaur bones, set within a thick Mesozoic sequence straddling the Colorado-Utah line.',
    story:
      'During the Late Jurassic, rivers and floodplains buried dinosaur carcasses in sand and mud that became the Morrison Formation, the bone-bearing layer exposed at the Quarry. Younger marine and dune deposits were stacked above and older desert and floodplain units below, then the whole section was tilted and eroded so the famous bone bed now stands at an angle.',
    layers: [
      { name: 'Cedar Mountain Formation', age: 'Early Cretaceous', material: 'mudstone and sandstone', thickness: 'see source', note: 'Floodplain beds capping the Jurassic section in the monument.', color: '#9C8A63' },
      { name: 'Morrison Formation', age: 'Late Jurassic (~157-150 Ma)', material: 'sandstone, mudstone, river-channel deposits', thickness: 'see source', note: 'The dinosaur-quarry layer; one of the richest terrestrial Mesozoic fossil records on Earth.', color: '#A98B4F' },
      { name: 'Stump and Carmel Formations', age: 'Middle to Late Jurassic', material: 'sandstone, siltstone, marine and tidal-flat beds', thickness: 'see source', note: 'Shallow-marine to coastal beds beneath the Morrison.', color: '#B79867' },
      { name: 'Nugget Sandstone', age: 'Late Triassic to Early Jurassic', material: 'cross-bedded eolian sandstone', thickness: 'see source', note: 'Massive ancient dune sandstone equivalent to the Glen Canyon dune sands.', color: '#D8B377' },
      { name: 'Chinle Formation', age: 'Late Triassic', material: 'variegated mudstone and sandstone', thickness: 'see source', note: 'Colorful floodplain beds near the base of the exposed Mesozoic section.', color: '#7E6353' },
    ],
  },
  {
    id: 'rocky-mountain-national-park',
    name: 'Rocky Mountain National Park',
    query: 'Rocky Mountain National Park, CO',
    state: 'Colorado',
    coords: { lat: 40.3432, lng: -105.6881 },
    threshold: 0.7,
    summary:
      'An alpine landscape of ancient crystalline rock sculpted by Ice Age glaciers into peaks, cirques, and moraine-dammed valleys.',
    story:
      'The park is built on a Precambrian basement of schist, gneiss, and granite formed and intruded between roughly 1.7 and 1.4 billion years ago. The high country was later uplifted into the modern Front Range, and Pleistocene glaciers carved its U-shaped valleys and left behind the till and moraines that shape the valley floors today.',
    layers: [
      { name: 'Glacial till and moraines', age: 'Pleistocene (Bull Lake & Pinedale)', material: 'unsorted boulders, gravel, sand, glacial flour', thickness: 'variable', note: 'Debris bulldozed and deposited by Ice Age glaciers; forms lateral and terminal moraines.', color: '#9C8E7C' },
      { name: 'Silver Plume Granite', age: 'Mesoproterozoic (~1.4 Ga)', material: 'granite', thickness: 'massive intrusive body', note: 'Forms Longs Peak and other high summits; a younger pulse of magma intruding the older basement.', color: '#9A8378' },
      { name: 'Boulder Creek batholith', age: 'Paleoproterozoic (~1.6-1.7 Ga)', material: 'granodiorite and granite', thickness: 'massive intrusive body', note: 'Large magma body whose intrusion drove regional metamorphism of the surrounding rock.', color: '#7E6F66' },
      { name: 'Precambrian schist and gneiss', age: 'Paleoproterozoic (~1.7 Ga)', material: 'metamorphic schist and gneiss', thickness: 'basement (great depth)', note: 'The oldest rocks in the park; deeply buried, heated, and deformed crust.', color: '#5E544E' },
    ],
  },
  {
    id: 'maroon-bells',
    name: 'Maroon Bells',
    query: 'Maroon Bells, Aspen, CO',
    state: 'Colorado',
    coords: { lat: 39.0708, lng: -106.989 },
    threshold: 0.4,
    summary:
      'Twin maroon peaks carved from a thick pile of weak, rust-red Paleozoic sediment shed off the Ancestral Rockies.',
    story:
      'The Bells are sculpted from the Maroon Formation, thousands of feet of red shale, sandstone, and conglomerate dumped into the Eagle basin as the Ancestral Rocky Mountains eroded in Pennsylvanian-Permian time. These poorly cemented beds, underlain by older marine shale and limestone, were later uplifted and glacially carved into the steep, fracture-prone faces that give the peaks their distinctive color and danger.',
    layers: [
      { name: 'State Bridge Formation', age: 'Late Permian to Early Triassic', material: 'brick-red siltstone, shale, thin limestone', thickness: 'thin upper interval', note: 'Deposited after a hiatus on top of the Maroon beds; marks the change to marginal-marine and lake settings.', color: '#A85A45' },
      { name: 'Maroon Formation', age: 'Pennsylvanian to Permian (~300 Ma)', material: 'red shale, sandstone, arkose, conglomerate', thickness: 'as much as ~4500-7000 ft', note: 'Builds both Maroon Peak and North Maroon Peak; weak, fractured beds make the faces hazardous.', color: '#8E4A3A' },
      { name: 'Belden Formation', age: 'Pennsylvanian', material: 'dark marine shale, siltstone, thin limestone', thickness: 'see source', note: 'Underlying marine shale on which the red Maroon beds were deposited.', color: '#5E5048' },
      { name: 'Older Paleozoic carbonates (Leadville and below)', age: 'Mississippian and older Paleozoic', material: 'limestone and dolomite', thickness: 'see source', note: 'Marine carbonate base beneath the basin fill, exposed locally lower in the section.', color: '#7C766B' },
    ],
  },
]
