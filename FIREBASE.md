# Firebase visitor and game data

The site uses Firebase project `my-portfolio-285a8` and its default Cloud
Firestore database in `asia-southeast1`.

Automatic visitor and game-progress writes do not begin until the user chooses
**Allow** in the consent banner. The preference is stored locally and can be
changed at `/privacy`.

## Collections

- `siteStats/general` stores the unique browser visitor count.
- `siteStats/ratings` stores the public rating count and total. The UI displays
  a friendly 5.0 starting score through the first 10 ratings, then switches to
  the actual average beginning with rating 11.
- `visitors/{anonymousAuthUid}` stores first/last visit and visit count.
- `playerProgress/{uid_gameId}` stores totals and the current best score.
- `playerProgress/{uid_gameId}/runs/{runId}` stores each completed replay.
- `leaderboards/{gameId}/entries/{uid}` stores one best-score entry per game
  and browser, including the optional public nickname, audience type, and
  server-recorded timestamps for the entry, latest submission, and best score.
- `websiteRatings/{uid}` stores one anonymous rating per browser.

Names are not used as identifiers. Firebase Anonymous Authentication supplies a
persistent browser identity. Clearing browser storage, using private browsing,
or switching browser profiles creates a new identity, so this is practical
deduplication rather than fingerprinting.

## Owner devices

Open `/owner-device` on each personal browser profile and choose **Exclude this
browser**. The flag prevents only general visitor-count writes. Game progress,
ratings, and leaderboard submissions continue to work; owner-device leaderboard
submissions are always categorized as `visitor`.

The same route includes the private visitor list. The local device flag only
reveals the owner controls; reading all visitor records additionally requires
Google sign-in as `abdulmaliknahid@gmail.com`. Firestore enforces this email and
verified-email check server-side. `dihanmalik.github.io` is registered as an
authorized Firebase Authentication domain.

## Firebase deployment

Authentication and Firestore configuration are checked into the repository:

```sh
firebase deploy --only auth
firebase deploy --only firestore
```

The Firebase web configuration in `src/lib/firebase.ts` is intentionally public;
access control is enforced by `firestore.rules`, not by hiding the API key.
