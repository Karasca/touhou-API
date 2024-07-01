'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Works', {
      abbreviation: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      nameJP: {
        type: Sequelize.STRING
      },
      entryNumber: {
        type: Sequelize.STRING
      },
      nameR: {
        type: Sequelize.STRING
      }
    });

    await queryInterface.bulkInsert('Works', [
      {
        abbreviation: 'EoSD',
        name: 'the Embodiment of Scarlet Devil',
        nameJP: '東方紅魔郷',
        entryNumber: '6',
        nameR: 'とうほうこうまきょう'
      },
      {
        abbreviation: 'PCB',
        name: 'Perfect Cherry Blossom',
        nameJP: '東方妖々夢',
        entryNumber: '7',
        nameR: 'とうほうようようむ'
      },
      {
        abbreviation: 'IaMP',
        name: 'Immaterial and Missing Power',
        nameJP: '東方萃夢想',
        entryNumber: '7.5',
        nameR: 'とうほうすいむそう'
      },
      {
        abbreviation: 'IN',
        name: 'Imperishable Night',
        nameJP: '東方永夜抄',
        entryNumber: '8',
        nameR: 'とうほうえいやしょう'
      },
      {
        abbreviation: 'PoFV',
        name: 'Phantasmagoria of Flower View',
        nameJP: '東方花映塚',
        entryNumber: '9',
        nameR: 'とうほうかえいづか'
      },
      {
        abbreviation: 'STB',
        name: 'Shoot the Bullet',
        nameJP: '東方文花帖',
        entryNumber: '9.5',
        nameR: 'とうほうぶんかちょう'
      },
      {
        abbreviation: 'MoF',
        name: 'Mountain of Faith',
        nameJP: '東方風神録',
        entryNumber: '10',
        nameR: 'とうほうふうじんろく'
      },
      {
        abbreviation: 'SWR',
        name: 'Scarlet Weather Rhapsody',
        nameJP: '東方緋想天',
        entryNumber: '10.5',
        nameR: 'とうほうひそうてん'
      },
      {
        abbreviation: 'SA',
        name: 'Subterranean Animism',
        nameJP: '東方地霊殿',
        entryNumber: '11',
        nameR: 'とうほうちれいでん'
      },
      {
        abbreviation: 'UFO',
        name: 'Undefined Fantastic Object',
        nameJP: '東方星蓮船',
        entryNumber: '12',
        nameR: 'とうほうせいれんせん'
      },
      {
        abbreviation: 'HSTS',
        name: 'Hisoutensoku',
        nameJP: '東方非想天則',
        entryNumber: '12.3',
        nameR: 'とうほうひそうてんそく'
      },
      {
        abbreviation: 'DS',
        name: 'Double Spoiler',
        nameJP: '東方文花帖',
        entryNumber: '12.5',
        nameR: 'とうほうぶんかちょう'
      },
      {
        abbreviation: 'GFW',
        name: 'Great Fairy Wars',
        nameJP: '妖精大戦争',
        entryNumber: '12.8',
        nameR: 'ようせいだいせんそう'
      },
      {
        abbreviation: 'TD',
        name: 'Ten Desires',
        nameJP: '東方神霊廟',
        entryNumber: '13',
        nameR: 'とうほうしんれいびょう'
      },
      {
        abbreviation: 'HM',
        name: 'Hopeless Masquerade',
        nameJP: '東方心綺楼',
        entryNumber: '13.5',
        nameR: 'とうほうしんきろう'
      },
      {
        abbreviation: 'DDC',
        name: 'Double Dealing Character',
        nameJP: '東方輝針城',
        entryNumber: '14',
        nameR: 'とうほうきしんじょう'
      },
      {
        abbreviation: 'ISC',
        name: 'Impossible Spell Card',
        nameJP: '弾幕アマノジャク',
        entryNumber: '14.3',
        nameR: 'だんまくあまのじゃく'
      },
      {
        abbreviation: 'ULiL',
        name: 'Urban Legend in Limbo',
        nameJP: '東方深秘録',
        entryNumber: '14.5',
        nameR: 'とうほうしんぴろく'
      },
      {
        abbreviation: 'LoLK',
        name: 'Legacy of Lunatic Kingdom',
        nameJP: '東方紺珠伝',
        entryNumber: '15',
        nameR: 'とうほうかんじゅでん'
      },
      {
        abbreviation: 'AoCF',
        name: 'Antimony of Common Flowers',
        nameJP: '東方憑依花',
        entryNumber: '15.5',
        nameR: 'とうほうひょういばな'
      },
      {
        abbreviation: 'HSiFS',
        name: 'Hidden Star in Four Seasons',
        nameJP: '東方天空璋',
        entryNumber: '16',
        nameR: 'とうほうてんくうしょう'
      },
      {
        abbreviation: 'VD',
        name: 'Violet Detector',
        nameJP: '秘封ナイトメアダイアリー',
        entryNumber: '16.5',
        nameR: 'ひふうないとめあだいありー'
      },
      {
        abbreviation: 'WBaWC',
        name: 'Wily Beast and Weakest Creature',
        nameJP: '東方鬼形獣',
        entryNumber: '17',
        nameR: 'とうほうきけいじゅう'
      },
      {
        abbreviation: 'SFW',
        name: 'Sunken Fossil World',
        nameJP: '東方剛欲異聞　～ 水没した沈愁地獄',
        entryNumber: '17.5',
        nameR: 'とうほうごうよくいぶん　～ すいぼつしたちんしゅうじごく'
      },
      {
        abbreviation: 'UM',
        name: 'Unconnected Marketeers',
        nameJP: '東方紅龍洞',
        entryNumber: '18',
        nameR: 'とうほうこうりゅうどう'
      },
      {
        abbreviation: 'HBM',
        name: '100th Black Market',
        nameJP: 'バレットフィリア達の闇市場',
        entryNumber: '18.5',
        nameR: 'ばれっとふぃりあのやみいちば'
      },
      {
        abbreviation: 'UDoALG',
        name: 'Unfinished Dream of All Living Ghost',
        nameJP: '東方獣王園',
        entryNumber: '19',
        nameR: 'とうほうじゅうおうえん'
      },
    ])

    await queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      familyName: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      familyNameJP: {
        type: Sequelize.STRING
      },
      firstNameJP: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      familyNameR: {
        type: Sequelize.STRING,
      },
      firstNameR: {
        type: Sequelize.STRING,
      }
    });
    
    await queryInterface.bulkInsert('Characters', [
      {
        familyName: 'Hakurei',
        firstName: 'Reimu',
        familyNameJP: '博麗',
        firstNameJP: '霊夢',
        familyNameR: 'はくれい',
        firstNameR: 'れいむ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: null
      },
      {
        familyName: 'Kirisame',
        firstName: 'Marisa',
        familyNameJP: '霧雨',
        firstNameJP: '魔理沙',
        familyNameR: 'きりさめ',
        firstNameR: 'まりさ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: null
      },
      {
        familyName: '',
        firstName: 'Rumia',
        familyNameJP: '',
        firstNameJP: 'ルーミア',
        familyNameR: '',
        firstNameR: 'るーみあ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'EoSD'
      },
      {
        familyName: '',
        firstName: 'Daiyousei',
        familyNameJP: '',
        firstNameJP: '大妖精',
        familyNameR: '',
        firstNameR: 'だいようせい',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'EoSD'
      },
      {
        familyName: '',
        firstName: 'Cirno',
        familyNameJP: '',
        firstNameJP: 'チルノ',
        familyNameR: '',
        firstNameR: 'ちるの',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'EoSD'
      },
      {
        familyName: 'Hong',
        firstName: 'Meiling',
        familyNameJP: '紅',
        firstNameJP: '美鈴',
        familyNameR: 'ほん',
        firstNameR: 'めいりん',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'EoSD'
      },
      {
        familyName: '',
        firstName: 'Koakuma',
        familyNameJP: '',
        firstNameJP: '小悪魔',
        familyNameR: '',
        firstNameR: 'こあくま',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'EoSD'
      },
      {
        familyName: 'Knowledge',
        firstName: 'Patchouli',
        familyNameJP: 'ノーレッジ',
        firstNameJP: 'パチュリー',
        familyNameR: 'のーれっじ',
        firstNameR: 'ぱちゅりー',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'EoSD'
      },
      {
        familyName: 'Izayoi',
        firstName: 'Sakuya',
        familyNameJP: '十六夜',
        firstNameJP: '咲夜',
        familyNameR: 'いざよい',
        firstNameR: 'さくや',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'EoSD'
      },
      {
        familyName: 'Scarlet',
        firstName: 'Remilia',
        familyNameJP: 'スカーレット',
        firstNameJP: 'レミリア',
        familyNameR: 'すかーれっと',
        firstNameR: 'れみりあ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'EoSD'
      },
      {
        familyName: 'Scarlet',
        firstName: 'Flandre',
        familyNameJP: 'スカーレット',
        firstNameJP: 'フランドール',
        familyNameR: 'すかーれっと',
        firstNameR: 'ふらんどーる',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'EoSD'
      },
      {
        familyName: 'Whiterock',
        firstName: 'Letty',
        familyNameJP: 'ホワイトロック',
        firstNameJP: 'レティ',
        familyNameR: 'ほわいとろっく',
        firstNameR: 'れてぃ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'PCB'
      },
      {
        familyName: '',
        firstName: 'Chen',
        familyNameJP: '',
        firstNameJP: '橙',
        familyNameR: '',
        firstNameR: 'ちぇん',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'PCB'
      },
      {
        familyName: 'Margatroid',
        firstName: 'Alice',
        familyNameJP: 'マーガトロイド',
        firstNameJP: 'アリス',
        familyNameR: 'まーがとろいど',
        firstNameR: 'ありす',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'PCB'
      },
      {
        familyName: 'White',
        firstName: 'Lily',
        familyNameJP: 'ホワイト',
        firstNameJP: 'リリー',
        familyNameR: 'ほわいと',
        firstNameR: 'りりー',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'PCB'
      },
      {
        familyName: 'Prismriver',
        firstName: 'Lunasa',
        familyNameJP: 'プリズムリバー',
        firstNameJP: 'ルナサ',
        familyNameR: 'ぷりずむりばー',
        firstNameR: 'るなさ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'PCB'
      },
      {
        familyName: 'Prismriver',
        firstName: 'Merlin',
        familyNameJP: 'プリズムリバー',
        firstNameJP: 'メルラン',
        familyNameR: 'ぷりずむりばー',
        firstNameR: 'めるらん',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'PCB'
      },
      {
        familyName: 'Prismriver',
        firstName: 'Lyrica',
        familyNameJP: 'プリズムリバー',
        firstNameJP: 'リリカ',
        familyNameR: 'ぷりずむりばー',
        firstNameR: 'りりか',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'PCB'
      },
      {
        familyName: 'Konpaku',
        firstName: 'Youmu',
        familyNameJP: '魂魄',
        firstNameJP: '妖夢',
        familyNameR: 'こんぱく',
        firstNameR: 'ようむ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'PCB'
      },
      {
        familyName: 'Saigyouji',
        firstName: 'Yuyuko',
        familyNameJP: '西行寺',
        firstNameJP: '幽々子',
        familyNameR: 'さいぎょうじ',
        firstNameR: 'ゆゆこ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'PCB'
      },
      {
        familyName: 'Yakumo',
        firstName: 'Ran',
        familyNameJP: '八雲',
        firstNameJP: '藍',
        familyNameR: 'やくも',
        firstNameR: 'らん',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'PCB'
      },
      {
        familyName: 'Yakumo',
        firstName: 'Yukari',
        familyNameJP: '八雲',
        firstNameJP: '紫',
        familyNameR: 'やくも',
        firstNameR: 'ゆかり',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'PCB'
      },
      {
        familyName: 'Ibuki',
        firstName: 'Suika',
        familyNameJP: '伊吹',
        firstNameJP: '萃香',
        familyNameR: 'いぶき',
        firstNameR: 'すいか',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'IaMP'
      },
      {
        familyName: 'Nightbug',
        firstName: 'Wriggle',
        familyNameJP: 'ナイトバグ',
        firstNameJP: 'リグル',
        familyNameR: 'ないとばぐ',
        firstNameR: 'りぐる',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'IN'
      },
      {
        familyName: 'Lorelei',
        firstName: 'Mystia',
        familyNameJP: 'ローレライ',
        firstNameJP: 'ミスティア',
        familyNameR: 'ろーれらい',
        firstNameR: 'みすてぃあ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'IN'
      },
      {
        familyName: 'Kamishirasawa',
        firstName: 'Keine',
        familyNameJP: '上白沢',
        firstNameJP: '慧音',
        familyNameR: 'かみしらさわ',
        firstNameR: 'けいね',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'IN'
      },
      {
        familyName: 'Inaba',
        firstName: 'Tewi',
        familyNameJP: '因幡',
        firstNameJP: 'てゐ',
        familyNameR: 'いなば',
        firstNameR: 'てゐ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'IN'
      },
      {
        familyName: '',
        firstName: 'Reisen Udongein Inaba',
        familyNameJP: '',
        firstNameJP: '鈴仙・優曇華院・イナバ',
        familyNameR: '',
        firstNameR: 'れいせん・うどんげいん・いなば',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'IN'
      },
      {
        familyName: 'Yagokoro',
        firstName: 'Eirin',
        familyNameJP: '八意',
        firstNameJP: '永琳',
        familyNameR: 'やごころ',
        firstNameR: 'えいりん',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'IN'
      },
      {
        familyName: 'Houraisan',
        firstName: 'Kaguya',
        familyNameJP: '蓬莱山',
        firstNameJP: '輝夜',
        familyNameR: 'ほうらいさん',
        firstNameR: 'かぐや',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'IN'
      },
      {
        familyName: 'Fujiwara',
        firstName: 'Mokou',
        familyNameJP: '藤原',
        firstNameJP: '妹紅',
        familyNameR: 'ふじわら',
        firstNameR: 'もこう',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'IN'
      },
      {
        familyName: 'Shameimaru',
        firstName: 'Aya',
        familyNameJP: '射命丸',
        firstNameJP: '文',
        familyNameR: 'しゃめいまる',
        firstNameR: 'あや',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'PoFV'
      },
      {
        familyName: 'Melancholy',
        firstName: 'Medicine',
        familyNameJP: 'メランコリー',
        firstNameJP: 'メディスン',
        familyNameR: 'めらんこりー',
        firstNameR: 'めでぃすん',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'PoFV'
      },
      {
        familyName: 'Kazami',
        firstName: 'Yuuka',
        familyNameJP: '風見',
        firstNameJP: '幽香',
        familyNameR: 'めらんこりー',
        firstNameR: 'めでぃすん',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'PoFV'
      },
      {
        familyName: 'Onozuka',
        firstName: 'Komachi',
        familyNameJP: '小野塚',
        firstNameJP: '小町',
        familyNameR: 'おのづか',
        firstNameR: 'こまち',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'PoFV'
      },
      {
        familyName: 'Shiki',
        firstName: 'Eiki',
        familyNameJP: '四季',
        firstNameJP: '映姫',
        familyNameR: 'しき',
        firstNameR: 'えいき',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'PoFV'
      },
      {
        familyName: 'Aki',
        firstName: 'Shizuha',
        familyNameJP: '秋',
        firstNameJP: '静葉',
        familyNameR: 'あき',
        firstNameR: 'しずは',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'MoF'
      },
      {
        familyName: 'Aki',
        firstName: 'Minoriko',
        familyNameJP: '秋',
        firstNameJP: '穣子',
        familyNameR: 'あき',
        firstNameR: 'みのりこ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'MoF'
      },
      {
        familyName: 'Kagiyama',
        firstName: 'Hina',
        familyNameJP: '鍵山',
        firstNameJP: '雛',
        familyNameR: 'かぎやま',
        firstNameR: 'ひな',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'MoF'
      },
      {
        familyName: 'Kawashiro',
        firstName: 'Nitori',
        familyNameJP: '川城',
        firstNameJP: 'にとり',
        familyNameR: 'かわしろ',
        firstNameR: 'にとり',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'MoF'
      },
      {
        familyName: 'Inubashiri',
        firstName: 'Momiji',
        familyNameJP: '犬走',
        firstNameJP: '椛',
        familyNameR: 'いぬばしり',
        firstNameR: 'もみじ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'MoF'
      },
      {
        familyName: 'Kochiya',
        firstName: 'Sanae',
        familyNameJP: '東風谷',
        firstNameJP: '早苗',
        familyNameR: 'こちや',
        firstNameR: 'さなえ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'MoF'
      },
      {
        familyName: 'Yasaka',
        firstName: 'Kanako',
        familyNameJP: '八坂',
        firstNameJP: '神奈子',
        familyNameR: 'やさか',
        firstNameR: 'かなこ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'MoF'
      },
      {
        familyName: 'Moriya',
        firstName: 'Suwako',
        familyNameJP: '洩矢',
        firstNameJP: '諏訪湖',
        familyNameR: 'もりや',
        firstNameR: 'すわこ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'MoF'
      },
      {
        familyName: 'Nagae',
        firstName: 'Iku',
        familyNameJP: '永江',
        firstNameJP: '衣玖',
        familyNameR: 'ながえ',
        firstNameR: 'いく',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'SWR'
      },
      {
        familyName: 'Hinanawi',
        firstName: 'Tenshi',
        familyNameJP: '比那名居',
        firstNameJP: '天子',
        familyNameR: 'ひなない',
        firstNameR: 'てんし',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'SWR'
      },
      {
        familyName: '',
        firstName: 'Kisume',
        familyNameJP: '',
        firstNameJP: 'キスメ',
        familyNameR: '',
        firstNameR: 'きすめ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'SA'
      },
      {
        familyName: 'Kurodani',
        firstName: 'Yamame',
        familyNameJP: '黒谷',
        firstNameJP: 'ヤマメ',
        familyNameR: 'くろだに',
        firstNameR: 'やまめ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'SA'
      },
      {
        familyName: 'Mizuhashi',
        firstName: 'Parsee',
        familyNameJP: '水橋',
        firstNameJP: 'パルスィ',
        familyNameR: 'みずはし',
        firstNameR: 'ぱるすぃ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'SA'
      },
      {
        familyName: 'Hoshiguma',
        firstName: 'Yuugi',
        familyNameJP: '星熊',
        firstNameJP: '勇儀',
        familyNameR: 'ほしぐま',
        firstNameR: 'ゆうぎ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'SA'
      },
      {
        familyName: 'Komeiji',
        firstName: 'Satori',
        familyNameJP: '古明地',
        firstNameJP: 'さとり',
        familyNameR: 'こめいじ',
        firstNameR: 'さとり',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'SA'
      },
      {
        familyName: 'Kaenbyou',
        firstName: 'Rin',
        familyNameJP: '火焔猫',
        firstNameJP: '燐',
        familyNameR: 'かえんびょう',
        firstNameR: 'りん',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'SA'
      },
      {
        familyName: 'Reiuji',
        firstName: 'Utsuho',
        familyNameJP: '霊烏路',
        firstNameJP: '空',
        familyNameR: 'れいうじ',
        firstNameR: 'うつほ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'SA'
      },
      {
        familyName: 'Komeiji',
        firstName: 'Koishi',
        familyNameJP: '古明地',
        firstNameJP: 'こいし',
        familyNameR: 'こめいじ',
        firstNameR: 'こいし',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'SA'
      },
      {
        familyName: '',
        firstName: 'Nazrin',
        familyNameJP: '',
        firstNameJP: 'ナズーリン',
        familyNameR: '',
        firstNameR: 'なずーりん',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UFO'
      },
      {
        familyName: 'Tatara',
        firstName: 'Kogasa',
        familyNameJP: '多々良',
        firstNameJP: '小傘',
        familyNameR: 'たたら',
        firstNameR: 'こがさ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UFO'
      },
      {
        familyName: 'Kumoi',
        firstName: 'Ichirin',
        familyNameJP: '雲居',
        firstNameJP: '一輪',
        familyNameR: 'くもい',
        firstNameR: 'いちりん',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UFO'
      },
      {
        familyName: 'Murasa',
        firstName: 'Minamitsu',
        familyNameJP: '村沙',
        firstNameJP: '水密',
        familyNameR: 'むらさ',
        firstNameR: 'みなみつ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UFO'
      },
      {
        familyName: 'Toramaru',
        firstName: 'Shou',
        familyNameJP: '寅丸',
        firstNameJP: '星',
        familyNameR: 'とらまる',
        firstNameR: 'しょう',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UFO'
      },
      {
        familyName: 'Hijiri',
        firstName: 'Byakuren',
        familyNameJP: '聖',
        firstNameJP: '白蓮',
        familyNameR: 'ひじり',
        firstNameR: 'びゃくれん',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UFO'
      },
      {
        familyName: 'Houjuu',
        firstName: 'Nue',
        familyNameJP: '封獣',
        firstNameJP: 'ぬえ',
        familyNameR: 'ほうじゅう',
        firstNameR: 'ぬえ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UFO'
      },
      {
        familyName: 'Himekaidou',
        firstName: 'Hatate',
        familyNameJP: '姫海棠',
        firstNameJP: 'はたて',
        familyNameR: 'ひめかいどう',
        firstNameR: 'はたて',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'DS'
      },
      {
        familyName: 'Kasodani',
        firstName: 'Kyouko',
        familyNameJP: '幽谷',
        firstNameJP: '響子',
        familyNameR: 'かそだに',
        firstNameR: 'きょうこ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'TD'
      },
      {
        familyName: 'Miyako',
        firstName: 'Yoshika',
        familyNameJP: '宮古',
        firstNameJP: '芳香',
        familyNameR: 'みやこ',
        firstNameR: 'よしか',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'TD'
      },
      {
        familyName: 'Kaku',
        firstName: 'Seiga',
        familyNameJP: '霍',
        firstNameJP: '青娥',
        familyNameR: 'かく',
        firstNameR: 'せいが',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'TD'
      },
      {
        familyName: 'Soga',
        firstName: 'Tojiko',
        familyNameJP: '蘇我',
        firstNameJP: '屠自古',
        familyNameR: 'そが',
        firstNameR: 'とじこ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'TD'
      },
      {
        familyName: 'Mononobe',
        firstName: 'Futo',
        familyNameJP: '物部',
        firstNameJP: '布都',
        familyNameR: 'もののべ',
        firstNameR: 'ふと',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'TD'
      },
      {
        familyName: 'Toyosatomimi',
        firstName: 'Miko',
        familyNameJP: '豊聡耳',
        firstNameJP: '神子',
        familyNameR: 'とよさとみみ',
        firstNameR: 'みこ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'TD'
      },
      {
        familyName: 'Futatsuiwa',
        firstName: 'Mamizou',
        familyNameJP: '二ッ岩',
        firstNameJP: 'マミゾウ',
        familyNameR: 'ふたついわ',
        firstNameR: 'まみぞう',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'TD'
      },
      {
        familyName: 'Hata',
        firstName: 'Kokoro',
        familyNameJP: '秦',
        firstNameJP: 'Kokoro',
        familyNameR: 'はた',
        firstNameR: 'こころ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'HM'
      },
      {
        familyName: '',
        firstName: 'Wakasagihime',
        familyNameJP: '',
        firstNameJP: 'わかさぎ姫',
        familyNameR: '',
        firstNameR: 'わかさぎひめ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'DDC'
      },
      {
        familyName: '',
        firstName: 'Sekibanki',
        familyNameJP: '',
        firstNameJP: '赤蛮奇',
        familyNameR: '',
        firstNameR: 'せきばんき',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'DDC'
      },
      {
        familyName: 'Imaizumi',
        firstName: 'Kagerou',
        familyNameJP: '今泉',
        firstNameJP: '影狼',
        familyNameR: 'いまいずみ',
        firstNameR: 'かげろう',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'DDC'
      },

      {
        familyName: 'Tsukumo',
        firstName: 'Benben',
        familyNameJP: '九十九',
        firstNameJP: '弁々',
        familyNameR: 'つくも',
        firstNameR: 'べんべん',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'DDC'
      },
      {
        familyName: 'Tsukumo',
        firstName: 'Yatsuhashi',
        familyNameJP: '九十九',
        firstNameJP: '八橋',
        familyNameR: 'つくも',
        firstNameR: 'やつはし',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'DDC'
      },
      {
        familyName: 'Kijin',
        firstName: 'Seija',
        familyNameJP: '鬼人',
        firstNameJP: '正邪',
        familyNameR: 'きじん',
        firstNameR: 'せいじゃ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'DDC'
      },
      {
        familyName: 'Sukuna',
        firstName: 'Shinmyoumaru',
        familyNameJP: '少名',
        firstNameJP: '針妙丸',
        familyNameR: 'すくな',
        firstNameR: 'しんみょうまる',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'DDC'
      },
      {
        familyName: 'Horikawa',
        firstName: 'Raiko',
        familyNameJP: '堀川',
        firstNameJP: '雷鼓',
        familyNameR: 'ほりかわ',
        firstNameR: 'らいこ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'DDC'
      },
      {
        familyName: 'Usami',
        firstName: 'Sumireko',
        familyNameJP: '宇佐見',
        firstNameJP: '菫子',
        familyNameR: 'うさみ',
        firstNameR: 'すみれこ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'VD'
      },

      {
        familyName: '',
        firstName: 'Seiran',
        familyNameJP: '',
        firstNameJP: '清蘭',
        familyNameR: '',
        firstNameR: 'せいらん',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'LoLK'
      },

      {
        familyName: '',
        firstName: 'Ringo',
        familyNameJP: '',
        firstNameJP: '鈴瑚',
        familyNameR: '',
        firstNameR: 'りんご',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'LoLK'
      },
      {
        familyName: 'Sweet',
        firstName: 'Doremy',
        familyNameJP: 'スイート',
        firstNameJP: 'ドレミー',
        familyNameR: 'すいーと',
        firstNameR: 'どれみー',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'LoLK'
      },

      {
        familyName: 'Kishin',
        firstName: 'Sagume',
        familyNameJP: '稀神',
        firstNameJP: 'サグメ',
        familyNameR: 'きしん',
        firstNameR: 'さぐめ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'LoLK'
      },
      {
        familyName: '',
        firstName: 'Clownpiece',
        familyNameJP: '',
        firstNameJP: 'クラウンピース',
        familyNameR: '',
        firstNameR: 'くらうんぴーす',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'LoLK'
      },
      {
        familyName: '',
        firstName: 'Junko',
        familyNameJP: '',
        firstNameJP: '純孤',
        familyNameR: '',
        firstNameR: 'じゅんこ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'LoLK'
      },
      {
        familyName: 'Lapislazuli',
        firstName: 'Hecatia',
        familyNameJP: 'ラピスラズリ',
        firstNameJP: 'ヘカーティア',
        familyNameR: 'らぴすらずり',
        firstNameR: 'へかーてぃあ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'LoLK'
      },
      {
        familyName: 'Larva',
        firstName: 'Eternity',
        familyNameJP: 'ラルバ',
        firstNameJP: 'エタニティ',
        familyNameR: 'らるば',
        firstNameR: 'えたにてぃ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'HSiFS'
      },
      {
        familyName: 'Sakata',
        firstName: 'Nemuno',
        familyNameJP: '坂田',
        firstNameJP: 'ネムノ',
        familyNameR: 'さかた',
        firstNameR: 'ねむの',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'HSiFS'
      },
      {
        familyName: 'Komano',
        firstName: 'Aunn',
        familyNameJP: '高麗野',
        firstNameJP: 'あうん',
        familyNameR: 'こまの',
        firstNameR: 'あうん',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'HSiFS'
      },
      {
        familyName: 'Yatadera',
        firstName: 'Narumi',
        familyNameJP: '矢田寺',
        firstNameJP: '成美',
        familyNameR: 'やたでら',
        firstNameR: 'なるみ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'HSiFS'
      },
      {
        familyName: 'Nishida',
        firstName: 'Satono',
        familyNameJP: '爾子田',
        firstNameJP: '里乃',
        familyNameR: 'にしだ',
        firstNameR: 'さとの',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'HSiFS'
      },
      {
        familyName: 'Teireida',
        firstName: 'Mai',
        familyNameJP: '丁礼田',
        firstNameJP: '舞',
        familyNameR: 'ていれいだ',
        firstNameR: 'まい',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'HSiFS'
      },
      {
        familyName: 'Matara',
        firstName: 'Okina',
        familyNameJP: '摩多羅',
        firstNameJP: '隠岐奈',
        familyNameR: 'またら',
        firstNameR: 'おきな',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'HSiFS'
      },
      {
        familyName: 'Yorigami',
        firstName: 'Joon',
        familyNameJP: '依神',
        firstNameJP: '女苑',
        familyNameR: 'よりがみ',
        firstNameR: 'じょおん',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'AoCF'
      },
      {
        familyName: 'Yorigami',
        firstName: 'Shion',
        familyNameJP: '依神',
        firstNameJP: '紫苑',
        familyNameR: 'よりがみ',
        firstNameR: 'しおん',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'AoCF'
      },
      {
        familyName: 'Ebisu',
        firstName: 'Eika',
        familyNameJP: '戎',
        firstNameJP: '瓔花',
        familyNameR: 'えびす',
        firstNameR: 'えいか',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'WBaWC'
      },
      {
        familyName: 'Ushizaki',
        firstName: 'Urumi',
        familyNameJP: '牛崎',
        firstNameJP: '潤美',
        familyNameR: 'うしざき',
        firstNameR: 'うるみ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'WBaWC'
      },
      {
        familyName: 'Niwatari',
        firstName: 'Kutaka',
        familyNameJP: '庭渡',
        firstNameJP: '久侘歌',
        familyNameR: 'にわたり',
        firstNameR: 'くたか',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'WBaWC'
      },
      {
        familyName: 'Kicchou',
        firstName: 'Yachie',
        familyNameJP: '吉弔',
        firstNameJP: '八千慧',
        familyNameR: 'きっちょう',
        firstNameR: 'やちえ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'WBaWC'
      },
      {
        familyName: 'Joutouguu',
        firstName: 'Mayumi',
        familyNameJP: '杖刀偶',
        firstNameJP: '磨弓',
        familyNameR: 'じょうとうぐう',
        firstNameR: 'まゆみ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'WBaWC'
      },
      {
        familyName: 'Haniyasushin',
        firstName: 'Keiki',
        familyNameJP: '埴安神',
        firstNameJP: '袿姫',
        familyNameR: 'はにやすしん',
        firstNameR: 'けいき',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'WBaWC'
      },
      {
        familyName: 'Kurokoma',
        firstName: 'Saki',
        familyNameJP: '驪駒',
        firstNameJP: '早鬼',
        familyNameR: 'くろこま',
        firstNameR: 'さき',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'WBaWC'
      },
      {
        familyName: 'Goutokuji',
        firstName: 'Mike',
        familyNameJP: '豪徳寺',
        firstNameJP: 'ミケ',
        familyNameR: 'ごうとくじ',
        firstNameR: 'みけ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UM'
      },
      {
        familyName: 'Yamashiro',
        firstName: 'Takane',
        familyNameJP: '山城',
        firstNameJP: 'たかね',
        familyNameR: 'やましろ',
        firstNameR: 'たかね',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UM'
      },
      {
        familyName: 'Komakusa',
        firstName: 'Sannyo',
        familyNameJP: '駒草',
        firstNameJP: '山如',
        familyNameR: 'こまくさ',
        firstNameR: 'さんにょ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UM'
      },
      {
        familyName: 'Tamatsukuri',
        firstName: 'Misumaru',
        familyNameJP: '玉造',
        firstNameJP: '魅須丸',
        familyNameR: 'たまつくり',
        firstNameR: 'みすまる',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UM'
      },
      {
        familyName: 'Kudamaki',
        firstName: 'Tsukasa',
        familyNameJP: '菅牧',
        firstNameJP: '典',
        familyNameR: 'くだまき',
        firstNameR: 'つかさ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UM'
      },
      {
        familyName: 'Iizunamaru',
        firstName: 'Megumu',
        familyNameJP: '飯綱丸',
        firstNameJP: '龍',
        familyNameR: 'いいずなまる',
        firstNameR: 'めぐむ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UM'
      },
      {
        familyName: 'Tenkyuu',
        firstName: 'Chimata',
        familyNameJP: '天弓',
        firstNameJP: '千亦',
        familyNameR: 'てんきゅう',
        firstNameR: 'ちまた',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UM'
      },
      {
        familyName: 'Himemushi',
        firstName: 'Momoyo',
        familyNameJP: '姫虫',
        firstNameJP: '百々世',
        familyNameR: 'ひめむし',
        firstNameR: 'ももよ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UM'
      },
      {
        familyName: 'Toutetsu',
        firstName: 'Yuuma',
        familyNameJP: '饕餮',
        firstNameJP: '尤魔',
        familyNameR: 'とうてつ',
        firstNameR: 'ゆうま',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'SFW'
      },
      {
        familyName: 'Son',
        firstName: 'Biten',
        familyNameJP: '孫',
        firstNameJP: '美天',
        familyNameR: 'そん',
        firstNameR: 'びてん',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UDoALG'
      },
      {
        familyName: 'Mitsugashira',
        firstName: 'Enoko',
        familyNameJP: '三頭',
        firstNameJP: '慧ノ子',
        familyNameR: 'みつがしら',
        firstNameR: 'えのこ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UDoALG'
      },
      {
        familyName: 'Tenkajin',
        firstName: 'Chiyari',
        familyNameJP: '天火人',
        firstNameJP: 'ちやり',
        familyNameR: 'てんかじん',
        firstNameR: 'ちやり',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UDoALG'
      },
      {
        familyName: 'Yomotsu',
        firstName: 'Hisami',
        familyNameJP: '豫母都',
        firstNameJP: '日狭美',
        familyNameR: 'よもつ',
        firstNameR: 'ひさみ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UDoALG'
      },
      {
        familyName: 'Nippaku',
        firstName: 'Zanmu',
        familyNameJP: '日白',
        firstNameJP: '残無',
        familyNameR: 'にっぱく',
        firstNameR: 'ざんむ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: 'UDoALG'
      },
      {
        familyName: 'Hieda',
        firstName: 'Akyuu',
        familyNameJP: '稗田',
        firstNameJP: '阿求',
        familyNameR: 'ひえだ',
        firstNameR: 'あきゅう',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: null
      },
      {
        familyName: 'Ibaraki',
        firstName: 'Kasen',
        familyNameJP: '茨木',
        firstNameJP: '華扇',
        familyNameR: 'いばらき',
        firstNameR: 'かせん',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: null
      },
      {
        familyName: 'Motoori',
        firstName: 'Kosuzu',
        familyNameJP: '本居',
        firstNameJP: '小鈴',
        familyNameR: 'もとおり',
        firstNameR: 'こすず',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: null
      },
      {
        familyName: 'Hearn',
        firstName: 'Maribel',
        familyNameJP: 'ハーン',
        firstNameJP: 'マエリベリー',
        familyNameR: 'はーん',
        firstNameR: 'まえりべりー',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: null
      },
      {
        familyName: 'Usami',
        firstName: 'Renko',
        familyNameJP: '宇佐見',
        firstNameJP: '蓮子',
        familyNameR: 'うさみ',
        firstNameR: 'れんこ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: null
      },
      {
        familyName: 'Okunoda',
        firstName: 'Miyoi',
        familyNameJP: '奥野田',
        firstNameJP: '実宵',
        familyNameR: 'おくのだ',
        firstNameR: 'みよい',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: null
      },
      {
        familyName: '',
        firstName: 'Reisen',
        familyNameJP: '',
        firstNameJP: 'レイセン',
        familyNameR: '',
        firstNameR: 'れいせん',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: null
      },
      {
        familyName: 'Morichika',
        firstName: 'Rinnosuke',
        familyNameJP: '森近',
        firstNameJP: '霖之助',
        familyNameR: 'もりちか',
        firstNameR: 'りんのすけ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: null
      },
      {
        familyName: '',
        firstName: 'Tokiko',
        familyNameJP: '',
        firstNameJP: '朱鷺子',
        familyNameR: '',
        firstNameR: 'ときこ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: null
      },
      {
        familyName: 'Watatsuki',
        firstName: 'Toyohime',
        familyNameJP: '棉月',
        firstNameJP: '豊姫',
        familyNameR: 'わたつき',
        firstNameR: 'とよひめ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: null
      },
      {
        familyName: 'Watatsuki',
        firstName: 'Yorihime',
        familyNameJP: '綿月',
        firstNameJP: '依姫',
        familyNameR: 'わたつき',
        firstNameR: 'よりひめ',
        createdAt: new Date(),
        updatedAt: new Date(),
        WorkAbbreviation: null
      }
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Characters');
    await queryInterface.dropTable('Works');
  }
};