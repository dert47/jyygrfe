import { Plugin } from '@ckeditor/ckeditor5-core';
import { FocusTracker } from '@ckeditor/ckeditor5-utils';
import { Options } from '@ckeditor/ckeditor5-utils/src/dom/position';
import ButtonView from '../../button/buttonview';
import View from '../../view';
import ViewCollection from '../../viewcollection';
import BalloonPanelView from './balloonpanelview';

export default class ContextualBalloon extends Plugin {
    static readonly pluginName: 'ContextualBalloon';

    readonly positionLimiter: Options['limiter'];
    readonly view: BalloonPanelView;
    visibleView: View | null;

    add(data: {
        stackId?: string | undefined;
        view?: View | undefined;
        position?: Options | undefined;
        balloonClassName?: string | undefined;
        withArrow?: boolean | undefined;
        singleViewMode?: boolean | undefined;
    }): void;
    hasView(view: View): boolean;
    remove(view: View): void;
    showStack(id: string): void;
    updatePosition(position?: Options): void;
    destroy(): void;
}

export class RotatorView extends View {
    buttonNextView: ButtonView;
    buttonPrevView: ButtonView;
    readonly content: ViewCollection;
    focusTracker: FocusTracker;
    isNavigationVisible: boolean;

    hideView(): void;
    showView(view: View): void;
    destroy(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        ContextualBalloon: ContextualBalloon;
    }
}
