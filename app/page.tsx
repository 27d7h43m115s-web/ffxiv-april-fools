"use client";
import { useMemo, useState } from "react";

type Entry={year:number;title:string;region:string;kind:string;text:string;url:string;video?:string;after?:string;note?:string};
const data:Entry[]=[
{year:2013,title:"新種族 ヴィアンガ",region:"日・北米・欧州",kind:"公式ブログ",text:"ヴィエラ派とバンガ派の両方を満足させるため、2種族を合体。巨大な設定画まで公開された。",url:"https://jp.finalfantasyxiv.com/blog/000385.html",after:"ヴィエラは5.0で実装。ヴィアンガ自体は未実装。"},
{year:2014,title:"NPC好感度システム",region:"日・北米・欧州",kind:"公式ブログ",text:"ミンフィリアやメルウィブらへ贈り物をし、親密イベントへ進む恋愛ゲーム風システム。",url:"https://jp.finalfantasyxiv.com/blog/000687.html"},
{year:2014,title:"SUPER極タイタン討滅戦",region:"全世界向け",kind:"公式動画",text:"極タイタンを16bitのドット絵で再現。ランドスライド、重み、落下まで忠実。",url:"https://www.youtube.com/watch?v=uDg44MVJLrw",video:"uDg44MVJLrw",note:"公開は3月22日。狭義には4月1日当日の企画ではない。"},
{year:2014,title:"Eorzea Collection 2014 Spring",region:"全世界向け",kind:"公式動画",text:"シドらNPCがランウェイを歩き、踊るエオルゼアの春ファッションショー。",url:"https://www.youtube.com/watch?v=T6XsuVfgqqY",video:"T6XsuVfgqqY",note:"春の公式お遊び映像。狭義の4月1日企画と分ける場合あり。"},
{year:2015,title:"ロード・オブ・ヴァーミニオン",region:"日・北米・欧州",kind:"公式ブログ",text:"ミニオンを使って戦うゴールドソーサーのRTS。最強ミニオンとしてヴィアンガも再登場。",url:"https://jp.finalfantasyxiv.com/blog/000958.html",after:"パッチ3.1で本当に実装された。"},
{year:2015,title:"ULTIMATE FIGHT FFXIV",region:"全世界向け",kind:"公式動画",text:"光の戦士、ヤ・シュトラ、サンクレッド、ガイウスらが戦う対戦格闘ゲーム。",url:"https://www.youtube.com/watch?v=cuELXU0OEs4",video:"cuELXU0OEs4"},
{year:2016,title:"蒼天のイケメン☆パラダイス！",region:"日・北米・欧州",kind:"公式ブログ",text:"蒼天騎士団やアイメリクらを攻略する乙女ゲーム風企画。2014年の好感度システムver3.0。",url:"https://jp.finalfantasyxiv.com/blog/001439.html"},
{year:2016,title:"ChocoGo",region:"日・北米・欧州",kind:"実写PV・特設",text:"スマホで現実のチョコボを呼び、目的地まで乗せてもらう配車サービス。",url:"https://jp.finalfantasyxiv.com/blog/001440.html"},
{year:2016,title:"FINAL FANTASY FESTIVAL",region:"韓国独自",kind:"公式特設",text:"韓国各地を巡る架空の大規模フェスティバル。実際に検討されていた没企画を基に制作。",url:"https://www.ff14.co.kr/news/notice/view/398?next=436&page=54",after:"同一企画ではないが、韓国ファンフェスは後年実開催。"},
{year:2017,title:"タクティクスアレキ",region:"日・北米・欧州",kind:"公式動画・ブログ",text:"機工城アレキサンダーをFFT／タクティクスオウガ風の16bit SRPGにした外伝。",url:"https://www.youtube.com/watch?v=YZJxYLoun7g",video:"YZJxYLoun7g"},
{year:2018,title:"MAGNAI FANTASY",region:"日・北米・欧州",kind:"公式動画・ブログ",text:"マグナイがナーマを求め、スクウェア／スクエニ歴代14作品の世界を渡り歩く。",url:"https://www.youtube.com/watch?v=UPaI3YV4GeA",video:"UPaI3YV4GeA"},
{year:2018,title:"FINAL FANTASY XIV Online GO",region:"北米・欧州主導",kind:"実写PV・特設",text:"位置情報と巨大な専用器具を使い、現実世界で採掘・園芸・釣りをするアプリ。",url:"https://www.youtube.com/watch?v=drq5ER6MHAM",video:"drq5ER6MHAM"},
{year:2019,title:"月刊少女ガンガン FFXIV漫画",region:"日・北米・欧州",kind:"公式ブログ・漫画",text:"架空の少女漫画原稿と人物相関図を公開。学園物からロボット物へ暴走する。",url:"https://jp.finalfantasyxiv.com/blog/002699.html",after:"2021年、別内容の『私立エオルゼア学園』として発想が現実化。"},
{year:2019,title:"スマートホームアシスタント OMEGA",region:"全世界向け",kind:"実写PV・特設",text:"Alexa風のオメガが家電を操作しつつ、家族へ容赦ない判定と不穏な応答を返す。",url:"https://na.finalfantasyxiv.com/lodestone/topics/detail/12bcd690f7c115502d88de4162b31dcd08929e93",video:"JnfP9qKAbk8"}
];
const filters=["すべて","日本・海外","韓国独自","現実化"];
export default function Home(){
 const [filter,setFilter]=useState("すべて"),[q,setQ]=useState("");
 const list=useMemo(()=>data.filter(x=>(filter==="すべて"||(filter==="韓国独自"&&x.region.includes("韓国"))||(filter==="現実化"&&x.after)||(filter==="日本・海外"&&!x.region.includes("韓国")))&&(`${x.year} ${x.title} ${x.region} ${x.text}`.toLowerCase().includes(q.toLowerCase()))),[filter,q]);
 return <main>
  <header className="siteHeader">
   <div className="utility"><div><b>FFXIV APRIL FOOLS ARCHIVE</b><span>非公式資料サイト</span></div><span>2013 — 2026</span></div>
   <div className="masthead"><div className="crystal">✦</div><div><p>FINAL FANTASY XIV</p><h1>エイプリルフール図鑑</h1><small>エオルゼアが嘘をついた日。</small></div></div>
   <nav className="globalNav"><a href="#timeline">企画年表</a><a href="#realized">嘘から現実へ</a><a href="#about">調査範囲</a><a href="https://jp.finalfantasyxiv.com/blog/tag/%E3%82%A8%E3%82%A4%E3%83%97%E3%83%AA%E3%83%AB%E3%83%95%E3%83%BC%E3%83%AB/" target="_blank">公式資料 ↗</a></nav>
  </header>
  <div className="page">
   <section className="feature"><img src="https://i.ytimg.com/vi/UPaI3YV4GeA/maxresdefault.jpg" alt="MAGNAI FANTASY"/><div><p>OFFICIAL APRIL FOOLS ARCHIVE</p><h2>FFXIV公式の“本気の嘘”を<br/>日本・海外まとめて収録</h2><span>確認済み14企画／地域差・後日談・現実化まで整理</span></div></section>
   <section className="controls"><div>{filters.map(f=><button className={filter===f?"active":""} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div><label>サイト内検索<input value={q} onChange={e=>setQ(e.target.value)} placeholder="企画名・年・地域"/></label></section>
   <div className="columns">
    <section className="archive" id="timeline"><div className="heading"><h2>エイプリルフール企画年表</h2><small>{list.length}件を表示中</small></div><div className="timeline">{[...new Set(list.map(x=>x.year))].map(year=><section className="yearGroup" id={`year-${year}`} key={year}><h3 className="yearTitle">{year}年</h3>{list.filter(x=>x.year===year).map(x=><article className="entry" key={x.year+x.title}><div className="card">{x.video&&<a className="thumb" href={x.url} target="_blank"><img src={`https://i.ytimg.com/vi/${x.video}/hqdefault.jpg`} alt={x.title}/></a>}<div className="body"><div className="badges"><span>{x.kind}</span>{x.after&&<span className="gold">嘘から現実へ</span>}</div><h3>{x.title}</h3><p>{x.text}</p>{x.after&&<p className="after"><b>その後：</b>{x.after}</p>}{x.note&&<p className="note">※ {x.note}</p>}<dl className="sourceDetails"><div><dt>場所</dt><dd>{x.region}</dd></div><div><dt>URL</dt><dd><a href={x.url} target="_blank">{x.url}</a></dd></div></dl></div></div></article>)}</section>)}</div>
     <section className="pause"><h2>2019年以降の大型企画</h2><p>グローバル運営の大型新作は2019年を最後に確認されていません。2020～2026年は「何もなかった」と断定せず、保存性のある独立企画が見つからない期間として扱っています。</p></section>
     <section className="about" id="about"><h2>この図鑑の調査範囲</h2><p>公式サイト・公式ブログ・公式YouTube・公式SNS・公式後日談で確認できた企画を収録。一次資料を復元できない中国版候補は、確認済み14件には含めていません。</p><p>開催日が近いだけのエッグハントや、9月公開の「タタルの冒険」も除外しています。</p></section>
    </section>
    <aside>
     <div className="sideBox"><h2>図鑑メニュー</h2><a href="#timeline">すべての企画</a><button onClick={()=>setFilter("現実化")}>嘘から現実になった企画</button><button onClick={()=>setFilter("韓国独自")}>韓国独自企画</button><a href="#about">収録・除外基準</a></div>
     <div className="sideBox"><h2>年代から探す</h2><div className="yearLinks">{[2013,2014,2015,2016,2017,2018,2019].map(y=><a href={`#year-${y}`} key={y}>{y}</a>)}</div></div>
     <div className="sideBox" id="realized"><h2>嘘から現実へ</h2><ol><li>ロード・オブ・ヴァーミニオン</li><li>私立エオルゼア学園</li><li>ヴィエラ実装</li></ol></div>
     <div className="notice"><b>ご注意</b><p>本サイトは個人制作の非公式アーカイブです。スクウェア・エニックスおよびFFXIV運営とは関係ありません。</p></div>
    </aside>
   </div>
  </div>
  <footer><div><b>FFXIV エイプリルフール図鑑</b><span>UNOFFICIAL ARCHIVE / SOURCES ARE OFFICIAL</span></div><span>FINAL FANTASY XIV © SQUARE ENIX</span></footer>
 </main>
}
