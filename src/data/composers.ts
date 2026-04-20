export type Work = {
  title: string;
  year: string;
  type: "代表作" | "人氣作品";
  description: string;
};

export type Composer = {
  slug: string;
  name: string;
  nameEn: string;
  era: string;
  born: string;
  died: string;
  nationality: string;
  portrait: string; // emoji or initial fallback
  tagline: string;
  bio: string;
  works: Work[];
};

export const composers: Composer[] = [
  {
    slug: "bach",
    name: "約翰・塞巴斯蒂安・巴赫",
    nameEn: "Johann Sebastian Bach",
    era: "巴洛克時期",
    born: "1685",
    died: "1750",
    nationality: "德國",
    portrait: "JSB",
    tagline: "西方音樂之父,複音音樂的至高典範",
    bio: "巴赫是巴洛克時期最偉大的作曲家之一,以其精湛的對位法與宗教音樂著稱。他的作品融合了數學的嚴謹與宗教的虔誠,被譽為「音樂界的牛頓」。",
    works: [
      { title: "G 弦上的詠嘆調", year: "1731", type: "人氣作品", description: "出自《D 大調第三號管弦樂組曲》,旋律寧靜深遠,是最廣為人知的巴赫名曲。" },
      { title: "布蘭登堡協奏曲", year: "1721", type: "代表作", description: "六首協奏曲組成,展現巴洛克協奏曲的精華。" },
      { title: "馬太受難曲", year: "1727", type: "代表作", description: "規模宏大的宗教合唱作品,被譽為西方音樂史上最偉大的作品之一。" },
      { title: "平均律鍵盤曲集", year: "1722", type: "代表作", description: "鍵盤音樂的「舊約聖經」,影響後世數百年。" },
      { title: "無伴奏大提琴組曲", year: "1720", type: "人氣作品", description: "六首組曲展現大提琴的無限可能。" },
    ],
  },
  {
    slug: "mozart",
    name: "沃夫岡・阿瑪迪斯・莫札特",
    nameEn: "Wolfgang Amadeus Mozart",
    era: "古典時期",
    born: "1756",
    died: "1791",
    nationality: "奧地利",
    portrait: "WAM",
    tagline: "音樂神童,古典樂派的完美象徵",
    bio: "莫札特三歲學琴、五歲作曲,一生創作超過六百部作品。他的音樂優雅、明亮且富有戲劇性,完美體現了古典時期的美學理想。",
    works: [
      { title: "小夜曲(K. 525)", year: "1787", type: "人氣作品", description: "《G 大調弦樂小夜曲》,輕盈優雅,家喻戶曉。" },
      { title: "費加洛的婚禮", year: "1786", type: "代表作", description: "四幕喜歌劇,劇情精巧、音樂華美。" },
      { title: "魔笛", year: "1791", type: "代表作", description: "莫札特最後一部歌劇,融合童話與哲思。" },
      { title: "安魂曲", year: "1791", type: "代表作", description: "未完成的安魂彌撒,充滿生命終章的莊嚴。" },
      { title: "土耳其進行曲", year: "1783", type: "人氣作品", description: "鋼琴奏鳴曲 K.331 的終樂章,節奏鮮明活潑。" },
    ],
  },
  {
    slug: "beethoven",
    name: "路德維希・范・貝多芬",
    nameEn: "Ludwig van Beethoven",
    era: "古典/浪漫過渡時期",
    born: "1770",
    died: "1827",
    nationality: "德國",
    portrait: "LvB",
    tagline: "扼住命運咽喉的樂聖",
    bio: "貝多芬橫跨古典與浪漫兩個時代,儘管中年失聰,仍創作出震撼人心的傑作。他的音樂充滿力量、抗爭與人道精神。",
    works: [
      { title: "第五號交響曲「命運」", year: "1808", type: "代表作", description: "「命運敲門」的著名動機開啟史上最具辨識度的交響曲。" },
      { title: "第九號交響曲「合唱」", year: "1824", type: "代表作", description: "末樂章《歡樂頌》成為人類團結的象徵。" },
      { title: "月光奏鳴曲", year: "1801", type: "人氣作品", description: "升 c 小調鋼琴奏鳴曲,第一樂章如月光般靜謐。" },
      { title: "給愛麗絲", year: "1810", type: "人氣作品", description: "簡短卻深植人心的鋼琴小品。" },
      { title: "歌劇「費黛里奧」", year: "1805", type: "代表作", description: "貝多芬唯一的歌劇,歌頌自由與愛情。" },
    ],
  },
  {
    slug: "chopin",
    name: "弗雷德里克・蕭邦",
    nameEn: "Frédéric Chopin",
    era: "浪漫時期",
    born: "1810",
    died: "1849",
    nationality: "波蘭",
    portrait: "FC",
    tagline: "鋼琴詩人,浪漫主義的靈魂",
    bio: "蕭邦幾乎只為鋼琴而寫,作品充滿詩意、細膩與憂鬱的祖國情懷。他將鋼琴的表現力推向前所未有的境界。",
    works: [
      { title: "夜曲 Op.9 No.2", year: "1832", type: "人氣作品", description: "降 E 大調夜曲,旋律如夜色般柔美。" },
      { title: "革命練習曲", year: "1831", type: "代表作", description: "為祖國淪陷而作,充滿激情與悲憤。" },
      { title: "英雄波蘭舞曲", year: "1842", type: "代表作", description: "降 A 大調,氣勢磅礴的民族頌歌。" },
      { title: "雨滴前奏曲", year: "1839", type: "人氣作品", description: "降 D 大調前奏曲 Op.28 No.15,反覆音如雨滴落下。" },
      { title: "第二號鋼琴協奏曲", year: "1830", type: "代表作", description: "蕭邦年輕時的傑作,充滿初戀的甜蜜。" },
    ],
  },
  {
    slug: "tchaikovsky",
    name: "彼得・伊里奇・柴可夫斯基",
    nameEn: "Pyotr Ilyich Tchaikovsky",
    era: "浪漫時期",
    born: "1840",
    died: "1893",
    nationality: "俄羅斯",
    portrait: "PIT",
    tagline: "旋律大師,芭蕾音樂的革新者",
    bio: "柴可夫斯基將俄羅斯民族色彩與西歐浪漫風格完美結合,他的旋律豐沛動人,芭蕾音樂更是無人能及。",
    works: [
      { title: "天鵝湖", year: "1876", type: "代表作", description: "芭蕾舞劇經典,「天鵝主題」家喻戶曉。" },
      { title: "胡桃鉗", year: "1892", type: "代表作", description: "聖誕節經典芭蕾,《花之圓舞曲》膾炙人口。" },
      { title: "1812 序曲", year: "1880", type: "人氣作品", description: "為紀念俄軍擊敗拿破崙而作,結尾有真實砲聲。" },
      { title: "第一號鋼琴協奏曲", year: "1875", type: "代表作", description: "降 b 小調,開頭氣勢恢宏震撼人心。" },
      { title: "悲愴交響曲", year: "1893", type: "代表作", description: "第六號交響曲,作曲家生命終章的告白。" },
    ],
  },
  {
    slug: "debussy",
    name: "克勞德・德布西",
    nameEn: "Claude Debussy",
    era: "印象樂派",
    born: "1862",
    died: "1918",
    nationality: "法國",
    portrait: "CD",
    tagline: "印象主義的音樂畫家",
    bio: "德布西打破傳統和聲,以朦朧的色彩與流動的織度,將印象派繪畫的美學帶入音樂,開啟二十世紀現代音樂的大門。",
    works: [
      { title: "月光", year: "1905", type: "人氣作品", description: "出自《貝加馬斯克組曲》,銀色月光在琴鍵上流淌。" },
      { title: "牧神的午後前奏曲", year: "1894", type: "代表作", description: "印象樂派的開山之作,長笛獨奏夢幻迷離。" },
      { title: "海", year: "1905", type: "代表作", description: "三首交響素描描繪海洋的多變樣貌。" },
      { title: "亞麻色頭髮的少女", year: "1910", type: "人氣作品", description: "前奏曲集,簡潔的旋律勾勒出少女的清新。" },
      { title: "歌劇「佩利亞斯與梅麗桑德」", year: "1902", type: "代表作", description: "象徵主義歌劇代表作,夢境般的氛圍。" },
    ],
  },
];

export const getComposer = (slug: string) =>
  composers.find((c) => c.slug === slug);
