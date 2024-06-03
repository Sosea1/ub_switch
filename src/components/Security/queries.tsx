import axios, { AxiosError, AxiosResponse } from 'axios';


export async function addStaticPS(entry: PostPSStatic) {
    try {
      const response = await axios.post('/port-security/add-static', entry)
      return response.data
    } catch (err) {
        if (err instanceof AxiosError) {
            console.error(err.toJSON())
        }
    }
  }

export async function deleteStaticPS(entry: PostPSStatic) {
  try {
    const response = await axios.delete('/port-security/del-static', {
      data: entry
    })
    return response.data
  } catch (err) {
      if (err instanceof AxiosError) {
          console.error(err.toJSON())
      }
  }
}

export async function viewPS() : Promise<GetPS[]> {
    try {
      const response = await axios.get<GetPS[]>('/port-security/view')
      return response.data
    } catch (err) {
        if (err instanceof AxiosError) {
            console.error(err.toJSON())
        }
        return []
    }
  }


  //-------------ACL------------------

export async function viewACL() : Promise<ACL[]> {
  try {
    const response = await axios.get<ACL[]>('/acl/view')
    return response.data
  } catch (err) {
      if (err instanceof AxiosError) {
          console.error(err.toJSON())
      }
      return []
  }
}

export async function viewACLRules(entry: string) : Promise<ACLRules[]> {
  try {
    var url = '/acl/view-rules/'+entry
    const response = await axios.get<ACLRules[]>(url)
    return response.data
  } catch (err) {
      if (err instanceof AxiosError) {
          console.error(err.toJSON())
      }
      return []
  }
}

export async function viewACLBinding() : Promise<ACLBinding[]> {
  try {
    const response = await axios.get<ACLBinding[]>('/acl/binding/view')
    return response.data
  } catch (err) {
      if (err instanceof AxiosError) {
          console.error(err.toJSON())
      }
      return []
  }
}


    //-------------DHCP------------------

export async function viewDHCP() : Promise<PortDHCP[]> {
  try {
    const response = await axios.get<PortDHCP[]>('/dhcp-snooping/view')
    return response.data
  } catch (err) {
      if (err instanceof AxiosError) {
          console.error(err.toJSON())
      }
      return []
  }
}

export async function viewDHPCServers(entry: string) : Promise<DHCPServer[]> {
  try {
    var url = '/dhcp-servers/view/'+entry
    const response = await axios.get<DHCPServer[]>(url)
    return response.data
  } catch (err) {
      if (err instanceof AxiosError) {
          console.error(err.toJSON())
      }
      return []
  }
}


export async function viewARP() : Promise<ARP[]> {
  try {
    const response = await axios.get<ARP[]>('/arp')
    return response.data
  } catch (err) {
      if (err instanceof AxiosError) {
          console.error(err.toJSON())
      }
      return []
  }
}

export async function viewARPTable() : Promise<ARPTable[]> {
  try {
    const response = await axios.get<ARPTable[]>('/arp-table')
    return response.data
  } catch (err) {
      if (err instanceof AxiosError) {
          console.error(err.toJSON())
      }
      return []
  }
}