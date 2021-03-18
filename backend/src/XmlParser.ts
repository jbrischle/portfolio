import fs from 'fs';
import parser from 'fast-xml-parser'

export class XmlParser {
    he = require('he');

    options = {
        attributeNamePrefix: "@_",
        // attrNodeName: "false", // default is 'false', e.g. "attr"
        textNodeName: "#text",
        ignoreAttributes: false,
        ignoreNameSpace: false,
        allowBooleanAttributes: false,
        parseNodeValue: true,
        parseAttributeValue: false,
        trimValues: true,
        cdataTagName: "__cdata", // default is 'false'
        cdataPositionChar: "\\c",
        parseTrueNumberOnly: false,
        arrayMode: false, // "strict"
        attrValueProcessor: (val: any, attrName: any) => this.he.decode(val, {isAttributeValue: true}),// default is a=>a
        tagValueProcessor: (val: any, tagName: any) => this.he.decode(val), // default is a=>a
        stopNodes: ["parse-me-as-string"]
    };

    public getJSon(): any {
        const file = fs.readFileSync('src/pp-peer2peer.xml', 'utf-8');
        return parser.parse(file, this.options).client;
    }
}

