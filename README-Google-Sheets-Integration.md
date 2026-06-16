# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration for form submissions from your drone website.

## Prerequisites

1. A Google account
2. Google Sheets access
3. Basic knowledge of Google Apps Script

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it something descriptive like "Drone Website Enquiries"
4. Copy the Sheet ID from the URL (the long string between `/d/` and `/edit`)

## Step 2: Set Up Google Apps Script

1. Open your Google Sheet
2. Go to **Extensions** → **Apps Script**
3. Delete any default code in the script editor
4. Copy and paste the code from `google-apps-script.js` in this repository
5. Replace `'YOUR_GOOGLE_SHEET_ID_HERE'` with your actual Sheet ID
6. Save the script with a name like "FormSubmissionHandler"

## Step 3: Set Up Headers (Optional but Recommended)

1. In the Apps Script editor, run the `setupHeaders()` function once:
   - Click the play button (▶️) next to `setupHeaders`
   - Grant permissions when prompted
2. This will set up column headers in your sheet

## Step 4: Deploy the Web App

1. Click **Deploy** → **New deployment**
2. Select type: **Web app**
3. Configure:
   - **Description**: "Drone Website Form Handler"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Copy the Web App URL** - this is your API endpoint

## Step 5: Update Your React Forms

Replace `'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'` in all your page components with your new Web App URL.

### Files to Update:
- `src/pages/SeedBallsDispersalDrones.tsx`
- `src/pages/SurveillanceSecurityDrones.tsx`
- `src/pages/FirefightersFalconFly.tsx`
- `src/pages/FalconMistWashDrones.tsx`
- `src/pages/DroneWorkshopOfferings.tsx`
- `src/pages/CustomDroneServices.tsx`

## Step 6: Test the Integration

1. Submit a form from your website
2. Check your Google Sheet - new rows should appear with the submitted data

## Data Structure

Your Google Sheet will have these columns:
- **Timestamp**: When the form was submitted (IST)
- **Name**: User's full name
- **Mobile**: Mobile number
- **Email**: Email address
- **Enquiry Type**: "Product" or "Service"
- **Product Type**: Selected product (if applicable)
- **Service Type**: Selected service (if applicable)
- **Page**: Which page the form was submitted from

## Troubleshooting

### Common Issues:

1. **403 Forbidden Error**
   - Make sure "Who has access" is set to "Anyone" in deployment settings

2. **Script Execution Failed**
   - Check the Apps Script logs: **Executions** tab in Apps Script editor
   - Verify the Sheet ID is correct

3. **Data Not Appearing**
   - Ensure the sheet has proper permissions
   - Check that the script is deployed and the URL is correct

4. **CORS Issues**
   - Google Apps Script handles CORS automatically for web apps

## Security Notes

- This setup allows anyone to submit data to your sheet
- Consider adding validation or CAPTCHA if needed
- Regularly monitor your sheet for spam submissions

## Advanced Features

You can extend the script to:
- Send email notifications when forms are submitted
- Validate data before saving
- Create multiple sheets for different form types
- Add data processing and analytics

## Support

If you encounter issues:
1. Check the Apps Script execution logs
2. Verify all URLs and IDs are correct
3. Test with a simple form submission
4. Ensure your Google Sheet has the correct sharing permissions
