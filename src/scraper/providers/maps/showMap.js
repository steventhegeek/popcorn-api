// @flow

/**
 * Map for correcting show slugs.
 * @type {Object}
 */
const showMap: {
  [key: string]: string
} = {
  '60-minutes-us': '60-minutes',
  '91-days': 'ninety-one-days',
  'ace-attorney': 'gyakuten-saiban',
  'ace-of-diamond': 'diamond-no-ace',
  'active-raid': 'active-raid-kidou-kyoushuushitsu-dai-hakkei',
  'ai-mai-mi-mousou-catastrophie': 'ai-mai-mi-mousou-catastrophe',
  'akagami-no-shirayukihime': 'akagami-no-shirayuki-hime',
  'akb0048': 'akb0048-first-stage',
  'alderamin-on-the-sky': 'nejimaki-seirei-senki-tenkyou-no-alderamin',
  'american-crime': 'american-crime-1969',
  'ani-tore-ex': 'anitore-ex',
  'argevollen': 'shirogane-no-ishi-argevollen',
  'arpeggio-of-blue-steel-ars-nova': 'aoki-hagane-no-arpeggio-ars-nova',
  'arslan-senki': 'kigyou-senshi-arslan',
  'assassination-classroom': 'ansatsu-kyoushitsu',
  'b-project': 'b-project-kodou-ambitious',
  'bachelor-live': 'the-bachelor-live',
  'ballers-2015': 'ballers',
  'battle-girls-time-paradox': 'sengoku-otome-momoiro-paradox',
  'big-brother-us': 'big-brother-2000',
  'blackish': 'black-ish',
  'blazbluealter-memory': 'blazblue-alter-memory',
  'bobs-burgers': 'bob-s-burgers',
  'bonjour-sweet-love-patisserie': 'bonjour-koiaji-patisserie',
  'bordertown-2015': 'bordertown-2016',
  'bottom-biting-bug': 'oshiri-kajiri-mushi',
  'brotherhoodfinal-fantasy-xv': 'brotherhood-final-fantasy-xv',
  'brynhildr-in-the-darkness': 'gokukoku-no-brynhildr',
  'cardfight-vanguard-g-girs-crisis': 'cardfight-vanguard-g-gears-crisis-hen',
  'celebrity-big-brother': 'celebrity-big-brother-2001',
  'chaos-dragon': 'chaos-dragon-sekiryuu-seneki',
  'chicago-pd': 'chicago-p-d',
  'childrens-hospital-us': 'childrens-hospital',
  'concrete-revolutio': 'concrete-revolutio-choujin-gensou',
  'cooper-barretts-guide-to-surviving-life': 'cooper-barrett-s-guide-to-surviving-life-2016',
  'cosmos-a-space-time-odyssey': 'cosmos-a-spacetime-odyssey',
  'croisee-in-a-foreign-labyrinth': 'ikoku-meiro-no-croisee',
  'cross-ange': 'cross-ange-tenshi-to-ryuu-no-rinbu',
  'd.gray-man-hallow': 'd-gray-man-hallow',
  'daimidaler': 'kenzen-robo-daimidaler',
  'danganronpa-3-future-arc': 'danganronpa-3-the-end-of-kibougamine-gakuen-mirai-hen',
  'danganronpa-the-animation': 'danganronpa-kibou-no-gakuen-to-zetsubou-no-koukousei-the-animation',
  'danmachi': 'dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-no-darou-ka',
  'dcs-legends-of-tomorrow': 'dc-s-legends-of-tomorrow',
  'dd-hokuto-no-ken-2-ichigo-aji-': 'dd-hokuto-no-ken-2-ichigo-aji',
  'diabolik-lovers-more-blood': 'diabolik-lovers-2nd-season',
  'digimon-adventure-tri': 'digimon-adventure-tri-4',
  'doll-and-em': 'doll-em',
  'dusk-maiden-of-amnesia': 'tasogare-otome-x-amnesia',
  'ebiten': 'ebiten-kouritsu-ebisugawa-koukou-tenmonbu',
  'engaged-to-the-unidentified': 'mikakunin-de-shinkoukei',
  'fuse-memoirs-of-the-hunter-girl': 'fuse-teppou-musume-no-torimonochou',
  'garo-the-animation': 'garo-honoo-no-kokuin-special',
  'garo-the-crimson-moon': 'garo-guren-no-tsuki',
  'garothe-crimson-moon': 'garo-guren-no-tsuki',
  'gate': 'gate-jieitai-kanochi-nite-kaku-tatakaeri',
  'gen-ei-o-kakeru-taiyou-il-sole-penetra-le-illusioni': 'genei-wo-kakeru-taiyou',
  'ghost-in-the-shell-arise-alternative-architecture': 'ghost-in-the-shell-arise-tv',
  'girl-friend-beta': 'girlfriend-kari',
  'gold-rush': 'gold-rush-2010',
  'greys-anatomy': 'grey-s-anatomy',
  'gundam-reconguista-in-g': 'gundam-g-no-reconguista',
  'gundam-unicorn': 'mobile-suit-gundam-unicorn',
  'hackadoll-the-animation': 'hacka-doll-the-animation',
  'hakkenden-eight-dogs-of-the-east': 'hakkenden-touhou-hakken-ibun',
  'hakuoki-reimeiroku': 'hakuouki-reimeiroku',
  'hamatora': 'hamatora-the-animation',
  'haruchika': 'haruchika-haruta-to-chika-wa-seishun-suru',
  'hawaii-five-0-2010': 'hawaii-five-0',
  'hayate-no-gotoku-cuties': 'hayate-the-combat-butler-cuties',
  'heartland-ca': 'heartland-2007-ca',
  'hells-kitchen-us': 'hell-s-kitchen-2005',
  'hentai-ouji-to-warawanai-neko': 'hentai-ouji-to-warawanai-neko-specials',
  'hi-scoool-seha-girl': 'sega-hard-girls',
  'highschool-dxd-born': 'high-school-dxd-born',
  'house-of-cards-2013': 'house-of-cards',
  'how-its-made-dream-cars': 'how-it-s-made-dream-cars',
  'how-its-made': 'how-it-s-made',
  'hozuki-no-reitetsu': 'hoozuki-no-reitetsu',
  'hyperdimension-neptunia-the-animation': 'choujigen-game-neptune-the-animation',
  'imocho-another-shitty-sister-ln-adaptation': 'saikin-imouto-no-yousu-ga-chotto-okashiin-da-ga',
  'infinite-stratos-2': 'is-infinite-stratos-2',
  'intelligence-us': 'intelligence-2014',
  'inu-x-boku-secret-service': 'inu-x-boku-ss',
  'its-always-sunny-in-philadelphia': 'it-s-always-sunny-in-philadelphia',
  'james-mays-cars-of-the-people': 'james-may-s-cars-of-the-people',
  'jericho-2016': 'jericho-1969',
  'k-return-of-kings': 'k-2015',
  'k': 'k-project',
  'kaasan-mom-s-life': 'mainichi-kaasan',
  'kabaneri-of-the-iron-fortress': 'koutetsujou-no-kabaneri',
  'kaiji-s2-against-all-rules': 'gyakkyou-burai-kaiji-hakairoku-hen',
  'kaiji-ultimate-survivor': 'gyakkyou-burai-kaiji-ultimate-survivor',
  'kamisama-kiss-2': 'kamisama-hajimemashita-2',
  'kamisama-kiss': 'kamisama-hajimemashita-kiss',
  'kamisama-no-memo-chou': 'kamisama-no-memochou',
  'kateikyoushi-hitman-reborn': 'katekyo-hitman-reborn',
  'kindaichi-case-files-r': 'kindaichi-shounen-no-jikenbo-returns',
  'kitchen-nightmares-us': 'kitchen-nightmares',
  'kuroko-s-basketball': 'kuroko-no-basket',
  'kuroshitsuji-book-of-circus': 'black-butler-book-of-circus',
  'kyoukaisenjou-no-horizon': 'horizon-in-the-middle-of-nowhere',
  'la-corda-d-oro-blue-sky': 'kiniro-no-corda-blue-sky',
  'la-storia-della-arcana-famiglia': 'arcana-famiglia',
  'lance-n--masques': 'lance-n-masques',
  'last-man-standing-us': 'last-man-standing-2011',
  'law-and-order-svu': 'law-order-special-victims-unit',
  'litchi-hikari-club': 'litchi-de-hikari-club',
  'little-witch-academia-the-enchanted-parade': 'little-witch-academia-2',
  'locodol': 'futsuu-no-joshikousei-ga-locodol-yatte-mita',
  'love-live-the-school-idol-movie': 'love-live-school-idol-project-movie',
  'luck-&-logic': 'luck-logic',
  'lupin-iii-(2015)': 'lupin-iii',
  'magi': 'magi-the-labyrinth-of-magic',
  'magic-kaito-1412': 'magic-kaito-tv',
  'magical-girl-lyrical-nanoha-the-movie-2nd': 'mahou-shoujo-lyrical-nanoha-the-movie-2nd-a-s',
  'mahouka': 'mahouka-koukou-no-rettousei',
  'majestic-prince': 'ginga-kikoutai-majestic-prince',
  'majikoi~oh-samurai-girls': 'maji-de-watashi-ni-koi-shinasai',
  'mangaka-san-to-assistant-san-to': 'mangaka-san-to-assistant-san-to-the-animation',
  'maoyuu-maou-yuusha': 'maoyu',
  'maria-the-virgin-witch': 'junketsu-no-maria',
  'marvels-agent-carter': 'marvel-s-agent-carter',
  'marvels-agents-of-s-h-i-e-l-d': 'marvel-s-agents-of-s-h-i-e-l-d',
  'marvels-daredevil': 'marvel-s-daredevil',
  'marvels-jessica-jones': 'marvel-s-jessica-jones',
  'mekakucity-actors': 'mekaku-city-actors',
  'mike-and-molly': 'mike-molly',
  'mondaijitachi-ga-isekai-kara-kuru-sou-desu-yo': 'problem-children-are-coming-from-another-world-aren-t-they',
  'moretsu-pirates': 'bodacious-space-pirates',
  'moritasan-wa-mukuchi': 'morita-san-wa-mukuchi',
  'mushibugyo': 'mushibugyou',
  'mushishi-tokubetsu-hen-hihamukage': 'mushishi-special-hihamukage',
  'my-sister-came-onee-chan-ga-kita': 'onee-chan-ga-kita',
  'naruto-sd-rock-lee-no-seishun-full-power-ninden': 'rock-lee-no-seishun-full-power-ninden',
  'naruto-shippuuden': 'naruto-shippuden',
  'ninja-slayer': 'ninja-slayer-from-animation',
  'no-rin': 'nourin',
  'no.-6': 'no-6',
  'non-non-biyori-repeat': 'non-non-biyori-2',
  'noukome': 'noucome-my-mental-choices-are-completely-interfering-with-my-school-romantic-comedy',
  'okusama-ga-seitokaichou': 'okusama-ga-seitokaichou-okusama-gekijou',
  'one-piece-3d2y': 'one-piece-3d2y-special',
  'one-week-friends': 'isshuukan-friends',
  'ore-twintail-ni-narimasu': 'ore-twintails-ni-narimasu',
  'parasyte-the-maxim': 'kiseijuu',
  'perception': 'perception-2012',
  'phi-brain': 'phi-brain-kami-no-puzzle',
  'photo-kano': 'photokano',
  'planetarian': 'planetarian-chiisana-hoshi-no-yume',
  'polar-bear-cafe': 'polar-bear-s-cafe',
  'power-2014': 'power',
  'poyopoyo': 'poyopoyo-kansatsu-nikki',
  'prey-uk': 'prey-2014',
  'proof-us': 'proof',
  'puzzle-and-dragons-cross': 'puzzle-dragons-x',
  'reckless': 'reckless-2014',
  'resurrection-us': 'resurrection-2014',
  'revolution-2012': 'revolution',
  'ro-kyu-bu-fast-break': 'ro-kyu-bu',
  'robotics;notes': 'robotics-notes',
  'rowdy-sumo-wrestler-matsutaro': 'abarenbou-kishi-matsutarou',
  'rozen-maiden-(2013)': 'rozen-maiden-zuruckspulen',
  'rush-us': 'rush-2014',
  'ryuugajou-nanana-no-maizoukin': 'ryuugajou-nanana-no-maizoukin-tv',
  'saekano': 'saenai-heroine-no-sodate-kata',
  'sailor-moon-crystal': 'bishoujo-senshi-sailor-moon-crystal',
  'saint-seiya-the-lost-canvas': 'saint-seiya-the-lost-canvas-meiou-shinwa',
  'sakamichi-no-apollon': 'kids-on-the-slope',
  'saki-episode-of-side-a': 'saki-achiga-hen-episode-of-side-a',
  'saki-the-nationals': 'saki-zenkoku-hen',
  'sanctuary-us': 'sanctuary',
  'satisfaction-us': 'satisfaction-2014',
  'scandal-us': 'scandal',
  'schitts-creek': 'schitt-s-creek',
  'second-chance': 'second-chance-2016',
  'seisen-cerberus': 'seisen-cerberus-ryuukoku-no-fatalites',
  'seitokai-no-ichizon-lv.2': 'seitokai-no-ichizon-lv-2',
  'sengoku-musou-sanada-no-shou': 'sengoku-musou-sp-sanada-no-shou',
  'senki-zesshou-symphogear-g': 'senki-zesshou-symphogear-g-in-the-distance-that-day-when-the-star-became-music',
  'senki-zesshou-symphogear-gx': 'senki-zesshou-symphogear-3',
  'senki-zesshou-symphogear': 'senki-zesshou-symphogear-meteoroid-falling-burning-and-disappear-then',
  'seraph-of-the-end': 'owari-no-seraph',
  'she-and-her-cat-everything-flows': 'kanojo-to-kanojo-no-neko-everything-flows',
  'she-and-her-cat': 'kanojo-to-kanojo-no-neko',
  'shimoneta': 'shimoneta-to-iu-gainen-ga-sonzai-shinai-taikutsu-na-sekai',
  'shin-atashinchi': 'shin-atashin-chi',
  'shin-sekai-yori': 'shinsekai-yori',
  'shin-strange-': 'shin-strange',
  'shingeki-no-kyojin': 'attack-on-titan',
  'shokugeki-no-soma': 'shokugeki-no-souma',
  'shomin-sample': 'ore-ga-ojou-sama-gakkou-ni-shomin-sample-toshite-rachirareta-ken',
  'shounen-hollywood': 'shounen-hollywood-holly-stage-for-49',
  'so-i-can-t-play-h': 'dakara-boku-wa-h-ga-dekinai',
  'soniani-super-sonico-the-animation': 'super-sonico-the-animation',
  'space-brothers': 'uchuu-kyoudai',
  'space-dandy-2': 'space-dandy-2nd-season',
  'space-patrol-luluco': 'uchuu-patrol-luluco',
  'stan-lees-lucky-man': 'stan-lee-s-lucky-man',
  'steins;gate': 'steins-gate',
  'stella-jogakuin-koutouka-c3-bu': 'stella-jogakuin-koutou-ka-c-bu',
  'straight-title-robot-anime': 'chokkyuu-hyoudai-robot-anime-straight-title',
  'strange-': 'strange',
  'suisei-no-gargantia': 'gargantia-on-the-verdurous-planet',
  'sukitte-ii-na-yo.': 'sukitte-ii-na-yo',
  'survivors-remorse': 'survivor-s-remorse',
  'teekyu': 'teekyuu',
  'teen-wolf': 'teen-wolf-2011',
  'the-bridge-us': 'the-bridge-2013',
  'the-comedians-us': 'the-comedians-2015',
  'the-disappearance-of-nagato-yuki-chan': 'nagato-yuki-chan-no-shoushitsu',
  'the-idolm@ster-cinderella-girls': 'the-idolm-ster-cinderella-girls',
  'the-idolm@ster': 'the-idolm-ster',
  'the-kennedys-uk': 'the-kennedys-2015',
  'the-knight-in-the-area': 'area-no-kishi',
  'the-league': 'the-league-2009',
  'the-librarians-us': 'the-librarians-2014',
  'the-magicians-us': 'the-magicians',
  'the-new-prince-of-tennis-ova-vs-genius10': 'new-prince-of-tennis-ova-vs-genius10',
  'the-new-prince-of-tennis-specials': 'new-prince-of-tennis-specials',
  'the-new-prince-of-tennis': 'new-prince-of-tennis',
  'the-pilot-s-love-song': 'toaru-hikuushi-e-no-koiuta',
  'the-world-god-only-knows-goddesses-arc': 'the-world-god-only-knows-goddess-arc',
  'this-is-england-90': 'this-is-england-90-2015',
  'time-travel-shoujo': 'time-travel-shoujo-mari-waka-to-8-nin-no-kagakusha-tachi',
  'tokyo-ghoul-root-a': 'tokyo-ghoul-2',
  'tonari-no-kaibutsu-kun': 'my-little-monster',
  'tsukiuta.-the-animation': 'tsukiuta-the-animation',
  'twin-angel-twinkle-paradise': 'kaitou-tenshi-twin-angel-kyun-kyun-tokimeki-paradise',
  'unlimited-fafnir': 'juuou-mujin-no-fafnir',
  'usagi-drop': 'bunny-drop',
  'uta-no-prince-sama-2': 'uta-no-prince-sama-maji-love-2000',
  'uta-no-prince-sama-revolutions': 'uta-no-prince-sama-maji-love-3',
  'uta-no-prince-sama': 'uta-no-prince-sama-maji-love-1000',
  'utakoi': 'chouyaku-hyakuninisshu-uta-koi',
  'valvrave-the-liberator': 'kakumeiki-valvrave',
  'wake-up-girls-seven-idols': 'wake-up-girls-shichinin-no-idol',
  'wake-up-girls-zoo': 'wake-up-girl-zoo',
  'watamote': 'watashi-ga-motenai-no-wa-dou-kangaetemo-omaera-ga-warui',
  'whose-line-is-it-anyway-us': 'whose-line-is-it-anyway-1998',
  'wooser-no-sono-higurashi-mugen-hen': 'wooser-no-sono-higurashi',
  "working'": 'working-2',
  'working': 'working-1',
  'yahari-ore-no-seishun-love-come-wa-machigatteiru-zoku': 'yahari-ore-no-seishun-love-comedy-wa-machigatteiru-zoku',
  'yahari-ore-no-seishun-love-come-wa-machigatteiru': 'yahari-ore-no-seishun-love-comedy-wa-machigatteiru-ova',
  'yama-no-susume-2': 'yama-no-susume-second-season-ova',
  'yamada-kun-and-the-seven-witches': 'yamada-kun-to-7-nin-no-majo',
  'yami-shibai-japanese-ghost-stories-2': 'yami-shibai-2nd-season',
  'yami-shibai-japanese-ghost-stories-3': 'yami-shibai-3rd-season',
  'yami-shibai-japanese-ghost-stories': 'yami-shibai',
  'young-and-hungry': 'young-hungry',
  'youre-the-worst-2014': 'you-re-the-worst',
  'youre-the-worst': 'you-re-the-worst',
  'yuki-yuna-wa-yusha-de-aru': 'yuuki-yuuna-wa-yuusha-de-aru',
  'yurumate3dei': 'yurumates-3d',
  'yuruyuri': 'yuru-yuri',
  'yuushibu': 'yuusha-ni-narenakatta-ore-wa-shibushibu-shuushoku-wo-ketsui-shimashita',
  'zero-no-tsukaima-final': 'zero-no-tsukaima-f',
  'zx-ignition': 'z-x-ignition'
}

/**
 * Export the movie map.
 * @type {Object}
 */
export default showMap
