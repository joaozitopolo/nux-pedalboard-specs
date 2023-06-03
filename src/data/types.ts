export type AmpType = {
    type: 'valve' | 'transistor',
    valve?: string[],
}

export type AmpControl = 'gain' | 'level' | 'bright' | 'presence' | 'tone' | 'cut' | 'bass' | 'mid' | 'treble' | 'master'

export type AmpEffect = {
    label: string,
    name?: string,
    other?: 'amp_bass' | 'acoustic',
    channel?: 'clean' | 'crunch' | 'overdrive',
    preamp?: AmpType,
    amp?: AmpType,
    controls?: AmpControl[],
    image_url?: string,
    site_url?: string,
}

export type Board = {
    model: 'mg400'
    amps: AmpEffect[]
}
