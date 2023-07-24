export declare const ToolkitUseStorage: {
    isSupportStorage: () => boolean;
    setStorage: (key: any, value: any, expire?: number) => void;
    getStorage: (key: any) => any;
    hasStorage: (key: any) => boolean;
    getStorageKeys: () => any[];
    getStorageForIndex: (index: any) => any;
    getStorageLength: () => any;
    getStorageAll: () => any[];
    removeStorage: (key: any) => void;
    clearStorage: () => void;
    autoAddPrefix: (key: any) => string;
    autoRemovePrefix: (key: any) => any;
    encrypt: (data: any) => any;
    decrypt: (data: any) => any;
};
