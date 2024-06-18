'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


    await queryInterface.bulkInsert('Characters', [
      {
        familyName: 'Hakurei',
        firstName: 'Reimu',
        familyNameJP: '博麗',
        firstNameJP: '霊夢',
        familyNameR: 'はくれい',
        firstNameR: 'れいむ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Kirisame',
        firstName: 'Marisa',
        familyNameJP: '霧雨',
        firstNameJP: '魔理沙',
        familyNameR: 'きりさめ',
        firstNameR: 'まりさ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: '',
        firstName: 'Rumia',
        familyNameJP: '',
        firstNameJP: 'ルーミア',
        familyNameR: '',
        firstNameR: 'るーみあ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: '',
        firstName: 'Daiyousei',
        familyNameJP: '',
        firstNameJP: '大妖精',
        familyNameR: '',
        firstNameR: 'だいようせい',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: '',
        firstName: 'Cirno',
        familyNameJP: '',
        firstNameJP: 'チルノ',
        familyNameR: '',
        firstNameR: 'ちるの',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Hong',
        firstName: 'Meiling',
        familyNameJP: '紅',
        firstNameJP: '美鈴',
        familyNameR: 'ほん',
        firstNameR: 'めいりん',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: '',
        firstName: 'Koakuma',
        familyNameJP: '',
        firstNameJP: '小悪魔',
        familyNameR: '',
        firstNameR: 'こあくま',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Knowledge',
        firstName: 'Patchouli',
        familyNameJP: 'ノーレッジ',
        firstNameJP: 'パチュリー',
        familyNameR: 'のーれっじ',
        firstNameR: 'ぱちゅりー',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Izayoi',
        firstName: 'Sakuya',
        familyNameJP: '十六夜',
        firstNameJP: '咲夜',
        familyNameR: 'いざよい',
        firstNameR: 'さくや',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Scarlet',
        firstName: 'Remilia',
        familyNameJP: 'スカーレット',
        firstNameJP: 'レミリア',
        familyNameR: 'すかーれっと',
        firstNameR: 'れみりあ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Scarlet',
        firstName: 'Flandre',
        familyNameJP: 'スカーレット',
        firstNameJP: 'フランドール',
        familyNameR: 'すかーれっと',
        firstNameR: 'ふらんどーる',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Whiterock',
        firstName: 'Letty',
        familyNameJP: 'ホワイトロック',
        firstNameJP: 'レティ',
        familyNameR: 'ほわいとろっく',
        firstNameR: 'れてぃ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: '',
        firstName: 'Chen',
        familyNameJP: '',
        firstNameJP: '橙',
        familyNameR: '',
        firstNameR: 'ちぇん',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Margatroid',
        firstName: 'Alice',
        familyNameJP: 'マーガトロイド',
        firstNameJP: 'アリス',
        familyNameR: 'まーがとろいど',
        firstNameR: 'ありす',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'White',
        firstName: 'Lily',
        familyNameJP: 'ホワイト',
        firstNameJP: 'リリー',
        familyNameR: 'ほわいと',
        firstNameR: 'りりー',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Prismriver',
        firstName: 'Lunasa',
        familyNameJP: 'プリズムリバー',
        firstNameJP: 'ルナサ',
        familyNameR: 'ぷりずむりばー',
        firstNameR: 'るなさ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Prismriver',
        firstName: 'Merlin',
        familyNameJP: 'プリズムリバー',
        firstNameJP: 'メルラン',
        familyNameR: 'ぷりずむりばー',
        firstNameR: 'めるらん',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Prismriver',
        firstName: 'Lyrica',
        familyNameJP: 'プリズムリバー',
        firstNameJP: 'リリカ',
        familyNameR: 'ぷりずむりばー',
        firstNameR: 'りりか',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Konpaku',
        firstName: 'Youmu',
        familyNameJP: '魂魄',
        firstNameJP: '妖夢',
        familyNameR: 'こんぱく',
        firstNameR: 'ようむ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Saigyouji',
        firstName: 'Yuyuko',
        familyNameJP: '西行寺',
        firstNameJP: '幽々子',
        familyNameR: 'さいぎょうじ',
        firstNameR: 'ゆゆこ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Yakumo',
        firstName: 'Ran',
        familyNameJP: '八雲',
        firstNameJP: '藍',
        familyNameR: 'やくも',
        firstNameR: 'らん',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Yakumo',
        firstName: 'Yukari',
        familyNameJP: '八雲',
        firstNameJP: '紫',
        familyNameR: 'やくも',
        firstNameR: 'ゆかり',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Ibuki',
        firstName: 'Suika',
        familyNameJP: '伊吹',
        firstNameJP: '萃香',
        familyNameR: 'いぶき',
        firstNameR: 'すいか',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Nightbug',
        firstName: 'Wriggle',
        familyNameJP: 'ナイトバグ',
        firstNameJP: 'リグル',
        familyNameR: 'ないとばぐ',
        firstNameR: 'りぐる',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Lorelei',
        firstName: 'Mystia',
        familyNameJP: 'ローレライ',
        firstNameJP: 'ミスティア',
        familyNameR: 'ろーれらい',
        firstNameR: 'みすてぃあ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Kamishirasawa',
        firstName: 'Keine',
        familyNameJP: '上白沢',
        firstNameJP: '慧音',
        familyNameR: 'かみしらさわ',
        firstNameR: 'けいね',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Inaba',
        firstName: 'Tewi',
        familyNameJP: '因幡',
        firstNameJP: 'てゐ',
        familyNameR: 'いなば',
        firstNameR: 'てゐ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: '',
        firstName: 'Reisen Udongein Inaba',
        familyNameJP: '',
        firstNameJP: '鈴仙・優曇華院・イナバ',
        familyNameR: '',
        firstNameR: 'れいせん・うどんげいん・いなば',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Yagokoro',
        firstName: 'Eirin',
        familyNameJP: '八意',
        firstNameJP: '永琳',
        familyNameR: 'やごころ',
        firstNameR: 'えいりん',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Houraisan',
        firstName: 'Kaguya',
        familyNameJP: '蓬莱山',
        firstNameJP: '輝夜',
        familyNameR: 'ほうらいさん',
        firstNameR: 'かぐや',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Fujiwara',
        firstName: 'Mokou',
        familyNameJP: '藤原',
        firstNameJP: '妹紅',
        familyNameR: 'ふじわら',
        firstNameR: 'もこう',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Shameimaru',
        firstName: 'Aya',
        familyNameJP: '射命丸',
        firstNameJP: '文',
        familyNameR: 'しゃめいまる',
        firstNameR: 'あや',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Melancholy',
        firstName: 'Medicine',
        familyNameJP: 'メランコリー',
        firstNameJP: 'メディスン',
        familyNameR: 'めらんこりー',
        firstNameR: 'めでぃすん',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Kazami',
        firstName: 'Yuuka',
        familyNameJP: '風見',
        firstNameJP: '幽香',
        familyNameR: 'めらんこりー',
        firstNameR: 'めでぃすん',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Onozuka',
        firstName: 'Komachi',
        familyNameJP: '小野塚',
        firstNameJP: '小町',
        familyNameR: 'おのづか',
        firstNameR: 'こまち',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Shiki',
        firstName: 'Eiki',
        familyNameJP: '四季',
        firstNameJP: '映姫',
        familyNameR: 'しき',
        firstNameR: 'えいき',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Aki',
        firstName: 'Shizuha',
        familyNameJP: '秋',
        firstNameJP: '静葉',
        familyNameR: 'あき',
        firstNameR: 'しずは',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Aki',
        firstName: 'Minoriko',
        familyNameJP: '秋',
        firstNameJP: '穣子',
        familyNameR: 'あき',
        firstNameR: 'みのりこ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Kagiyama',
        firstName: 'Hina',
        familyNameJP: '鍵山',
        firstNameJP: '雛',
        familyNameR: 'かぎやま',
        firstNameR: 'ひな',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Kawashiro',
        firstName: 'Nitori',
        familyNameJP: '川城',
        firstNameJP: 'にとり',
        familyNameR: 'かわしろ',
        firstNameR: 'にとり',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Inubashiri',
        firstName: 'Momiji',
        familyNameJP: '犬走',
        firstNameJP: '椛',
        familyNameR: 'いぬばしり',
        firstNameR: 'もみじ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Kochiya',
        firstName: 'Sanae',
        familyNameJP: '東風谷',
        firstNameJP: '早苗',
        familyNameR: 'こちや',
        firstNameR: 'さなえ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Yasaka',
        firstName: 'Kanako',
        familyNameJP: '八坂',
        firstNameJP: '神奈子',
        familyNameR: 'やさか',
        firstNameR: 'かなこ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Moriya',
        firstName: 'Suwako',
        familyNameJP: '洩矢',
        firstNameJP: '諏訪湖',
        familyNameR: 'もりや',
        firstNameR: 'すわこ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Nagae',
        firstName: 'Iku',
        familyNameJP: '永江',
        firstNameJP: '衣玖',
        familyNameR: 'ながえ',
        firstNameR: 'いく',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Hinanawi',
        firstName: 'Tenshi',
        familyNameJP: '比那名居',
        firstNameJP: '天子',
        familyNameR: 'ひなない',
        firstNameR: 'てんし',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: '',
        firstName: 'Kisume',
        familyNameJP: '',
        firstNameJP: 'キスメ',
        familyNameR: '',
        firstNameR: 'きすめ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Kurodani',
        firstName: 'Yamame',
        familyNameJP: '黒谷',
        firstNameJP: 'ヤマメ',
        familyNameR: 'くろだに',
        firstNameR: 'やまめ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Mizuhashi',
        firstName: 'Parsee',
        familyNameJP: '水橋',
        firstNameJP: 'パルスィ',
        familyNameR: 'みずはし',
        firstNameR: 'ぱるすぃ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Hoshiguma',
        firstName: 'Yuugi',
        familyNameJP: '星熊',
        firstNameJP: '勇儀',
        familyNameR: 'ほしぐま',
        firstNameR: 'ゆうぎ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Komeiji',
        firstName: 'Satori',
        familyNameJP: '古明地',
        firstNameJP: 'さとり',
        familyNameR: 'こめいじ',
        firstNameR: 'さとり',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Kaenbyou',
        firstName: 'Rin',
        familyNameJP: '火焔猫',
        firstNameJP: '燐',
        familyNameR: 'かえんびょう',
        firstNameR: 'りん',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Reiuji',
        firstName: 'Utsuho',
        familyNameJP: '霊烏路',
        firstNameJP: '空',
        familyNameR: 'れいうじ',
        firstNameR: 'うつほ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Komeiji',
        firstName: 'Koishi',
        familyNameJP: '古明地',
        firstNameJP: 'こいし',
        familyNameR: 'こめいじ',
        firstNameR: 'こいし',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: '',
        firstName: 'Nazrin',
        familyNameJP: '',
        firstNameJP: 'ナズーリン',
        familyNameR: '',
        firstNameR: 'なずーりん',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Tatara',
        firstName: 'Kogasa',
        familyNameJP: '多々良',
        firstNameJP: '小傘',
        familyNameR: 'たたら',
        firstNameR: 'こがさ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Kumoi',
        firstName: 'Ichirin',
        familyNameJP: '雲居',
        firstNameJP: '一輪',
        familyNameR: 'くもい',
        firstNameR: 'いちりん',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Murasa',
        firstName: 'Minamitsu',
        familyNameJP: '村沙',
        firstNameJP: '水密',
        familyNameR: 'むらさ',
        firstNameR: 'みなみつ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Toramaru',
        firstName: 'Shou',
        familyNameJP: '寅丸',
        firstNameJP: '星',
        familyNameR: 'とらまる',
        firstNameR: 'しょう',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Hijiri',
        firstName: 'Byakuren',
        familyNameJP: '聖',
        firstNameJP: '白蓮',
        familyNameR: 'ひじり',
        firstNameR: 'びゃくれん',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Houjuu',
        firstName: 'Nue',
        familyNameJP: '封獣',
        firstNameJP: 'ぬえ',
        familyNameR: 'ほうじゅう',
        firstNameR: 'ぬえ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Himekaidou',
        firstName: 'Hatate',
        familyNameJP: '姫海棠',
        firstNameJP: 'はたて',
        familyNameR: 'ひめかいどう',
        firstNameR: 'はたて',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Kasodani',
        firstName: 'Kyouko',
        familyNameJP: '幽谷',
        firstNameJP: '響子',
        familyNameR: 'かそだに',
        firstNameR: 'きょうこ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Miyako',
        firstName: 'Yoshika',
        familyNameJP: '宮古',
        firstNameJP: '芳香',
        familyNameR: 'みやこ',
        firstNameR: 'よしか',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Kaku',
        firstName: 'Seiga',
        familyNameJP: '霍',
        firstNameJP: '青娥',
        familyNameR: 'かく',
        firstNameR: 'せいが',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Soga',
        firstName: 'Tojiko',
        familyNameJP: '蘇我',
        firstNameJP: '屠自古',
        familyNameR: 'そが',
        firstNameR: 'とじこ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Mononobe',
        firstName: 'Futo',
        familyNameJP: '物部',
        firstNameJP: '布都',
        familyNameR: 'もののべ',
        firstNameR: 'ふと',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Toyosatomimi',
        firstName: 'Miko',
        familyNameJP: '豊聡耳',
        firstNameJP: '神子',
        familyNameR: 'とよさとみみ',
        firstNameR: 'みこ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Futatsuiwa',
        firstName: 'Mamizou',
        familyNameJP: '二ッ岩',
        firstNameJP: 'マミゾウ',
        familyNameR: 'ふたついわ',
        firstNameR: 'まみぞう',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Hata',
        firstName: 'Kokoro',
        familyNameJP: '秦',
        firstNameJP: 'Kokoro',
        familyNameR: 'はた',
        firstNameR: 'こころ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: '',
        firstName: 'Wakasagihime',
        familyNameJP: '',
        firstNameJP: 'わかさぎ姫',
        familyNameR: '',
        firstNameR: 'わかさぎひめ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: '',
        firstName: 'Sekibanki',
        familyNameJP: '',
        firstNameJP: '赤蛮奇',
        familyNameR: '',
        firstNameR: 'せきばんき',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Imaizumi',
        firstName: 'Kagerou',
        familyNameJP: '今泉',
        firstNameJP: '影狼',
        familyNameR: 'いまいずみ',
        firstNameR: 'かげろう',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        familyName: 'Tsukumo',
        firstName: 'Benben',
        familyNameJP: '九十九',
        firstNameJP: '弁々',
        familyNameR: 'つくも',
        firstNameR: 'べんべん',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Tsukumo',
        firstName: 'Yatsuhashi',
        familyNameJP: '九十九',
        firstNameJP: '八橋',
        familyNameR: 'つくも',
        firstNameR: 'やつはし',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Kijin',
        firstName: 'Seija',
        familyNameJP: '鬼人',
        firstNameJP: '正邪',
        familyNameR: 'きじん',
        firstNameR: 'せいじゃ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Sukuna',
        firstName: 'Shinmyoumaru',
        familyNameJP: '少名',
        firstNameJP: '針妙丸',
        familyNameR: 'すくな',
        firstNameR: 'しんみょうまる',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Horikawa',
        firstName: 'Raiko',
        familyNameJP: '堀川',
        firstNameJP: '雷鼓',
        familyNameR: 'ほりかわ',
        firstNameR: 'らいこ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Usami',
        firstName: 'Sumireko',
        familyNameJP: '宇佐見',
        firstNameJP: '菫子',
        familyNameR: 'うさみ',
        firstNameR: 'すみれこ',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        familyName: '',
        firstName: 'Seiran',
        familyNameJP: '',
        firstNameJP: '清蘭',
        familyNameR: '',
        firstNameR: 'せいらん',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        familyName: '',
        firstName: 'Ringo',
        familyNameJP: '',
        firstNameJP: '鈴瑚',
        familyNameR: '',
        firstNameR: 'りんご',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Sweet',
        firstName: 'Doremy',
        familyNameJP: 'スイート',
        firstNameJP: 'ドレミー',
        familyNameR: 'すいーと',
        firstNameR: 'どれみー',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        familyName: 'Kishin',
        firstName: 'Sagume',
        familyNameJP: '稀神',
        firstNameJP: 'サグメ',
        familyNameR: 'きしん',
        firstNameR: 'さぐめ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: '',
        firstName: 'Clownpiece',
        familyNameJP: '',
        firstNameJP: 'クラウンピース',
        familyNameR: '',
        firstNameR: 'くらうんぴーす',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: '',
        firstName: 'Junko',
        familyNameJP: '',
        firstNameJP: '純孤',
        familyNameR: '',
        firstNameR: 'じゅんこ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Lapislazuli',
        firstName: 'Hecatia',
        familyNameJP: 'ラピスラズリ',
        firstNameJP: 'ヘカーティア',
        familyNameR: 'らぴすらずり',
        firstNameR: 'へかーてぃあ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Larva',
        firstName: 'Eternity',
        familyNameJP: 'ラルバ',
        firstNameJP: 'エタニティ',
        familyNameR: 'らるば',
        firstNameR: 'えたにてぃ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Sakata',
        firstName: 'Nemuno',
        familyNameJP: '坂田',
        firstNameJP: 'ネムノ',
        familyNameR: 'さかた',
        firstNameR: 'ねむの',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Komano',
        firstName: 'Aunn',
        familyNameJP: '高麗野',
        firstNameJP: 'あうん',
        familyNameR: 'こまの',
        firstNameR: 'あうん',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Yatadera',
        firstName: 'Narumi',
        familyNameJP: '矢田寺',
        firstNameJP: '成美',
        familyNameR: 'やたでら',
        firstNameR: 'なるみ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Nishida',
        firstName: 'Satono',
        familyNameJP: '爾子田',
        firstNameJP: '里乃',
        familyNameR: 'にしだ',
        firstNameR: 'さとの',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Teireida',
        firstName: 'Mai',
        familyNameJP: '丁礼田',
        firstNameJP: '舞',
        familyNameR: 'ていれいだ',
        firstNameR: 'まい',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Matara',
        firstName: 'Okina',
        familyNameJP: '摩多羅',
        firstNameJP: '隠岐奈',
        familyNameR: 'またら',
        firstNameR: 'おきな',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Yorigami',
        firstName: 'Joon',
        familyNameJP: '依神',
        firstNameJP: '女苑',
        familyNameR: 'よりがみ',
        firstNameR: 'じょおん',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Yorigami',
        firstName: 'Shion',
        familyNameJP: '依神',
        firstNameJP: '紫苑',
        familyNameR: 'よりがみ',
        firstNameR: 'しおん',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Ebisu',
        firstName: 'Eika',
        familyNameJP: '戎',
        firstNameJP: '瓔花',
        familyNameR: 'えびす',
        firstNameR: 'えいか',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Ushizaki',
        firstName: 'Urumi',
        familyNameJP: '牛崎',
        firstNameJP: '潤美',
        familyNameR: 'うしざき',
        firstNameR: 'うるみ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Niwatari',
        firstName: 'Kutaka',
        familyNameJP: '庭渡',
        firstNameJP: '久侘歌',
        familyNameR: 'にわたり',
        firstNameR: 'くたか',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Kicchou',
        firstName: 'Yachie',
        familyNameJP: '吉弔',
        firstNameJP: '八千慧',
        familyNameR: 'きっちょう',
        firstNameR: 'やちえ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Joutouguu',
        firstName: 'Mayumi',
        familyNameJP: '杖刀偶',
        firstNameJP: '磨弓',
        familyNameR: 'じょうとうぐう',
        firstNameR: 'まゆみ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Haniyasushin',
        firstName: 'Keiki',
        familyNameJP: '埴安神',
        firstNameJP: '袿姫',
        familyNameR: 'はにやすしん',
        firstNameR: 'けいき',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Kurokoma',
        firstName: 'Saki',
        familyNameJP: '驪駒',
        firstNameJP: '早鬼',
        familyNameR: 'くろこま',
        firstNameR: 'さき',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Goutokuji',
        firstName: 'Mike',
        familyNameJP: '豪徳寺',
        firstNameJP: 'ミケ',
        familyNameR: 'ごうとくじ',
        firstNameR: 'みけ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Yamashiro',
        firstName: 'Takane',
        familyNameJP: '山城',
        firstNameJP: 'たかね',
        familyNameR: 'やましろ',
        firstNameR: 'たかね',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Komakusa',
        firstName: 'Sannyo',
        familyNameJP: '駒草',
        firstNameJP: '山如',
        familyNameR: 'こまくさ',
        firstNameR: 'さんにょ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Tamatsukuri',
        firstName: 'Misumaru',
        familyNameJP: '玉造',
        firstNameJP: '魅須丸',
        familyNameR: 'たまつくり',
        firstNameR: 'みすまる',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Kudamaki',
        firstName: 'Tsukasa',
        familyNameJP: '菅牧',
        firstNameJP: '典',
        familyNameR: 'くだまき',
        firstNameR: 'つかさ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Iizunamaru',
        firstName: 'Megumu',
        familyNameJP: '飯綱丸',
        firstNameJP: '龍',
        familyNameR: 'いいずなまる',
        firstNameR: 'めぐむ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Tenkyuu',
        firstName: 'Chimata',
        familyNameJP: '天弓',
        firstNameJP: '千亦',
        familyNameR: 'てんきゅう',
        firstNameR: 'ちまた',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Himemushi',
        firstName: 'Momoyo',
        familyNameJP: '姫虫',
        firstNameJP: '百々世',
        familyNameR: 'ひめむし',
        firstNameR: 'ももよ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Toutetsu',
        firstName: 'Yuuma',
        familyNameJP: '饕餮',
        firstNameJP: '尤魔',
        familyNameR: 'とうてつ',
        firstNameR: 'ゆうま',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Son',
        firstName: 'Biten',
        familyNameJP: '孫',
        firstNameJP: '美天',
        familyNameR: 'そん',
        firstNameR: 'びてん',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Mitsugashira',
        firstName: 'Enoko',
        familyNameJP: '三頭',
        firstNameJP: '慧ノ子',
        familyNameR: 'みつがしら',
        firstNameR: 'えのこ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Tenkajin',
        firstName: 'Chiyari',
        familyNameJP: '天火人',
        firstNameJP: 'ちやり',
        familyNameR: 'てんかじん',
        firstNameR: 'ちやり',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Yomotsu',
        firstName: 'Hisami',
        familyNameJP: '豫母都',
        firstNameJP: '日狭美',
        familyNameR: 'よもつ',
        firstNameR: 'ひさみ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        familyName: 'Nippaku',
        firstName: 'Zanmu',
        familyNameJP: '日白',
        firstNameJP: '残無',
        familyNameR: 'にっぱく',
        firstNameR: 'ざんむ',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Characters', null, {})
  }
};
