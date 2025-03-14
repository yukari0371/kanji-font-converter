# kanji-font-converter
Kanji new font / old font converter

### Usage
```ts
import { kc } from "kanji-font-converter";

(async() => {
    const result = await kc.converter("old", "コーヒーを飲んで脳が覚醒しています。");
    if (result.status === "error") {
        console.error("Error:", result.message);
    } else {
        console.log(result);
    }
})();
```

### Result
```
{
    status: 'success',
    convertedText: 'コーヒーを飮んで腦が覺醒しています。'
}
```
