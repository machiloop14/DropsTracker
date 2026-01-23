export const statusColorFunction = (
  status: string,
  colorScheme: string | undefined
) => {
  let bgColor;
  let textColor;

  if (status == "overdue") {
    bgColor = colorScheme == "dark" ? "#311e2a" : "#fde3e3";
    textColor = colorScheme == "dark" ? "#ff557a" : "#ff4d6d";
  } else if (status == "due") {
    bgColor = colorScheme == "dark" ? "#322c22" : "#fef1db";
    textColor = colorScheme == "dark" ? "#f3c762" : "#ffb020";
  } else if (status == "upcoming") {
    bgColor = colorScheme == "dark" ? "#111827" : "#f1f4fb";
    textColor = colorScheme == "dark" ? "#9aa7c7" : "#8b93b8";
  }

  return { bgColor, textColor };
};
