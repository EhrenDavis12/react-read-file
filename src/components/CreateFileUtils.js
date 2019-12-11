export function CreateSubFilesUsingFileCount({
  fileContent,
  fieldCount,
  fileType
}) {
  let header = "";
  let fileWithFieldCount = "";
  let fileWithOutFieldCount = "";
  let delimiter = {};

  let lines = fileContent.split("\n");
  lines.forEach(line => {
    if (header === "") {
      header = line;
      delimiter = FindDelimiter(fileType, header);
    } else {
      const fields = line.split(delimiter.value);
      if (fields.length === parseInt(fieldCount))
        fileWithFieldCount += `\n${line}`;
      else fileWithOutFieldCount += `\n${line}`;
    }
  });

  return {
    fileWithFieldCount: header + fileWithFieldCount,
    fileWithOutFieldCount: header + fileWithOutFieldCount,
    delimiter
  };
}

const FindDelimiter = (delimiter, Header) => {
  const csv = { name: "CSV", value: "," };
  const tsv = { name: "TSV", value: "\t" };
  switch (delimiter) {
    case "CSV":
      return csv;
    case "TSV":
      return tsv;
    case "Auto":
      return Header.includes("\t") ? tsv : csv;
    default:
      return csv;
  }
};
