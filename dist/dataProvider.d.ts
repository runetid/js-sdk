import { GetListParams, GetOneParams } from "react-admin";
export declare enum HttpMethod {
    GET = "GET",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
    OPTIONS = "OPTIONS",
    POST = "POST"
}
export declare const dataProviderCallback: (BASE_URL: string, API_KEY: string, SECRET_KEY: string) => {
    fetch: (resource: string, method: HttpMethod, payload: object | null) => Promise<{
        status: number;
        headers: Headers;
        body: string;
        json: any;
    }>;
    getList: (resource: string, params: GetListParams) => Promise<any>;
    getManyReference: (resource: string, params: any) => Promise<any>;
    getOne: (resource: string, params: GetOneParams) => Promise<any>;
    create: (resource: string, params: any) => Promise<{
        data: any;
    }>;
    getMany: <RecordType extends import("react-admin").RaRecord<import("react-admin").Identifier> = any>(resource: string, params: import("react-admin").GetManyParams) => Promise<import("react-admin").GetManyResult<RecordType>>;
    update: <RecordType_1 extends import("react-admin").RaRecord<import("react-admin").Identifier> = any>(resource: string, params: import("react-admin").UpdateParams<any>) => Promise<import("react-admin").UpdateResult<RecordType_1>>;
    updateMany: <RecordType_2 extends import("react-admin").RaRecord<import("react-admin").Identifier> = any>(resource: string, params: import("react-admin").UpdateManyParams<any>) => Promise<import("react-admin").UpdateManyResult<RecordType_2>>;
    delete: <RecordType_3 extends import("react-admin").RaRecord<import("react-admin").Identifier> = any>(resource: string, params: import("react-admin").DeleteParams<RecordType_3>) => Promise<import("react-admin").DeleteResult<RecordType_3>>;
    deleteMany: <RecordType_4 extends import("react-admin").RaRecord<import("react-admin").Identifier> = any>(resource: string, params: import("react-admin").DeleteManyParams<RecordType_4>) => Promise<import("react-admin").DeleteManyResult<RecordType_4>>;
};
