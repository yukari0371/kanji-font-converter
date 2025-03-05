import { onkc } from "..";

(async() => {
    const result = await onkc.converter("old", "コーヒーを飲んで脳が覚醒しています。");
    if (result.status === "error") {
        console.error("Error:", result.message);
    } else {
        console.log("Converted:", result.convertedText);
    }
})();
