declare module 'events' {
    class internal extends NodeJS.EventEmitter {
        /** @deprecated since v4.0.0 */
        static listenerCount(emitter: internal, event: string | symbol): number;
        static defaultMaxListeners: number;

        addListener(event: string | symbol, listener: (...args: any[]) => void): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;
        removeAllListeners(event?: string | symbol): this;
        setMaxListeners(n: number): this;
        getMaxListeners(): number;
        listeners(event: string | symbol): Function[];
        rawListeners(event: string | symbol): Function[];
        emit(event: string | symbol, ...args: any[]): boolean;
        eventNames(): Array<string | symbol>;
        listenerCount(type: string | symbol): number;
    }

    interface NodeEventTarget {
        once(event: string | symbol, listener: (...args: any[]) => void): this;
    }

    interface DOMEventTarget {
        addEventListener(event: string, listener: (...args: any[]) => void, opts?: { once: boolean }): any;
    }

    namespace internal {
        function once(emitter: NodeEventTarget, event: string | symbol): Promise<any[]>;
        function once(emitter: DOMEventTarget, event: string): Promise<any[]>;

        export import EventEmitter = internal;
    }

    export = internal;

    global {
        namespace NodeJS {
            class EventEmitter {
                addListener(event: string | symbol, listener: (...args: any[]) => void): this;
                on(event: string | symbol, listener: (...args: any[]) => void): this;
                once(event: string | symbol, listener: (...args: any[]) => void): this;
                removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
                off(event: string | symbol, listener: (...args: any[]) => void): this;
                removeAllListeners(event?: string | symbol): this;
                setMaxListeners(n: number): this;
                getMaxListeners(): number;
                listeners(event: string | symbol): Function[];
                rawListeners(event: string | symbol): Function[];
                emit(event: string | symbol, ...args: any[]): boolean;
                listenerCount(type: string | symbol): number;
                // Added in Node 6...
                prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
                prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
                eventNames(): Array<string | symbol>;
            }
        }
    }
}
