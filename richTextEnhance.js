var scriptString = 
    'var loadAttempts = 0;' + 
    'var originalToolbarType = "";' + 
    'function updateEditor() {' + 
        'if (typeof CKEDITOR != "undefined" && typeof CKEDITOR.instances !== "undefined") {' + 
            'for (var property in CKEDITOR.instances) {' + 
                'if (CKEDITOR.instances[property].name !== "undefined" && CKEDITOR.instances[property].name !== "publisherRichTextEditor") {' + 
                    'var elementId = CKEDITOR.instances[property].name;' + 
                    'var imageUploadUrl = "";' + 
                    'var toolbarButtons = [];' + 
                    'if (CKEDITOR.instances[elementId].config !== "undefined") {' + 
                        'if (CKEDITOR.instances[elementId].config.filebrowserImageUploadUrl !== "undefined") {' + 
                            'imageUploadUrl = CKEDITOR.instances[elementId].config.filebrowserImageUploadUrl;' + 
                        '}' + 
                        'if (CKEDITOR.instances[elementId].config.toolbar !== "undefined" && originalToolbarType === "") {' + 
                            'originalToolbarType = CKEDITOR.instances[elementId].config.toolbar;' + 
                        '}' + 
                        'if (originalToolbarType !== "") {' + 
                            'switch(originalToolbarType) {' + 
                                'case "SalesforceBasic":' + 
                                    'toolbarButtons = [' + 
                                        '["Source"],' + 
                                        '["Cut","Copy","Paste","PasteText","PasteFromWord","-","Undo","Redo"],' + 
                                        '["Find","Replace","SelectAll"],' + 
                                        '["Bold","Italic","Underline","Strike","Subscript","Superscript","-","RemoveFormat"],' + 
                                        '["Link","Unlink","Anchor"],' + 
                                        '["sfdcImage","sfdcMediaEmbed"],' + 
                                        '["Table","sfdcCodeBlock","HorizontalRule","Smiley","SpecialChar","PageBreak","Iframe"],' + 
                                        '["BulletedList","NumberedList"],' + 
                                        '["JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock","-","BidiLtr","BidiRtl"],' + 
                                        '["Indent", "Outdent"],' + 
                                        '["Blockquote","CreateDiv"],' + 
                                        '["Font", "FontSize", "Styles","Format"],' + 
                                        '["TextColor","BGColor"],' + 
                                        '["Maximize","ShowBlocks"]' + 
                                    '];' + 
                                    'break;' + 
                                'case "SalesforceLight":' + 
                                    'toolbarButtons = [' + 
                                        '["Bold", "Italic","Underline"],' + 
                                        '["Link"],' + 
                                        '["JustifyLeft", "JustifyCenter", "JustifyRight"],' + 
                                        '["BulletedList","NumberedList"],' + 
                                        '["FontSize"]' + 
                                    '];' + 
                                    'break;' + 
                                'case "EmailMultiFormat":' + 
                                    'toolbarButtons = [' + 
                                        '["SfdcSwitchToText"],' + 
                                        '["Cut","Copy","Paste","PasteText","PasteFromWord","-","Undo","Redo"],' + 
                                        '["RemoveFormat", "TextColor", "BGColor"],' + 
                                        '["Bold", "Italic", "Underline", "Strike","Subscript","Superscript"],' + 
                                        '["sfdcImage"],' + 
                                        '["Link", "Unlink", "Anchor"],' + 
                                        '["JustifyLeft", "JustifyCenter", "JustifyRight"],' + 
                                        '["BulletedList", "NumberedList", "Indent", "Outdent"],' + 
                                        '["Font", "FontSize", "Styles","Format"]' + 
                                    '];' + 
                                    'break;' + 
                                'case "Email":' + 
                                    'toolbarButtons = [' + 
                                        '["RemoveFormat", "TextColor", "BGColor"],' + 
                                        '["Bold", "Italic", "Underline", "Strike","Subscript","Superscript"],' + 
                                        '["sfdcImage"],' + 
                                        '["Link", "Unlink", "Anchor"],' + 
                                        '["JustifyLeft", "JustifyCenter", "JustifyRight"],' + 
                                        '["BulletedList", "NumberedList", "Indent", "Outdent"],' + 
                                        '["Font", "FontSize","Styles","Format"]' + 
                                    '];' + 
                                    'break;' + 
                                'case "Knowledge":' + 
                                    'toolbarButtons = [' + 
                                        '["Source"],' + 
                                        '["Cut","Copy","Paste","PasteText","PasteFromWord","-","Undo","Redo"],' + 
                                        '["Find","Replace","SelectAll"],' + 
                                        '["Bold","Italic","Underline","Strike","Subscript","Superscript","-","RemoveFormat"],' + 
                                        '["Table","sfdcCodeBlock","HorizontalRule","Smiley","SpecialChar","PageBreak","Iframe"],' + 
                                        '["sfdcSmartLink", "Link", "Unlink", "Anchor"],' + 
                                        '["sfdcImage","sfdcMediaEmbed"],' + 
                                        '["JustifyLeft", "JustifyCenter","JustifyRight","JustifyBlock"],' + 
                                        '["BulletedList", "NumberedList", "Indent", "Outdent"],' + 
                                        '["Blockquote","CreateDiv"],' + 
                                        '["Font", "FontSize", "Styles","Format"],' + 
                                        '["TextColor","BGColor"],' + 
                                        '["Maximize","ShowBlocks"]' + 
                                    '];' + 
                                    'break;' + 
                                'case "KnowledgeLightning":' + 
                                    'toolbarButtons = [' + 
                                        '["Source"],' + 
                                        '["Cut","Copy","Paste","PasteText","PasteFromWord","-","Undo","Redo"],' + 
                                        '["Find","Replace","SelectAll"],' + 
                                        '["Bold","Italic","Underline","Strike","Subscript","Superscript","-","RemoveFormat"],' + 
                                        '["Table","sfdcCodeBlock","HorizontalRule","Smiley","SpecialChar","PageBreak","Iframe"],' + 
                                        '["sfdcSmartLink", "Link", "Unlink", "Anchor"],' + 
                                        '["sfdcImage","sfdcMediaEmbed"],' + 
                                        '["JustifyLeft", "JustifyCenter","JustifyRight","JustifyBlock"],' + 
                                        '["BulletedList", "NumberedList", "Indent", "Outdent"],' + 
                                        '["Blockquote","CreateDiv"],' + 
                                        '["Font", "FontSize", "Styles","Format"],' + 
                                        '["TextColor","BGColor"],' + 
                                        '["Maximize","ShowBlocks"]' + 
                                    '];' + 
                                    'break;' + 
                                'case "KnowledgeWithIframes":' + 
                                    'toolbarButtons = [' + 
                                        '["Source"],' + 
                                        '["Cut","Copy","Paste","PasteText","PasteFromWord","-","Undo","Redo"],' + 
                                        '["Find","Replace","SelectAll"],' + 
                                        '["Bold","Italic","Underline","Strike","Subscript","Superscript","-","RemoveFormat"],' + 
                                        '["Table","sfdcCodeBlock","HorizontalRule","Smiley","SpecialChar","PageBreak","Iframe"],' + 
                                        '["sfdcSmartLink", "Link", "Unlink", "Anchor"],' + 
                                        '["sfdcImage","sfdcMediaEmbed"],' + 
                                        '["JustifyLeft", "JustifyCenter","JustifyRight","JustifyBlock"],' + 
                                        '["BulletedList", "NumberedList", "Indent", "Outdent"],' + 
                                        '["Blockquote","CreateDiv"],' + 
                                        '["Font", "FontSize", "Styles","Format"],' + 
                                        '["TextColor","BGColor"],' + 
                                        '["Maximize","ShowBlocks"]' + 
                                    '];' + 
                                    'break;' + 
                                'case "Visualforce":' + 
                                    'toolbarButtons = [' + 
                                        '["Source"],' + 
                                        '["Cut","Copy","Paste","PasteText","PasteFromWord","-","Undo","Redo"],' + 
                                        '["Find","Replace","SelectAll"],' + 
                                        '["Bold","Italic","Underline","Strike","Subscript","Superscript","-","RemoveFormat"],' + 
                                        '["Link","Unlink","Anchor"],' + 
                                        '["sfdcImage","sfdcMediaEmbed"],' + 
                                        '["Table","sfdcCodeBlock","HorizontalRule","Smiley","SpecialChar","PageBreak","Iframe"],' + 
                                        '["BulletedList","NumberedList"],' + 
                                        '["JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock","-","BidiLtr","BidiRtl"],' + 
                                        '["Indent", "Outdent"],' + 
                                        '["Blockquote","CreateDiv"],' + 
                                        '["Font", "FontSize", "Styles","Format"],' + 
                                        '["TextColor","BGColor"],' + 
                                        '["Maximize","ShowBlocks"]' + 
                                    '];' + 
                                    'break;' + 
                                'case "HomePageComponent":' + 
                                    'toolbarButtons = [' + 
                                        '["Source"],' + 
                                        '["Cut","Copy","Paste","PasteText","PasteFromWord","-","Undo","Redo"],' + 
                                        '["Find","Replace","SelectAll"],' + 
                                        '["Bold","Italic","Underline","Strike","Subscript","Superscript","-","RemoveFormat"],' + 
                                        '["Link","Unlink","Anchor"],' + 
                                        '["sfdcImage","sfdcMediaEmbed"],' + 
                                        '["Table","sfdcCodeBlock","HorizontalRule","Smiley","SpecialChar","PageBreak","Iframe"],' + 
                                        '["BulletedList","NumberedList"],' + 
                                        '["JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock","-","BidiLtr","BidiRtl"],' + 
                                        '["Indent", "Outdent"],' + 
                                        '["Blockquote","CreateDiv"],' + 
                                        '["Font", "FontSize", "Styles","Format"],' + 
                                        '["TextColor","BGColor"],' + 
                                        '["Maximize","ShowBlocks"]' + 
                                    '];' + 
                                    'break;' + 
                                'case "ServiceCommunity":' + 
                                    'toolbarButtons = [' + 
                                        '["Source"],' + 
                                        '["Cut","Copy","Paste","PasteText","PasteFromWord","-","Undo","Redo"],' + 
                                        '["Find","Replace","SelectAll"],' + 
                                        '["Bold","Italic","Underline","Strike","Subscript","Superscript","-","RemoveFormat"],' + 
                                        '["Link","Unlink","Anchor"],' + 
                                        '["sfdcImage","sfdcMediaEmbed"],' + 
                                        '["Table","sfdcCodeBlock","HorizontalRule","Smiley","SpecialChar","PageBreak","Iframe"],' + 
                                        '["BulletedList","NumberedList"],' + 
                                        '["JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock","-","BidiLtr","BidiRtl"],' + 
                                        '["Indent", "Outdent"],' + 
                                        '["Blockquote","CreateDiv"],' + 
                                        '["Font", "FontSize", "Styles","Format"],' + 
                                        '["TextColor","BGColor"],' + 
                                        '["Maximize","ShowBlocks"]' + 
                                    '];' + 
                                    'break;' + 
                                'case "SfxEmail":' + 
                                    'toolbarButtons = [' + 
                                        '["Source"],' + 
                                        '["Cut","Copy","Paste","PasteText","PasteFromWord","-","Undo","Redo"],' + 
                                        '["Font", "FontSize", "Styles","Format"],' + 
                                        '["TextColor","BGColor"],' + 
                                        '["Bold","Italic","Underline","Strike","Subscript","Superscript","-","RemoveFormat"],' + 
                                        '["Table","HorizontalRule","Smiley","SpecialChar","PageBreak"],' + 
                                        '["BulletedList","NumberedList"],' + 
                                        '["JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock","-","BidiLtr","BidiRtl"],' + 
                                        '["Indent", "Outdent"],' + 
                                        '["Blockquote","CreateDiv"],' + 
                                        '["Link","Unlink","Anchor"]' + 
                                    '];' + 
                                    'break;' + 
                                'case "SfxPardotEmail":' + 
                                    'toolbarButtons = [' + 
                                        '["Source"],' + 
                                        '["Cut","Copy","Paste","PasteText","PasteFromWord","-","Undo","Redo"],' + 
                                        '["Font", "FontSize", "Styles","Format"],' + 
                                        '["TextColor","BGColor"],' + 
                                        '["Bold","Italic","Underline","Strike","Subscript","Superscript","-","RemoveFormat"],' + 
                                        '["Table","HorizontalRule","Smiley","SpecialChar","PageBreak"],' + 
                                        '["BulletedList","NumberedList"],' + 
                                        '["JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock","-","BidiLtr","BidiRtl"],' + 
                                        '["Indent", "Outdent"],' + 
                                        '["Blockquote","CreateDiv"],' + 
                                        '["Link","Unlink","Anchor"]' + 
                                    '];' + 
                                    'break;' + 
                                'case "LightningAppBuilder":' + 
                                    'toolbarButtons = [' + 
                                        '["Source"],' + 
                                        '["Cut","Copy","Paste","PasteText","PasteFromWord","-","Undo","Redo"],' + 
                                        '["Find","Replace","SelectAll"],' + 
                                        '["Bold","Italic","Underline","Strike","Subscript","Superscript","-","RemoveFormat"],' + 
                                        '["Link","Unlink","Anchor"],' + 
                                        '["Table","sfdcCodeBlock","HorizontalRule","Smiley","SpecialChar","PageBreak"],' + 
                                        '["BulletedList","NumberedList"],' + 
                                        '["JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock","-","BidiLtr","BidiRtl"],' + 
                                        '["Indent", "Outdent"],' + 
                                        '["Blockquote","CreateDiv"],' + 
                                        '["Font", "FontSize", "Styles","Format"],' + 
                                        '["TextColor","BGColor"],' + 
                                        '["Maximize","ShowBlocks"]' + 
                                    '];' + 
                                    'break;' + 
                                'default:' + 
                                    'toolbarButtons = [' + 
                                        '["Source"],' + 
                                        '["Cut","Copy","Paste","PasteText","PasteFromWord","-","Undo","Redo"],' + 
                                        '["Find","Replace","SelectAll"],' + 
                                        '["Bold","Italic","Underline","Strike","Subscript","Superscript","-","RemoveFormat"],' + 
                                        '["Link","Unlink","Anchor"],' + 
                                        '["sfdcImage","sfdcMediaEmbed"],' + 
                                        '["Table","sfdcCodeBlock","HorizontalRule","Smiley","SpecialChar","PageBreak","Iframe"],' + 
                                        '["BulletedList","NumberedList"],' + 
                                        '["JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock","-","BidiLtr","BidiRtl"],' + 
                                        '["Indent", "Outdent"],' + 
                                        '["Blockquote","CreateDiv"],' + 
                                        '["Font", "FontSize", "Styles","Format"],' + 
                                        '["TextColor","BGColor"],' + 
                                        '["Maximize","ShowBlocks"]' + 
                                    '];' + 
                                    'break;' + 
                            '}' + 
                        '}' + 
                    '}' + 
                    'if (toolbarButtons.length == 0) {' + 
                        'toolbarButtons = [' + 
                            '["Source"],' + 
                            '["Cut","Copy","Paste","PasteText","PasteFromWord","-","Undo","Redo"],' + 
                            '["Find","Replace","SelectAll"],' + 
                            '["Bold","Italic","Underline","Strike","Subscript","Superscript","-","RemoveFormat"],' + 
                            '["Link","Unlink","Anchor"],' + 
                            '["sfdcImage","sfdcMediaEmbed"],' + 
                            '["Table","sfdcCodeBlock","HorizontalRule","Smiley","SpecialChar","PageBreak","Iframe"],' + 
                            '["BulletedList","NumberedList"],' + 
                            '["JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock","-","BidiLtr","BidiRtl"],' + 
                            '["Indent", "Outdent"],' + 
                            '["Blockquote","CreateDiv"],' + 
                            '["Font", "FontSize", "Styles","Format"],' + 
                            '["TextColor","BGColor"],' + 
                            '["Maximize","ShowBlocks"]' + 
                        '];' + 
                    '}' + 
                    'console.log("removing original rich text editor.");' + 
                    'CKEDITOR.instances[elementId].destroy(true);' + 
                    'var options = {' + 
                        'customConfig: "",' + 
                        'removePlugins: "elementspath,image",' + 
                        'extraPlugins: "sfdcImage,sfdcMediaEmbed,sfdcSmartLink,sfdcCodeBlock,sfdcTable,sfdcVfAjax4J",' + 
                        'toolbar: toolbarButtons,' + 
                        'enterMode: CKEDITOR.ENTER_BR,' + 
                        'shiftEnterMode: CKEDITOR.ENTER_P,' + 
                        'forceSimpleAmpersand: true,' + 
                        'pasteFromWordRemoveFontStyles: false,' + 
                        'pasteFromWordRemoveStyles: false,' + 
                        'imageUploadAllowedExtensions: ".(jpg|gif|jpeg|png|bmp|jfif|jpe|pjpeg)$",' + 
                        'imageUploadDeniedExtensions: "",' + 
                        'sfdcLabels: {' + 
                            'CkeMediaEmbed: {' + 
                                'iframeMissing: "Invalid &lt;iframe&gt; element. Please use valid code from the approved sites.",' + 
                                'description: "Use &lt;iframe&gt; code from an approved video source.",' + 
                                'title: "Embed Multimedia Content",' + 
                                'exampleTitle: "Example:",' + 
                                'subtitle: "Paste &amp;lt;iframe&amp;gt; code here:",' + 
                                'example: "\\n            \\n                &lt;iframe width=\\&quot;560\\&quot; height=\\&quot;315\\&quot; src=\\&quot;https://www.youtube.com/embed/KcOm0TNvKBA\\&quot; frameborder=\\&quot;0\\&quot; allowfullscreen&gt;&lt;/iframe&gt;\\n            \\n        "' + 
                            '}, ' + 
                            'CkeImagePaste: {' + 
                                'CkeImagePasteWarning: "Pasting an image is not working properly with Firefox, please use [Copy Image location] instead."' + 
                            '}, ' + 
                            'CkeImageDialog: {' + 
                                'infoTab_desc_info: "Enter a description of the image for visually impaired users",' + 
                                'uploadTab_desc: "Description",' + 
                                'defaultImageDescription: "User-added image",' + 
                                'uploadTab_file_info: "Maximum size 1 MB. Only png, gif or jpeg",' + 
                                'uploadTab_desc_info: "Enter a description of the image for visually impaired users",' + 
                                'imageUploadLimit_info: "Max number of upload images exceeded",' + 
                                'btn_insert_tooltip: "Insert Image",' + 
                                'httpUrlWarning: "Are you sure you want to use an HTTP URL? Using HTTP image URLs may result in security warnings about insecure content. To avoid these warnings, use HTTPS image URLs instead.",' + 
                                'title: "Insert Image",' + 
                                'error: "Error:",' + 
                                'uploadTab: "Upload Image",' + 
                                'wrongFileTypeError: "You can insert only .gif .jpeg and .png files.",' + 
                                'infoTab_url: "URL",' + 
                                'infoTab: "Web Address",' + 
                                'infoTab_url_info: "Example: http://www.mysite.com/myimage.jpg",' + 
                                'missingUrlError: "You must enter a URL",' + 
                                'uploadTab_file: "Select Image",' + 
                                'btn_update_tooltip: "Update Image",' + 
                                'infoTab_desc: "Description",' + 
                                'btn_insert: "Insert",' + 
                                'btn_update: "Update",' + 
                                'btn_upadte: "Update",' + 
                                'invalidUrlError: "You can only use http:, https:, data:, //, /, or relative URL schemes."' + 
                            '}, ' + 
                            'sfdcSwitchToText: {' + 
                                'sfdcSwitchToTextAlt: "Use plain text"' + 
                            '}, ' + 
                            'KnowledgeCKEditor: {' + 
                                'SmartLinkFilterLanguage: "Language",' + 
                                'SmartLinkNoResults: "No results found with current search criteria.",' + 
                                'SmartLinkNoArticleSelected: "No article selected!",' + 
                                'SmartLinkSelectedArticle: "Selected Article",' + 
                                'SmartLinkDialogTitle: "Link Article",' + 
                                'SmartLinkKeywordTooShort: "Your search term must have 2 or more characters.",' + 
                                'SmartLinkFilterPublishStatus: "Publish Status",' + 
                                'SmartLinkGoToArticle: "Go to Article",' + 
                                'htmlLinkReferenceHelpText: "To create a \\u003Ca href=\\"javascript:openPopupFocusEscapePounds%28%27https%3A%2F%2Flogin.salesforce.com%2Fservices%2Fauth%2Fsso%2F00D30000000XsfGEAS%2FHTAuthProvider%3FstartURL%3D%25252Fapex%25252Fhtdoor%25253Floc%25253Dhelp%252526target%25253Dknowledge_custom_field_types.htm%25252523article_reference%252526section%25253DSalesforce_Knowledge%252526language%25253Den_US%252526release%25253D210.13.2%252526instance%25253DNA59%26site%3Dhttps%253A%252F%252Fhelp.salesforce.com%27%2C%20%27Help%27%2C%201024%2C%20768%2C%20%27width%3D1024%2Cheight%3D768%2Cresizable%3Dyes%2Ctoolbar%3Dyes%2Cstatus%3Dyes%2Cscrollbars%3Dyes%2Cmenubar%3Dyes%2Cdirectories%3Dno%2Clocation%3Dyes%2Cdependant%3Dno%27%2C%20false%2C%20false%29%3B\\"\\u003Esmart link\\u003C/a\\u003E to another article:\\u003Cbr/\\u003E1. Select Protocol &lt;other&gt;.\\u003Cbr/\\u003E2. Enter the article URL as: /articles/[language]/[articleType]/[URLName]. For example: /articles/en_US/FAQ/About-Passwords.\\u003Cbr/\\u003ENote: Add language only if your Salesforce Knowledge base is multi-lingual.",' + 
                                'SmartLinkSearchResultsDefault: "Search for an article above.",' + 
                                'SmartLinkContextMenuEdit: "Edit Smart Link",' + 
                                'SmartLinkButtonTooltip: "Insert a Smart Link",' + 
                                'SmartLinkSearchArticle: "Search Article"' + 
                            '}' + 
                        '},' + 
                        'contentsCss: [' + 
                            '"/ckeditor/ckeditor-4.x/rel/contents.css",' + 
                            '"/sCSS/41.0/sprites/1510252058000/Theme3/default/gc/CKEditor.css",' + 
                            '"/sCSS/41.0/sprites/1510252058000/Theme3/default/gc/HtmlDetailElem.css",' + 
                            '"/sCSS/41.0/sprites/1510252058000/Theme3/default/gc/knowledge_ckeditor.css"' + 
                        '],' + 
                        'disableNativeSpellChecker: false,' + 
                        'language: "en-us",' + 
                        'allowIframe: true,' + 
                        'allowedContent: true,' + 
                        'sharedSpaces: {' + 
                            'top: "cke_topSpace",' + 
                            'bottom: " cke_bottomSpace"' + 
                        '},' + 
                        'filebrowserImageUploadUrl: imageUploadUrl,' + 
                        'on: {' + 
                            'instanceReady: function() {' + 
                                'console.log("rich text enhancer loaded.");' + 
                            '}' + 
                        '}' + 
                    '};' + 
                    'console.log("replacing the previous rich text editor.");' + 
                    'loadAttempts++;' + 
                    'console.log("loadAttempts: " + loadAttempts);' + 
                    'try {' + 
                        'var instance = CKEDITOR.replace(elementId, options);' + 
                    '}' + 
                    'catch (err) {' + 
                        'console.log("error loading rich text enhancer: " + err);' + 
                    '}' + 
                    'finally {' + 
                        'if (loadAttempts >= 5) {' + 
                            'console.log("quitting rich text enhancer load after five attempts.");' + 
                        '}' + 
                        'else {' + 
                            'setTimeout(function() {' + 
                                'checkReady(instance)' + 
                            '}, 1000);' + 
                        '}' + 
                    '}' + 
                '}' + 
                'else {' + 
                    'console.log("no rich text instances found.");' + 
                '}' + 
            '}' + 
        '}' + 
        'else {' + 
            'console.log("no rich text script found.");' + 
        '}' + 
    '}' + 
    'function checkReady(instance) {' + 
        'if (instance.status == "unloaded" || instance.status !== "ready") {' + 
            'updateEditor();' + 
        '}' + 
    '}' + 
    'updateEditor();';

$(document).ready(function() {
    console.log("looking for rich text fields on page load.");

    var script = document.createElement("script");
    script.textContent = scriptString;

    (document.head || document.documentElement).appendChild(script);
    script.remove();
});

$(".inlineEditWrite").dblclick(function() {
    console.log("looking for rich text field on inline edit.");

    var script = document.createElement("script");
    script.textContent = scriptString;

    (document.head || document.documentElement).appendChild(script);
    script.remove();
});