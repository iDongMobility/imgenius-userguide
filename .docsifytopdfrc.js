module.exports = {
    contents: [ "_sidebar.md" ],            // array of "table of contents" files path
    pathToPublic: "imgenius userguide.pdf", // path where pdf will stored
    pdfOptions: {
        displayHeaderFooter: true,
        format: 'A4',
        printBackground: true,
        headerTemplate: '<div class="header" style="font-size: 15px;color: #000; margin: 10px auto;clear:both; position: relative;"><span>imgenius 用户手册</span></div>',
        footerTemplate: '<div class="footer" style="font-size: 10px;color: #000; margin: 10px auto;clear:both; position: relative;"><span class="pageNumber"></span></div>',
        margin: {
            top: "60px",
            bottom: "60px",
            right: "30px",
            left: "30px",
        }
    },                      // reference: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagepdfoptions
    removeTemp: true,      // remove generated .md and .html or not
    emulateMedia: "print",  // mediaType, emulating by puppeteer for rendering pdf, 'print' by default (reference: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pageemulatemediamediatype)
  }