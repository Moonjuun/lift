export const ROUTES = {
  home: "/",
  levelTest: "/level-test",
  levelTestResult: "/level-test/result",
  tracks: "/tracks",
  trackDetail: (slug: string) => `/tracks/${slug}`,
} as const;
