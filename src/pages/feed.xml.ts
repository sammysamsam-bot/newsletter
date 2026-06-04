import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const all = await getCollection('briefs');

  const byDate = new Map<string, typeof all>();
  for (const b of all) {
    const key = b.data.date.toISOString().split('T')[0];
    if (!byDate.has(key)) byDate.set(key, []);
    byDate.get(key)!.push(b);
  }

  const items = Array.from(byDate.entries())
    .sort((a, b) => (a[0] < b[0] ? 1 : -1))
    .map(([key, briefs]) => {
      const date = briefs[0].data.date;
      const summary =
        briefs.find((b) => b.data.summary)?.data.summary ||
        `${briefs.length} sections published.`;
      const formatted = date.toLocaleDateString('en-US', {
        weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
      });
      return {
        title: formatted,
        pubDate: date,
        link: `/issues/${key}`,
        description: summary,
      };
    });

  return rss({
    title: "Sam's Newsletter",
    description: 'A daily editorial — curated by Sam.',
    site: context.site ?? 'https://sammybots-macbook-pro.tail5e4166.ts.net:8443',
    items,
  });
}
