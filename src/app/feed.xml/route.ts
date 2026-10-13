import { NextResponse } from "next/server";
import { insightsData } from "@/data/insights";
import { profileData } from "@/data/profile";
import { SITE_CONFIG } from "@/lib/constants";

export async function GET() {
  const itemsXml = insightsData
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${SITE_CONFIG.url}/insights/${post.slug}</link>
      <guid isPermaLink="true">${SITE_CONFIG.url}/insights/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.datePublished).toUTCString()}</pubDate>
      <author>${profileData.email} (${profileData.name})</author>
      <category>${post.category}</category>
    </item>`
    )
    .join("");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${profileData.name} - Engineering Insights</title>
    <link>${SITE_CONFIG.url}/insights</link>
    <description>Technical guides on Next.js 15, NestJS, LangChain, LangGraph, and Twilio AI Voice calling.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date("2026-10-10").toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_CONFIG.url}/feed.xml" rel="self" type="application/rss+xml"/>
    ${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
