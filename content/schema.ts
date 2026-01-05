export interface PageMetadata {
  title: string
  description: string
}

export interface PageContent {
  metadata: PageMetadata
  sections: Record<string, unknown>
  raw: string
}

export type PageSlug = 'home' | 'company' | 'product-entertainment' | 'pricing' | 'contact'
