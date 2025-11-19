module.exports.censorship = function censorship(forbidden) {
  return function (text) {
    let consorText = text;

    for (const word of forbidden) {
      const replacement = '*'.repeat(word.length);

      const escapeWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

      const reg = new RegExp(escapeWord, 'gi');

      consorText = consorText.replace(reg, replacement);
    }

    return consorText;
  };
};
