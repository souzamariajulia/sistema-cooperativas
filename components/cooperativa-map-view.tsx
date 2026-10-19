'use client'

import 'leaflet/dist/leaflet.css'

import L from 'leaflet'
import { Navigation } from 'lucide-react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { Button } from '@/components/ui/button'

const pin = L.divIcon({
  className: '',
  iconSize: [40, 52],
  iconAnchor: [20, 52],
  popupAnchor: [0, -46],
  html: `<svg width="40" height="52" viewBox="0 0 40 52" aria-hidden="true"><path d="M20 0C9 0 0 8.8 0 19.7 0 34 20 52 20 52s20-18 20-32.3C40 8.8 31 0 20 0Z" fill="#b11a24"/><circle cx="20" cy="19" r="7" fill="#fff"/></svg>`,
})

export type CooperativaMapViewProps = {
  latitude: number
  longitude: number
  zoom: number
  title: string
  name: string
  description: string
}

export default function CooperativaMapView({
  latitude,
  longitude,
  zoom,
  title,
  name,
  description,
}: CooperativaMapViewProps) {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={zoom}
      zoomControl={false}
      dragging={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      touchZoom={false}
      boxZoom={false}
      keyboard={false}
      aria-label={title}
      className="size-full"
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={[latitude, longitude]} icon={pin} title={name}>
        <Popup>
          <strong className="text-brand-navy block text-base">{name}</strong>
          <span className="text-brand-navy block text-sm leading-snug">{description}</span>
          <Button
            variant="accent"
            nativeButton={false}
            render={
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            className="text-brand-navy! mt-3 w-fit rounded-full"
          >
            Como chegar
            <Navigation className="size-4" aria-hidden />
            <span className="sr-only">(abre o Google Maps em nova aba)</span>
          </Button>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
