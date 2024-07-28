import _ from 'lodash';

// type Record<K extends keyof any, T> = { [P in K]: T };

export function parseEnv(env: Record<string, any>): ViteEnv {
    const envs: any = _.cloneDeep(env);

    Object.entries(envs).forEach(([key, value]: any[]) => {
        if (value === 'true' || value === 'false') {
            envs[key] = value === 'true';
        } else if (/^\d+$/.test(value)) {
            envs[key] = Number(value);
        } else if (value === null) {
            envs[key] = null;
        } else if (value === undefined) {
            envs[key] = undefined;
        }
    });

    return envs;
}
