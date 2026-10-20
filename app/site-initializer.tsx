'use client'

import { useEffect } from 'react'
import { initializeSite } from '@/src/main'

export default function SiteInitializer() {
  useEffect(() => {
    initializeSite()
  }, [])

  return null
}
