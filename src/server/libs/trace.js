
Error.stackTraceLimit = 1000;
require('src/server/libs/trace');
require('clarify');

const chain = require('stack-chain');

chain.filter.attach((error, frames) => {
  return frames.filter((callSite) => {
    const name = callSite && callSite.getFileName();
    return (name && name.indexOf("/co/") === -1);
  });
});
