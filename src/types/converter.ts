export type converterResult =
| {
    status: "success";
    convertedText: string;
} | {
    status: "error";
    message: string;
};

export type fontPairsType = [ string, string ];

