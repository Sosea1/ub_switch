type PostPSStatic = {
    interface: string,
    mac_address: string | null
}

type GetPS = {
  name: string
  max_mac: number
  cur_mac: number
  trap: Boolean
  address_mode:string
  status: Boolean
}
