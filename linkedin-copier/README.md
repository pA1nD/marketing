# Linkedin Copier

Copy profiles from LinkedIn and paste into Google Sheets.

**Background:**

It is quite a pin to scrape LinkedIn fully automated. I actually don't think, it
is possible. This tool is a semi-automation and could be used together with
something like "Automator (Mac)".

**When do I need it?**

It is possible, to export directly data from your contacts (First Name, Last
Name, email, company and position) via LinkedIn.
[More Information](https://www.linkedin.com/help/linkedin/answer/66844/exporting-connections-from-linkedin?lang=en)

This script gives you more information and will also work for people who are not
your direct connections (but there will be no email in this case).

Usage:

1. Add this folder as Chrome Plugin.
2. Click the plugin icon once to make sure you have all rights.
3. Visit a LinkedIn profile. It will be automatically in your clipboard.
4. If you paste them into Google sheets, they will have this order: `name,
   title, company, education, location, picture, linkedinURL, website,
   websiteName, phone, phoneName, email, twitter, connected, paragraph`

![Demo](linkedin-copier.gif)
