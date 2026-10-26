import { describe, expect, it } from "vitest";
import { getMessages } from "@/i18n/messages/get-messages";
import { buildContactMessage } from "./contact-message";

const labels = getMessages("es").contact.message;

const formData = (fields: Record<string, string>): FormData => {
  const data = new FormData();
  Object.entries(fields).forEach(([name, value]) => data.append(name, value));
  return data;
};

describe("buildContactMessage", () => {
  it.each([
    [
      "allFields",
      { name: "Ana", company: "Acme", email: "ana@acme.com", project: "Una app" },
      "Hola CodeLabs, soy Ana.\nEmpresa: Acme\nCorreo: ana@acme.com\nNecesito: Una app",
    ],
    ["emptyFields", { name: " ", company: "", email: "", project: "" }, "Hola CodeLabs, soy un visitante."],
  ])("buildContactMessage_%s_buildsExpectedText", (_case, fields, expected) => {
    expect(buildContactMessage(labels, formData(fields))).toBe(expected);
  });
});
