/**
 * Guard against projects borrowing another project's screenshot.
 *
 * Two Firestore records pointed at captures that belong to a different app:
 *
 *   CuanPOS  -> SS1_mjkz8m.png  (this is the Fact Guard landing page)
 *   Bantu    -> SS2_x0kxnq.png  (this is the MediChat Rx login screen)
 *
 * Both apps already have their own screenshots in their own records, so the
 * cards rendered two copies of somebody else's work — worse than showing no
 * image at all, because it misrepresents what the project looks like.
 *
 * The records cannot be corrected from a build (Firestore rules require an
 * authenticated owner), so the wrong URLs are filtered out here and the UI
 * falls back to its "screenshot not available" state. Delete an entry from this
 * map once the real capture is uploaded to that project's `image` field.
 */
const BORROWED_SCREENSHOTS = {
  "https://res.cloudinary.com/dt1e1fd6s/image/upload/v1746319629/SS1_mjkz8m.png":
    "Fact Guard",
  "https://res.cloudinary.com/dt1e1fd6s/image/upload/v1746319629/SS2_x0kxnq.png":
    "MediChat Rx",
};

/** True when this URL is a known stand-in for another project's screenshot. */
export function isBorrowedScreenshot(url) {
  if (!url) return false;
  return Object.prototype.hasOwnProperty.call(BORROWED_SCREENSHOTS, url.trim());
}

/**
 * Drop borrowed screenshots from a project's image list.
 * Returns the project unchanged when it has nothing borrowed.
 */
export function sanitizeProjectImages(project) {
  const images = Array.isArray(project?.image)
    ? project.image
    : [project?.image].filter(Boolean);

  const owned = images.filter((url) => !isBorrowedScreenshot(url));

  if (owned.length === images.length) return project;

  if (owned.length < images.length) {
    const removed = images.filter((url) => isBorrowedScreenshot(url));
    console.warn(
      `project "${project.title}": dropped ${removed.length} screenshot(s) borrowed from ` +
        `${[...new Set(removed.map((u) => BORROWED_SCREENSHOTS[u.trim()]))].join(", ")}`
    );
  }

  return { ...project, image: owned };
}

/** Apply {@link sanitizeProjectImages} across a project list. */
export function sanitizeProjects(projects) {
  if (!Array.isArray(projects)) return projects;
  return projects.map(sanitizeProjectImages);
}
