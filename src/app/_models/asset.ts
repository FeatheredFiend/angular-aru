export class Asset {
    constructor(
        barcode: string,
        assetType: string,
        description: string,
        locationRoom: string,
        locationSite: string,
        isSentinel: string,
        isHealthcare: string,
        comment: string,
        id?: number,
        isDecommissioned?: string,
        dateDecommissioned?: string,
        userDecommissioned?: string,
    ) { }
}