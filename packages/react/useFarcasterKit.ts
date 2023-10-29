import { useContext } from 'react'
import NeynarContext from './NeynarContext'

export default function useFarcasterKit() {
  return useContext(NeynarContext)
}