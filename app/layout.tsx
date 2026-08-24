import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"FFXIV エイプリルフール図鑑",description:"FINAL FANTASY XIV公式エイプリルフール企画を日本・海外・地域差まで年表で整理したアーカイブ。",openGraph:{title:"FFXIV エイプリルフール図鑑",description:"エオルゼアが嘘をついた日。2013—2026公式企画年表。",type:"website"},twitter:{card:"summary",title:"FFXIV エイプリルフール図鑑",description:"エオルゼアが嘘をついた日。2013—2026公式企画年表。"},icons:{icon:"/favicon.svg"}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="ja"><body>{children}</body></html>}
