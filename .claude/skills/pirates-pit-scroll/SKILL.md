---
name: pirates-pit-scroll
description: Design and implement premium cinematic scroll experiences for the Pirates Pit Barbeque website using GSAP ScrollTrigger, Lenis, progressive enhancement, responsive motion, accessibility, and performance safeguards.
---

# Pirates Pit Cinematic Scroll Skill

Use this skill whenever planning, creating, reviewing, or optimizing scroll-based animation for the Pirates Pit Barbeque website.

## Primary objective

Create a cinematic restaurant experience using smoke, fire, depth, scale, pinning, image reveals, typography, and controlled movement without damaging readability, accessibility, mobile performance, or normal browser behavior.

## Core principles

1. Story comes before animation.
2. Every major animation must support the Pirates Pit brand.
3. Motion must feel heavy, smoky, deliberate, and premium.
4. Do not animate every element.
5. Preserve normal scrolling behavior.
6. Mobile motion should be lighter than desktop motion.
7. Users with reduced-motion preferences must receive a complete usable experience.
8. No essential content may depend on animation.
9. Avoid large continuous blur filters on mobile.
10. Avoid excessive pinned sections and unnecessary scroll distance.

## Required tools

Use:

- GSAP
- GSAP ScrollTrigger
- Lenis for smooth scrolling
- CSS transforms
- CSS opacity
- CSS masks where appropriate
- Responsive media queries
- prefers-reduced-motion safeguards

Do not combine GSAP with Framer Motion for the same animations.

## Animation planning requirement

Before writing animation code, produce a section-by-section storyboard containing:

- Section purpose
- Scroll duration
- Pinned or normal flow
- Entering elements
- Exiting elements
- Background behavior
- Mobile behavior
- Reduced-motion behavior
- Performance risks

## Hero animation guidance

The hero should begin nearly black.

Suggested sequence:

1. Low smoke moves gently across the viewport.
2. The Pirates Pit skull logo slowly emerges.
3. The knife and fork gain a subtle antique-gold reflection.
4. The headline appears:
   SMOKE RULES THE PIT
5. Supporting copy and buttons appear.
6. During scroll, the logo remains briefly pinned.
7. The knife and fork move slightly outward.
8. Smoke recedes.
9. Ember glow develops near the bottom.
10. The next section rises beneath the hero.

Keep movement controlled and cinematic.

Do not spin the logo.

Do not create exaggerated zooming.

Do not make the sequence longer than necessary.

## Pinned storytelling guidance

The Built by Smoke section may use a short pinned experience.

Possible sequence:

- Raw meat imagery
- Smoke gathers
- Heat and ember light increase
- Finished brisket or ribs appear
- Copy changes in two or three deliberate stages

Suggested copy:

NO SHORTCUTS.
NO RUSHED MEAT.
JUST HEAT, SMOKE, AND TIME.

Do not create a long empty scroll section.

## Food section guidance

Featured food should feel physical and substantial.

Use:

- Slow image reveals
- Clipping masks
- Controlled scale
- Light parallax
- Smoke transitions
- Dark-to-light contrast
- Strong readable pricing and labels

Avoid making food images float unrealistically.

Avoid excessive card animations.

## Smoke guidance

The site should feel smoky without hiding the content.

Use combinations of:

- Optimized transparent WebP smoke layers
- CSS radial gradients
- Soft masks
- Low-opacity textures
- Short optimized video when justified
- Slow background-position changes
- Grain overlays

Smoke must never:

- Block navigation
- Reduce text contrast
- cover buttons
- cause major frame drops
- run as a large full-resolution video on every section

## Mobile behavior

On smaller screens:

- Reduce parallax distances
- Reduce pinned durations
- Disable expensive blur
- Avoid large simultaneous animations
- Use simpler fades and transforms
- Preserve touch scrolling
- Keep buttons immediately usable
- Prevent horizontal overflow

## Reduced-motion behavior

When prefers-reduced-motion is enabled:

- Disable smooth scrolling
- Disable pinned storytelling
- Remove parallax
- Remove large scale transitions
- Show all content immediately
- Preserve static smoke textures if readable
- Keep navigation, menu, and forms fully functional

## Performance review

For every major scroll sequence, review:

- Main-thread cost
- Number of animated layers
- Image dimensions
- Video size
- Blur usage
- Offscreen animation
- Layout shift
- Mobile behavior
- ScrollTrigger cleanup
- React component cleanup

Use transforms and opacity whenever possible.

Pause video and animations when offscreen.

Kill ScrollTrigger instances during component cleanup.

Refresh ScrollTrigger after fonts and media load.

## Testing requirements

Test:

- iPhone-sized screens
- Android-sized screens
- Tablet portrait
- Tablet landscape
- Laptop
- Large desktop
- Safari
- Chrome
- Reduced motion
- Slow connection
- Keyboard navigation
- Touch scrolling

## Completion standard

A section is not complete until:

- It works without animation
- It works on mobile
- It respects reduced motion
- It has no horizontal overflow
- It has no console errors
- It does not create excessive scroll distance
- It maintains readable contrast
- It supports the Pirates Pit story
