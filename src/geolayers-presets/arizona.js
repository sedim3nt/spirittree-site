/*
 * Arizona geologic "stack story" presets for the GeoLayers reader.
 *
 * All formation NAMES, AGES, and THICKNESSES below are drawn from authoritative
 * sources (NPS geology pages, USGS publications / Geolex, USGS numeric-age data).
 * `material` and `note` are factual plain-language descriptions; `color` is
 * cosmetic only (earthy hex roughly matching the rock). `coords` are verifiable
 * known coordinates for each place.
 *
 * Layers are ordered TOP (youngest / surface caprock) -> DOWN (older).
 *
 * ---------------------------------------------------------------------------
 * SOURCES BY LOCATION
 * ---------------------------------------------------------------------------
 *
 * Grand Canyon (South Rim) -- the canonical Paleozoic column:
 *   - NPS, "Geologic Formations - Grand Canyon National Park"
 *     https://www.nps.gov/grca/learn/nature/geologicformations.htm
 *   - NPS, "Numeric Ages of Grand Canyon Rocks" (numeric ages used below)
 *     https://www.nps.gov/articles/000/grcatime-numeric-ages.htm
 *   - NPS, "Layered Paleozoic Rocks (Grand Canyon)"
 *     https://www.nps.gov/articles/000/grcatime-layered-paleozoic-rock.htm
 *   - NPS, "NPS Geodiversity Atlas — Grand Canyon National Park, Arizona"
 *     https://www.nps.gov/articles/nps-geodiversity-atlas-grand-canyon-national-park-arizona.htm
 *   - USGS Geolex unit thicknesses (Kaibab, Toroweap, Coconino, Hermit, Supai, Redwall):
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/KaibabRefs_9032.html
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/ToroweapRefs_10913.html
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/CoconinoRefs_5050.html
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/HermitRefs_8620.html
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/SupaiRefs_6213.html
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/RedwallRefs_10129.html
 *
 * Sedona (Schnebly Hill Fm / Coconino red rocks):
 *   - USGS Geolex, "Schnebly Hill Formation" (age = Early Permian/Leonardian;
 *     lithology; thickness to ~900 ft):
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/SchneblyHillRefs_10001.html
 *   - USGS, Geologic Map of the Cameron 30' x 60' Quadrangle, Coconino County
 *     (Coconino Sandstone ~600 ft regionally):
 *     https://pubs.usgs.gov/sim/2007/2977/SIM-2977_pamphlet.pdf
 *   - USGS Geolex, "Coconino" and "Toroweap":
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/CoconinoRefs_5050.html
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/ToroweapRefs_10913.html
 *   - NPS numeric ages (shared Permian formations w/ Grand Canyon):
 *     https://www.nps.gov/articles/000/grcatime-numeric-ages.htm
 *
 * Petrified Forest & Painted Desert (Chinle Fm):
 *   - NPS, "NPS Geodiversity Atlas — Petrified Forest National Park, Arizona"
 *     (Chinle ~223-208 Ma; member order; Bidahochi unconformity):
 *     https://www.nps.gov/articles/nps-geodiversity-atlas-petrified-forest-national-park.htm
 *   - Martz & Parker (2010), "Revised Lithostratigraphy of the Sonsela Member
 *     (Chinle Formation, Upper Triassic) ... Petrified Forest NP" (member
 *     lithologies / order), PLoS ONE / NCBI PMC:
 *     https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2824835/
 *   - USGS Geolex, "Chinle" and "Petrified Forest":
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/ChinleRefs_4997.html
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/PetrifiedForestRefs_9600.html
 *
 * Monument Valley (Arizona side — de Chelly Sandstone buttes):
 *   - USGS Geolex, "De Chelly" (Early Permian/Leonardian; cross-bedded eolian
 *     sandstone; ~300 ft in Monument Valley, 225-817 ft regionally):
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/DeChellyRefs_7852.html
 *   - USGS Geolex, "Moenkopi" and "Organ Rock" (overlying / underlying units):
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/MoenkopiRefs_9342.html
 *   - Baars (1973), "Permianland: the rocks of Monument Valley," New Mexico
 *     Geological Society Guidebook (stratigraphic sequence of the buttes):
 *     https://nmgs.nmt.edu/publications/guidebooks/downloads/24/24_p0068_p0071.pdf
 *
 * ---------------------------------------------------------------------------
 * OMITTED (and why)
 * ---------------------------------------------------------------------------
 *  - Grand Canyon INNER GORGE units (Tonto Group: Muav/Bright Angel/Tapeats,
 *    and the Vishnu basement / Grand Canyon Supergroup): real and verifiable,
 *    but they are NOT exposed at or near the South Rim surface — they sit
 *    thousands of feet below the rim. Since this preset describes the
 *    "exposed/near-surface stratigraphy" a rim visitor reads, the column is
 *    capped at the upper Paleozoic rim sequence (Kaibab down to Redwall).
 *  - Grand Canyon Supergroup as its own preset: exposures are localized,
 *    discontinuous, and tilted; not a clean single near-surface stack to read,
 *    so omitted to avoid misrepresentation.
 *  - Bidahochi Formation at Petrified Forest: present in the broader region but
 *    only as scattered remnants above a ~190-Myr unconformity; not a
 *    continuous near-surface layer across the park badlands, so omitted from
 *    the layer stack (noted in sources above).
 *  - Per-member thicknesses for several Chinle members: authoritative single
 *    figures vary widely by locality and revision; where a defensible figure
 *    was not available, a thickness is given as a verified range or labeled
 *    "variable" rather than invented.
 */

export const arizonaPresets = [
  {
    id: 'grand-canyon-south-rim',
    name: 'Grand Canyon (South Rim)',
    query: 'Grand Canyon Village, AZ',
    state: 'Arizona',
    coords: { lat: 36.0544, lng: -112.1401 },
    threshold: 0.6,
    summary: 'The classic Paleozoic column of the Colorado Plateau, where a limestone rim caps a tall stack of desert, coastal, and marine rocks.',
    story: 'For tens of millions of years this region cycled between shallow seas, coastal plains, and wind-blown deserts, each leaving a distinct rock layer. The Colorado River and its tributaries later sliced down through the stack, exposing the layered sequence that defines canyon country. From the rim you read the upper Paleozoic formations top to bottom as alternating cliffs and slopes.',
    layers: [
      { name: 'Kaibab Formation', age: 'Early Middle Permian (~270 Ma)', material: 'limestone, sandy dolomite, chert', thickness: '300-400 ft', note: 'Forms the rim caprock; deposited in a warm, shallow sea.', color: '#C9B79C' },
      { name: 'Toroweap Formation', age: 'Late Early Permian (~275 Ma)', material: 'limestone, gypsum, sandstone, siltstone', thickness: 'about 400 ft', note: 'Slope-forming unit of a nearshore, sometimes restricted seaway.', color: '#B79B7A' },
      { name: 'Coconino Sandstone', age: 'Early Permian (~280 Ma)', material: 'cross-bedded eolian sandstone', thickness: '300-600 ft', note: 'Pale cliff of fossilized desert sand dunes.', color: '#E6D2A6' },
      { name: 'Hermit Formation', age: 'Early Permian (~285 Ma)', material: 'siltstone, mudstone, sandstone', thickness: '150-500 ft', note: 'Soft red slope-former laid down on a coastal floodplain.', color: '#9C5A40' },
      { name: 'Supai Group', age: 'Early Permian to Pennsylvanian (~290-315 Ma)', material: 'sandstone, siltstone, mudstone, limestone', thickness: '600-1000 ft', note: 'Stepped red cliffs and ledges of mixed coastal and floodplain deposits.', color: '#A8623E' },
      { name: 'Redwall Limestone', age: 'Late Early to Middle Mississippian (~340 Ma)', material: 'limestone and dolomite', thickness: '500-800 ft', note: 'Sheer cliff of marine limestone, stained red by overlying beds.', color: '#9E4A36' },
    ],
  },
  {
    id: 'sedona-red-rocks',
    name: 'Sedona Red Rocks',
    query: 'Sedona, AZ',
    state: 'Arizona',
    coords: { lat: 34.8697, lng: -111.761 },
    threshold: 0.4,
    summary: 'Deep-red Permian sandstones, capped by pale Coconino dunes and Kaibab limestone, eroded into the buttes and spires below the Mogollon Rim.',
    story: 'Sedona sits at the southwestern edge of the Colorado Plateau where Permian desert and coastal sediments stack up beneath the Mogollon Rim. The vivid red of the Schnebly Hill and Hermit beds comes from hematite (iron oxide) staining the sand. Resistant Coconino and Kaibab caps protect the softer red layers, leaving the dramatic buttes, spires, and mesas Sedona is known for.',
    layers: [
      { name: 'Kaibab Formation', age: 'Early Middle Permian (~270 Ma)', material: 'limestone and sandy dolomite', thickness: '100-300 ft', note: 'Gray limestone caprock that also tops the nearby Mogollon Rim.', color: '#C7B594' },
      { name: 'Toroweap Formation', age: 'Late Early Permian (~275 Ma)', material: 'limestone, sandstone, siltstone', thickness: 'tens to ~100 ft locally', note: 'Yellow-to-gray slope between the harder cliff units above and below.', color: '#B49972' },
      { name: 'Coconino Sandstone', age: 'Early Permian (~280 Ma)', material: 'cross-bedded eolian sandstone', thickness: 'about 600 ft', note: 'Pale, cliff-forming fossil dunes that whiten the upper buttes.', color: '#E8D4A8' },
      { name: 'Schnebly Hill Formation', age: 'Early Permian, Leonardian (~280-285 Ma)', material: 'red sandstone, siltstone, mudstone, with carbonate', thickness: 'up to ~900 ft regionally', note: 'The signature deep-red, cross-bedded sandstone of Sedona, colored by iron oxide.', color: '#B0492C' },
      { name: 'Hermit Formation', age: 'Early Permian (~285 Ma)', material: 'red siltstone and mudstone', thickness: '150-300 ft', note: 'Soft red slope-former exposed low in the canyons and washes.', color: '#9A5239' },
    ],
  },
  {
    id: 'petrified-forest-painted-desert',
    name: 'Petrified Forest & Painted Desert',
    query: 'Petrified Forest National Park, AZ',
    state: 'Arizona',
    coords: { lat: 34.91, lng: -109.8068 },
    threshold: 0.5,
    summary: 'Banded Late Triassic badlands of the Chinle Formation, an ancient river-basin record famous for its colorful mudstones and petrified logs.',
    story: 'About 220 million years ago this was a humid lowland of rivers, floodplains, and volcanic ash, far from todays desert. Those river muds, sands, and ash falls became the Chinle Formation, whose iron- and manganese-rich layers weather into the blue, purple, and red bands of the Painted Desert. Silica-replaced logs from the ancient forests now litter the badlands as petrified wood.',
    layers: [
      { name: 'Owl Rock Member', age: 'Late Triassic (Norian)', material: 'pinkish-orange mudstone with thin limestone beds', thickness: 'tens of ft', note: 'Youngest Chinle member here; ledgy limestones cap higher mesas.', color: '#C98A6E' },
      { name: 'Petrified Forest Member', age: 'Late Triassic (Norian)', material: 'varicolored bentonitic mudstone and sandstone beds', thickness: 'up to ~300 m regionally', note: 'Bluish, purple, and red badlands of the classic Painted Desert color bands.', color: '#8C6A8A' },
      { name: 'Sonsela Member', age: 'Late Triassic (Norian)', material: 'sandstone and conglomerate with mudstone', thickness: 'tens of ft', note: 'Resistant sandstone beds that hold up many of the parks petrified-log surfaces.', color: '#B08A5E' },
      { name: 'Blue Mesa Member', age: 'Late Triassic (Carnian-Norian)', material: 'bluish-gray and purple bentonitic mudstone', thickness: 'tens of ft', note: 'Soft, banded badland mudstones that erode into rounded blue-gray hills.', color: '#7D8A93' },
      { name: 'Mesa Redondo Member', age: 'Late Triassic (Carnian)', material: 'red mudstone and sandstone', thickness: 'variable', note: 'Lower red beds exposed at the base of the Chinle section.', color: '#9E5A45' },
    ],
  },
  {
    id: 'monument-valley-az',
    name: 'Monument Valley (Arizona side)',
    query: 'Monument Valley, AZ',
    state: 'Arizona',
    coords: { lat: 36.9819, lng: -110.1121 },
    threshold: 0.4,
    summary: 'Isolated red sandstone buttes where a hard De Chelly Sandstone caprock protects softer Permian shale pedestals from erosion.',
    story: 'The valleys towering mittens and buttes are erosional remnants of a once-continuous rock sheet. A tough, cross-bedded De Chelly Sandstone (fossilized Permian desert dunes) forms the cliff-making caprock, while the softer Organ Rock Shale below erodes into the sloping pedestals. Where it survives, a thin Moenkopi and Shinarump cap shields the very tops of the tallest buttes.',
    layers: [
      { name: 'Shinarump Member (Chinle Fm)', age: 'Late Triassic', material: 'conglomerate and sandstone', thickness: 'thin, where present', note: 'Erosional remnant capping only the highest mesas and butte tops.', color: '#9C7A52' },
      { name: 'Moenkopi Formation', age: 'Early to Middle Triassic', material: 'reddish-brown siltstone and shale', thickness: 'thin, where present', note: 'Soft river- and tidal-flat beds preserved on some butte summits.', color: '#9E5C44' },
      { name: 'De Chelly Sandstone', age: 'Early Permian, Leonardian', material: 'cross-bedded eolian sandstone', thickness: 'about 300 ft (225-817 ft regionally)', note: 'The hard, red, cliff-forming caprock that gives the buttes their sheer walls.', color: '#B5532F' },
      { name: 'Organ Rock Shale', age: 'Permian', material: 'dark-red mudstone and siltstone', thickness: 'variable', note: 'Soft floodplain beds that erode into the sloping pedestals beneath the cliffs.', color: '#8E4A37' },
    ],
  },
]
