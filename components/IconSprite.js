// Shared <symbol> defs, referenced elsewhere with <svg><use href="#i-name" /></svg>
export default function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <symbol id="i-github" viewBox="0 0 24 24">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.77.12 3.06.74.8 1.19 1.82 1.19 3.08 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </symbol>
        <symbol id="i-linkedin" viewBox="0 0 24 24">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
        </symbol>
        <symbol id="i-mail" viewBox="0 0 24 24">
          <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5 7.3 5.98a.8.8 0 0 0 1 0L19.8 6H4.2Z" />
        </symbol>
        <symbol id="i-phone" viewBox="0 0 24 24">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z" />
        </symbol>
        <symbol id="i-arrow" viewBox="0 0 24 24">
          <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
        <symbol id="i-code" viewBox="0 0 24 24">
          <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
        <symbol id="i-globe" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" />
          </g>
        </symbol>
        <symbol id="i-chart" viewBox="0 0 24 24">
          <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
        <symbol id="i-tools" viewBox="0 0 24 24">
          <path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-2.6-.6-.6-2.6z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
        <symbol id="i-palette" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3a9 9 0 1 0 0 18c1.2 0 2-.8 2-1.8 0-1.2-1-1.6-1-2.7 0-.9.7-1.5 1.6-1.5H17a4 4 0 0 0 4-4C21 6.6 17 3 12 3z" />
            <circle cx="7.5" cy="11" r="1" />
            <circle cx="10.5" cy="7.5" r="1" />
            <circle cx="15" cy="8" r="1" />
          </g>
        </symbol>
        <symbol id="i-mic" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="3" width="6" height="11" rx="3" />
            <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
          </g>
        </symbol>
        <symbol id="i-sprout" viewBox="0 0 24 24">
          <path d="M12 21v-8M12 13c0-4-3-6-7-6 0 4 3 6 7 6zM12 15c0-3.5 2.5-5.5 6-5.5 0 3.5-2.5 5.5-6 5.5z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
        <symbol id="i-cal" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="5" width="18" height="16" rx="3" />
            <path d="M3 10h18M8 3v4M16 3v4M8 15h3" />
          </g>
        </symbol>
        <symbol id="i-brief" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="7" width="18" height="13" rx="3" />
            <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
          </g>
        </symbol>
        <symbol id="i-flag" viewBox="0 0 24 24">
          <path d="M5 21V4M5 4h11l-2 4 2 4H5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </symbol>
        <symbol id="i-shield" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l7 3v5c0 4.8-3 8.4-7 10-4-1.6-7-5.2-7-10V6l7-3Z" />
            <path d="M9 12.2l2 2 4-4.4" />
          </g>
        </symbol>
        <symbol id="i-pen" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 20l1-4.2L15.8 5a2 2 0 0 1 2.8 0l0.4.4a2 2 0 0 1 0 2.8L8.2 19 4 20Z" />
            <path d="M13.5 6.5l4 4" />
          </g>
        </symbol>
        {/* LeetCode-style badge: curly brackets motif in brand orange, not a pixel copy of the trademarked mark */}
        <symbol id="i-leetcode" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.5 4.5c-2 0-3 1-3 2.6v2.2c0 1-.4 1.7-1.5 1.7 1.1 0 1.5.7 1.5 1.7v2.2c0 1.6 1 2.6 3 2.6" />
            <path d="M14.5 4.5c2 0 3 1 3 2.6v2.2c0 1 .4 1.7 1.5 1.7-1.1 0-1.5.7-1.5 1.7v2.2c0 1.6-1 2.6-3 2.6" />
          </g>
        </symbol>
        {/* HackerRank-style badge: hexagon outline with a simple >_ mark, in brand green */}
        <symbol id="i-hackerrank" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2.3 20.5 7v10L12 21.7 3.5 17V7Z" />
            <path d="M9.5 9.5 7 12l2.5 2.5M14.5 9.5 17 12l-2.5 2.5M12.8 9l-1.6 6" />
          </g>
        </symbol>
      </defs>
    </svg>
  );
}
