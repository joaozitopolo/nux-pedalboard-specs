export type AmpType = {
    type: 'valve' | 'transistor',
    valve?: string,
}

export type AmpControl = 'level' | 'drive'

export type AmpEffect = {
    label: string,
    name: string,
    preamp?: AmpType,
    amp: AmpType,
    controls: AmpControl[],
    image_url?: string,
    site_url?: string,
}

export type Board = {
    model: 'mg400'
    amps: AmpEffect[]
}
