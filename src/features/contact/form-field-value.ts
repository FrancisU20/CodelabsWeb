export const fieldValue = (data: FormData, name: string): string => String(data.get(name) ?? "").trim();
