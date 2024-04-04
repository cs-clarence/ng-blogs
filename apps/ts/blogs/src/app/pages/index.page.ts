import type { RouteMeta } from "@analogjs/router";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

export const routeMeta: RouteMeta = {
    title: "Root",
};

@Component({
    standalone: true,
    imports: [RouterOutlet],
    template: `<router-outlet />`,
})
export default class RootComponent {}
