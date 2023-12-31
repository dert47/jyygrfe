import { ContextPlugin } from "@ckeditor/ckeditor5-core";

export default class CloudServicesCommentsAdapter extends ContextPlugin {
    static readonly pluginName: "CloudServicesCommentsAdapter";
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        CloudServicesCommentsAdapter: CloudServicesCommentsAdapter;
    }
}
