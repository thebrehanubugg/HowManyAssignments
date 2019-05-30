let ical = require("ical");
let total = 0;

let accounts = {
    "Brehanu": "https://api.veracross.com/stab/subscribe/A5F116AB-A300-49E2-8B58-0BFEFCD37FEF.ics?uid=8134654E-5E79-4569-9C20-094F3324BE2E",
    "Charlotte": "https://api.veracross.com/stab/subscribe/59C25830-38ED-4EF2-931C-434882A553C0.ics?uid=96400A19-46CC-4429-A205-289ABBA71BC1",
    "Meredith": "https://api.veracross.com/stab/subscribe/16D3B768-F527-4B67-9D5F-F88647E1938A.ics?uid=50C5C387-A9B6-481E-B37F-E72BBA22ACEB"
};

let current = "Brehanu"

ical.fromURL(accounts[current], {}, (err, data) => {
    if(err) throw err;
    for(let k in data) {
        if(data.hasOwnProperty(k)) {
            let ev = data[k];
            total += 1;
        }
    }

    console.log(`${current}, you have had a total of ${total} assignments this year`);
});
