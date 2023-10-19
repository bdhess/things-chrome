chrome.action.onClicked.addListener(function (activeTab) {
    const title = activeTab.title;
    const url = activeTab.url;

    var newURL = `things:///add?title=${title}&show-quick-entry=true&notes=${url}`;
    chrome.tabs.create({ url: newURL });
});

chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        title: "Add to Things",
        contexts: ["link", "selection"],
        id: "contextMenu",
    });
});

chrome.contextMenus.onClicked.addListener(addLinkToThings);

function addLinkToThings(info) {
    var url = info.linkUrl ? info.linkUrl : info.pageUrl;
    var newURL = `things:///add?title=${info.selectionText}&show-quick-entry=true&notes=${url}`;
    chrome.tabs.create({ url: newURL });
}
