import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const logDownload = mutation({
  args: {
    source: v.string(),
    userAgent: v.optional(v.string()),
    referrer: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("resumeDownloads", {
      timestamp: Date.now(),
      source: args.source,
      userAgent: args.userAgent,
      referrer: args.referrer,
    });
  },
});

export const getDownloadStats = query({
  args: {},
  handler: async (ctx) => {
    const downloads = await ctx.db.query("resumeDownloads").collect();
    
    const totalDownloads = downloads.length;
    const portfolioDownloads = downloads.filter(d => d.source === "portfolio").length;
    const directDownloads = downloads.filter(d => d.source === "direct").length;
    
    // Get downloads by date (last 30 days)
    const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
    const recentDownloads = downloads.filter(d => d.timestamp > thirtyDaysAgo);
    
    return {
      totalDownloads,
      portfolioDownloads,
      directDownloads,
      recentDownloads: recentDownloads.length,
      lastDownload: downloads.length > 0 ? Math.max(...downloads.map(d => d.timestamp)) : null,
    };
  },
});
