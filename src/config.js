/**
 * Pricing tiers — tiered pricing based on fleet size.
 * The unit price applies to ALL trucks once the tier threshold is reached.
 */
export const PRICING_TIERS = [
  { min: 1,   max: 4,   price: 11.9  },
  { min: 5,   max: 14,  price: 10.9  },
  { min: 15,  max: 49,  price: 9.9   },
  { min: 50,  max: 99,  price: 8.9   },
  { min: 100, max: 200, price: 7.9   },
]

export const WHATSAPP_NUMBER = '33600000000'

/**
 * Returns the unit price per truck for a given fleet size.
 */
export function getUnitPrice(truckCount) {
  const tier = PRICING_TIERS.find((t) => truckCount >= t.min && truckCount <= t.max)
  return tier ? tier.price : PRICING_TIERS[PRICING_TIERS.length - 1].price
}

/**
 * Formats a number as EUR currency in the given locale.
 */
export function formatCurrency(amount, locale = 'fr-FR') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
  }).format(amount)
}
