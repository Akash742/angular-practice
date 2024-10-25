import { animate, style, transition, trigger, state } from "@angular/animations";

export let fade = trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [                  //'void <=> *'
        animate(2000)
    ])
]);