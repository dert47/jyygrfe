import View from '../view';
import ViewCollection from '../viewcollection';
import { FocusTracker, KeystrokeHandler, Locale } from '@ckeditor/ckeditor5-utils';

export default class ColorGridView extends View {
    readonly focusTracker: FocusTracker;
    readonly items: ViewCollection;
    readonly keystrokes: KeystrokeHandler;

    constructor(
        locale?: Locale,
        options?: { colorDefinitions?: ColorDefinition[] | undefined; columns?: number | undefined },
    );
    focus(): void;
    focusLast(): void;
    destroy(): void;
}

export interface ColorDefinition {
    color: string;
    label: string;
    options: {
        hasBorder: boolean;
    };
}
