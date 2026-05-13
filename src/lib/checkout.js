export const CHECKOUT_URL =
  import.meta.env.VITE_CHECKOUT_URL || 'https://www.toliv.com/checkout'

const BRANCH_OFFICE = {
  id: 7691,
  company_id: 5041,
  name: 'LIBRERÍA LEWIS SOMES',
  description: 'Librería lanzamiento',
  is_digital_store: true,
  is_online: true,
  is_disabled: false,
  has_delivery: true,
  has_pickup: true,
  has_local_consumption: false,
  has_own_delivery: false,
  has_commissioners: false,
  city: {
    id: 6,
    name: 'Santiago',
    slug: 'santiago-centro',
    state: { id: 2, name: 'Región Metropolitana' },
    country: {
      id: 'CL',
      name: 'Chile',
      slug: 'chile',
      taxes: 1.19,
      service_price: 0,
      service_price_minimum: 0,
    },
  },
  country: {
    id: 'CL',
    name: 'Chile',
    slug: 'chile',
    taxes: 1.19,
    service_price: 0,
    service_price_minimum: 0,
  },
  context: { id: 95, name: 'Tienda digital', template: 'supermarket' },
  categories: [{ id: 763, name: 'Tienda digital' }],
  street: 'El Rosal',
  street_number: '5187',
  complement: '',
  latitude: -33.3703345,
  longitude: -70.6487783,
  logo: 'https://tolivmarket-production.s3.sa-east-1.amazonaws.com/companies/logos/41ec8045641d585be2db5620d8d659874f7b67abdbdcc96addae0c085adcf0f4.jpg',
}

const PRODUCT_ORDER = {
  id: 146318,
  branch_offices_products_list: {
    id: 26260,
    name: 'Drumpkit LS',
    description: '',
    should_be_adult: false,
    is_active: true,
    order: 0,
  },
  product: {
    id: 144591,
    category: { id: 763, name: 'Tienda digital' },
    products_images: [
      {
        id: 105595,
        image:
          'https://tolivmarket-production.s3.sa-east-1.amazonaws.com/products/2c560354612a3d31941ca79133f4a2a521f64c8f689b4cffb5a66bdce4cbb721.jpg',
        thumbnail:
          'https://tolivmarket-production.s3.sa-east-1.amazonaws.com/products/dc8da92bafea45f0778f921bf1bb1cf8703d1ea7d11d6549d8616e586b83195f.jpg',
        order: 0,
      },
    ],
    name: 'Librería Lanzamiento',
    sku: '',
    description: '',
    should_be_adult: false,
    is_without_gluten: false,
    is_vegan: false,
    is_diabetic: false,
  },
  price: 25000,
  description: '',
  is_starred: false,
  should_be_adult: false,
  is_active: true,
  order: 1,
  has_stock: true,
  stock: 20,
  has_commission: false,
  commission_amount: 0,
  quantity: 1,
  loading: true,
  totalOrder: 25000,
  observations: '',
  allOptions: [],
}

export function encodePrefill(data) {
  const json = JSON.stringify(data)
  const bytes = new TextEncoder().encode(json)
  let binary = ''
  bytes.forEach((b) => (binary += String.fromCharCode(b)))
  return btoa(binary)
}

export function buildCheckoutUrl() {
  const payload = { orders: [PRODUCT_ORDER], branch_office: BRANCH_OFFICE }
  return `${CHECKOUT_URL}#prefill=${encodePrefill(payload)}`
}
