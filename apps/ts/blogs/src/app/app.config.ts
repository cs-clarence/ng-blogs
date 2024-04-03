import { provideHttpClient, withFetch } from "@angular/common/http";
import type { ApplicationConfig } from "@angular/core";
import { provideClientHydration } from "@angular/platform-browser";
import { provideFileRouter } from "@analogjs/router";
import { provideContent, withMarkdownRenderer } from "@analogjs/content";
import { provideNzIcons } from "./icons-provider";

export const appConfig: ApplicationConfig = {
    providers: [
        provideFileRouter(),
        provideHttpClient(withFetch()),
        provideClientHydration(),
        provideContent(withMarkdownRenderer()),
        provideNzIcons(),
    ],
};
