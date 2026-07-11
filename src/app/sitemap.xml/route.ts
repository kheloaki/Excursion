import { buildSitemapIndexXml, sitemapXmlHeaders } from "@/lib/sitemap-xml";

export function GET() {
  return new Response(buildSitemapIndexXml(), {
    headers: sitemapXmlHeaders,
  });
}
