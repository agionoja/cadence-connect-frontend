export function calWidth(width) {
  if (!width) return;
  let widthCopy = width;

  if (typeof widthCopy === "number") {
    return widthCopy + "px";
  }

  widthCopy = widthCopy.toLowerCase();

  if (
    !widthCopy.includes("px") &&
    !widthCopy.includes("rem") &&
    !widthCopy.includes("%")
  ) {
    widthCopy += "px";
  }

  return widthCopy;
}
