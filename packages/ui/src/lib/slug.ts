export function convertToSlug(text: string) {
  return text
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, ""); // Remove special characters except hyphens and alphanumeric characters
}
