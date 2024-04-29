
interface DebounceConfig {
    wait: number;
    leading?: boolean;
}

type CallBack = (...args: any[]) => any;

type DebounceResult = [{
    run: CallBack;
    cancel: () => void;
}]

export default function useDebounce(fn: CallBack, config: DebounceConfig): DebounceResult {
    let timeout: number | null = null;
    let lastArgs: any[] = [];

    const run = (...args: any[]) => {
        lastArgs = args;
        if (timeout) {
            clearTimeout(timeout);
        }

        if (config.leading && !timeout) {
            fn(...args);
        }

        timeout = setTimeout(() => {
            if (!config.leading) {
                fn(...lastArgs);
            }
            timeout = null;
        }, config.wait);
    };

    const cancel = () => {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
    };

    return [{
        run,
        cancel,
    }];

}