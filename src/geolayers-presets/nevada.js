/*
 * Nevada geologic "stack story" presets for the GeoLayers reader.
 *
 * All formation NAMES, AGES, and THICKNESSES below are drawn from authoritative
 * sources (NPS geology / Geodiversity Atlas pages, USGS publications & Geolex,
 * BLM Red Rock Canyon NCA materials, and peer-reviewed stratigraphic studies).
 * `material` and `note` are factual plain-language descriptions; `color` is
 * cosmetic only (earthy hex roughly matching the rock). `coords` are verifiable
 * known coordinates for each place.
 *
 * Layers are ordered TOP (youngest / surface) -> DOWN (older).
 *
 * ---------------------------------------------------------------------------
 * SOURCES BY LOCATION
 * ---------------------------------------------------------------------------
 *
 * Valley of Fire State Park (Aztec Sandstone over Triassic red beds):
 *   - Nevada State Parks, "Valley of Fire":
 *     https://parks.nv.gov/parks/valley-of-fire
 *   - USGS Geolex, "Aztec Sandstone" (Jurassic eolian sandstone; upper red /
 *     lower buff units; thickness):
 *     https://ngmdb.usgs.gov/Geolex/Units/Aztec_983.html
 *   - Eichhubl, Taylor, Pollard & Aydin (2004), "Paleo-fluid flow and
 *     deformation in the Aztec Sandstone at the Valley of Fire, Nevada," GSA
 *     Bulletin (Aztec ~1400 m thick; underlying Triassic Moenkopi/Chinle red
 *     beds over upper Paleozoic carbonates; Muddy Mtns thrust):
 *     https://www.beg.utexas.edu/eichhubl/Reprints/GSABull04.pdf
 *   - USGS Geolex, "Moenkopi" (Lower-Middle Triassic red beds):
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/MoenkopiRefs_9342.html
 *
 * Red Rock Canyon NCA (Keystone Thrust: Paleozoic carbonates over Aztec):
 *   - BLM / Red Rock Canyon Interpretive Assoc., "Geology Highlights"
 *     (Aztec ~180-190 Ma eolian sandstone; >250 Myr of Paleozoic limestone &
 *     dolomite; Keystone Thrust ~65 Ma puts old gray limestone over young red
 *     sandstone):
 *     https://www.redrockcanyonlv.org/geology-highlights/
 *   - BLM, "Red Rock Canyon NCA Geology" (education PDF):
 *     https://www.blm.gov/sites/blm.gov/files/uploads/Nevada-Red%20Rock%20Canyon-Geology.pdf
 *   - USGS Geolex, "Aztec Sandstone":
 *     https://ngmdb.usgs.gov/Geolex/Units/Aztec_983.html
 *   - USGS Geolex, "Bird Spring" (Pennsylvanian-Permian carbonate of the upper
 *     plate / regional Paleozoic section):
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/BirdSpringRefs_4838.html
 *
 * Great Basin National Park / Wheeler Peak (Cambrian quartzite & limestone):
 *   - NPS Geodiversity Atlas, "Great Basin National Park, Nevada"
 *     (formation list & ages: Pioche Shale, Pole Canyon, Lincoln Peak, Notch
 *     Peak, Pogonip, Eureka Quartzite, etc.):
 *     https://www.nps.gov/articles/nps-geodiversity-atlas-great-basin-national-park.htm
 *   - USGS Geolex, "Pole Canyon" (Middle Cambrian limestone, ~2000 ft, 5
 *     members):
 *     https://ngmdb.usgs.gov/Geolex/UnitRefs/PoleCanyonRefs_11614.html
 *   - Drewes & Palmer (1957), "Cambrian Rocks of Southern Snake Range, Nevada,"
 *     AAPG Bulletin (Prospect Mtn Qtzite + Pioche Shale + overlying Cambrian
 *     section ~5000 ft; Pole Canyon ~2000 ft):
 *     https://pubs.geoscienceworld.org/aapg/aapgbull/article-abstract/41/1/104/34324/
 *   - Wikipedia "Pioche Shale" citing USGS Prof. Paper 171 (Pioche Shale Early-
 *     Middle Cambrian; locally ~1280 ft; Burgess-type Lagerstatte):
 *     https://en.wikipedia.org/wiki/Pioche_Shale
 *   - Wheeler Peak prominence due to deep Cambrian Prospect Mountain Quartzite
 *     raised by Miocene detachment faulting (NPS Atlas + Wikipedia "Wheeler
 *     Peak (Nevada)"):
 *     https://en.wikipedia.org/wiki/Wheeler_Peak_(Nevada)
 *
 * Cathedral Gorge State Park (Panaca Formation badlands):
 *   - Nevada State Parks, "Cathedral Gorge State Park":
 *     https://parks.nv.gov/parks/cathedral-gorge
 *   - USGS Geolex, "Panaca" (basin-fill siltstone/sandstone/mudstone &
 *     water-laid tuff; ~427 m total; Pliocene by mammalian fossils):
 *     https://ngmdb.usgs.gov/Geolex/Units/Panaca_11532.html
 *   - Mead et al. (2005), "The Panaca Formation," Palaeo-Electronica
 *     (Meadow Valley section ~5.5-4.5 Ma; lacustrine basin fill):
 *     https://palaeo-electronica.org/2005_1/mead11/nevada.htm
 *
 * Lake Tahoe / eastern Sierra & Carson Range (granitic basement + glacial):
 *   - USGS / CGS Regional Geologic Map RGM-004, "Geologic Map of the Lake Tahoe
 *     Basin" pamphlet (Jurassic-Cretaceous granitic rocks, predominantly
 *     granodiorite; Triassic-Jurassic metamorphic roof pendants; Quaternary
 *     glacial deposits):
 *     https://www.conservation.ca.gov/cgs/Documents/Publications/Regional-Geologic-Maps/RGM_004/RGM_004_TahoeBasin_2005_Pamphlet.pdf
 *   - Northern California Geological Society, "Geology of the Lake Tahoe Region"
 *     (Cretaceous granodiorite ~90-80 Ma; Miocene andesite/lahars cap peaks;
 *     Tioga & Tahoe moraines):
 *     https://ncgeolsoc.org/wp-content/uploads/2023/07/2011-1_lake-tahoe-region.pdf
 *   - Howle et al. (2018) and related cosmogenic dating (Tioga moraines
 *     ~22.3 ka; older Tahoe moraines ~120+ ka, MIS 6):
 *     https://www.sciencedirect.com/science/article/abs/pii/S0169555X17304063
 *
 * ---------------------------------------------------------------------------
 * OMITTED (and why)
 * ---------------------------------------------------------------------------
 *  - Red Rock Canyon: a fully resolved, named Paleozoic member-by-member column
 *    (e.g. Kaibab, Toroweap, Bonanza King by name) was NOT available from the
 *    BLM/NPS public sources at this site, which describe the upper-plate rocks
 *    collectively as "Paleozoic limestone and dolomite (>250 Myr of
 *    deposition)" emplaced by the Keystone Thrust. To avoid inventing a
 *    member breakdown, the upper plate is given as a single sourced
 *    "Paleozoic carbonates" unit (Bird Spring Fm noted as the regional
 *    Pennsylvanian-Permian carbonate), sitting structurally over the Aztec.
 *  - Valley of Fire: deeper Permian units (Kaibab/Toroweap) and the underlying
 *    Paleozoic carbonates exist regionally but are NOT exposed within the park
 *    itself (they sit below the Triassic red beds / are involved in the Muddy
 *    Mountains thrust nearby), so the in-park stack is capped at the Aztec and
 *    the underlying Triassic Moenkopi red beds.
 *  - Great Basin NP: the full Cambrian-through-Pennsylvanian section (Guilmette,
 *    Simonson/Sevy dolomites, Eureka Quartzite, Pogonip Group, Ely/Joana
 *    limestones, Chainman Shale, etc.) is real and in the NPS Atlas, but the
 *    Wheeler Peak massif a visitor sees is built mainly of the lower Cambrian
 *    quartzite + Cambrian limestone/shale section, so the stack is focused on
 *    those summit-forming units (Prospect Mtn Quartzite -> Pioche -> Pole
 *    Canyon -> Lincoln Peak -> Notch Peak). Per-member thicknesses for several
 *    units vary by locality; verified ranges/figures are used or labeled
 *    "variable" rather than invented.
 *  - Cathedral Gorge: the Panaca Formation's commonly-quoted "about one million
 *    years old" park-sign age conflicts with the peer-reviewed / Geolex age of
 *    Pliocene (~5.5-4.5 Ma). The older, source-backed Pliocene age is used and
 *    the discrepancy is noted; the park is a single-formation badland, so the
 *    "stack" is the internal lithologic subdivision of the Panaca Fm plus
 *    modern erosional cover, not multiple named formations.
 *  - Lake Tahoe: pre-batholith Paleozoic/Triassic metasedimentary roof pendants
 *    are present but volumetrically minor and discontinuous; they are noted as
 *    the oldest unit (metamorphic basement remnants) rather than broken into
 *    named formations, which are not cleanly mappable as a reader-friendly
 *    layer.
 */

export const nevadaPresets = [
  {
    id: 'valley-of-fire',
    name: 'Valley of Fire',
    query: 'Valley of Fire State Park, NV',
    state: 'Nevada',
    coords: { lat: 36.4817, lng: -114.5249 },
    threshold: 0.4,
    summary: 'Fiery red and buff cross-bedded Jurassic dunes (Aztec Sandstone) carved into domes and slot canyons above older Triassic red beds.',
    story: 'In Jurassic time a vast sand sea swept across this region, and its migrating dunes hardened into the cross-bedded Aztec Sandstone, stained vivid red where iron oxide coats the grains. Erosion has since sculpted that thick sandstone into the domes, fins, and slot canyons the park is famous for. Beneath it lie the softer, deep-red Triassic Moenkopi beds laid down earlier on coastal mudflats.',
    layers: [
      { name: 'Aztec Sandstone (upper red unit)', age: 'Jurassic', material: 'cross-bedded eolian sandstone', thickness: 'part of a section up to ~1400 m', note: 'The fiery red cross-bedded fossil dunes the park is named for, colored by iron oxide.', color: '#B5503A' },
      { name: 'Aztec Sandstone (lower buff unit)', age: 'Jurassic', material: 'cross-bedded eolian sandstone', thickness: 'part of the same Aztec section', note: 'Paler white-to-tan dunes (as at White Domes) where iron staining is bleached or absent.', color: '#E3CFA3' },
      { name: 'Moenkopi Formation', age: 'Early to Middle Triassic', material: 'thinly bedded red sandstone, mudstone, and shale', thickness: 'variable', note: 'Soft, deep-red coastal mudflat beds exposed below the Aztec cliffs.', color: '#9C5440' },
    ],
  },
  {
    id: 'red-rock-canyon-nca',
    name: 'Red Rock Canyon NCA',
    query: 'Red Rock Canyon National Conservation Area, NV',
    state: 'Nevada',
    coords: { lat: 36.1357, lng: -115.4275 },
    threshold: 0.4,
    summary: 'Towering red-and-buff Aztec Sandstone cliffs with gray Paleozoic limestone thrust on top of them along the Keystone Thrust Fault.',
    story: 'Thousands of feet of gray limestone and dolomite accumulated here in Paleozoic seas, and much later Jurassic desert dunes hardened into the colorful Aztec Sandstone. Around 65 million years ago crustal compression drove the Keystone Thrust, shoving the older gray Paleozoic carbonates eastward up and over the younger red sandstone. The result is the striking inverted contact along the escarpment, where ancient limestone caps youthful-looking sandstone.',
    layers: [
      { name: 'Paleozoic carbonates (upper plate)', age: 'Paleozoic (Cambrian to Permian)', material: 'gray limestone and dolomite', thickness: 'thousands of ft (>250 Myr of deposition)', note: 'Older marine carbonates thrust on top of the sandstone along the Keystone Thrust; the Bird Spring Formation is the regional Pennsylvanian-Permian carbonate.', color: '#9FA39B' },
      { name: 'Keystone Thrust Fault', age: 'emplaced ~65 Ma (Late Cretaceous)', material: 'fault contact (structural break)', thickness: 'a fault surface, not a bed', note: 'The famous low-angle fault that places old gray limestone over young red sandstone, exposed for miles along the escarpment.', color: '#5C5953' },
      { name: 'Aztec Sandstone', age: 'Jurassic (~180-190 Ma)', material: 'cross-bedded eolian sandstone', thickness: 'cliffs thousands of ft high', note: 'Buff-to-red fossil desert dunes; the massive cross-bedded cliffs that give Red Rock its name.', color: '#B85A3C' },
    ],
  },
  {
    id: 'great-basin-wheeler-peak',
    name: 'Great Basin NP / Wheeler Peak',
    query: 'Great Basin National Park, NV',
    state: 'Nevada',
    coords: { lat: 38.9858, lng: -114.3139 },
    threshold: 0.5,
    summary: 'A glacier-carved 13,000-foot peak built of hard Cambrian quartzite over Cambrian limestones and shales, raised high by Basin and Range faulting.',
    story: 'Half a billion years ago, sand, mud, and lime accumulated on the passive western margin of ancient North America, becoming the quartzite, shale, and limestone of the Snake Range. Later crustal stretching and detachment faulting lifted the deep, resistant Prospect Mountain Quartzite to the crest of Wheeler Peak. Ice-age glaciers then carved the cirque and left the moraines and rock glacier below the summit.',
    layers: [
      { name: 'Notch Peak Limestone', age: 'Late Cambrian to Early Ordovician', material: 'limestone', thickness: 'variable', note: 'Upper Cambrian-Ordovician carbonate; forms features such as Lexington Arch in the park.', color: '#B6AE97' },
      { name: 'Lincoln Peak Formation', age: 'Cambrian', material: 'limestone with shaly interbeds', thickness: 'variable', note: 'Mixed Cambrian carbonate-and-shale section above the massive Pole Canyon cliffs.', color: '#A8A187' },
      { name: 'Pole Canyon Limestone', age: 'Middle Cambrian', material: 'massive gray and white limestone', thickness: 'about 2000 ft (five members)', note: 'Thick, cliff-forming Cambrian limestone hosting Lehman Caves at the mountain base.', color: '#C2BBA4' },
      { name: 'Pioche Shale', age: 'Early to Middle Cambrian', material: 'shale with quartzite and siltstone', thickness: 'locally up to ~1280 ft', note: 'Soft slope-former above the quartzite; a Burgess-type fossil deposit with early Cambrian trilobites.', color: '#7E8169' },
      { name: 'Prospect Mountain Quartzite', age: 'Early Cambrian', material: 'hard cross-bedded quartzite', thickness: 'part of a ~5000-ft Cambrian section', note: 'The tough, resistant quartzite that forms the high cliffs and the summit of Wheeler Peak.', color: '#8C7B6B' },
    ],
  },
  {
    id: 'cathedral-gorge',
    name: 'Cathedral Gorge',
    query: 'Cathedral Gorge State Park, NV',
    state: 'Nevada',
    coords: { lat: 37.8214, lng: -114.4097 },
    threshold: 0.3,
    summary: 'Soft buff lakebed clays and silts of the Panaca Formation eroded into dramatic cathedral-like spires, slot caves, and badlands.',
    story: 'During the Pliocene a long-lived freshwater lake filled Meadow Valley, settling out hundreds of meters of fine silt, clay, and volcanic-ash mud as the Panaca Formation. After the lake drained, rainwater and snowmelt cut rivulets into the soft, easily eroded sediments. Continuing erosion widens those cracks into the tall, fluted spires, slot caves, and badland canyons the park is known for.',
    layers: [
      { name: 'Modern erosional badlands', age: 'Quaternary (active today)', material: 'weathered clay and silt surfaces', thickness: 'thin surface zone', note: 'The fluted spires and slot caves; the soft clay reshapes after major storms.', color: '#D9C7A2' },
      { name: 'Panaca Formation (upper silt/clay)', age: 'Pliocene', material: 'horizontally stratified siltstone, mudstone, and clay', thickness: 'part of a ~427 m total section', note: 'Pale buff lakebed sediments that carve into the cathedral-like walls and pinnacles.', color: '#CFBF9A' },
      { name: 'Panaca Formation (lower beds & tuff)', age: 'Pliocene', material: 'siltstone, sandstone, mudstone with water-laid tuff', thickness: 'lower part of the ~427 m section', note: 'Deeper basin-fill beds, including reworked volcanic ash, deposited on the ancient lake floor.', color: '#BFAF88' },
    ],
  },
  {
    id: 'lake-tahoe-carson-range',
    name: 'Lake Tahoe / Carson Range',
    query: 'Lake Tahoe, NV',
    state: 'Nevada',
    coords: { lat: 39.0968, lng: -120.0324 },
    threshold: 0.6,
    summary: 'Glacier-sculpted granitic peaks of the Sierra Nevada batholith ringing a deep fault-bounded basin, draped with ice-age moraines and capped locally by young volcanic rocks.',
    story: 'The peaks around Lake Tahoe are built of granodiorite that crystallized deep underground from the Sierra Nevada batholith in Cretaceous time, then was uplifted and unroofed. Faulting dropped the central block to form the deep basin the lake fills, and in places young volcanic flows cap the heights. Pleistocene glaciers ground over the granite and left the moraines and till that dam side valleys around the lake.',
    layers: [
      { name: 'Glacial moraines and till', age: 'Pleistocene (Tioga ~22 ka; older Tahoe ~120+ ka)', material: 'unsorted granitic and volcanic glacial debris', thickness: 'ridges tens of ft high', note: 'Long ridges of ice-bulldozed rock that dam lakes like Fallen Leaf and Cascade.', color: '#9A9387' },
      { name: 'Volcanic rocks (local caps)', age: 'Miocene to Pleistocene', material: 'andesite lava and laharic (mudflow) deposits', thickness: 'variable, where present', note: 'Younger volcanic rocks that cap some summits, such as the andesite atop Mount Rose.', color: '#6E6660' },
      { name: 'Sierra Nevada granitic basement', age: 'Jurassic-Cretaceous (granodiorite ~90-80 Ma)', material: 'granodiorite and granite', thickness: 'forms the bulk of the ranges', note: 'The pale, crystalline batholithic rock that makes up the Carson Range and Sierra crest.', color: '#C9C3B6' },
      { name: 'Metamorphic roof pendants', age: 'Triassic-Jurassic', material: 'metasedimentary / metavolcanic rock', thickness: 'small, discontinuous bodies', note: 'Remnants of older rock the granite intruded, preserved as scattered dark pendants.', color: '#6B6E63' },
    ],
  },
]
