// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
chrome.runtime.onMessage.addListener(function(rq, sender, sendResponse) {
  // setTimeout to simulate any callback (even from storage.sync)
  setTimeout(function() {
      sendResponse({status: true});
  }, 1);
  // return true;  // uncomment this line to fix error
});
