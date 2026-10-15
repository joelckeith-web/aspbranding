---
title: "How to Read a Google Search Console Performance Report"
slug: "how-to-read-google-search-console-performance-report"
publishDate: "2026-10-27"
dateModified: "2026-10-27"
author:
  name: "Joel Keith"
  title: "CEO and Partner at ASP"
  bio: "Joel Keith is CEO and a partner at ASP, a growth-systems marketing agency for home service operators. He is a marketing operator who has spent years inside home service companies, building and refining the systems ASP now runs for clients. ASP is a Housecall Pro Affiliate."
  avatar: "/images/team/joel-keith.avif"
  website: "https://aspbranding.com"
category: "seo"
tags: ["search-console", "seo-reporting", "home-services", "analytics", "growth-system"]
metaTitle: "How to Read a Google Search Console Performance Report"
metaDescription: "Read your Search Console Performance report in order: average position, CTR, clicks, then impressions. See what each metric means and why order matters."
featuredImage: "/images/backgrounds/hero-trades-2.jpg"
schema:
  type: "Article"
  faqItems:
    - question: "Why does my own Google search show a different position than Search Console?"
      answer: "Search Console reports an average across many searches, and your own search is only one of them. Google says position \"is the average position for all searches,\" and that your result \"might be different than the average because of many variables, such as your search history, location, and so on.\" Google also notes that you \"might not see your site in results if you run the same query in Google Search,\" because results \"are specific to the time, place, device, and recent history of the person searching.\" One check from your own phone is not a reliable read on where you rank."
    - question: "Is a lower average position better in Search Console?"
      answer: "Yes. Google describes position as \"a relative ranking of the position of your link on Google, where 1 is the topmost position, 2 is the next position, and so on.\" A lower number means your link ranked higher. Keep in mind that the number is an average across every query where your site appeared, so strong and weak searches are blended together. Google also says that \"ads do not occupy a search position,\" so paid ads above your listing are not counted as positions."
    - question: "Why did my impressions go up while my clicks stayed flat?"
      answer: "An impression means your link appeared on a results page, and Google can count one even when the listing was never scrolled into view. Google says the goal is \"meaningful impressions,\" which means \"being seen by people who will find your information useful and worth reading.\" In our experience, impressions can climb when a site starts showing up for searches that do not fit the business. Open the Queries tab and look for searches with high impressions and low CTR. Google points to those as chances to improve your page title and description."
    - question: "How long a date range should I use to judge SEO results?"
      answer: "We judge trends over months, not days or weeks. When you compare two date ranges, Google suggests weekly or monthly granularity because it \"provides a clearer, more accurate comparison of true long-term performance trends.\" To account for season, Google's traffic-drops guide recommends selecting \"Last 16 months\" so you can make sure a drop is \"not a drop that happens every year.\" You can also compare the last three months year over year from the Date filter. Treat the newest data with care, since Google says it \"can be preliminary.\""
    - question: "Why don't the chart totals match the table totals in Search Console?"
      answer: "Google says \"the chart totals can sometimes differ from the table totals,\" and that this \"is usually due to differences in aggregation (property vs. page).\" Filters can also change the totals. Some queries are left out of the report \"to protect user privacy,\" and Google notes that filtering by query or URL \"can affect the report totals due to data truncation and the omission of anonymized queries.\" So a mismatch between the chart and the table has a documented explanation."
    - question: "Do AI Overviews and AI Mode count in the Search Console Performance report?"
      answer: "Google's Help page explains how both are counted. For AI Overviews, \"an AI Overview occupies a single position in search results, and all links in the AI Overview are assigned that same position,\" and \"clicking a link to an external page in the AI Overview counts as a click.\" For AI Mode, \"clicking a link to an external page in AI Mode counts as a click,\" and position \"follows the same methodology as a Google Search results page.\""
status: "review"
contentPillar: "service-deep-dive"
readingTime: "12 min read"
---

The Google Search Console Performance report shows how your website does in Google Search. [Google's Performance report guide](https://support.google.com/webmasters/answer/7576553) says it "shows important metrics about how your site performs in Google Search results." The report tracks four numbers: clicks, impressions, click-through rate (CTR) and average position. At ASP, we work with trades and home-service businesses, and we read those four numbers in the same order every time. We start with average position, then CTR, then clicks, then impressions. We never judge a site on clicks or impressions alone.

If you own an HVAC, plumbing, roofing, inspection or remodeling company, you may have Search Console access and rarely open it. Or you may get a monthly report from an agency and only look at the clicks line. In our experience, the order you read the numbers in changes what you conclude from them. This guide walks through each metric in our order, using Google's own definitions, and shows how the four fit together. It is part of our [guide to local SEO for home service businesses](/blog/local-seo-for-home-service-businesses). For how ASP connects search reporting to booked revenue, see [the ASP Growth System](/growth-system).

## Turn on all four metrics in the Performance report

When you first open the report, you do not see all four numbers. Google says the default view "shows click and impression data for your site in Google Search results for the past three months." Average position and CTR stay hidden until you turn them on. Google's guide explains that you "can choose which metrics to display by toggling the appropriate heading above the chart."

Here is the setup we use before reading anything:

1. Open the Performance report for Search results in Search Console.
2. Click the CTR and Average position headings above the chart so all four metrics show.
3. Widen the date range past the default three months. Google's traffic-drops guide suggests looking at the last 16 months to check whether a drop happens every year.
4. Treat the newest data with care. Google notes that "the newest data can be preliminary, meaning it's still being collected and might change in the next few hours."

![Google Search Console Performance report with total clicks, total impressions, average CTR and average position all turned on, shown by month from June 2025 to March 2026](/images/blog/search-console/gsc-performance-all-four-metrics.png)

*A home inspection company we work with, Search Console Performance report, June 2025 to March 2026, by month, with all four metrics turned on. Client anonymized.*

The table below sums up each metric in the order we read it. The definitions are Google's. The right-hand column is our own reading of each one.

| Order | Metric | Google's definition | What it tells us |
|---|---|---|---|
| 1 | Average position | "The average position of the topmost result from your site." | Where you showed up, averaged across every query where you appeared |
| 2 | CTR | "The click count divided by the impression count." | How often appearing in results turned into a visit |
| 3 | Clicks | "The number of times a user clicked your site from Google Search results." | Visits from Search, which move with season and demand |
| 4 | Impressions | "How many times your site appeared in Search results." | How often you appeared, including for searches that may not fit your business |

## Average position: the first number we read

Google defines average position as "the average position of the topmost result from your site." On its page explaining [how Google defines impressions, position, and clicks](https://support.google.com/webmasters/answer/7042828), Google calls position "a relative ranking of the position of your link on Google, where 1 is the topmost position, 2 is the next position, and so on." A lower number is better. A number that falls over time usually means your links are ranking higher on average.

The word that matters is average. Google says the value is "the topmost position occupied by a link to your property or page in search results, averaged across all queries in which your property appeared." Google's own example uses two searches. One shows your site at positions 2, 4 and 6, so it counts as 2. The other shows it at 3, 5 and 9, so it counts as 3. "The average position across these two queries is (2 + 3)/2 = 2.5."

That average blends your strongest searches with your weakest ones. Picture a plumbing company that shows near the top for its main repair searches and far down the list for a service it rarely offers. Its average lands somewhere in the middle, and that middle number describes neither search well. Google also says "a link must get an impression for its position to be recorded," so searches where you never appear do not enter the average. Paid ads do not change the number either, because Google notes that "ads do not occupy a search position."

We read position first because it helps explain the other three numbers. When position moves, we expect CTR, clicks and impressions to respond, and we know where to look next. When position holds steady and clicks fall, we turn to CTR, the season and the listing itself. Google calls position "a complex metric that can be misleading if you don't understand the subtleties," and recommends that you "monitor change in position over time, particularly sudden position changes, as well as absolute position."

### What Google says about focusing on position

[Google's guide to traffic drops](https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops) puts it this way: "In general, you shouldn't focus too much on your absolute position. Impressions and clicks are ultimately the measure of success for your site." We agree with the second sentence. Clicks and impressions are the results, and a position number does not pay anyone's bills by itself.

We do not rank the metrics by importance. We read them in the order that best explains the results. Position and CTR tell us why clicks and impressions moved, so we read them first and judge the results last. Google does not recommend this order; it is our method. The same guide warns that "small fluctuations in position can happen at any time," and it recommends "avoiding making radical changes if your page is already performing well." That is one more reason we look for trends across months and do not react to a single bad week.

**Key Takeaway:** Average position is an average across every query where your site appeared, and a lower number is better. We read it first because it helps explain why clicks and impressions moved, not because it matters more than they do.

## Search Console CTR: how often being seen turns into a visit

CTR stands for click-through rate. Google defines it as "the click count divided by the impression count." If your site appeared 1,000 times and got 30 clicks, your CTR would be 3%. Those are round numbers to show the math, not a target.

We think of CTR as the share of people who saw your listing and chose to click. That shorthand works, with one catch. Google says that, in general, an impression is counted "whenever an item appears in the current page of results, whether or not the item is scrolled into view." So some impressions can come from listings that nobody scrolled down far enough to see.

We read CTR second because it shows whether your position is turning into visits. When your page title and snippet do not match what the person wants, a listing can rank well and still get passed over. Google's guide to the report's [dimensions and data groupings](https://support.google.com/webmasters/answer/17011259) suggests using the query view "to find queries with high impressions and low CTR for opportunities to improve your page title and description." In our view, that list is one of the most useful views in the report for a home-service website.

## Clicks, and why season and demand move them

Google defines clicks as "the number of times a user clicked your site from Google Search results." The count has rules. For most result types, Google says "any click that sends the user to a page outside of Google Search, Discover, or News is counted as a click." Clicking a result, coming back and clicking the same link again "counts as only one click."

In our experience, clicks are the number most owners check first, because they are the closest thing in the report to a phone call. We read them third because they swing for reasons that have little to do with your website. Google's traffic-drops guide says that "sometimes changes in user behavior will change the demand for certain queries, either due to a new trend, or seasonality throughout the year." It adds that "different industries have different levels of seasonality." Think about your own busy and slow months before you blame your SEO for a dip.

In our experience, clicks can also swing because of one query. A single search term that gains or loses traffic can move the whole clicks line. Google suggests a way to check. Filter the Performance report "to include only a query at a time (choose the queries that receive the most traffic)," then "check them on Google Trends to understand if the drop was only for your website or throughout the web."

This is where position and CTR earn their place at the front of the line. Google says "if your impressions remain the same but your clicks drop, you might not be generating the best page title and snippet that you could," or "perhaps other sites had a more appealing rich result." When position has also held steady, we look at the listing before we look at the ranking.

A click counts a visit from Google Search, and a visit is not the same as a booked job. To connect search visits to calls and revenue, read our guide to [marketing attribution for home service businesses](/blog/marketing-attribution-home-service-businesses).

**Key Takeaway:** Clicks are a result, but they move with season, demand and, in our experience, sometimes a single query. Check position and CTR before you decide that a drop in clicks means your SEO got worse.

## Impressions are the easiest number to misread

Google defines impressions as "how many times your site appeared in Search results." In more detail, "an impression means that a user has seen (or potentially seen) a link to your site in Search, Discover, or News." The words "potentially seen" matter. As covered above, a listing can count as an impression without ever being scrolled into view.

That is why we read impressions last. In our view, impressions are the easiest number to inflate and the easiest to misread. Google is direct about the goal: you should aim for "meaningful impressions," which means "being seen by people who will find your information useful and worth reading." Google also warns that "being seen, or clicked, by people who don't find your content useful and will quickly leave is not a healthy way to build website traffic and loyalty."

In our experience, impressions can climb when a site starts showing up for searches that do not fit the business. A roofing company might start appearing for do-it-yourself repair questions from people who are not looking to hire anyone. The impressions line goes up, CTR goes down, and clicks barely move. A report that leads with that impressions line can look like progress when little has changed for the business.

To check, open the Queries tab and read the list. Google says the query view helps you "look for expected and unexpected queries." If the searches behind your impressions are not ones your customers would type, more of them will not bring more work.

**Key Takeaway:** An impression means your link appeared on a results page, not that someone read it. More impressions help only when they come from searches your customers make.

## How to read the four metrics together over months

One number on one day tells you very little. We read all four together, and we read them across months. Google's guide to [filtering and comparison](https://support.google.com/webmasters/answer/17011165) backs up the months part. It says that when you compare date ranges, weekly or monthly granularity "provides a clearer, more accurate comparison of true long-term performance trends."

To compare two periods, Google says to "choose Compare in the filter properties dialog box" and add the periods you want. The results table then shows "a Difference column to compare values in each row." Google's traffic-drops guide suggests two comparisons: "Compare last 3 months to previous period or Compare last 3 months year over year." For a seasonal business, we treat year over year as the fairer test because it lines up the same months. Note that "you can have only one comparison at a time."

The table below shows what we look at when the numbers move. The middle column quotes Google. The right column is our method.

| What you see | What Google says | What we check next |
|---|---|---|
| Impressions steady, clicks down | "you might not be generating the best page title and snippet that you could" | CTR by query, then the page titles and descriptions |
| Impressions and clicks both down | Check "the list of the most common reasons," which includes seasonality, technical issues and site moves | Position over 16 months, then the top queries in Google Trends |
| High impressions, low CTR | These are "opportunities to improve your page title and description" | Whether those queries fit the business at all |
| Small change in position | "Small fluctuations in position can happen at any time" | Whether the change holds for months before changing any pages |

For what else to track alongside Search Console, see the measurement section of our [Google SEO strategies guide for home service businesses](/blog/google-seo-strategies-2025).

**Key Takeaway:** Read the four metrics side by side, by month, and compare the same months year over year. In our method, position and CTR help explain the change, and clicks and impressions show its size.

## Filtering by query, page, country and device

The tabs under the chart let you split the data. Google lists them as Queries, Pages, Countries, Devices, Search appearance and Dates. The ones we use most for home-service websites are Queries, Pages and Devices.

Queries are "the search terms that led to your site." Pages group data "by the final URL linked by a Search result after any redirects," so you can see which service page earns the clicks. Devices split the data by "desktop, tablet, or mobile." Countries group it "by the country where the search originated." In our view, that tab matters less for a business that serves one metro area.

You can stack filters. Google gives the example of grouping by query and adding "country='USA' AND device='Mobile'." You can also "click any row in a table to automatically filter data by that row." If your site has enough impressions, the branded and non-branded queries filter separates searches "based on whether or not the search term included your brand name." Google notes that it "isn't available for sites with a low number of impressions." It shows how much of your traffic comes from people who searched for your company by name.

Two cautions apply when you filter. Some queries are left out "to protect user privacy," and Google says filtering by query or URL "can affect the report totals due to data truncation and the omission of anonymized queries." Google also notes that "the chart totals can sometimes differ from the table totals."

### Why your own Google search does not match the report

You may have searched for your own service and seen a different result from the one the report shows. Google explains why: "Even if a query appears in your list, you might not see your site in results if you run the same query in Google Search. This is because Search results are specific to the time, place, device, and recent history of the person searching." The position you see on your phone comes from one search. The number in the report is an average across all of them.

## SEO reporting for home services: what to ask your agency

If an agency or vendor sends you an SEO report, this reading order gives you a fair way to check it. In our view, a report that leads with rising impressions and leaves out position and CTR is telling only part of the story. Here is what we would ask for:

- All four metrics shown together, not clicks or impressions alone.
- Month-by-month comparisons, including the same months last year.
- The queries and pages behind any big change.
- An explanation of position changes that separates a lasting trend from small swings.

These questions are fair to ask any SEO provider, including us. For more on picking a partner, read our advice on [how to choose the right SEO agency](/blog/choosing-the-right-seo-agency-tips-for-small-business-success). Search Console reports on your website's search results. If you are deciding whether to put effort into your website or your Google Business Profile first, our comparison of [Google Business Profile vs website priorities](/blog/gbp-vs-website-home-service-priority) covers that choice.

## Common questions

### Why does my own Google search show a different position than Search Console?

Search Console reports an average across many searches, and your own search is only one of them. Google says position "is the average position for all searches," and that your result "might be different than the average because of many variables, such as your search history, location, and so on." Google also notes that you "might not see your site in results if you run the same query in Google Search," because results "are specific to the time, place, device, and recent history of the person searching." One check from your own phone is not a reliable read on where you rank.

### Is a lower average position better in Search Console?

Yes. Google describes position as "a relative ranking of the position of your link on Google, where 1 is the topmost position, 2 is the next position, and so on." A lower number means your link ranked higher. Keep in mind that the number is an average across every query where your site appeared, so strong and weak searches are blended together. Google also says that "ads do not occupy a search position," so paid ads above your listing are not counted as positions.

### Why did my impressions go up while my clicks stayed flat?

An impression means your link appeared on a results page, and Google can count one even when the listing was never scrolled into view. Google says the goal is "meaningful impressions," which means "being seen by people who will find your information useful and worth reading." In our experience, impressions can climb when a site starts showing up for searches that do not fit the business. Open the Queries tab and look for searches with high impressions and low CTR. Google points to those as chances to improve your page title and description.

### How long a date range should I use to judge SEO results?

We judge trends over months, not days or weeks. When you compare two date ranges, Google suggests weekly or monthly granularity because it "provides a clearer, more accurate comparison of true long-term performance trends." To account for season, Google's traffic-drops guide recommends selecting "Last 16 months" so you can make sure a drop is "not a drop that happens every year." You can also compare the last three months year over year from the Date filter. Treat the newest data with care, since Google says it "can be preliminary."

### Why don't the chart totals match the table totals in Search Console?

Google says "the chart totals can sometimes differ from the table totals," and that this "is usually due to differences in aggregation (property vs. page)." Filters can also change the totals. Some queries are left out of the report "to protect user privacy," and Google notes that filtering by query or URL "can affect the report totals due to data truncation and the omission of anonymized queries." So a mismatch between the chart and the table has a documented explanation.

### Do AI Overviews and AI Mode count in the Search Console Performance report?

Google's Help page explains how both are counted. For AI Overviews, "an AI Overview occupies a single position in search results, and all links in the AI Overview are assigned that same position," and "clicking a link to an external page in the AI Overview counts as a click." For AI Mode, "clicking a link to an external page in AI Mode counts as a click," and position "follows the same methodology as a Google Search results page."

## Conclusion

The Search Console Performance report answers four questions about your website. Where did it show up? How often did appearing turn into a visit? How many visits came in? How often did it appear? We read the answers in that order: average position, CTR, clicks and then impressions. We read them together and over months, never one number on its own. Google is right that clicks and impressions are the measure of success. In our reading, position and CTR help explain why those results moved, and that explanation keeps you from reacting to the wrong number.

To find out which next step fits your business, [run the Growth Diagnostic](/diagnostic). To talk through your own Search Console numbers, [contact ASP](/contact).
