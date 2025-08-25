'use client';

import { ConfigProvider, theme } from 'antd';
import { ReactNode } from 'react';

interface ProvidersProps {
    children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    colorPrimary: '#00D4AA',
                    colorSuccess: '#4CAF50',
                    colorWarning: '#FF9800',
                    colorError: '#F44336',
                    colorInfo: '#00D4AA',
                    colorBgContainer: '#2D2D2D',
                    colorBgElevated: '#1E1E1E',
                    colorBgLayout: '#1E1E1E',
                    colorBgSpotlight: '#2D2D2D',
                    colorBorder: '#404040',
                    colorBorderSecondary: '#404040',
                    colorText: '#FFFFFF',
                    colorTextSecondary: '#B0B0B0',
                    colorTextTertiary: '#B0B0B0',
                    colorTextQuaternary: '#B0B0B0',
                    borderRadius: 8,
                    borderRadiusLG: 12,
                    borderRadiusSM: 4,
                    fontSize: 14,
                    fontSizeLG: 16,
                    fontSizeSM: 12,
                    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    fontWeightStrong: 600,
                    fontWeight: 400,
                    lineHeight: 1.5,
                    motionDurationFast: '0.1s',
                    motionDurationMid: '0.2s',
                    motionDurationSlow: '0.3s',
                    motionEaseInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    motionEaseOut: 'cubic-bezier(0, 0, 0.2, 1)',
                    motionEaseIn: 'cubic-bezier(0.4, 0, 1, 1)',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    boxShadowSecondary: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                },
                components: {
                    Button: {
                        borderRadius: 8,
                        fontWeight: 500,
                        controlHeight: 40,
                        controlHeightLG: 48,
                        controlHeightSM: 32,
                    },
                    Input: {
                        borderRadius: 8,
                        controlHeight: 40,
                        controlHeightLG: 48,
                        controlHeightSM: 32,
                    },
                    Select: {
                        borderRadius: 8,
                        controlHeight: 40,
                        controlHeightLG: 48,
                        controlHeightSM: 32,
                    },
                    Card: {
                        borderRadius: 12,
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                    },
                    Tabs: {
                        borderRadius: 8,
                    },
                    Badge: {
                        borderRadius: 4,
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
}
