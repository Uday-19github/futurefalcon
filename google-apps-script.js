function doPost(e) {
  const config = {
    sheetId: "12Pu2rw5fSsyQyWvsJJqWuLRWQxIXZln886qsL6mjk2Y",
    sheetName: "Drone Website Enquiries",
    timeZone: "Asia/Kolkata"
  };

  try {
    const sheet =
      SpreadsheetApp.openById(config.sheetId).getSheetByName(config.sheetName) ||
      SpreadsheetApp.openById(config.sheetId).insertSheet(config.sheetName);

    const data = JSON.parse(e.postData.contents);

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: config.timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    sheet.appendRow([
      timestamp,
      data.name || "",
      data.mobile || "",
      data.email || "",
      data.enquiry || "",
      data.productType || "",
      data.serviceType || "",
      data.page || ""
    ]);

    // Return JSON response with CORS headers
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "success",
        message: "Data saved successfully",
        timestamp,
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400'
      });

  } catch (err) {
    Logger.log('Error: ' + err.toString());
    return ContentService
      .createTextOutput(JSON.stringify({
        status: "error",
        message: err.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400'
      });
  }
}

// Handle OPTIONS requests for CORS preflight
function doOptions(e) {
  return ContentService
    .createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    });
}

// Optional: Function to set up headers (run this once manually)
function setupHeaders() {
  const config = {
    sheetId: "12Pu2rw5fSsyQyWvsJJqWuLRWQxIXZln886qsL6mjk2Y",
    sheetName: "Drone Website Enquiries"
  };
  const sheet = SpreadsheetApp.openById(config.sheetId).getSheetByName(config.sheetName);

  // Clear existing content
  sheet.clear();

  // Set headers
  const headers = [
    'Timestamp',
    'Name',
    'Mobile',
    'Email',
    'Enquiry Type',
    'Product Type',
    'Service Type',
    'Page'
  ];

  sheet.appendRow(headers);

  // Format header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight('bold');
  headerRange.setBackground('#f9cb9c'); // Light orange background
  headerRange.setFontColor('#000000');
}
