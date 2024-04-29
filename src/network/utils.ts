
// type Window = myWindow;

export function getHeaders(override: Record<string, string> = {}): Record<string, string> {
    return {
        'Content-Type': 'application/json',
        'x-cg-api-key': window['COIN_GECKO_API_KEY'],
        ...override,
    };
}