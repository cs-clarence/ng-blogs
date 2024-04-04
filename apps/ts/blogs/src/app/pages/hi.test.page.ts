import type { RouteMeta } from "@analogjs/router";
import { Component } from "@angular/core";

export const routeMeta: RouteMeta = {};

@Component({
    standalone: true,
    template: ` <h1>Test</h1> `,
})
export default class TestComponent {}
