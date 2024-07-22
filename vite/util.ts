import _ from 'lodash';

// type Record<K extends keyof any, T> = { [P in K]: T };

export function parseEnv(env: Record<string, any>) {
    const envs = _.cloneDeep(env);

    Object.entries(envs).forEach(([key, value]) => {
        if (value === 'true' || value === 'false') {
            envs[key] = value === 'true';
        }

        if (/^\d+$/.test(value)) {
            envs[key] = parseInt(value);
        }
    });

    return envs;
}
