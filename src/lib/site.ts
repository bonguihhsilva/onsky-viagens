export const site = {
  name: "Onsky Viagens",
  url: "https://onskyviagens.com",
  // Número do site atual. Confirmar com a agência se o WhatsApp usa o 9 extra.
  whatsapp: "554591024587",
  phoneDisplay: "(45) 9102-4587",
  street: "Av. Garibaldi, 1569",
  district: "Vila A",
  address: "Av. Garibaldi, 1569, Vila A",
  city: "Foz do Iguaçu, Paraná",
  hours: "Segunda a sexta, 9h às 18h · Sábado, 9h às 12h",
  since: 2018,
  travelers: "2.000",
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

const brlCents = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

export const formatPrice = (value: number) => brl.format(value);
export const formatInstallment = (value: number) => brlCents.format(value);

const longDate = new Intl.DateTimeFormat("pt-BR", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

const shortDate = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  timeZone: "UTC",
});

const toDate = (iso: string) => new Date(`${iso}T00:00:00Z`);

export const formatDate = (iso: string) => longDate.format(toDate(iso)).replace(/\./g, "");
export const formatDateShort = (iso: string) => shortDate.format(toDate(iso));
