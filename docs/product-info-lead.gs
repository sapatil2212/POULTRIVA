/**
 * POULTRIVA lead collector — Google Apps Script Web App
 *
 * Creates and maintains two tabs in the configured spreadsheet:
 *   1. "Product Leads" — product-details unlock (popup) submissions
 *   2. "Contact Leads" — contact and business enquiry submissions
 *
 * The website's secure SMTP service sends the admin and visitor emails.
 * This script is responsible only for reliable Google Sheet storage.
 *
 * DEPLOYMENT
 * 1. Paste this complete script into the Apps Script editor and Save.
 * 2. Run `testWrite` once and approve the Spreadsheet permissions.
 * 3. Confirm the two tabs "Product Leads" and "Contact Leads" appear.
 * 4. Deploy -> Manage deployments -> Edit (pencil) -> Version: New version -> Deploy.
 * 5. Execute as: Me.  Who has access: Anyone.
 * The /exec URL stays the same after redeploying a new version.
 */

var SHEET_ID = "1KBxeP2WUjFLVfVDKIO-VfqMC1BPsKxgcH1lGRqS9JiI";
var PRODUCT_SHEET = "Product Leads";
var CONTACT_SHEET = "Contact Leads";

var PRODUCT_HEADERS = [
  "Timestamp",
  "Product",
  "Name",
  "Email",
  "Phone/WhatsApp",
  "City",
  "State",
  "Page URL",
];

var CONTACT_HEADERS = [
  "Timestamp",
  "Products of Interest",
  "Name",
  "Email",
  "Phone/WhatsApp",
  "City",
  "State / Region",
  "Message",
  "Page URL",
];

function getSheet_(name, headers) {
  var spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  var sheet = spreadsheet.getSheetByName(name) || spreadsheet.insertSheet(name);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function saveLead_(data) {
  var lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    var timestamp = data.submittedAt ? new Date(data.submittedAt) : new Date();
    var kind = data.kind || "product-lead";

    if (kind === "product-lead") {
      var productSheet = getSheet_(PRODUCT_SHEET, PRODUCT_HEADERS);
      productSheet.appendRow([
        timestamp,
        data.product || "",
        data.name || "",
        data.email || "",
        data.phone || "",
        data.city || "",
        data.state || "",
        data.page || "",
      ]);
      SpreadsheetApp.flush();
      return { sheet: PRODUCT_SHEET, row: productSheet.getLastRow() };
    }

    // Contact form (and any non-product enquiry) -> Contact Leads tab.
    var contactSheet = getSheet_(CONTACT_SHEET, CONTACT_HEADERS);
    contactSheet.appendRow([
      timestamp,
      data.product || "",
      data.name || "",
      data.email || "",
      data.phone || "",
      data.city || "",
      data.state || "",
      data.message || "",
      data.page || "",
    ]);
    SpreadsheetApp.flush();
    return { sheet: CONTACT_SHEET, row: contactSheet.getLastRow() };
  } finally {
    lock.releaseLock();
  }
}

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("Missing request body.");
    }
    var data = JSON.parse(e.postData.contents);
    var saved = saveLead_(data);
    return ContentService.createTextOutput(
      JSON.stringify({ ok: true, sheet: saved.sheet, row: saved.row }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(error) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    "POULTRIVA lead endpoint is running.",
  ).setMimeType(ContentService.MimeType.TEXT);
}

/** Run manually from the Apps Script editor to verify both tabs populate. */
function testWrite() {
  saveLead_({
    kind: "product-lead",
    product: "TEST - Aminova Gold",
    name: "Product Lead Test",
    email: "test@example.com",
    phone: "+91 90000 00000",
    city: "Nashik",
    state: "Maharashtra",
    page: "manual-product-test",
    submittedAt: new Date().toISOString(),
  });

  saveLead_({
    kind: "contact",
    product: "Aminova Gold, Calconova",
    name: "Contact Lead Test",
    email: "test@example.com",
    phone: "+91 90000 00000",
    city: "Nashik",
    state: "Maharashtra",
    message: "Manual contact lead test.",
    page: "manual-contact-test",
    submittedAt: new Date().toISOString(),
  });
}
