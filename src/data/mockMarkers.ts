import { LatLngExpression } from "leaflet";


export type MarkerType = {
  position: LatLngExpression
  rotate: number
  color?: string
}
export const mockMarkers: MarkerType[] = [
  {
    position: [33.514446, 36.277753],
    rotate: 62,
    color: '#ed6c02'
  },
  {
    position: [33.534700, 36.225405],
    rotate: 62,
    color: '#d32f2f'
  },
  {
    position: [33.429208, 36.220013],
    rotate: 0,
    color: '#2e7d32'
  },
  {
    position: [33.405880, 36.542005],
    rotate: -42,
    color: '#2e7d32'
  },
  {
    position: [33.520214, 36.295509],
    rotate: 50,
    color: '#0F0F0Fd0'
  },
]