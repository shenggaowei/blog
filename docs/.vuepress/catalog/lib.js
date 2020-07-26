
function parsedArticleName(prefix, data) {
    return data.map(ele => prefix + ele);
}

exports.parsedArticleName = parsedArticleName;