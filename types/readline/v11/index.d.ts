// Type definitions for non-npm package Node.js 11.15
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 David Junger <https://github.com/touffy>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Zane Hannan AU <https://github.com/ZaneHannanAU>
//                 Jeremie Rodriguez <https://github.com/jeremiergz>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Ivan Sieder <https://github.com/ivansieder>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference lib="es2015.symbol" />

declare global {
    interface AsyncIterableIterator<T> {}
    interface SymbolConstructor {
        readonly asyncIterator: symbol;
    }
}

import { Buffer } from 'buffer';
import 'node/events';
import * as events from 'events';
import * as stream from 'stream';

export {};

export interface Key {
    sequence?: string;
    name?: string;
    ctrl?: boolean;
    meta?: boolean;
    shift?: boolean;
}

export class Interface extends events.EventEmitter {
    readonly terminal: boolean;

    /**
     * NOTE: According to the documentation:
     *
     * > Instances of the `readline.Interface` class are constructed using the
     * > `readline.createInterface()` method.
     *
     * @see https://nodejs.org/dist/latest-v10.x/docs/api/readline.html#readline_class_interface
     */
    protected constructor(input: stream.ReadableStream, output?: stream.WritableStream, completer?: Completer | AsyncCompleter, terminal?: boolean);
    /**
     * NOTE: According to the documentation:
     *
     * > Instances of the `readline.Interface` class are constructed using the
     * > `readline.createInterface()` method.
     *
     * @see https://nodejs.org/dist/latest-v10.x/docs/api/readline.html#readline_class_interface
     */
    protected constructor(options: ReadLineOptions);

    setPrompt(prompt: string): void;
    prompt(preserveCursor?: boolean): void;
    question(query: string, callback: (answer: string) => void): void;
    pause(): this;
    resume(): this;
    close(): void;
    write(data: string | Buffer, key?: Key): void;

    /**
     * events.EventEmitter
     * 1. close
     * 2. line
     * 3. pause
     * 4. resume
     * 5. SIGCONT
     * 6. SIGINT
     * 7. SIGTSTP
     */

    addListener(event: string, listener: (...args: any[]) => void): this;
    addListener(event: "close", listener: () => void): this;
    addListener(event: "line", listener: (input: string) => void): this;
    addListener(event: "pause", listener: () => void): this;
    addListener(event: "resume", listener: () => void): this;
    addListener(event: "SIGCONT", listener: () => void): this;
    addListener(event: "SIGINT", listener: () => void): this;
    addListener(event: "SIGTSTP", listener: () => void): this;

    emit(event: string | symbol, ...args: any[]): boolean;
    emit(event: "close"): boolean;
    emit(event: "line", input: string): boolean;
    emit(event: "pause"): boolean;
    emit(event: "resume"): boolean;
    emit(event: "SIGCONT"): boolean;
    emit(event: "SIGINT"): boolean;
    emit(event: "SIGTSTP"): boolean;

    on(event: string, listener: (...args: any[]) => void): this;
    on(event: "close", listener: () => void): this;
    on(event: "line", listener: (input: string) => void): this;
    on(event: "pause", listener: () => void): this;
    on(event: "resume", listener: () => void): this;
    on(event: "SIGCONT", listener: () => void): this;
    on(event: "SIGINT", listener: () => void): this;
    on(event: "SIGTSTP", listener: () => void): this;

    once(event: string, listener: (...args: any[]) => void): this;
    once(event: "close", listener: () => void): this;
    once(event: "line", listener: (input: string) => void): this;
    once(event: "pause", listener: () => void): this;
    once(event: "resume", listener: () => void): this;
    once(event: "SIGCONT", listener: () => void): this;
    once(event: "SIGINT", listener: () => void): this;
    once(event: "SIGTSTP", listener: () => void): this;

    prependListener(event: string, listener: (...args: any[]) => void): this;
    prependListener(event: "close", listener: () => void): this;
    prependListener(event: "line", listener: (input: string) => void): this;
    prependListener(event: "pause", listener: () => void): this;
    prependListener(event: "resume", listener: () => void): this;
    prependListener(event: "SIGCONT", listener: () => void): this;
    prependListener(event: "SIGINT", listener: () => void): this;
    prependListener(event: "SIGTSTP", listener: () => void): this;

    prependOnceListener(event: string, listener: (...args: any[]) => void): this;
    prependOnceListener(event: "close", listener: () => void): this;
    prependOnceListener(event: "line", listener: (input: string) => void): this;
    prependOnceListener(event: "pause", listener: () => void): this;
    prependOnceListener(event: "resume", listener: () => void): this;
    prependOnceListener(event: "SIGCONT", listener: () => void): this;
    prependOnceListener(event: "SIGINT", listener: () => void): this;
    prependOnceListener(event: "SIGTSTP", listener: () => void): this;
    [Symbol.asyncIterator](): AsyncIterableIterator<string>;
}

export type ReadLine = Interface; // type forwarded for backwards compatiblity

export type Completer = (line: string) => CompleterResult;
export type AsyncCompleter = (line: string, callback: (err?: null | Error, result?: CompleterResult) => void) => any;

export type CompleterResult = [string[], string];

export interface ReadLineOptions {
    input: stream.ReadableStream;
    output?: stream.WritableStream;
    completer?: Completer | AsyncCompleter;
    terminal?: boolean;
    historySize?: number;
    prompt?: string;
    crlfDelay?: number;
    removeHistoryDuplicates?: boolean;
    escapeCodeTimeout?: number;
}

export function createInterface(input: stream.ReadableStream, output?: stream.WritableStream, completer?: Completer | AsyncCompleter, terminal?: boolean): Interface;
export function createInterface(options: ReadLineOptions): Interface;

export function cursorTo(stream: stream.WritableStream, x: number, y?: number): void;
export function emitKeypressEvents(stream: stream.ReadableStream, interface?: Interface): void;
export function moveCursor(stream: stream.WritableStream, dx: number | string, dy: number | string): void;
export function clearLine(stream: stream.WritableStream, dir: number): void;
export function clearScreenDown(stream: stream.WritableStream): void;
