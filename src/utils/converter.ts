/** Types */
import { 
    fontPairsType,
    converterResult,
} from "../types/converter";

const fontPairs: fontPairsType[] = [
    ["亜", "亞"], ["悪", "惡"], ["圧", "壓"], ["囲", "圍"], ["為", "爲"],
    ["医", "醫"], ["壱", "壹"], ["稲", "稻"], ["飲", "飲"], ["隠", "隱"],
    ["羽", "羽"], ["営", "營"], ["駅", "驛"], ["円", "圓"], ["塩", "鹽"],
    ["奥", "奧"], ["応", "應"], ["横", "橫"], ["温", "溫"], ["仮", "假"],
    ["会", "會"], ["絵", "繪"], ["壊", "壞"], ["楽", "樂"], ["学", "學"],
    ["拡", "擴"], ["覚", "覺"], ["殻", "殼"], ["巻", "卷"], ["陥", "陷"],
    ["顔", "顏"], ["帰", "歸"], ["気", "氣"], ["亀", "龜"], ["偽", "僞"],
    ["儀", "儀"], ["挙", "擧"], ["峡", "峽"], ["挟", "挾"], ["暁", "曉"],
    ["勤", "勤"], ["緊", "緊"], ["区", "區"], ["駆", "驅"], ["勲", "勳"],
    ["薫", "薰"], ["恵", "惠"], ["掲", "揭"], ["鶏", "鷄"], ["撃", "擊"],
    ["県", "縣"], ["険", "險"], ["験", "驗"], ["厳", "嚴"], ["効", "效"],
    ["広", "廣"], ["恒", "恆"], ["鉱", "鑛"], ["号", "號"], ["国", "國"],
    ["黒", "黑"], ["歳", "歲"], ["雑", "雜"], ["産", "產"], ["参", "參"]
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