'use client'

import dynamic from 'next/dynamic'

import type { CooperativaMapViewProps } from '@/components/cooperativa-map-view'

const CooperativaMapView = dynamic(() => import('@/components/cooperativa-map-view'), {
  ssr: false,
  loading: () => <div className="bg-muted size-full" aria-hidden />,
})

export function CooperativaMap(props: CooperativaMapViewProps) {
  return (
    <div className="relative z-0 h-72 w-full md:h-96">
      <CooperativaMapView {...props} />
    </div>
  )
}
