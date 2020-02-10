import { trigger, style, animate, state, transition, query, group, animateChild } from '@angular/animations';

const routeAnimation = [
  // query('.hero__h1', [
  //   style({ transform: 'translateY(100px)', opacity: 0 }),
  // ], { optional: true }),
  // query('.hero__h1', [
  //   animate('800ms 0s ease', style({ transform: 'translateY(0)', opacity: 1 })),
  // ], { optional: true }),
];

export const routeTransition =
  trigger('routeAnimations', [
    transition('* => *', routeAnimation),
  ]);
