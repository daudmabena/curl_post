export interface RequestConfig {
    url: string;
    method: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH';
    headers: Record<string, string>;
    body?: string;
    timeout?: number;
}

export interface ResponseData {
    status: number;
    statusText: string;
    headers: Record<string, string>;
    data: unknown;
    responseTime: number;
    size: number;
}

export interface RequestHistory {
    id: string;
    timestamp: Date;
    config: RequestConfig;
    response?: ResponseData;
    error?: string;
}

export interface Header {
    key: string;
    value: string;
    enabled: boolean;
}

export interface EnvironmentVariable {
    key: string;
    value: string;
    enabled: boolean;
}

export interface Collection {
    id: string;
    name: string;
    requests: RequestConfig[];
    variables: EnvironmentVariable[];
}

export interface AppState {
    currentRequest: RequestConfig;
    requestHistory: RequestHistory[];
    collections: Collection[];
    environments: EnvironmentVariable[];
    activeCollection?: string;
    activeEnvironment?: string;
}
