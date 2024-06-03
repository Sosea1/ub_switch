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

type ACL = {
  name: string
  rules: number | null
}

type ACLRules = {
  rule_id: number
  allow: number
  s_ip: string | null
  d_ip: string | null
  protocol: string | null
  p_src: string | null
  d_src: string | null
}

type ACLBinding = {
  acl_name: string
  port: string
  direction: string
}

type PortDHCP = {
  port: string
  dhcp_snooping: boolean
}


type DHCPServer = {
  address: string
}

type ARPTable = {
  ip: string
  mac: string
}

type ARP = {
  port: string
  arp: boolean
}


