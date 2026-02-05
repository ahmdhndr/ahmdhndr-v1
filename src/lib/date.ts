/**
 * Formats an ISO date string (YYYY-MM-DD) into a human-readable format.
 * Defaults to "Month Day, Year" (e.g., February 5, 2026).
 */
export function formatDate(
  dateString: string,
  options: {
    month?: "long" | "short" | "numeric";
    showDay?: boolean;
  } = {}
) {
  const { month = "long", showDay = true } = options;

  // We use 'en-US' for consistency, but you can use 'undefined' for system locale
  return new Intl.DateTimeFormat("en-US", {
    day: showDay ? "numeric" : undefined,
    month,
    year: "numeric",
    timeZone: "UTC", // Ensures date doesn't shift due to local time offset
  }).format(new Date(dateString));
}

/**
 * Returns a relative time string (e.g., "2 days ago")
 */
export function getRelativeTime(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffInDays < 1) return "Today";
  if (diffInDays === 1) return "Yesterday";
  if (diffInDays < 30) return `${diffInDays} days ago`;

  return formatDate(dateString); // Fallback to standard format if old
}
