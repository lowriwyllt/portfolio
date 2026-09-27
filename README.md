# Lowri Roberts Portfolio Website

This is a website built using Next.js in Typescript while ustilising tailwind.
Hosted at: https://lowriroberts.vercel.app/

## Getting Started

Install all dependencies:

```
npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Update

### 14/01/2026

I've looked at this for the first time in a good part of 2 years. This has completely made me realise how much I've grown as a dev. I'm going to be working on this portfolio once again, trying to improve what I already have and upgrade from techniques I've learnt. Some of the things I'll be looking to add:

- Add tests... oops - getting there
- Use jest axe to help test for accessability ✅
- Integrate Knip to detect unused code ✅
- Remove Firebase config; site is fully static ✅
- Consolidate styling (Tailwind CSS vs. Chakra UI vs something completely different) and migrate to one. ✅ - going to use css modules going forward
- Add linting ✅ - fixed ones
- Add workflows for PRs to run linting, testing, knip and run a build - started this, but need to add more
- Complete pages that are under construction - getting there with this one

### 17/01/2026

I'm getting a lot of this into a better spot, but keeping this as a note of what I need to do.

- add experience section back in ✅
- add flags to be able to change languages - ✅ - done and added a cool animation
- disable the current page navigation, so as not to confuse people ✅
- make sure place names under recent adventures doesn't cover the header ✅
- add tests to the components and pages I've got so far

## 01/03/2026

Again getting there but more still to do and finding more things I want to correct/tweak

- add single adventure pages with more details, the home page and adventure page should navigate to these - ✅
- make sure the filters are preserved when changing language - this may require some thought, maybe a lookup object with countries and regions
- filters on the adventure page shouldn't change the filter popover header, (removes your current selection if you click them)
- home page should have 5 random adventures under recent adventures rather than being static - ✅
- remove with from the adventure cards on the travel page (just preference not keen on them being there)- ✅
- add more of my adventure plus write some more in the short description about these - started on this more to do
- test how accessible it is using voiceover, have been trying to keep on top of this but need a full test soon

# 27/09/2026

- Add images to all the adventures and possibly multiple photos in some cases
- Add more details to my adventures
- Need a selected state for the filters on the travel page
- Clear all filters on the travel page
- Add filter for companions
- Add tags to adventures e.g. "Beach", "City break" etc
