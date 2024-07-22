import { PluginOption } from 'vite';
import react from '@vitejs/plugin-react';

import { setupMockPlugin } from './mock';

export default function setupPlugins(isBuild: boolean, env: Record<string, any>) {
    const plugins: PluginOption[] = [react()];

    plugins.push(setupMockPlugin(isBuild));

    return plugins;
}
