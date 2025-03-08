import { kc } from "..";

(async() => {
    const result = await kc.converter("new", "コーヒーを飲んで脳が覺醒しています。");
    if (result.status === "error") {
        console.error("Error:", result.message);
    } else {
        console.log("Converted:", result.convertedText);
    }
})();
