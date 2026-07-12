# Kino Traffic Category Model

## MVP Categories

The first implementation will use four categories only.

### 1. Direction

User meaning:

- overall vision
- tone
- staging
- authorship

Primary matching signal:

- Director

### 2. Acting & Cast

User meaning:

- performances
- actor presence
- chemistry
- memorable characters

Primary matching signal:

- main cast members

### 3. Cinematography

User meaning:

- lighting
- framing
- camera movement
- composition
- how the film was shot

Primary matching signal:

- Director of Photography
- Cinematographer

### 4. Music

User meaning:

- score
- soundtrack
- musical identity

Primary matching signal:

- Composer
- Original Music Composer
- Music Supervisor

## Later Categories

These should be added after the first four categories work:

- Story & Writing
- World & Design
- Editing & Pace
- Effects & Action
- Sound & Atmosphere

## Recommendation Principle

Recommendations should be explainable.

Every recommended film should show why it matched, for example:

- Same director
- Same composer
- Same cinematographer
- Shared lead actor

## Active Match Display

Recommendation cards should derive all displayed match information from the
currently selected categories.

The active-match helper should:

1. Read the selected category IDs.
2. Return only recommendation matches whose `categoryId` is selected.
3. Leave the original recommendation data unchanged.
4. Use active matches for recommendation visibility, ordering, category pills,
   hover highlights, and match counts.

Each active recommendation match should be factual evidence, not an editorial
description. Match evidence should include:

- `categoryId`
- `personId`
- `personName`
- `role`

Hover displays should show only the active canonical category labels. They
should not show people or roles inside the poster overlay.

People and roles stay in the match evidence so hover interactions can highlight
the matching left-side creative-team pills.

Persistent highlights come from the selected category buttons. Temporary hover
highlights come from active recommendation matches and should be removed when
the pointer leaves a recommendation card.
