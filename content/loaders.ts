import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Locale } from '@/lib/types'
import { PageContent, PageSlug } from './schema'
import { getContentFilePath } from './map'

const CONTENT_DIR = path.join(process.cwd(), 'docs')

export async function loadPageContent(
  slug: PageSlug,
  locale: Locale
): Promise<PageContent> {
  const fileName = getContentFilePath(slug, locale)
  const filePath = path.join(CONTENT_DIR, fileName)

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      metadata: {
        title: data.title || 'HEIMDEX',
        description: data.description || '',
      },
      sections: data,
      raw: content,
    }
  } catch (error) {
    console.error(`Failed to load content for ${slug} (${locale}):`, error)
    // Return fallback content
    return {
      metadata: {
        title: 'HEIMDEX',
        description: '',
      },
      sections: {},
      raw: '',
    }
  }
}
