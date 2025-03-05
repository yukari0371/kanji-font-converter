# kanji-font-converter
Kanji new font / old font converter

### Usage
### Example
```ts
import kc from "kanji-font-converter";

(async() => {
    const result = await kc.converter("old", "コーヒーを飲んで脳が覚醒しています。");
    if (result.status === "error") {
        console.error("Error:", result.message);
    } else {
        console.error(result);
    }
})();
```

### Result
```
{
    status: 'success',
    convertedText: 'コーヒーを飲んで脳が覺醒しています。'
}
```
