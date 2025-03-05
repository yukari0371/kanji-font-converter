/** Types */
import { 
    fontPairsType,
    converterResult,
} from "../types/converter";

const fontPairs: fontPairsType[] = [
    ["亜", "亞"], ["悪", "惡"], ["圧", "壓"], ["囲", "圍"], ["為", "爲"], 
    ["医", "醫"], ["壱", "壹"], ["逸", "逸"], ["稲", "稻"], ["飲", "飮"], 
    ["隠", "隱"], ["羽", "羽"], ["営", "營"], ["栄", "榮"], ["衛", "衞"], 
    ["益", "益"], ["駅", "驛"], ["悦", "悅"], ["円", "圓"], ["園", "薗"], 
    ["縁", "緣"], ["艶", "艷"], ["塩", "鹽"], ["奥", "奧"], ["応", "應"], 
    ["横", "橫"], ["欧", "歐"], ["殴", "毆"], ["鴎", "鷗"], ["黄", "黃"], 
    ["温", "溫"], ["穏", "穩"], ["仮", "假"], ["価", "價"], ["禍", "禍"], 
    ["画", "畫"], ["会", "會"], ["回", "囘"], ["壊", "壞"], ["悔", "悔"], 
    ["懐", "懷"], ["海", "海"], ["絵", "繪"], ["慨", "槪"], ["概", "槪"], 
    ["拡", "擴"], ["殻", "殼"], ["覚", "覺"], ["学", "學"], ["岳", "嶽"], 
    ["楽", "樂"], ["喝", "渴"], ["渇", "渇"], ["褐", "褐"], ["勧", "勸"], 
    ["巻", "卷"], ["寛", "寬"], ["歓", "歡"], ["漢", "漢"], ["缶", "罐"], 
    ["観", "觀"], ["間", "閒"], ["関", "關"], ["陥", "陷"], ["館", "館"], 
    ["巌", "巖"], ["顔", "顏"], ["器", "器"], ["既", "既"], ["帰", "歸"], 
    ["気", "氣"], ["祈", "祈"], ["亀", "龜"], ["偽", "僞"], ["戯", "戲"], 
    ["犠", "犧"], ["却", "卻"], ["糾", "糺"], ["旧", "舊"], ["拠", "據"], 
    ["挙", "擧"], ["虚", "虛"], ["峡", "峽"], ["挟", "挾"], ["教", "敎"], 
    ["狭", "狹"], ["郷", "鄕"], ["響", "響"], ["尭", "堯"], ["暁", "曉"], 
    ["勤", "勤"], ["謹", "謹"], ["区", "區"], ["駆", "驅"], ["駆", "駈"], 
    ["勲", "勳"], ["薫", "薰"], ["群", "羣"], ["径", "徑"], ["恵", "惠"], 
    ["掲", "揭"], ["携", "攜"], ["渓", "溪"], ["経", "經"], ["継", "繼"], 
    ["茎", "莖"], ["蛍", "螢"], ["軽", "輕"], ["鶏", "鷄"], ["芸", "藝"], 
    ["撃", "擊"], ["欠", "缺"], ["倹", "儉"], ["券", "劵"], ["剣", "劍"], 
    ["圏", "圏"], ["検", "檢"], ["権", "權"], ["献", "獻"], ["研", "硏"], 
    ["県", "縣"], ["険", "險"], ["顕", "顯"], ["験", "驗"], ["厳", "嚴"], 
    ["効", "效"], ["広", "廣"], ["恒", "恆"], ["晃", "晄"], ["鉱", "鑛"], 
    ["高", "髙"], ["号", "號"], ["国", "國"], ["穀", "穀"], ["黒", "黑"], 
    ["済", "濟"], ["砕", "碎"], ["斎", "齋"], ["剤", "劑"], ["冴", "冱"], 
    ["崎", "﨑"], ["桜", "櫻"], ["冊", "册"], ["殺", "殺"], ["雑", "雜"], 
    ["参", "參"], ["惨", "慘"], ["桟", "棧"], ["蚕", "蠶"], ["賛", "贊"], 
    ["残", "殘"], ["祉", "祉"], ["糸", "絲"], ["視", "視"], ["飼", "飼"], 
    ["歯", "齒"], ["児", "兒"], ["辞", "辭"], ["湿", "濕"], ["実", "實"], 
    ["舎", "舍"], ["写", "寫"], ["煮", "煮"], ["社", "社"], ["者", "者"], 
    ["釈", "釋"], ["寿", "壽"], ["収", "收"], ["臭", "臭"], ["従", "從"], 
    ["渋", "澁"], ["獣", "獸"], ["縦", "縱"], ["祝", "祝"], ["粛", "肅"], 
    ["処", "處"], ["暑", "暑"], ["渚", "渚"], ["緒", "緒"], ["署", "署"], 
    ["諸", "諸"], ["叙", "敍"], ["奨", "奬"], ["将", "將"], ["床", "牀"], 
    ["渉", "涉"], ["焼", "燒"], ["祥", "祥"], ["称", "稱"], ["証", "證"], 
    ["乗", "乘"], ["剰", "剩"], ["壌", "壤"], ["嬢", "孃"], ["条", "條"], 
    ["浄", "淨"], ["状", "狀"], ["畳", "疊"], ["穣", "穰"], ["譲", "讓"], 
    ["醸", "釀"], ["嘱", "囑"], ["触", "觸"], ["寝", "寢"], ["慎", "愼"], 
    ["晋", "晉"], ["真", "眞"], ["神", "神"], ["刃", "刄"], ["尽", "盡"], 
    ["図", "圖"], ["粋", "粹"], ["酔", "醉"], ["随", "隨"], ["髄", "髓"], 
    ["数", "數"], ["枢", "樞"], ["瀬", "瀨"], ["晴", "晴"], ["清", "淸"], 
    ["精", "精"], ["声", "聲"], ["青", "靑"], ["静", "靜"], ["斉", "齊"], 
    ["跡", "蹟"], ["摂", "攝"], ["窃", "竊"], ["節", "節"], ["専", "專"], 
    ["戦", "戰"], ["浅", "淺"], ["潜", "潛"], ["繊", "纖"], ["践", "踐"], 
    ["銭", "錢"], ["禅", "禪"], ["曽", "曾"], ["祖", "祖"], ["僧", "僧"], 
    ["双", "雙"], ["壮", "壯"], ["層", "層"], ["捜", "搜"], ["挿", "插"], 
    ["巣", "巢"], ["争", "爭"], ["痩", "瘦"], ["窓", "窗"], ["総", "總"], 
    ["聡", "聰"], ["荘", "莊"], ["装", "裝"], ["騒", "騷"], ["増", "增"], 
    ["憎", "憎"], ["臓", "臟"], ["蔵", "藏"], ["贈", "贈"], ["即", "卽"], 
    ["属", "屬"], ["続", "續"], ["堕", "墮"], ["体", "體"], ["対", "對"], 
    ["帯", "帶"], ["滞", "滯"], ["台", "臺"], ["滝", "瀧"], ["択", "擇"], 
    ["沢", "澤"], ["琢", "琢"], ["単", "單"], ["嘆", "嘆"], ["担", "擔"], 
    ["胆", "膽"], ["団", "團"], ["壇", "檀"], ["弾", "彈"], ["断", "斷"], 
    ["痴", "癡"], ["遅", "遲"], ["昼", "晝"], ["虫", "蟲"], ["鋳", "鑄"], 
    ["猪", "猪"], ["著", "著"], ["庁", "廳"], ["徴", "徵"], ["懲", "懲"], 
    ["聴", "聽"], ["勅", "敕"], ["鎮", "鎭"], ["塚", "塚"], ["禎", "禎"], 
    ["逓", "遞"], ["鉄", "鐵"], ["転", "轉"], ["点", "點"], ["伝", "傳"], 
    ["都", "都"], ["党", "黨"], ["島", "嶋"], ["盗", "盜"], ["灯", "燈"], 
    ["当", "當"], ["祷", "禱"], ["闘", "鬪"], ["闘", "鬭"], ["徳", "德"], 
    ["独", "獨"], ["読", "讀"], ["突", "突"], ["届", "屆"], ["縄", "繩"], 
    ["難", "難"], ["弐", "貳"], ["妊", "姙"], ["祢", "禰"], ["粘", "黏"], 
    ["悩", "惱"], ["脳", "腦"], ["覇", "霸"], ["廃", "廢"], ["拝", "拜"], 
    ["杯", "盃"], ["梅", "梅"], ["売", "賣"], ["麦", "麥"], ["発", "發"], 
    ["髪", "髮"], ["抜", "拔"], ["繁", "繁"], ["飯", "飯"], ["晩", "晚"], 
    ["蛮", "蠻"], ["卑", "卑"], ["碑", "碑"], ["秘", "祕"], ["桧", "檜"], 
    ["浜", "濱"], ["賓", "賓"], ["頻", "頻"], ["敏", "敏"], ["瓶", "甁"], 
    ["富", "冨"], ["侮", "侮"], ["福", "福"], ["払", "拂"], ["仏", "佛"], 
    ["併", "倂"], ["塀", "塀"], ["並", "竝"], ["変", "變"], ["辺", "邊"], 
    ["辺", "邉"], ["勉", "辨"], ["弁", "辯"], ["弁", "瓣"], ["舗", "舖"], 
    ["歩", "步"], ["穂", "穗"], ["宝", "寶"], ["峰", "峯"], ["萌", "萠"], 
    ["褒", "襃"], ["豊", "豐"], ["墨", "墨"], ["没", "沒"], ["翻", "飜"], 
    ["毎", "每"], ["槙", "槇"], ["万", "萬"], ["満", "滿"], ["免", "免"], 
    ["麺", "麵"], ["黙", "默"], ["餅", "餠"], ["戻", "戾"], ["野", "埜"], 
    ["弥", "彌"], ["薬", "藥"], ["訳", "譯"], ["薮", "藪"], ["祐", "豫"], 
    ["予", "餘"], ["与", "與"], ["誉", "譽"], ["揺", "搖"], ["様", "樣"], 
    ["謡", "謠"], ["遥", "遙"], ["欲", "慾"], ["来", "來"], ["頼", "賴"], 
    ["乱", "亂"], ["欄", "欄"], ["覧", "覽"], ["略", "畧"], ["隆", "隆"], 
    ["竜", "龍"], ["虜", "虜"], ["両", "兩"], ["涼", "凉"], ["猟", "獵"], 
    ["緑", "綠"], ["隣", "鄰"], ["塁", "壘"], ["涙", "淚"], ["類", "類"], 
    ["励", "勵"], ["礼", "禮"], ["隷", "隸"], ["霊", "靈"], ["齢", "齡"], 
    ["暦", "曆"], ["歴", "歷"], ["恋", "戀"], ["練", "練"], ["錬", "鍊"], 
    ["炉", "爐"], ["労", "勞"], ["廊", "廊"], ["朗", "朗"], ["楼", "樓"], 
    ["郎", "郞"], ["禄", "祿"], ["録", "錄"], ["亘", "亙"], ["湾", "灣"], 
    ["渕", "淵"], ["瑶", "瑤"], ["凜", "凛"], ["閲", "閱"], ["鎌", "鐮"], 
    ["強", "强"], ["呉", "吳"], ["娯", "娛"], ["歳", "歲"], ["産", "產"], 
    ["姉", "姊"], ["尚", "尙"], ["税", "稅"], ["説", "說"], ["絶", "絕"], 
    ["痩", "瘦"], ["双", "雙"], ["脱", "脫"], ["彦", "彥"], ["姫", "姬"]
];

const newFonts: string[] = fontPairs.map((pair) => pair[0]);
const oldFonts: string[] = fontPairs.map((pair) => pair[1]); 

export const converter = async (after: string, text: string): Promise<converterResult> => {
    return new Promise((resolve, reject) => {
        if (after !== "new" && after !== "old") {
            return reject({
                status: "error",
                message: "The value of after must be 'new' or 'old'."
            });
        }
        let convertedText = "";
        switch (after) {
            case "new":
                for (const char of text) {
                    let bool = false;
                    for (let i = 0; i < oldFonts.length; i++) {
                        if (char === oldFonts[i]) {
                            convertedText += newFonts[i];
                            bool = true;
                            break;
                        }
                    }
                    if (!bool) {
                        convertedText += char;
                    }
                }
            break;
            case "old":
                for (const char of text) {
                    let bool = false;
                    for (let i = 0; i < newFonts.length; i++) {
                        if (char === newFonts[i]) {
                            convertedText += oldFonts[i];
                            bool = true;
                            break;
                        }
                    }
                    if (!bool) {
                        convertedText += char;
                    }
                }
            break;
            default:
                reject({
                    status: "error",
                    message: "An unexpected error has occurred."
                });
            break;
        }
        return resolve({
            status: "success",
            convertedText: convertedText
        });
    });
};
