import { queryClient } from "../queryClient";

import { Provider, HubProvider, NeynarProvider } from "../providers";
import { ConnectedAddresses } from "../types";

export default function getConnectedAddresses(provider: Provider, fid: number, ethereum?: boolean, solana?: boolean): ConnectedAddresses {
    let addresses: ConnectedAddresses;

    if (provider instanceof HubProvider) {
        if (provider.psqlUrl)
            addresses = getConnectedAddressesFromReplicator(provider.psqlUrl, fid, ethereum, solana);
        else
            addresses = getConnectedAddressesFromHub(provider.hubUrl, fid, ethereum, solana);
    }
    else if (provider instanceof NeynarProvider) {
        addresses = getConnectedAddressesFromNeynar(provider, fid, ethereum, solana);
    }
    else {
        throw new Error("Provider not supported");
    }

    return addresses;
}

function getConnectedAddressesFromReplicator(psqlUrl: string, fid: number, ethereum?: boolean, solana?: boolean): ConnectedAddresses {
    let addresses: ConnectedAddresses = {
        all: [],
        ethereum: [],
        solana: [],
    };
    // ...
    throw new Error("Not implemented");
}

/**
 * Get connected addresses for a given FID from a hub
 * @param hubUrl the hubUrl to be queried
 * @param fid the fid for which the connected addresses are to be queried
 * @param ethereum is ignored as hubs return all addresses anyway
 * @param solana is ignored as hubs return all addresses anyway
 * @returns ConnectedAddresses for the qiven fid
 */
function getConnectedAddressesFromHub(hubUrl: string, fid: number, ethereum?: boolean, solana?: boolean): ConnectedAddresses {
    let addresses: ConnectedAddresses = {
        all: [],
        ethereum: [],
        solana: [],
    };

    
    throw new Error("Not implemented");

}

function getConnectedAddressesFromNeynar(provider: NeynarProvider, fid: number, ethereum?: boolean, solana?: boolean): ConnectedAddresses {
    let addresses: ConnectedAddresses = {
        all: [],
        ethereum: [],
        solana: [],
    };
    // ...


    throw new Error("Not implemented");
}
