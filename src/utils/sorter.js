/**
 * Parse date or period string to a comparable numeric score for sorting descending (newest first).
 * Examples handled:
 * - "March 2026" -> 20260300
 * - "March 2025" -> 20250300
 * - "December 2024" -> 20241200
 * - "2024 - Present" -> 99999999
 * - "2023 - 2024" -> 20240100
 */
export function parseDateOrPeriodScore(input) {
  if (!input) return 0;
  const str = String(input).trim().toLowerCase();

  // If ongoing / present / sekarang / current -> highest priority
  if (
    str.includes('present') ||
    str.includes('sekarang') ||
    str.includes('current') ||
    str.includes('now')
  ) {
    return 99999999;
  }

  const monthMap = {
    jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
    jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
    januari: 1, februari: 2, maret: 3, april: 4, mei: 5, juni: 6,
    juli: 7, agustus: 8, september: 9, oktober: 10, november: 11, desember: 12,
  };

  const years = str.match(/\b(19\d\d|20\d\d)\b/g);
  let latestYear = 0;
  if (years && years.length > 0) {
    latestYear = Math.max(...years.map((y) => parseInt(y, 10)));
  }

  let month = 1;
  for (const [key, val] of Object.entries(monthMap)) {
    if (str.includes(key)) {
      month = val;
      break;
    }
  }

  if (latestYear === 0) {
    const parsed = Date.parse(input);
    if (!isNaN(parsed)) return parsed;
  }

  return latestYear * 10000 + month * 100;
}

export function sortProjectsByDate(items) {
  return [...items].sort((a, b) => {
    const scoreA = parseDateOrPeriodScore(a?.date);
    const scoreB = parseDateOrPeriodScore(b?.date);
    if (scoreB !== scoreA) {
      return scoreB - scoreA;
    }
    return (a?.title || '').localeCompare(b?.title || '');
  });
}

export function sortExperiencesByPeriod(items) {
  return [...items].sort((a, b) => {
    const scoreA = parseDateOrPeriodScore(a?.period);
    const scoreB = parseDateOrPeriodScore(b?.period);
    if (scoreB !== scoreA) {
      return scoreB - scoreA;
    }
    return (a?.role || '').localeCompare(b?.role || '');
  });
}

export function sortEducationByPeriod(items) {
  return [...items].sort((a, b) => {
    const scoreA = parseDateOrPeriodScore(a?.period);
    const scoreB = parseDateOrPeriodScore(b?.period);
    if (scoreB !== scoreA) {
      return scoreB - scoreA;
    }
    return (a?.school || '').localeCompare(b?.school || '');
  });
}

export function sortCertificatesByDate(items) {
  return [...items].sort((a, b) => {
    const scoreA = parseDateOrPeriodScore(a?.issueDate);
    const scoreB = parseDateOrPeriodScore(b?.issueDate);
    if (scoreB !== scoreA) {
      return scoreB - scoreA;
    }
    return (a?.title || '').localeCompare(b?.title || '');
  });
}
