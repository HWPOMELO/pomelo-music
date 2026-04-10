import { createApp, ref } from "vue";
import "./style.css";
import App from "./App.vue";
import GTitle from "./components/common/GTitle.vue"
import GCard from "./components/common/GCard.vue"
const app = createApp(App)
app.component("GTitle", GTitle)
app.component("GCard", GCard)
const works = ref([
    {
        id: 1, link: "audio/1.ogg", title: "Shelter(POMELO remix)", artist: "POMELO",
        img: "https://y.qq.com/music/photo_new/T002R300x300M0000035s2tO4QwAKB_1.jpg?max_age=2592000"
    },
    {
        id: 2, link: "audio/2.ogg", title: "動く、動く (POMELO remix)", artist: "POMELO",
        img: "https://y.qq.com/music/photo_new/T002R300x300M000000glNnP3FT1Ap_1.jpg?max_age=2592000"
    },
    {
        id: 3, link: "audio/3.ogg", title: "Phoenix", artist: "POMELO",
        img: "https://y.qq.com/music/photo_new/T002R300x300M000004gJVPk1e1Pls_1.jpg?max_age=2592000"
    },
    {
        id: 4, link: "audio/4.ogg", title: "I Got This Love", artist: "POMELO/XHHANHAN",
        img: "https://y.qq.com/music/photo_new/T002R300x300M000001xR5E50vl09w_1.jpg?max_age=2592000"
    },
])
const playlist = ref([
    {
        id: 1, title: "😭美丽旋律回响步😭", artist: "Melodic Dubstep",
        link: "https://c6.y.qq.com/base/fcgi-bin/u?__=9bLECXgjavPJ",
        img: "https://music-file.y.qq.com/songlist/u/7K-k7eoz7i4F/1cf8a/bed0b4f3709daac31ba2337079f899f74fcfc663_ac569.jpg?imageView2/4/w/600/h/600"
    },
    {
        id: 2, title: "💖美丽中速曲💖", artist: "Midtempo",
        link: "https://c6.y.qq.com/base/fcgi-bin/u?__=QJrzJrgja6XK",
        img: "https://qpic.y.qq.com/music_cover/rNlCxicutnJblA9P4tylKNLfT5V4nZOlyU50JmEcnC4cc3aP5QUGbMg/600"
    },
    {
        id: 3, title: "🌈给你点颜色瞧瞧🌈", artist: "Colour",
        link: "https://c6.y.qq.com/base/fcgi-bin/u?__=5Z6cCcjjaoE8",
        img: "https://music-file.y.qq.com/songlist/u/7K-k7eoz7i4F/1cf8b/0819bc0bb944d902b247acef08a027726d11476e_bb247.jpg?imageView2/4/w/600/h/600"
    },
    {
        id: 4, title: "💫弹弹弹弹走鱼尾纹💫", artist: "Future Bounce",
        link: "https://c6.y.qq.com/base/fcgi-bin/u?__=rq4ku3jjan12",
        img: "https://qpic.y.qq.com/music_cover/rNlCxicutnJblA9P4tylKNOG9x30th6no9j2oqic4ZO2XKgbFWlLPxkg/600"
    },
    {
        id: 5, title: "✨未来之家✨", artist: "Future House",
        link: "https://c6.y.qq.com/base/fcgi-bin/u?__=Qg8G7YjjaMdt",
        img: "https://qpic.y.qq.com/music_cover/rNlCxicutnJblA9P4tylKNB9GCHf69c9zrU5fibA2cic9uia8icQic25zQkg/600"
    },
    {
        id: 6, title: "🎭我太想进步了🎭", artist: "House",
        link: "https://c6.y.qq.com/base/fcgi-bin/u?__=OljBEsjjaz5s",
        img: "https://music-file.y.qq.com/songlist/u/7K-k7eoz7i4F/1cf8e/130a723f0835dc2d3ea33e86ab1d8631e6ee6682_b025d.jpg?imageView2/4/w/600/h/600"
    },
    {
        id: 7, title: "⚡电气之家⚡", artist: "Electro House",
        link: "https://c6.y.qq.com/base/fcgi-bin/u?__=Rjv4nGjja7MP",
        img: "https://qpic.y.qq.com/music_cover/rNlCxicutnJblA9P4tylKNF9e6XbHuEiaicXicotU6TlN3ZjzShEy8ZwmQ/600"
    },
    {
        id: 8, title: "Chill…Ciallo～(∠・ω< )⌒★", artist: "Downtempo",
        link: "https://c6.y.qq.com/base/fcgi-bin/u?__=iqLRqPjjau4O",
        img: "https://qpic.y.qq.com/music_cover/rNlCxicutnJblA9P4tylKNN9dicKKaBEtRH77Y4cc9kTjrSTrTzldHpg/600"
    },
    {
        id: 9, title: "⭐鲈鱼来自未来⭐", artist: "Future Bass",
        link: "https://c6.y.qq.com/base/fcgi-bin/u?__=UD9YA8KFaZRc",
        img: "https://music-file.y.qq.com/songlist/u/7K-k7eoz7i4F/12e2b/1e248a042966ebb56bb3c0d924d52fd19c772e75_8ceb2.jpg?imageView2/4/w/600/h/600"
    },
    {
        id: 10, title: "🕳️你掉进陷了🕳️", artist: "Trap",
        link: "https://c6.y.qq.com/base/fcgi-bin/u?__=bn6PTVKFaDNk",
        img: "https://music-file.y.qq.com/songlist/u/7K-k7eoz7i4F/1d0e9/884b3913fd2075dc0a74b51c8b9e8466f674fe4a_4d61f.jpg?imageView2/4/w/600/h/600"
    },
    {
        id: 11, title: "🐟爱鲈鱼人士表示强烈谴责🐟", artist: "Bass House",
        link: "https://c6.y.qq.com/base/fcgi-bin/u?__=4BGu4XKFa2HT",
        img: "https://music-file.y.qq.com/songlist/u/7K-k7eoz7i4F/1d0e9/f7cfde621e004cd313354d8b75c2edbaf356a1d6_7e400.jpg?imageView2/4/w/600/h/600"
    },
    {
        id: 12, title: "🤣复杂的电气之家🤣", artist: "Complextro",
        link: "https://c6.y.qq.com/base/fcgi-bin/u?__=sc4oWxSFaLa5",
        img: "https://music-file.y.qq.com/songlist/u/7K-k7eoz7i4F/12e29/70878722e7bf7a8966269abd376bc31fcdce362b_a2522.jpg?imageView2/4/w/600/h/600"
    },
    {
        id: 13, title: "大不列颠快没北爱尔兰联合不起来王国 核", artist: "UK Hardcore",
        link: "https://c6.y.qq.com/base/fcgi-bin/u?__=Grm2WaSFaOsl",
        img: "https://music-file.y.qq.com/songlist/u/7K-k7eoz7i4F/1d0e9/6358823f3717811399f8bdeabb7f17314ed1596e_3ceb5.jpg?imageView2/4/w/600/h/600"
    },
    {
        id: 14, title: "🏳️每日R法🏳️", artist: "Hands Up",
        link: "https://c6.y.qq.com/base/fcgi-bin/u?__=jx5pMUtFaF7E",
        img: "https://music-file.y.qq.com/songlist/u/7K-k7eoz7i4F/12e2b/a0b699c397c6580b507b53bd4216a833f614b1be_8b6d3.jpg?imageView2/4/w/600/h/600"
    },
    {
        id: 15, title: "🤖故障美学🤖", artist: "Glitch Hop",
        link: "https://c6.y.qq.com/base/fcgi-bin/u?__=SDpSTHSFatwF",
        img: "https://qpic.y.qq.com/music_cover/rNlCxicutnJblA9P4tylKNN9dicKKaBEtRiaLFy23MgFa2ib6wqCOZgjHA/600"
    },
    {
        id: 16, title: "🌿🔞🚧", artist: "Dubstep",
        link: "https://c6.y.qq.com/base/fcgi-bin/u?__=OHmtOqSFawx4",
        img: "https://music-file.y.qq.com/songlist/u/7K-k7eoz7i4F/12e6a/a5f8fe570a1c0570839b59f77f117dc662ead60e_b074e.jpg?imageView2/4/w/600/h/600"
    },
    {
        id: 17, title: "👊🏻", artist: "HDM",
        link: "https://c6.y.qq.com/base/fcgi-bin/u?__=efnYSUSFaa3z",
        img: "https://music-file.y.qq.com/songlist/u/7K-k7eoz7i4F/1d0ea/2ac9262a000034885c7b606657628945fe4313d3_6ec7d.jpg?imageView2/4/w/600/h/600"
    },
    {
        id: 18, title: "😤不是138BPM我不听😤", artist: "Trance",
        link: "https://c6.y.qq.com/base/fcgi-bin/u?__=1OEublSFavQk",
        img: "https://music-file.y.qq.com/songlist/u/7K-k7eoz7i4F/1d0e8/c004812b0537878d7a6327325fe2b7978acbbe79_d4561.jpg?imageView2/4/w/600/h/600"
    },
])
const links = ref([
    {
        id: 1, name: "B站", icon: 'icon/bilibili.ico',
        link: "https://space.bilibili.com/318002421"
    },
    {
        id: 2, name: "抖音", icon: 'icon/douyin.ico',
        link: "https://www.douyin.com/user/MS4wLjABAAAAOh2EC_lpsZTmxRGn1kiL7ryqZNLFaQkm7o979hiyK67GD7yCcMc6eqz3bmZid_8E"
    },
    {
        id: 3, name: "QQ音乐", icon: 'icon/qqmusic.ico',
        link: "https://y.qq.com/n/ryqq_v2/singer/003CuyPB2LViEs"
    },
    {
        id: 4, name: "网易云", icon: 'icon/wyymusic.ico',
        link: "https://music.163.com/#/artist?id=49600255"
    },
    {
        id: 5, name: "酷狗", icon: 'icon/kugou.ico',
        link: "https://www.kugou.com/singer/info/6LM46KF1FFC360"
    },
    {
        id: 6, name: "酷我", icon: 'icon/kuwo.ico',
        link: "https://kuwo.cn/singer_detail/8328048"
    },
    {
        id: 7, name: "YouTube", icon: 'icon/youtube.ico',
        link: "https://youtube.com/@wpoomelow?si=4Png0jLNNEa8onmd"
    },
    {
        id: 8, name: "SoundCloud", icon: 'icon/soundcloud.ico',
        link: "https://on.soundcloud.com/DWdTHJfrObjeNqHyl0"
    },
])
const friendship = ref([
    { id: 1, artist: "PSDm", link: "https://space.bilibili.com/281022866" },
    { id: 2, artist: "Wikomi", link: "https://space.bilibili.com/1469571107" },
])
const currentSongId = ref(1)
app.provide("works", works)
app.provide("playlist", playlist)
app.provide("links", links)
app.provide("friendship", friendship)
app.provide("currentSongId", currentSongId)
app.mount("#app");
